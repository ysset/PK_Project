import React from "react";
import {Grid, Box} from "@material-ui/core";
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import fetchData from "../../redux/fetch";
import {connect} from "react-redux";

const ProfileContentCard = props => {

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            {props.state.userData !== undefined && props.state.userData !== {} && props.state.userData.usersCards !== undefined && props.state.userData.usersCards.video.map(videoArts => {
                return (
                    <Grid
                        style={{
                            width:"33%",
                            height: 175,
                        }}
                        container
                        direction={"row"}
                        justify={"center"}
                        alignItems={"stretch"}
                    >
                        <Box
                            style={{
                                paddingTop: 15,
                                paddingRight: 40,
                            }}
                        >
                            <img
                                style={{
                                    width: 125,
                                    height: 150,
                                    background: "black",
                                    borderRadius: 20,
                                }}
                                alt={"Profile content Url"}
                                src={videoArts.coverUrl}
                                />
                        </Box>
                        <Grid
                        >
                            <h3 style={{color:"white"}}>
                                Name: {videoArts.name}
                            </h3>
                            <p style={{color:"white"}}>
                                date: {videoArts.date}
                            </p>
                            <p style={{color:"white"}}>
                                like: {videoArts.like}
                            </p>
                        </Grid>
                    </Grid>
                )
            })}
            {props.state.userData !== undefined && props.state.userData !== {} && props.state.userData.usersCards !== undefined && props.state.userData.usersCards.photo.map(photoArts => {
                return (
                    <Grid
                        style={{
                            width:"33%",
                            height: 175,
                        }}
                        container
                        direction={"row"}
                        justify={"center"}
                        alignItems={"stretch"}
                    >
                        <Box
                            style={{
                                paddingTop: 15,
                                paddingRight: 40,
                            }}
                        >
                            <img
                                style={{
                                    width: 125,
                                    height: 150,
                                    background: "black",
                                    borderRadius: 20,
                                }}
                                alt={"Profile content Url"}
                                src={photoArts.coverUrl}
                                />
                        </Box>
                        <Grid
                        >
                            <h3 style={{color:"white"}}>
                                Name: {photoArts.name}
                            </h3>
                            <p style={{color:"white"}}>
                                date: {photoArts.date}
                            </p>
                            <p style={{color:"white"}}>
                                like: {photoArts.like}
                            </p>
                        </Grid>
                    </Grid>
                )
            })}
            {props.state.userData !== undefined && props.state.userData !== {} && props.state.userData.usersCards !== undefined && props.state.userData.usersCards.text.map(textArts => {
                return (
                    <Grid
                        style={{
                            width:"33%",
                            height: 175,
                        }}
                        container
                        direction={"row"}
                        justify={"center"}
                        alignItems={"stretch"}
                    >
                        <Box
                            style={{
                                paddingTop: 15,
                                paddingRight: 40,
                            }}
                        >
                            <img
                                style={{
                                    width: 125,
                                    height: 150,
                                    background: "black",
                                    borderRadius: 20,
                                }}
                                alt={"Profile content Url"}
                                src={textArts.coverUrl}
                                />
                        </Box>
                        <Grid
                        >
                            <h3 style={{color:"white"}}>
                                Name: {textArts.name}
                            </h3>
                            <p style={{color:"white"}}>
                                date: {textArts.date}
                            </p>
                            <p style={{color:"white"}}>
                                like: {textArts.like}
                            </p>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
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
)(ProfileContentCard);