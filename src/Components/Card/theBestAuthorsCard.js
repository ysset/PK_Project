import React from "react";
import photo from "../../photo/imgonline-com-ua-Resize-9HJl3wB5C1WcXd0.jpg";
import {Grid} from "@material-ui/core";

const TheBestAuthorCard = props => {

    return (
        <div>
            {props.authors.map((author, index) => {

                return (
                    <Grid
                        item
                        style={{
                            maxWidth: 300,
                            minWidth:180,
                            height: 30,
                            position:"relative",
                            borderRadius: 5,
                            margin: 6,
                    }}>
                        <img
                            alt={'The best authors'}
                            src={photo}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: "absolute",
                                borderRadius: 5
                            }}/>
                        <Grid
                            item
                            container
                            direction="row"
                            justify="flex-end"
                            style={{
                                position:"absolute",
                            }}
                        >
                            <p
                                style={{
                                    color:"black"
                                }}
                            >
                                {author}
                            </p>
                        </Grid>
                    </Grid>
                )
            })
            }
        </div>
    )
}
export default TheBestAuthorCard