import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";

const handleCard = props => {
    console.log(props.index)
}

const InterestingCard = props => {
    const useStyles = makeStyles(() => ({
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
            objectFit: "cover",
        }
    }));

    const classes = useStyles();
    return (
        <div style={{
            minHeight: 160,
        }}>
            <Grid
                container
                direction={"row"}
                justify={"space-evenly"}
                alignItems={"center"}
                aria-valuemax={5}
                className={classes.root}
            >
                {props.interesting !== undefined &&
                props.interesting.map((content, index,) => {
                    return (
                        <NavLink
                            to={'/profile'}
                            onClick={() => handleCard({content, index,})}
                            key={index}
                            style={{
                                textDecoration: 'none'
                            }}
                        >
                            <Grid
                                item
                                style={{
                                    position: "relative",
                                }}
                            >
                                <Paper className={classes.paper}>
                                    <img alt={'interesting line'} src={content.coverUrl} className={classes.img}/>
                                </Paper>
                                <h3 style={{
                                    color: "white",
                                    width: 160,
                                    marginTop: 8,
                                    marginBottom: 0,
                                    marginLeft: 2,
                                }}>
                                    {content.name}
                                </h3>
                            </Grid>
                        </NavLink>
                    )
                })}
            </Grid>
        </div>
    )
}

export default InterestingCard