import React, {useState} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import Input from "@material-ui/core/Input";

const url = "https://pk.hitmarker.pro/api/upload"


const createArtButton = () => {

    const [image, setImage] = useState('');

    const onChange = e => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async () => {
        try {
            await axios.post(url, {image});
            setImage(image.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
            >
                <h1 style={{color: "white"}}>React Image Upload</h1>
                <div className='file-field input-field'>
                    <div className='btn'>
                        <span style={{color: "white"}}>Browse </span>
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
            </Grid>
        </>
    )
}
export default createArtButton