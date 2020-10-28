import React from "react";
import {Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const handleCard = card => {
    console.log(card.index)
}

const TheBestAuthorCard = props => {
    return (
        <div>
            {props.TheBestAuthors !== undefined &&
            props.TheBestAuthors.map((content, index) => {
                console.log(content)
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
                                minWidth: 180,
                                height: 30,
                                position: "relative",
                                borderRadius: 5,
                                margin: 6,
                            }}>
                            <img
                                alt={'The best authors'}
                                src={content.coverUrl}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: "cover",
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
            })}
        </div>
    )
}
export default TheBestAuthorCard