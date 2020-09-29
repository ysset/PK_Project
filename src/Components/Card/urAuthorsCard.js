import React from "react";
import {Grid} from "@material-ui/core";
import photo from "../../photo/imgonline-com-ua-Resize-9HJl3wB5C1WcXd0.jpg";

const UrAuthorsCard = props => {

    return (
        <>
            {props.urAuthors.map((author, index) => {
                return (
                    <Grid
                        key={index}
                        item
                        style={{
                            maxWidth: 300,
                            minWidth:200,
                            height: 30,
                            position:"relative",
                            borderRadius: 5,
                            margin: 6,
                        }}>
                        <img
                            alt={'your authors'}
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
        </>
    )
}
export default UrAuthorsCard