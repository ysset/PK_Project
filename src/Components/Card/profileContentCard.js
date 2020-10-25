import React from "react";
import {Grid, Box} from "@material-ui/core";

const ProfileContentCard = () => {
    const state ={
        video: [
            {
                name: "Name", //Text
                coverUrl: "https://res-console.cloudinary.com/dbhjalp68/thumbnails/v1/image/upload/v1603372282/YmdndHRlcHR6cWptdmtsNHdqMWs=/preview", //URL
                artId: "", //Art URL
                like: "15", //Number
                date: "18.02.2002", //Date
            }
        ],
        photo: [
            {
                name: "Name", //Text
                coverUrl: "https://res-console.cloudinary.com/dbhjalp68/thumbnails/v1/image/upload/v1603372282/YmdndHRlcHR6cWptdmtsNHdqMWs=/preview", //URL
                artId: "", //Art URL
                like: "15", //Number
                date: "18.02.2002", //Date
            }
        ],
        text: [
            {
                name: "Name", //Text
                coverUrl: "https://res-console.cloudinary.com/dbhjalp68/thumbnails/v1/image/upload/v1603372282/YmdndHRlcHR6cWptdmtsNHdqMWs=/preview", //URL
                artId: "", //Art URL
                like: "15", //Number
                date: "18.02.2002", //Date
            },
        ],
    }

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            {state.video !== undefined && state.video.map(videoArts => {
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
            {state.photo !== undefined && state.photo.map(photoArts => {
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
            {state.text !== undefined && state.text.map(textArts => {
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
export default ProfileContentCard