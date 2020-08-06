import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkMUI from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { red, grey } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import {AppsScriptIcon, EducationIcon, ExperienceIcon} from '../const/icons.js';

// definimos el maximo de
const drawerWidth = 240;

// Definimos los estilos que
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  root: {
    display: 'flex',
    "&$selected": {
      backgroundColor: "red"
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necesario para que el contenido esté debajo de la barra de aplicaciones
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[50],
    boxShadow: "1px 1px 11px #5858586b"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

/**
 * Permite Renderizar el contenedor principal 
 */
function Container(props) {

  // Obtenemos las propiedades que vamos a usar
  const { window, children, titleApp, itemSelected } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /**
   * Permite mostrar u ocultar la ventana del menú
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Variable donde se configura el menú de la izquierda
  const drawer = (
    <div className={"mui__menu-content"}>
      <div className={classes.toolbar1} />
      <CardHeader
        avatar={
          <Avatar aria-label="Rubén Sánchez" src="https://lh3.googleusercontent.com/ogw/ADGmqu8srpdzuDvnRzwoymVhEAQwXequPfahXmdo_VCeslaIHgN2-d4DI1EO7cOl5TScfRK0b39t7vBhYxUWEARtA_qkNT4VgZIZH5aEFnkhTzzcSKhAy_bFB4cIA9UFma6ba1w4J1k-gHt629Rj7jnC0-qZtusd8RK-Fz87lFkg0YXyHDKMRfsLJGkb9-AEi7gkZORTAijKt33fvzIP5fxeo1MpDJiwjTZxgB_RTjEgzYm0qWqctxybH7yPHYi_ZDjgzV4wJUC-WZMz6nH_rry9PZtGhN_i3GIgRAMLRoQgYJvR63alceXYhqrw_56HH2N1W74HrX-slLiI-6A-FgJhCLrMR_AOchLp8kLTqSNrRT8CGbof_BOlzhAmGdPHPZw4d7kDias1enTAOW_2BqZ0MTFAKdKr-FbfupJjyxtxlsV3hG6plCj53tuXYrFOQHeTiBYJjcg63Xse1oSkCw-t3-mG1dw3wNHoj9l9weL23BwfrOmP1efNXjENBNr19t-Q1w2sb_Ic_rorpT7QAcN1k6RUQS5e3h0aHEu_BbAsTEEUDn3LHXHnjugD9G9EQttbUPedqobuNAb8gCKKt6BWU6kWTB1xgxs6W-eKgyJ-r_m30vTcXkpEYsMW4ZVJJzIb0cVwMMbkn1lBkhqKBkyRESZY=s83-c" className={classes.avatar}>
          </Avatar>
        }
        title="Rubén Darío Sánchez"
        subheader="Web Developer"
      />
      <List className={"mui__menu-content-item"}>        
        <Divider />
        <Link className={"lnk__menu-item"} to="/about">
          <ListItem selected={itemSelected === "about" ? true : false} button key={"Acerca de mí"}>
          
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary={"Acerca de mí"} />
          
          </ListItem>
        </Link>
        <Divider />
        <Link className={"lnk__menu-item"} to="/education">
          <ListItem selected={itemSelected === "education" ? true : false} button key={"Educación"}>
              <ListItemIcon><EducationIcon /></ListItemIcon>
              <ListItemText primary={"Educación"} />
          </ListItem>
        </Link>
        <Divider />
        <Link className={"lnk__menu-item"} to="/experience">
          <ListItem selected={itemSelected === "experience" ? true : false} button key={"Experiencia"}>
            <ListItemIcon><ExperienceIcon /></ListItemIcon>
            <ListItemText primary={"Experiencia"} />
          </ListItem>
        </Link>
        <Divider />
        <a className={"lnk__menu-item"} href={"https://developers.google.com/apps-script/reference/"} target="_blank">
          <ListItem selected={itemSelected === "gas" ? true : false} button key={"Google Apps Script"}>
              <ListItemIcon><AppsScriptIcon /></ListItemIcon>
              <ListItemText primary={"Google Apps Script"} />
          </ListItem>
        </a>
        <Divider />
      </List>
      
    </div>
  );

  // Se define el tipo de contenedor
  const container = window !== undefined ? () => window().document.body : undefined;

  // Se retorna la interfaz a mostrar del componente actual
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Abrimos el menú"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {titleApp ? titleApp : "Portafolio"}
          </Typography>
          <div className={classes.grow} />
          <div>              
            <LinkMUI 
              color="inherit"
              title="Abrir linkedin"
              href="https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-s%C3%A1nchez-ram%C3%ADrez-6a3a606b/"
              target="_blank">
              <IconButton aria-label="Linkedin" color="inherit" >
                <LinkedInIcon />
              </IconButton>
            </LinkMUI>
            <LinkMUI 
              color="inherit"
              title="Abrir github"
              href="https://github.com/rubendariosanchez/"
              target="_blank">
              <IconButton aria-label="Github" color="inherit">
                <GitHubIcon />
              </IconButton>
            </LinkMUI>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Opciones del menú">
        <Hidden smUp implementation="js">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

// Esporamos el componente
export default Container;