import React from 'react';
import { useInput } from './hooks/useInput'
import { useColors } from './hooks/ColorProvider'

export default function ColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#FFFFFF")
  const { addColor } = useColors();

  const submit = event => {
    event.preventDefault();
    console.log(titleProps, colorProps);
    addColor(titleProps.value, colorProps.value)
    resetTitle("");
    resetColor("#FFFFFF")
  }

  return (

    <>
      <h1>Pick Color</h1>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="color title" required />
        <input {...colorProps} type="color" required />
        <button type="sumbit">Add</button>
      </form>
    </>
  )
}