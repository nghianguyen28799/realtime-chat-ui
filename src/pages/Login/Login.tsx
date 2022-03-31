import { Button, Checkbox, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Stack width="100vw" height="100vh" justifyContent={"center"} alignItems={"center"}>
      <Paper sx={{ p: 5, borderRadius: 4, width: "85%", maxWidth: 550 }}>
        <Stack mb={3} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h3">Create account</Typography>
          <Typography variant="h6">Already have an account? <Link to="#" style={{ fontWeight: 600 }}>Sign in</Link></Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField type="text" placeholder="User Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField type="text" placeholder="First Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField type="text" placeholder="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField type="text" placeholder="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth sx={{ height: 50, fontSize: "1.2rem" }}>
              Continue
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Checkbox />
              <Typography variant="body1">I have read have agree to the </Typography>
              <Link to="#" style={{ marginLeft: 5, fontWeight: 600, textDecoration: "none" }}>Tearm of Service</Link>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default Login;
