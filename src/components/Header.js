import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import {
  GetExperiences
} from "../common/ApiCaller.js";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isAPICalled, setIsAPICall] = useState(false);
  const handleOnClickAPI = () => {
    console.log("API Test success")
    if (isAPICalled){
      console.log('checkAPICall')
    }
    setIsAPICall(true)
    GetExperiences().then((res) => {
      console.log(res)
    })
    .catch(() => {
      console.log('fail to call api')
    })
  }
  useEffect(() => {
    console.log("re-render")
    setIsAPICall(false)
  },[]);
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} variant='circle' alt="Nguyen Luong Duy Khanh" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Nguyễn Lương Duy Khánh"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Embedded Engineer",
            "CI/CD Engineer",
            "Backend Developer",
            "Frontend Developer",
            "STEAM Teacher"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Button
        onClick={handleOnClickAPI}
      >
        Test API
      </Button>
    </Box>
  );
};

export default Header;
