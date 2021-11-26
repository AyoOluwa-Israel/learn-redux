import React from "react";
import { connect} from "react-redux";
import { showMessage } from "../actions/itemsActions";

const Demo = ({ displayed, onClick }) => {
  return (
    <div>
      <h1>Testing React Redux</h1>
      <button onClick={onClick}>Click me</button>
      {!displayed ? <p>I have not been clicked</p> : <p>I have been clicked</p>}
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
    displayed: state.item.displayed,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return ({
    onClick: () => dispatch(showMessage())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)

// export default Demo;
