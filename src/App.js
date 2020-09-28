import React from 'react';
import './App.css';
import fetchData from "./redux/fetch";
import CssBaseline from "@material-ui/core/CssBaseline";
import {getState} from "./redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {userProfile} from './Components/Profile/userProfile'
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from "./Components/AppBar/AppBar";
import Interesting from "./Components/Intersting/interesting";
import TheBestAuthors from "./Components/TheBestAuthors/TheBestAuthors";
import UrAuthors from "./Components/urAuthors/UrAuthors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    return (
        <BrowserRouter>
          <React.Fragment>
            <CssBaseline/>
            <Switch>
              <Box style={{
                minHeight: '100vh',
                height: '100%',
                background: '#37474f',
              }}>
                <Container maxWidth={"lg"}>
                  <AppBar/>
                </Container>
                <hr size={'1'} color={'#546e7a'}/>
                <Route path={'/'} component={Interesting}/>
                <Route path={'/'} component={TheBestAuthors}/>
                <Route path={'/'} component={UrAuthors}/>
                <Route path={'/profile'} component={userProfile}/>
              </Box>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
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