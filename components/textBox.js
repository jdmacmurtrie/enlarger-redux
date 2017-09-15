import React from 'React'

const TextBox = (props) => {

  return(
    <label>Add an Item
      <input
        onChange={props.handleFormChange}
        name={props.name}
        type='text'
        value={props.value}
      />
    </label>
  )
}

export default TextBox
