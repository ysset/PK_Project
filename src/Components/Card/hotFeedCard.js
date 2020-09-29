import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const HotFeedCard = props => {

    const useStyles = makeStyles(() => ({
        root: {
            flexGrow: 1,
            paddingLeft: 200,
            paddingRight: 200,
        },
        paper: {
            textAlign: 'center',
            width: 175,
            height: 300,
            margin: 10
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
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.root}
            >
                {props.HotFeedImg.map((content, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                        >
                            <Paper className={classes.paper}>
                                <img alt={'interesting line'} src={content} className={classes.img}/>
                            </Paper>
                            <h3 style={{
                                margin: 0,
                                marginLeft: 4,
                                textAlign: "center",
                                color: "White",
                                width: 185,
                            }}>
                                Some thing Goooood =)
                            </h3>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
export default HotFeedCard