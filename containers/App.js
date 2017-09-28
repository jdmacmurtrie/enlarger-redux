import React from 'react';
import { connect } from 'react-redux';
import { change } from '../actions/sizeAdjust';

const App = props => {
  let handleSizeChange = () => {
    if(props.size == 'normal') {
      props.change("bloated")
    } else {
      props.change("normal")
    }
  }

  return (
    <div className="goodStuff" onClick={handleSizeChange}>
      <div className={props.size}>
        Click Me!
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (size) => dispatch(change(size))
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.size
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
