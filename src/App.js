import React from 'react';
import './App.css';

import {getState} from "./redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AppBar from "./Components/AppBar/AppBar"
import fetchData from "./redux/fetch";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

          <React.Fragment>
            <CssBaseline/>
              <Box style={{
                height: '100vh',
                background: '#37474f',
              }}>
                <Container maxWidth={"lg"}>
                  <AppBar/>
                </Container>
                <hr size={'1'} color={'#546e7a'}/>
              </Box>
          </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({
  state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  //any async func :)
  fetchData: fetchData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);