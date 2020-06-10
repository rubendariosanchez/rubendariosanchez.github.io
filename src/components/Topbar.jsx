import React, { Component } from 'react';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';
import particles from '../const/particle.js';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

/**
 * Se define los estilos que se debe aplicar
 */
const useStyles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
});

/**
 * Se define la clase de meu en la cabecera
 */
class Topbar extends Component {

    // renderizamos la intefaz de cabecera
    render() {
      
        // obtenemos las propiedades para mostrar la información
        const {titleApp, classes, onSidebarOpen} = this.props;

        // retornamos la interfaz
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                <div className={classes.sectionMobile}>
                <IconButton
                    color="inherit"
                    aria-label="Abrimos el menu"
                    edge="start"
                    onClick={onSidebarOpen}
                >
                    <MenuIcon />
                </IconButton>
                </div>
                <Typography variant="h6" noWrap>
                {titleApp ? titleApp : "Portafolio"}
                </Typography>
                <div className={classes.grow} />
                <div>
                  
                  <Link 
                    color="inherit"
                    title="Abrir linkedin"
                    href="https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-s%C3%A1nchez-ram%C3%ADrez-6a3a606b/"
                    target="_blank">
                    <IconButton aria-label="show 11 new notifications" color="inherit" >
                      <LinkedInIcon />
                    </IconButton>
                  </Link>
                  <Link 
                    color="inherit"
                    title="Abrir github"
                    href="https://github.com/rubendariosanchez/"
                    target="_blank">
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </div>
                
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

// Exportamos el componente
export default withStyles(useStyles)(Topbar);

/*
<Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
             </Animate>
*/