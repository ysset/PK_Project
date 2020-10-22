import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
const url = 'https://api.cloudinary.com/v1_1/dbhjalp68';
const preset = 'PK_Project';



const Profile = () => {

    const [image, setImage] = useState('');

    const onChange = e => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', preset);
        try {
            const res = await axios.post(url, formData);
            const imageUrl = res.data.secure_url;
            const image = await axios.post('http://localhost:5000/upload', {
                imageUrl
            });
            setImage(image.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className='container'>
                <h1 className='center red-text'>React Image Upload</h1>
                <div className='file-field input-field'>
                    <div className='btn'>
                        <span style={{color: "white"}}>Browse</span>
                        <input type='file' name='image' onChange={onChange} />
                    </div>
                    <Grid
                        justify={"center"}
                    >
                        <Button style={{color: "white"}} onClick={onSubmit} >
                            upload
                        </Button>
                    </Grid>
                    <div className='file-path-wrapper'>
                        <input className='file-path validate' type='text' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile