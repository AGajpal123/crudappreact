import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Navbar from "../layout/Navbar";
import { Paper, Button, Container } from "@mui/material";
const About = () => {
  const isLoggedIn = true;
  const roleArray = [
    {
        role: "Help Desk",
        age: 19,
    },
    {
        role: "Admin",
        age: 18,
    },
];
const [roleName,setRole] = useState(roleArray);
console.log(roleName);
let result = roleName.map(a => a.role);
console.log(result);
if(result.includes("Help Desk")){
  console.log("HAAHA");
}
const helpDesk = result.includes("Help Desk");
const technician = result.includes("Technician");

  return (
    <>
      {isLoggedIn ? <Navbar /> : null}
      <Container maxWidth="sm mt-3 w-25">
        <Paper variant="outlined" component={Box} p={2}>
          <Typography variant="h3">Read Docs</Typography>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Paper>
      </Container>

    {/* {technician ?  <button>Help Desk</button>: <button>Technican</button> } */}
   
    {/* <button>Admin</button>
    
    <button>Finance</button> */}


    </>
  );
};

export default About;
