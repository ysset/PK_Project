import React from 'react';
import './App.css';
import fetchData from "./redux/fetch";
import CssBaseline from "@material-ui/core/CssBaseline";
import {getState} from "./redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from "./Components/AppBar/AppBar";
import Interesting from "./Components/Intersting/interesting";
import TheBestAuthors from "./Components/TheBestAuthors/TheBestAuthors";
import UrAuthors from "./Components/urAuthors/UrAuthors";
import createArtButton from "./Components/Profile/createArtButton/createArtButton";
import {Grid} from "@material-ui/core";
import HotFeed from "./Components/HotFeed/HotFeed";
import Profile from "./Components/Profile/profile";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            error: null,
            authenticated: false
        }
    }

    componentDidMount = () => {
        const whatFetch = "/auth/login/success"
        const options = {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }
        this.props.fetchData(whatFetch, options)
        this.props.fetchData("interesting");
        this.props.fetchData("hotFeed");
        this.props.fetchData("theBestAuthors");
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <CssBaseline/>
                    <Switch>

                        <Box style={{
                            minHeight: '100vh',
                            height: '100%',
                            background: '#141414',
                        }}>
                            <Container maxWidth={"lg"}>
                                <AppBar/>
                            </Container>
                            <hr size={'1'} color={'#202020'} style={{
                                margin: 2
                            }}/>
                            <Route exact path={'/'} component={Interesting}/>
                            <div>
                                <Grid
                                    container
                                    direction="row-reverse"
                                    justify="center"
                                    alignItems="flex-start"
                                >
                                    <Grid
                                        container
                                        item
                                        sm={9}
                                    >
                                        <Route exact path={'/'} component={HotFeed}/>
                                    </Grid>
                                    <Grid
                                        style={{
                                            marginTop: 40,
                                            width: 300,
                                        }}
                                    >
                                        <Route exact path={'/'} component={TheBestAuthors}/>
                                        <Route exact path={'/'} component={UrAuthors}/>
                                        <Route exact path={'/createArt'} component={createArtButton}/>
                                    </Grid>
                                </Grid>
                            </div>
                            <Route path={'/profile'} component={Profile}/>
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