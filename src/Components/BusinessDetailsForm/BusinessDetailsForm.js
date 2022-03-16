import { useState } from "react";
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
        dygnify
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

const BusinessDetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    console.log(data);
    const reviewData = {
      businessName: data.businessName,
      gst: data.gst,
      igst: data.igst,
      address: data.address,
    };
    const url = `http://localhost:4000/addBusinessDetails`;
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
    alert("Business Details added successfully ");
    alert("Now add Loan Application Form");
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
              Business Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="businessName"
                    required
                    fullWidth
                    id="businessName"
                    label="Business Name"
                    autoFocus
                    {...register("businessName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="gst"
                    type="number"
                    name="gst"
                    required
                    fullWidth
                    id="gst"
                    label="GST Number"
                    autoFocus
                    {...register("gst")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="gst"
                    type="number"
                    name="igst"
                    required
                    fullWidth
                    id="gst"
                    label="IGST Number"
                    autoFocus
                    {...register("igst")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    {...register("address")}

                    // ref={register({ required: true })}
                  />
                  {/* {errors.email && <p>This field is required</p>} */}
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

export default BusinessDetailsForm;
