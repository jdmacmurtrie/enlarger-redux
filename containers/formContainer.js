import React from 'react';
import TextBox from '../components/textBox'

class FormContainer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      enteredItem: ''
    };
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleFormChange(event) {
    this.setState({ enteredItem: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = this.state.enteredItem
    this.props.addNewItems(formPayload)
    this.handleClearForm(event)
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ enteredItem: '' })
  }

   render() {
      return (
         <form onSubmit={this.handleFormSubmit}>
            <TextBox
              value={this.state.enteredItem}
              name="inputField"
              handleFormChange={this.handleFormChange}
            />
            <input className="button" type="submit" value="Submit" />
         </form >
      );
   }
}
export default FormContainer;
