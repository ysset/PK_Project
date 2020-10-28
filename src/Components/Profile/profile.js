import React from 'react';
import {Container, Grid, IconButton} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import {makeStyles} from "@material-ui/core/styles";
import ProfileContentCard from "../Card/profileContentCard";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import fetchData from "../../redux/fetch";
import {connect} from "react-redux";

const useStiles = makeStyles((theme) => ({
    rootHatBox: {
        position: "relative",
        height: 200,
    },
    boxHatLogo: {
        position: "absolute",
        width: "95%",
        height: 200,
        borderRadius: 10,
        background: "black",
    },
    userLogo: {
        background: "black",
        width: 200,
        height: 200,
        borderRadius: 20,
        justifyContent: "flex-end",
    },
    hatLogo:{
        width: "100%",
        borderRadius: 10,
        height: 200,
        objectFit: "cover"
    },
}))

const Profile = props => {
    const classes = useStiles()
    console.log(props.state.userData)
    return (
        <>
            <Container>
                <Box className={classes.rootHatBox}>
                    <Box className={classes.boxHatLogo}>
                        <img className={classes.hatLogo}
                            src={props.state.userData !== undefined && props.state.userData.hatProfileCover}
                            alt={"Author hatLogo"}/>
                    </Box>
                    <Grid
                        style={{position:"absolute"}}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                    <img className={classes.userLogo}
                         src={props.state.userData !== undefined && props.state.userData.cover}
                         alt={"User logo"}/>
                    </Grid>

                </Box>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Grid>
                        <Link
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                            to={"/createArt"}>
                            {/*{props.state.isAuth &&*/}
                                <Button variant={"contained"}
                                        color={"primary"}
                                        style={{
                                            marginTop: 10,
                                            color: "white"
                                        }}>
                                    Add new art
                                </Button>
                            {/*}*/}
                        </Link>
                    </Grid>
                    <Grid>
                        <h2 style={{color: "white"}}>
                            {props.state.userData !== undefined && props.state.userData.displayName}
                        </h2>
                    </Grid>
                </Grid>
                <ProfileContentCard/>
            </Container>
        </>
    )
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
)(Profile);