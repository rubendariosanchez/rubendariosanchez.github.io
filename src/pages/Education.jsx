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
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
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


const renderEducationList = function (educationList = [], classes){
  return (
      <>
      {educationList &&
        educationList.length > 0 &&
        educationList.map((item, index) =>
          <TimelineItem key={index}>
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary"> {item.startDate + " / " + (item.endDate || "Actual")} </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <LocalLibraryIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" className={classes.titleItem}>
                {item.career}
                </Typography>
                <Typography>{item.institution}</Typography>
                <Typography className={classes.itemDescription}>{item.description}</Typography>
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
function Education(){
 
  // obtenemos el titulo a mostrar
  var titleApp = 'Educación';

  // Se obtiene las clases configuradas
  const classes = useStyles();

  // url de la consulta
  const urlFetch = "https://script.google.com/macros/s/AKfycbz8FDMMiDyqaJ3LXR4CGLojihs00O9gy1CcTmlHpkGaq1sb6wA/exec?action=education";

  const [educationList, setEducation] = useState([]);
  
  useEffect(() => {
    
    fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      return setEducation(data)
    });
  }, []);

  /**
   * Permite renderizar la interfaz 
   */
  return (
    <>
    <Container titleApp={titleApp} itemSelected={"education"}>
        <Timeline align="alternate">
          {educationList.length > 0 ? 
          renderEducationList(educationList, classes) :
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
export default Education;