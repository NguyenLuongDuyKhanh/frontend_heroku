import React, { useState, useEffect }from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { GetExperiences } from "../common/ApiCaller"
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [experienceItems2016, setExperienceItem2016] = useState([{id: "", position: "", employment: "", detail: "", from_year: "", to_year: ""}]);
  const [experienceItems2019, setExperienceItem2019] = useState([{id: "", position: "", employment: "", detail: "", from_year: "", to_year: ""}]);
  const [experienceItems2020, setExperienceItem2020] = useState([{id: "", position: "", employment: "", detail: "", from_year: "", to_year: ""}]);

  useEffect(() => {
    GetExperiences().then((res) => {
      setExperienceItem2016({
        id: res.data[0].id,
        position: res.data[0].position,
        employment: res.data[0].employment,
        detail: res.data[0].detail,
        from_year: res.data[0].from_year,
        to_year: res.data[0].to_year,
      })
      setExperienceItem2019({
        id: res.data[1].id,
        position: res.data[1].position,
        employment: res.data[1].employment,
        detail: res.data[1].detail,
        from_year: res.data[1].from_year,
        to_year: res.data[1].to_year,
      })
      setExperienceItem2020({
        id: res.data[2].id,
        position: res.data[2].position,
        employment: res.data[2].employment,
        detail: res.data[2].detail,
        from_year: res.data[2].from_year,
        to_year: res.data[2].to_year,
      })
    })
  },[])

  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience list
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          {experienceItems2016.from_year}
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            {experienceItems2016.position}
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            {experienceItems2016.employment}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            {experienceItems2016.detail}
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          {experienceItems2019.from_year}
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            {experienceItems2019.position}
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            {experienceItems2019.employment}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            {experienceItems2019.detail}
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          {experienceItems2020.from_year}
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            {experienceItems2020.position}
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            {experienceItems2020.employment}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            {experienceItems2020.detail}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
