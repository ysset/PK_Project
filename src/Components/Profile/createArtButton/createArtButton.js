import React, {useState} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {Container, Grid} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {getState} from "../../../redux/myReducer";
import {bindActionCreators} from "redux";
import fetchData from "../../../redux/fetch";
import {connect} from "react-redux";

const url = "http://localhost:5000/createAndUpload"



const CreateArtButton = props => {

    const [image, setImage] = useState('');
    let setText = useState('');

    const onChangeImage = e => {
        setImage(e.target.files[0]);
    };

    const onChangeText = e => {
        setText = e.target.files
    }

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    const onSubmit = async () => {
        try {
            const form = new FormData()
            form.append('cover', image)
            form.append('author',props.state.userData.displayName)
            form.append('artName',setText)
            form.append('_id',props.state.userData._id)
            await axios.post(url, form, config)
                .then(res => {
                    console.log(res.data.secureUrl)
                })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid
                    style={{
                        position: "relative"
                    }}
                    item
                >
                    <h1 style={{
                        textAlign:"center",
                        color: "white"
                    }}>
                        Image Upload
                    </h1>
                    <div>
                        <div>
                            <Input style={{color: "white"}} type='file' name='image' onChange={onChangeImage}/>
                        </div>
                        <Grid
                            container
                            justify={"center"}
                            alignItems={"center"}
                        >
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                style={{
                                    color: "white",
                                    marginTop: 10
                                }}
                                nClick={onSubmit}>
                                upload
                            </Button>
                        </Grid>
                    </div>
                </Grid>
                <Grid
                    item
                >
                    <Grid
                        container
                        direction={"row"}
                    >
                        <h2 style={{
                            color: "white",
                            height: 40,
                            paddingTop: 5,
                            paddingRight: 30,
                            margin: 0,
                        }}>
                            Enter your art name
                        </h2>
                    <Input
                        onChange={(e) => onChangeText(e)}
                        style={{
                            width: 400,
                            background: '#171717'
                    }}/>
                    </Grid>
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