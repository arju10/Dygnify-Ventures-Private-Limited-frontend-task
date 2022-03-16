import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonalDetailsForm from "../PersonaDetailsForm/PersonalDetailsForm";
import BusinessDetailsForm from "../BusinessDetailsForm/BusinessDetailsForm";
import LoanApplicationDetailsForm from "../LoadApplicationDetailsForm/LoanApplicationDetailsForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Personal Details" />
        <Tab label="Business Details" />
        <Tab label="Loan Application" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalDetailsForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BusinessDetailsForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoanApplicationDetailsForm />
      </TabPanel>
    </Box>
  );
};
export default Home;
