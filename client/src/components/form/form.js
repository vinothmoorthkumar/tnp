import React, { Fragment } from 'react';
import { useForm, useController } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createMobileData } from "../../services/form";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import dayjs, { Dayjs } from 'dayjs';
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
    Select,
    TextareaAutosize
} from '@mui/material';
export default function Form() {
    const validationSchema = Yup.object().shape({
        district: Yup.string().required('District is required'),
        policeStation: Yup.string().required('policeStation is required'),
        fullname: Yup.string().required('Fullname is required'),
        age:Yup.number().required('age is required'),
        address:Yup.string().required('address is required'),
        caseNo:Yup.number().required('caseNo is required'),
        year:Yup.number().required('year is required'),
        mobileMake:Yup.string().required('mobileMake is required'),
        mobileModel:Yup.string().required('mobileModel is required'),
        mobileColor:Yup.string().required('mobileColor is required'),
        slot1Imei:Yup.string().required('slot1Imei is required'),
        slot2Imei:Yup.string().required('slot2Imei is required'),
        slot1Number:Yup.string().required('slot1Number is required'),
        slot2Number:Yup.string().required('slot2Number is required'),
        lostPlace:Yup.string().required('lostPlace is required'),
    });
    const [polList, setPolList] = useState([]);
    const [open, setOpen] = React.useState(false);

    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            district: '',
            policeStation:'',
            lostMobileDateAndTime:dayjs()
            // lostDateAndtime:{}
        },
        resolver: yupResolver(validationSchema),
    });

    const { field, fieldState } = useController({ control, name: 'lostMobileDateAndTime' });

    const onSubmit = async (data) => {
        createMobileData(data)
            .then(res => {
                console.log(res);
                setOpen(true);
            })
    };


    const getPoliceListByDist = (event) => {
        setPolList(allPolList[event.target.value]||[])
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            multiline
                            fullWidth
                            InputProps={{
                                rows: 3
                            }}
                            id="address"
                            name="address"
                            label="Address"
                            margin="dense"
                            {...register('address')}
                            error={errors.address ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.address?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="number"
                            id="caseNo"
                            name="caseNo"
                            label="Case No"
                            fullWidth
                            margin="dense"
                            {...register('caseNo')}
                            error={errors.caseNo ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.caseNo?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="number"
                            id="year"
                            name="year"
                            label="Year"
                            fullWidth
                            margin="dense"
                            {...register('year')}
                            error={errors.year ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.year?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="mobileMake"
                            name="mobileMake"
                            label="Mobile Make"
                            fullWidth
                            margin="dense"
                            {...register('mobileMake')}
                            error={errors.mobileMake ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.mobileMake?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="mobileModel"
                            name="mobileModel"
                            label="Mobile Model"
                            fullWidth
                            margin="dense"
                            {...register('mobileModel')}
                            error={errors.mobileModel ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.mobileModel?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="mobileColor"
                            name="mobileColor"
                            label="Mobile Color"
                            fullWidth
                            margin="dense"
                            {...register('mobileColor')}
                            error={errors.mobileColor ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.mobileColor?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="slot1Imei"
                            name="slot1Imei"
                            label="Slot 1 IMEI"
                            fullWidth
                            margin="dense"
                            {...register('slot1Imei')}
                            error={errors.slot1Imei ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.slot1Imei?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="slot1Number"
                            name="slot1Number"
                            label="Slot 1 Number"
                            fullWidth
                            margin="dense"
                            {...register('slot1Number')}
                            error={errors.slot1Number ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.slot1Number?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="slot2Imei"
                            name="slot2Imei"
                            label="Slot 2 IMEI"
                            fullWidth
                            margin="dense"
                            {...register('slot2Imei')}
                            error={errors.slot2Imei ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.slot2Imei?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="slot2Number"
                            name="slot2Number"
                            label="Slot 2 Number"
                            fullWidth
                            margin="dense"
                            {...register('slot2Number')}
                            error={errors.slot2Number ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.slot2Number?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lostPlace"
                            name="lostPlace"
                            label="Lost Place"
                            fullWidth
                            margin="dense"
                            {...register('lostPlace')}
                            error={errors.lostPlace ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.mobileModel?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker 
                                        // defaultValue={dayjs('2022-04-17T15:30')}
                                        label="Lost Date and Time"
                                        {...field}
                                        renderInput={({params}) => {
                                          return <TextField {...params} />;
                                        }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                            <Typography variant="inherit" color="textSecondary">
                                {errors.slot2Number?.message}
                            </Typography>
                    </Grid>

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
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="success">
                    Successfully Updated
                </Alert>
            </Snackbar>
        </Paper>
    </Fragment>
}