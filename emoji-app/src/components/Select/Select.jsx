import React from 'react';
import './select.css';

export const Select = ({options, onChange}) => {
  const optionsValue = (e) => {
    const currentOption = Number(e.target.value);  
    onChange(currentOption);
  }

  const numberOfSelect = options.map((option, index) => {
    return (
      <option key={index}>{option}</option>
    )
  })

  return (
    <div className="select">
      <label>
        <select onChange={optionsValue} >
          {numberOfSelect}
        </select>
      </label>
    </div>
    
  ) 
}