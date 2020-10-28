import React from 'react';
import {Container, Grid, IconButton} from "@material-ui/core";
import Box from "@material-ui/core/Box"
import {makeStyles} from "@material-ui/core/styles";
import ProfileContentCard from "../Card/profileContentCard";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: 20,
        justifyContent: "flex-end",
    },
    hatLogo:{
        width: "100%",
        borderRadius: 10,
        height: 200,
    },
}))

const Profile = () => {
    const classes = useStiles()

    return (
        <>
            <Container>
                <Box className={classes.rootHatBox}>
                    <Box className={classes.boxHatLogo}>
                        <img className={classes.hatLogo}
                            src={"https://res-console.cloudinary.com/dbhjalp68/thumbnails/v1/image/upload/v1603372282/YmdndHRlcHR6cWptdmtsNHdqMWs=/preview"}
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
                         src={"https://res-console.cloudinary.com/dbhjalp68/thumbnails/v1/image/upload/v1603372282/YmdndHRlcHR6cWptdmtsNHdqMWs=/preview"}
                         alt={"User logo"}/>
                    </Grid>
                </Box>
                <Grid >
                    <Link
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                        to={"/createArt"}>
                        <Button variant={"contained"}
                                color={"primary"}
                                style={{
                                    marginTop: 10,
                                    color: "white"
                                }}>
                            Add new art
                        </Button>
                    </Link>

                </Grid>
                <ProfileContentCard/>
            </Container>
        </>
    )
}

export default Profile