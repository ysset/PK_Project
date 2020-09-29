import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const InterestingCard = props => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            textAlign: 'center',
            maxWidth: 150,
            maxHeight: 160,
            marginTop: 10
        },
        img: {
            borderRadius: 5,
            width: '100%',
            height: '100%',
        }
    }));

    const classes = useStyles();

    return (

        <div>
            <Grid
                container
                direction={"row"}
                justify={"space-evenly"}
                alignItems={"center"}
                aria-valuemax={5}
                className={classes.root}
            >
                {props.CardBackGround.map((content, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                        >
                            <Paper className={classes.paper}>
                                <img alt={'interesting line'} src={content} className={classes.img}/>
                            </Paper>
                            <h3 style={{
                                color: "white",
                                width: 160,
                                marginTop: 8,
                                marginBottom: 0,
                                marginLeft: 2,
                            }}>
                                Something Goood
                            </h3>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default InterestingCard