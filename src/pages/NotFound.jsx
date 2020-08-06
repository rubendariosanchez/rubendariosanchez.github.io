
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: 'flex',
    margin: theme.spacing(3)
  },
  card: {
    maxWidth: 700,
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  media: {
    height: 140,
    "background-size": "contain"
  }
}));

function NotFound() {
  const classes = useStyles();

  return (

    <Grid container spacing={3} p={3}>
        <Grid item xs={12} className={classes.root}>
            <Card className={classes.card} elevation={3}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="http://r53.cooltext.com/rendered/cooltext-357159309528715.png"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Página no encontrada
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lo sentimos la página que estas buscando no se encuentra, te invitamos a navegar por medio del menú.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                <Link to="/about" style={{"textDecoration": "none"}}>
                    <Button variant="contained" color="primary" startIcon={<HomeIcon />}>
                        Volver al inicio
                    </Button>
                </Link>
            </CardActions>
            </Card>
        </Grid>
    </Grid>
   
  );
}

export default NotFound;