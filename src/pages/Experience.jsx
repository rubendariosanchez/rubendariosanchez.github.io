import React, {useState, useEffect} from 'react';
import Container from '../components/Container.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '12px 16px'
  },
  titleItem: {
    color: "#f50057"
  },
  itemDescription:{
    fontStyle: "italic",
    lineHeight: "16px",
    fontSize: "13px",
    color: "#868686",
    textAlign: "justify"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


const renderExperienceList = function (experienceList = [], classes){
  return (
      <>
      {experienceList &&
        experienceList.length > 0 &&
        experienceList.map((item, index) =>
          <TimelineItem key={index}>
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary"> {item.startDate + " / " + (item.endDate || "Actual")} </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <DeveloperBoardIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" className={classes.titleItem}>
                {item.company}
                </Typography>
                <Typography>{item.charge + " - " + item.location}</Typography>
                <Typography className={classes.itemDescription}>{item.summary}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
      )}
      </>
  );
}

/**
 * Permite mostrar la interfaz inicial del aplicativo
 */
function Experience(){
 
  // obtenemos el titulo a mostrar
  var titleApp = 'Educación';

  // Se obtiene las clases configuradas
  const classes = useStyles();

  // url de la consulta
  const urlFetch = "https://script.google.com/macros/s/AKfycbz8FDMMiDyqaJ3LXR4CGLojihs00O9gy1CcTmlHpkGaq1sb6wA/exec?action=experience";

  const [experienceList, setExperience] = useState([]);
  
  useEffect(() => {
    
    fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      return setExperience(data)
    });
  }, []);
 
  /**
   * Permite renderizar la interfaz 
   */
  return (
    <>
    <Container titleApp={titleApp} itemSelected={"experience"}>
        <Timeline align="alternate">
          {experienceList.length > 0 ? 
          renderExperienceList(experienceList, classes) :
          (
          <>
            <Typography component="div" key={"T1"} variant={"h1"}><Skeleton animation="wave"/></Typography>
            <Typography component="div" key={"T2"} variant={"h3"}><Skeleton animation="wave"/></Typography>
            <Typography component="div" key={"T3"} variant={"body1"}><Skeleton animation="wave"/></Typography>
            <Typography component="div" key={"T4"} variant={"caption"}><Skeleton animation="wave"/></Typography>
          </>)}
        </Timeline>
    </Container>      
    </>
  );
  
}

// se exporta como un módulo de la página de inicio
export default Experience;