import React, {useState} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {getState} from "../../../redux/myReducer";
import {bindActionCreators} from "redux";
import fetchData from "../../../redux/fetch";
import {connect} from "react-redux";

const url = "https://pk.hitmarker.pro/api/createAndUpload"



const CreateArtButton = props => {

    const [image, setImage] = useState('');
    let [imageUrl] = useState('')

    const onChange = e => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async props => {
        try {
            const formData = new FormData()
            formData.append('cover', image)
            await axios.post(url, formData)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Grid
                style={{
                    position: "relative"
                }}
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
            >
                <h1 style={{color: "white"}}>React Image Upload</h1>
                <div>
                    <div>
                        <Input style={{color: "white"}} type='file' name='image' onChange={onChange}/>
                    </div>
                    <Grid
                        container
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Button style={{color: "white"}} onClick={onSubmit}>
                            upload
                        </Button>
                    </Grid>
                </div>
                <Grid>
                    <img src={imageUrl}/>
                </Grid>
            </Grid>
        </>
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
)(CreateArtButton);