import React from 'react';
import './App.css';
import 'denali-css/css/denali.css'
import 'denali-css/css/denali-dark-theme.css'


import {getState} from "./redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <>
          <div className={'denali-dark-theme'}>

          </div>
        </>
    )

  }
}

const mapStateToProps = state => ({
  state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //any async func :)
  fetchData: fetch,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);