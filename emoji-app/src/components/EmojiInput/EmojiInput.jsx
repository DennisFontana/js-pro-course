import React from "react";
import './emojiInput.css';

const EmojiInput = ({ placeholder, type, onChangeFilterValue}) => {
  const changeValue = (e) => {
    onChangeFilterValue(e.target.value)
  }
  return (
    <div>
      <input placeholder={placeholder} type={type} onChange={changeValue}></input>
    </div>
  )
} 

export default EmojiInput
