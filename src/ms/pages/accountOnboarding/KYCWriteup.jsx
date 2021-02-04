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
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">KYC Writeup</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormLabel>Relationship Manager Name</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <select name="relManagerName" ref={register}>
                <option value="1">Relationship Manager 1</option>
                <option value="2">Relationship Manager 2</option>
                <option value="3">Relationship Manager 3</option>
              </select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormLabel>Entity</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <select name="entity" ref={register}>
              <option value="1">Entity 1</option>
              <option value="2">Entity 2</option>
              <option value="3">Entity 3</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <FormLabel>RM Sales Code</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <select name="rmSalesCode" ref={register}>
              <option value="1">RM Sales Code 1</option>
              <option value="2">RM Sales Code 2</option>
              <option value="3">RM Sales Code 3</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <FormLabel>LM Name</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <select name="lmName" ref={register}>
              <option value="1">LM Name 1</option>
              <option value="2">LM Name 2</option>
              <option value="3">LM Name 3</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <FormLabel>Account Type</FormLabel>
          </Grid>
          <Grid item xs={6}>
            <select name="accountType" ref={register}>
              <option value="1">Account Type 1</option>
              <option value="2">Account Type 2</option>
              <option value="3">Account Type 3</option>
            </select>
          </Grid>

          <input type="submit" value="Save" />
          <input type="submit" value="Next" />
        </Grid>
      </form>
    </div>
  );
};

export default KYCWriteup;
