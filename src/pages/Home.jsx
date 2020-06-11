import React from 'react';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';
import particles from '../const/particle.js';
import Container from '../components/Container.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

/**
 * Permite mostrar la interfaz inicial del aplicativo
 */
function Home(){

  // obtenemos el titulo a mostrar
  var titleApp = 'Portafolio1';

  // Se obtiene las clases configuradas
  const classes = useStyles();

  /**
   * Permite renderizar la interfaz 
   */ 
  // Retornamos la interfaz
  return (
    <>
    <Animate to="1" from="0" attributeName="opacity">
      <Particles
      params={particles}
      className="particle"
      />
    </Animate>
    <Container titleApp={titleApp}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>      
    </>
  );
  
}

// se exporta como un módulo de la página de inicio
export default Home;