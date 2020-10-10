import React from "react";
import InterestingCard from '../Card/interestingCard'
import {getState} from "../../redux/myReducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Container} from "@material-ui/core";

const Interesting = props => {
    return (
        <div style={{
            background: '#171717'
        }}>
            <InterestingCard
                CardInfo={props.state.data[0]}
            />
            <Container>
                <hr
                    size={'1'}
                    color={'#202020'}
                    style={{marginTop: 10}}
                />
            </Container>

        </div>
    )
}


const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interesting);