import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Tilt from 'react-tilt'

const useStyles = makeStyles((theme) => ({
  root: {
    verticalAlign: 'top',
    display: 'inline-block',
    margin: 6,

    width: 'calc(33% - 15px)',

    [theme.breakpoints.down(950)]: {
      width: 'calc(30% - 15px)',
    },

    [theme.breakpoints.down(795)]: {
      width: 'calc(40% - 15px)',
    },

    [theme.breakpoints.down(660)]: {
      width: 'calc(70% - 15px)',
    },
  },
  card: {
    padding: 20,
    borderRadius: 20,

    boxShadow: '0px 0px 20px rgba(0,0,0,0.2)',
    background: theme.palette.primary.contrastText,
    color: 'rgb(50,50,50,1)',

    textAlign: 'left',
    cursor: 'pointer',
  },
  imageContainer: {

  },
  image: {
    width: '60px',
    height: '60px',
  },
  title: {
    paddingTop: 10,
    fontWeight: 500,
    fontSize: '1.3rem',
    letterSpacing: 0,
    color: 'rgba(0,0,0,1)'
  },
  body: {
    paddingTop: 10,
    fontSize: '1.0rem',
    lineHeight: 1.3,
    color: 'rgba(0,0,0,0.8)'

  }
}));

export default function SundialAuthFeatureCard({ feature }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tilt className="Tilt" options={{ perspective: 500, speed: 800, scale: 1.05 }}>
        <div className={classes.card}>
          <div className="Tilt-inner">
            <div className={classes.imageContainer}>
              <img className={classes.image} src={ feature.image } />
            </div>

            <div className={classes.title}>
              { feature.title }
            </div>

            <div className={classes.body}>
              { feature.body }
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}