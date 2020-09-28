import React from "react";
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import TheBestAuthorsCard from "../Card/theBestAuthorsCard";

const TheBestAuthors = props => {

    return(
        <>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid
                    item
                    sm={2}
                >
                    <p style={{
                        textAlign: "center",
                        color: "white",
                    }}>
                        The Best Authors
                    </p>

                    <TheBestAuthorsCard
                        authors = {props.state.authors}
                    />

                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TheBestAuthors);