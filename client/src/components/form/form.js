import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createMobileData } from "../../services/form";
import { useState } from "react";

import allPolList from './policeStationList'

import disList from './districtList'


import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    InputLabel,
    Button,
    MenuItem,
    Select
} from '@mui/material';
export default function Form() {
    const validationSchema = Yup.object().shape({
        district: Yup.string().required('District is required'),
        policeStation: Yup.string().required('policeStation is required'),
        fullname: Yup.string().required('Fullname is required'),
        age:Yup.number().required('Fullname is required'),

        // username: Yup.string()
        //     .required('Username is required')
        //     .min(6, 'Username must be at least 6 characters')
        //     .max(20, 'Username must not exceed 20 characters'),
        // email: Yup.string().required('Email is required').email('Email is invalid'),
    });
    const [polList, setPolList] = useState([]);

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        // defaultValues: {
        //     district: '',
        //     policeStation:''
        // },
        resolver: yupResolver(validationSchema),
    });
    watch("policeStation")
    const onSubmit = async (data) => {
        createMobileData(data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };


    const getPoliceListByDist = (event) => {
        setPolList(allPolList[event.target.value]||[])
    };

    return <Fragment>
        <Paper>
            <Box px={3} py={2}>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                        <Select
                            required
                            id="district"
                            name="district"
                            label="District"
                            defaultValue=""
                            fullWidth
                            margin="dense"
                            {...register('district')}
                            error={errors.district ? true : false}
                            onChange={getPoliceListByDist}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {disList.map(function(data, index){
                            return <MenuItem key={ index } value={data.value}>{data.innerText}</MenuItem>
                        })}
                        </Select>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.district?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel id="demo-simple-select-label">Police Station</InputLabel>
                        <Select
                            required
                            id="policeStation"
                            name="policeStation"
                            defaultValue=""
                            label="Police Station"
                            fullWidth
                            margin="dense"
                            {...register('policeStation')}
                            error={errors.policeStation ? true : false}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {polList.map(function(data, index){
                            return <MenuItem key={ index } value={data.value}>{data.innerText}</MenuItem>
                        })}
                        </Select>
                        <Typography variant="inherit" color="textSecondary">
                            {errors.policeStation?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="fullname"
                            name="fullname"
                            label="Full Name"
                            fullWidth
                            margin="dense"
                            {...register('fullname')}
                            error={errors.fullname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.fullname?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="number"
                            id="age"
                            name="age"
                            label="Age"
                            fullWidth
                            margin="dense"
                            {...register('age')}
                            error={errors.age ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.age?.message}
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="username"
                            name="username"
                            label="Username"
                            fullWidth
                            margin="dense"
                            {...register('username')}
                            error={errors.username ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.username?.message}
                        </Typography>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            margin="dense"
                            {...register('email')}
                            error={errors.email ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.email?.message}
                        </Typography>
                    </Grid> */}

                </Grid>

                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    </Fragment>
}