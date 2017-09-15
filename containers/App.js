import React from 'react';
// import { connect } from 'react-redux';
// import { clearForm, submitForm } from '../actions/form';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      normal: true,
      large: false
    };
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.bloat = this.bloat.bind(this)
    this.shrink = this.shrink.bind(this)
  }

handleSizeChange() {
  if(this.state.normal) {
    this.bloat()
  } else {
    this.shrink()
  }
}

 bloat() {
   this.setState({ normal: false, large: true })
 }

 shrink() {
   this.setState({ normal: true, large: false })
 }

   render() {
     let size
     if (this.state.large) {
       size = "big"
     } else {
       size = "normal"
     }

      return (
         <div className="goodStuff" onClick={this.handleSizeChange}>
          <div className={size}>
             Click Me!
           </div>
         </div>
      );
   }
}
export default App;
// const mapDispatchToProps = (dispatch) => {
//   return {
//     clearForm: () => dispatch(clearForm()),
//     submitForm: () => dispatch(submitForm())
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     listItems: state.listItems.message,
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
