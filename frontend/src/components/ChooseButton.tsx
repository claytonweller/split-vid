import React from 'react'

export default function ChooseButton(props: { buttonsAreVisible?: boolean, text: string }) {
  const {
    buttonsAreVisible = false,
    text,
  } = props

  const buttonStyle = {
    width: '20%',
    zIndex: 10,
    bottom: 50,
    display: buttonsAreVisible ? 'inline' : 'none'
  }


  return <button style={{ ...buttonStyle }}>{text}</button>

}