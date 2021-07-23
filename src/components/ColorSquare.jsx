import React from 'react';
import { useColors } from './hooks/ColorProvider';

export default function ColorSquare() {
  const { colors } = useColors();
  return (
    <>
      {
        colors.map(color => <div key={color.code}>{color.title} - { color.code }</div>)
      }
      
    </>
  )
}