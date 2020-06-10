import React, { Component } from 'react';
import '../styles/Home.css';
import Topbar from '../components/Topbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { withStyles } from "@material-ui/core";

// Definimos los estilos base
const styles = theme => ({});

/**
 * Clase para mostrar la ventana de inicia
 */
class Home extends Component {

  /**
   * Creamos el constructor
   */
  constructor(props) {
    super(props);
    console.log(this);
    // definimos el estado inicial
    this.state = {
      openSidebar: false
    };

    // Establecemos que el this sigue siendo el de la clase
    this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
  }

  /**
   * Permite abrir el sidebar
   */
  handleSidebarOpen(){
    this.setState({ openSidebar: true }, () =>
      console.log("Main.js state is true.")
    );
  };

   /**
   * Permite cerrar el sidebar
   */
   handleSidebarClose(){
    this.setState({ openSidebar: false });
  };

  /**
   * Permite renderizar la interfaz 
   */ 
  render() {
    // obtenemos el titulo a mostrar
    var titleApp = 'Portafolio';

    // Retornamos la interfaz
    return (
      <>
      <Topbar onSidebarOpen={this.handleSidebarOpen} title={titleApp}></Topbar>
      <Sidebar
        open={this.state.openSidebar}
        onOpen={this.handleSidebarOpen}
        onClose={this.handleSidebarClose}
      >
        <h1>HOlallalal</h1>
      </Sidebar>
      
      </>
    );
  }
  
}

// se exporta como un módulo de la página de inicio
//export default connect(mapStateToProps, null) (Home);
export default withStyles(styles)(Home);
/*
<Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
             </Animate>
*/