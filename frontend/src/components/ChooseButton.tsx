import React from 'react'

export default function ChooseButton(props: { handleChoice: (index: number) => void, index: number, buttonsAreVisible?: boolean, text: string }) {
  const {
    buttonsAreVisible = false,
    text,
    index,
    handleChoice,
  } = props

  const buttonStyle = {
    width: '20%',
    zIndex: 10,
    bottom: 50,
    display: buttonsAreVisible ? 'inline' : 'none'
  }


  return <button onClick={() => handleChoice(index)} style={{ ...buttonStyle }}>{text}</button>

}