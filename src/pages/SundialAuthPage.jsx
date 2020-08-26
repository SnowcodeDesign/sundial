import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SundialAuthFeaturesGrid from '../components/SundialAuthFeaturesGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    minHeight: '100vh'
  },

  container: {
    minHeight: '100px',
    paddingTop: '10vh',
  },

  header: {
    maxWidth: '500px',

    marginLeft: 'auto',
    marginRight: 'auto',


    textAlign: 'center',
    fontSize: '2.0rem',
    fontWeight: 400,
    lineHeight: 1,
  },


  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  },
  '@keyframes moveUp': {
    '0%': {
      transform: 'translate(0px, 30px)',
    },
    '100%': {
      transform: 'translate(0px, 0px)',
    }
  },
  '@keyframes moveDown': {
    '0%': {
      transform: 'translate(0px, -30px)',
    },
    '100%': {
      transform: 'translate(0px, 0px)',
    }
  },
  '@keyframes fadeOut': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
      display: 'none'
    }
  },
  '@keyframes scaleIn': {
    '0%': {
      transform: 'scale(0.85, 0.85)',
    },
    '100%': {
      transform: 'scale(1, 1)',
    }
  },
  '@keyframes scaleToRight': {
    '0%': {
      transform: 'scale(0, 1)',
    },
    '100%': {
      transform: 'scale(1, 1)',
    }
  },

  sundialSVG: {
    width: '150px',
    height: '150px',

    fill: theme.palette.primary.contrastText,

    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',

    animation: '$fadeIn 3s ease-in, $scaleIn 1s ease-in'
  },

  headerText: {
    letterSpacing: 1,

    '& > div': {
      display: 'inline-block'
    },

    '& > div:nth-child(1)': {
      color: 'rgba(255,255,255,0.85)',
      animation: '$fadeIn 2.4s ease-out, $moveDown 0.5s ease-in'
    },
    '& > div:nth-child(2)': {
      color: 'rgba(255,255,255,0.85)',
      animation: '$fadeIn 2.6s ease-out, $moveDown 0.7s ease-in'
    },
    '& > div:nth-child(3)': {
      animation: '$fadeIn 3s ease-out, $moveDown 0.8s ease-in'
    }
  },

  underline: {
    height: '2px',
    borderRadius: '2px',
    width: '100%',

    minWidth: '100px',
    maxWidth: '80vw',
    
    background: theme.palette.primary.contrastText,
    opacity: 0.2,
    animation: '$scaleToRight 1.4s ease-in'
  },

  featuresGrid: {
    animation: '$fadeIn 3s ease-out, $moveUp 0.8s ease-in'
  }
}));

export default function SundialAuthPage({ onAuthedTokenSuccess }) {
  const classes = useStyles();

  const sundialSVG = (
    <svg className={classes.sundialSVG}  fill="#fff" xmlns="http://www.w3.org/2000/svg" data-name="Layer 51" viewBox="0 0 100 100" x="0px" y="0px">
      <title>Sundial</title>
      <path d="M51,24V20.44h0a.94.94,0,0,0,0-.3l0-.07a.61.61,0,0,0-.07-.14l0-.06a.46.46,0,0,0-.07-.07.57.57,0,0,0-.16-.15l-.06-.05a1.39,1.39,0,0,0-.28-.12h-.06a.57.57,0,0,0-.18,0H45a1,1,0,0,0-.89.56L41.9,24.41C20.39,26.58,4,37.23,4,50,4,64.34,24.64,76,50,76S96,64.34,96,50C96,35.85,75.9,24.32,51,24Zm0,7.15c20.29.26,36.64,8.61,36.64,18.84a10.6,10.6,0,0,1-1.85,5.83L51,49ZM25.65,59l3.83,2.34.1,0,.07,0,.05,0a1,1,0,0,0,.29,0h.07l54-3.37C78,64.44,65,68.86,50,68.86,29.24,68.86,12.36,60.4,12.36,50c0-8.3,10.77-15.37,25.68-17.88L25.28,57.66A1,1,0,0,0,25.65,59ZM50.16,50.9l28.22,5.52L34.57,59.16ZM49,49.25,32.29,58.1,49,24.68ZM45.62,21.44h2.76L29.59,59l-2.11-1.29ZM50,74C25.74,74,6,63.23,6,50,6,38.48,21,28.83,40.84,26.53L39.13,30C22.54,32.44,10.36,40.48,10.36,50c0,11.5,17.78,20.86,39.64,20.86,16.68,0,31-5.45,36.82-13.15a.94.94,0,0,0,.33-.43A12.5,12.5,0,0,0,89.64,50C89.64,38.68,72.4,29.44,51,29.16V26c23.8.3,43,10.94,43,24C94,63.23,74.26,74,50,74Z"></path>
    </svg>
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          { sundialSVG }
          <div className={classes.headerText}>
            <div>Welcome</div> <div>to</div> <div><b>Sundial</b></div>
            <div className={classes.underline}/>
          </div>
        </div>

        <div className={classes.featuresGrid}>
          <SundialAuthFeaturesGrid />
        </div>
      </div>
    </div>
  );
}