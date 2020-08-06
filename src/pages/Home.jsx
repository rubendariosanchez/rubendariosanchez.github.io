import React from 'react';
import '../styles/Home.css';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';
import particles from '../const/particle.js';
import Container from '../components/Container.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  justifyContent: {
   textAlign: 'justify'
  },
  avatar: {
    width: 60,
    height: 60,
    border: '2px solid #fff',
    boxShadow: '0px 0px 10px #00000052',    
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

/**
 * Permite mostrar la interfaz inicial del aplicativo
 */
function Home(){

  // obtenemos el titulo a mostrar
  var titleApp = 'Acerca de mi';

  // Se obtiene las clases configuradas
  const classes = useStyles();

  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

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
    <Container titleApp={titleApp} itemSelected={"about"}>
      <div className={classes.header} style={{
        justify: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <CardMedia
            classes={mediaStyles}
            image={
              'https://images.unsplash.com/photo-1570478071172-55165cf45de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
            }
          />
          <Avatar className={cardStyles.avatar} src={'https://lh3.googleusercontent.com/ogw/ADGmqu8srpdzuDvnRzwoymVhEAQwXequPfahXmdo_VCeslaIHgN2-d4DI1EO7cOl5TScfRK0b39t7vBhYxUWEARtA_qkNT4VgZIZH5aEFnkhTzzcSKhAy_bFB4cIA9UFma6ba1w4J1k-gHt629Rj7jnC0-qZtusd8RK-Fz87lFkg0YXyHDKMRfsLJGkb9-AEi7gkZORTAijKt33fvzIP5fxeo1MpDJiwjTZxgB_RTjEgzYm0qWqctxybH7yPHYi_ZDjgzV4wJUC-WZMz6nH_rry9PZtGhN_i3GIgRAMLRoQgYJvR63alceXYhqrw_56HH2N1W74HrX-slLiI-6A-FgJhCLrMR_AOchLp8kLTqSNrRT8CGbof_BOlzhAmGdPHPZw4d7kDias1enTAOW_2BqZ0MTFAKdKr-FbfupJjyxtxlsV3hG6plCj53tuXYrFOQHeTiBYJjcg63Xse1oSkCw-t3-mG1dw3wNHoj9l9weL23BwfrOmP1efNXjENBNr19t-Q1w2sb_Ic_rorpT7QAcN1k6RUQS5e3h0aHEu_BbAsTEEUDn3LHXHnjugD9G9EQttbUPedqobuNAb8gCKKt6BWU6kWTB1xgxs6W-eKgyJ-r_m30vTcXkpEYsMW4ZVJJzIb0cVwMMbkn1lBkhqKBkyRESZY=s83-c'} />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={textCardContentStyles}
              heading={'¿Quien es Rubén?'}
              body={
                'Ingeniero de sistemas con experiencia en desarrollo web y aplicaciones móviles usando nuevas tecnologías, soy un profesional responsable, dedicado, amable, sencillo, facilidad para trabajar en equipo y compartir ideas.'
              }
            >
            </TextInfoContent>
            <TextInfoContent
              classes={textCardContentStyles}
              body={
                'Soy fiel creyente que compartir conocimiento y ayudar a los demás es una forma de mejorar el mundo y nuestras habilidades teniendo en cuenta diferentes puntos de vista.'
              }
            >
            </TextInfoContent>
          </CardContent>
        </Card>
      </div>
    </Container>      
    </>
  );
  
}

// se exporta como un módulo de la página de inicio
export default Home;