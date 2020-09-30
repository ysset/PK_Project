import React from "react";
import {Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const handleCard = props => {
    console.log(props.index)
}

const UrAuthorsCard = props => {

    return (
        <>
            {props.urAuthors.map((content, index) => {
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
                            key={index}
                            item
                            style={{
                                maxWidth: 300,
                                minWidth: 200,
                                height: 30,
                                position: "relative",
                                borderRadius: 5,
                                margin: 6,
                            }}>
                            <img
                                alt={'your authors'}
                                src={content.cover}
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
                                    position: "absolute",
                                }}
                            >
                                <p
                                    style={{
                                        color: "black"
                                    }}
                                >
                                    {content.author}
                                </p>
                            </Grid>
                        </Grid>
                    </NavLink>
                )
            })
            }
        </>
    )
}
export default UrAuthorsCard