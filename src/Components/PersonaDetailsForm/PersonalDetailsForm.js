import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

const PersonalDetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    console.log(data);
    const reviewData = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      occupation: data.occupation,
      email: data.email,
      mobile: data.mobile,
    };
    const url = `http://localhost:4000/addPersonalDetails`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Personal Details added successfully");
          console.log("Personal Details added successfully");
        } else {
          return;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Personal Details added successfully ");
    alert("Now add Business Form");

    e.target.reset();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Personal Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...register("firstName")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    {...register("lastName")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="age"
                    type="number"
                    name="age"
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    autoFocus
                    {...register("age")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="occupation"
                    type="String"
                    name="occupation"
                    required
                    fullWidth
                    id="occupation"
                    label="Occupation"
                    autoFocus
                    {...register("occupation")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="mobile"
                    label="Mobile"
                    type="Number"
                    id="mobile"
                    {...register("mobile")}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default PersonalDetailsForm;
