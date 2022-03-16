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
        dygnify
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

const LoanApplicationDetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data, e) => {
    console.log(data);
    const reviewData = {
      loanAmount: data.loanAmount,
      interestRate: data.interestRate,
      loanTenure: data.loanTenure,
    };
    const url = `http://localhost:4000/addLoanDetails`;
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
          setSuccess("Loan  Details added successfully");
          console.log("Loan Details added successfully");
        } else {
          return;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Loan Details added successfully ");
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
              Loan Application Form
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
                    autoComplete="loanAmount"
                    type="number"
                    name="loanAmount"
                    required
                    fullWidth
                    id="loanAmount"
                    label="Loan Amount"
                    autoFocus
                    {...register("loanAmount")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="interestRate"
                    type="number"
                    name="Interest Rate"
                    required
                    fullWidth
                    id="interestRate"
                    label="interestRate Number"
                    autoFocus
                    {...register("interestRate")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="loanTenure"
                    label="Loan Tenure"
                    name="loanTenure"
                    autoComplete="loanTenure"
                    {...register("loanTenure")}
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

export default LoanApplicationDetailsForm;
