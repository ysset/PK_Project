import React from "react";
import HotFeedCard from "../Card/hotFeedCard";
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import fetchData from "../../redux/fetch";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";

const HotFeed = props => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1
                style={{
                    color:"white",
                    margin: 5,
                }}
            >
                Hot Feed
            </h1>
            <HotFeedCard
                HotFeedImg = {props.state.HotFeedImg}
            />
        </Grid>
    )
}
const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
    fetchData: fetchData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotFeed);
