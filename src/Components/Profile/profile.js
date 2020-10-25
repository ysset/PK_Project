import React from 'react';
import {Container, Grid, IconButton} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import ProfileContentCard from "../Card/profileContentCard";

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
    boxSiteLogo:{
        position:"absolute",
        zIndex:2,
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
    rootContentGrid: {
        width:"33%",
        height: 175,
    },
    boxImageContent: {
        paddingTop: 15,
        paddingRight: 40,
    },
    imgContent: {
        width: 125,
        height: 150,
        background: "black",
        borderRadius: 20,
    }
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
                    <TextField className={"Author text field"}/>
                </Grid>
                <ProfileContentCard/>
            </Container>
        </>
    )
}

export default Profile