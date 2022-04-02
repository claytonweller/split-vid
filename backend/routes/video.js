const router = require("express").Router();
const fs = require("fs");

router.get("/:videoId", streamVideo);

function streamVideo(req, res) {
  const { range } = req.headers;
  const { videoId } = req.params;
  if (!range) {
    res.status(400).send("Range not provided");
  }
  const videoPath = getVideoPath(videoId);
  const videoSize = fs.statSync(videoPath).size;
  const chunkSize = 10 ** 6; // 1 mb
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
};

function getVideoPath(videoId) {
  const basePath = `${__dirname}/videos/${videoId}.`
  const possibleExtensions = ['mp4', 'mov']
  const videoPath = possibleExtensions.reduce((path, extension) => {
    const potentialPath = basePath + extension
    if (fs.existsSync(potentialPath)) return potentialPath
    return path
  }, '')
  if (!videoPath) throw new Error('Video does not Exist!')
  return videoPath
}

module.exports = router;