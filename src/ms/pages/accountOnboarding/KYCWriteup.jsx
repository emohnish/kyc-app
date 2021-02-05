import React from "react";
//import '../styles/mytasks.css';

import Grid from "@material-ui/core/Grid";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import { useForm } from "react-hook-form";

const KYCWriteup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Client Particulars (Individual)
        </Typography>

        <Box bgcolor="text.disabled" m={2} p={1} display="block">
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Given Name:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField required id="firstName" name="firstName" />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Surname:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField required id="firstName" name="firstName" />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                DOB:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField required id="firstName" name="firstName" />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Client Name:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField required id="firstName" name="firstName" />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Nationality:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="nationaility" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Country of Domicile:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="countryofDomicile" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Tax Residence:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Box>

        <br />

        <Typography variant="h6" gutterBottom>
          Client Identification
        </Typography>

        <Box bgcolor="text.disabled" m={2} p={1} display="block">
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Identification Type:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Identification No:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Issue Country:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Issue Date:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Valid To:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>
          </Grid>
        </Box>

        <br />

        <ButtonGroup color="contained">
          <Button>PREVIOUS</Button>
          <Button>SAVE</Button>
          <Button>NEXT</Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default KYCWriteup;
