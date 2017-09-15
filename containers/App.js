import React from 'react';
import FormContainer from './formContainer'
import List from '../components/list'
import { connect } from 'react-redux';
import { clearForm, submitForm } from '../actions/form';

class App extends React.Component {

  addNewItems(formPayload) {
    props.submitForm(formPayload)
    props.clearForm
  }

   render() {
     let listOfItems;
     if (this.props.listItems.first) {
     let listOfItems = this.props.listItems.map(item => {
       return(
         <List item={item}/>
       )
     })
   }
      return (
         <div className="goodStuff">
         <FormContainer addNewItems={this.addNewItems}/>
         <ol>
           {listOfItems}
         </ol>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearForm: () => dispatch(clearForm()),
    submitForm: () => dispatch(submitForm())
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.itemList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
