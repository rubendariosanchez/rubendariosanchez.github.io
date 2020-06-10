import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import { withStyles } from "@material-ui/core";
import '../styles/App.css';

const drawerWidth = 240;

/**
 * Se define los estilos que se debe aplicar
 */
const useStyles = theme => ({
    
    swipeableDesktop: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    swipeableMobile: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    swipeableDrawer:{
        width: drawerWidth
    },
    drawerContainer:{
      width: drawerWidth
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(2, 1),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    }
  });

/**
 * Definimos la clase para manejar el menu de la izquierda
 */
class Sidebar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          openSidebar: false
        };
      }

      showDrawer = event => {
        if (
          event &&
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        this.setState({ openSidebar: true });
      };
    
      /**
     * Permite agregar la lista de elementos de la lista
     */
    getListItems(){
       
        // Se retorna la lista de itemas
        return (
            <>
            <List>
                <ListItem button key={"Experiencia"}>
                    <ListItemIcon><CastForEducationIcon /></ListItemIcon>
                    <ListItemText primary={"Experiencia"} />
                </ListItem>
                <Divider />
                <ListItem button key={"Experiencia1"}>
                    <ListItemIcon><CastForEducationIcon /></ListItemIcon>
                    <ListItemText primary={"Experiencia1"} />
                </ListItem>
                <Divider />
            </List>
            </>
        );
    }

    render() {

        const { open, onOpen, onClose, classes, children } = this.props;
        console.log(classes)
        //const classes = useStyles();
        const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
        return (
            <>
            <div className={classes.swipeableMobile}>
                <SwipeableDrawer
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
            >
                <div className={classes.swipeableDrawer}>
                {this.getListItems()}
                </div>
            </SwipeableDrawer >
            </div>
            <div className={classes.swipeableDesktop}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                {this.getListItems()}
                </div>
            </Drawer>
            </div>
            <main
            className={"main__container " + classes.content}
            >
              <div className={classes.toolbar} />
              {children}
            </main>
            </>
        );
    }
}

// Exportamos el componente
export default withStyles(useStyles)(Sidebar);