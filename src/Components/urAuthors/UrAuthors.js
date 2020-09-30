import React from "react";
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import UrAuthorsCard from "../Card/urAuthorsCard";


const UrAuthors = props => {

    return (
        <>
            <Grid
                item
            >
                <Grid
                    item
                    style={{
                        width: 300
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            color: "white",
                        }}>
                        Your Authors
                    </h2>
                </Grid>
                <Grid
                    item
                >
                    <UrAuthorsCard
                        urAuthors={props.state.urAuthors}
                    />
                </Grid>


            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UrAuthors);