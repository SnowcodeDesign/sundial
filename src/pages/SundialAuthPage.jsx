import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SundialAuthFeaturesGrid from '../components/SundialAuthFeaturesGrid';
import SundialFooter from '../components/SundialFooter';

const useStyles = makeStyles((theme) => ({
  '@keyframes backgroundFade': {
    '0%': {
      backgroundPosition: '100% 50%'
    },
    '50%': {
      backgroundPosition: '0% 50%'
    },
    '100%': {
      backgroundPosition: '100% 50%'
    }
  },

  root: {
    minWidth: '320px',
    minHeight: '100vh',

    background: 'linear-gradient(-45deg, rgba(131,73,247,1) 0%, rgba(125,71,231,1) 5%, rgba(116,71,203,1) 11%, rgba(114,70,201,1) 23%, rgba(98,57,177,1) 42%, rgba(94,56,170,1) 48%, rgba(94,53,177,1) 52%, rgba(90,61,186,1) 66%, rgba(94,83,187,1) 83%, rgba(98,102,199,1) 100%)',
    backgroundSize: '800% 800%',
    animation: '$backgroundFade 8s ease infinite alternate',
  },

  container: {
    minHeight: '100px',
    paddingTop: '40px',
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
  '@keyframes underlineFadeIn': {
    '0%': {
      opacity: 0.0
    },
    '100%': {
      opacity: 0.2
    }
  },
  sundialSVG: {
    width: '220px',
    height: '220px',

    fill: theme.palette.primary.contrastText,

    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',

    animation: '$fadeIn 3s ease-in, $scaleIn 1s ease-in'
  },

  headerText: {
    letterSpacing: 0,
    lineHeight: 1,
    fontSize: '2.5rem',
    paddingLeft: 20,
    paddingRight: 20,

    [theme.breakpoints.down(430)]: {
      fontSize: '2.2rem'
    },

    [theme.breakpoints.down(375)]: {
      fontSize: '1.8rem'
    },


    '& > div': {
      display: 'inline-block'
    },

    '& > div:nth-child(1)': {
      color: 'rgba(255,255,255,0.85)',
      animation: '$fadeIn 2.4s ease-out 1s forwards, $moveDown 0.5s ease-in 1s forwards'
    },
    '& > div:nth-child(2)': {
      color: 'rgba(255,255,255,0.85)',
      animation: '$fadeIn 2.6s ease-out 1s forwards, $moveDown 0.7s ease-in 1s forwards'
    },
    '& > div:nth-child(3)': {
      animation: '$fadeIn 3s ease-out 1s forwards, $moveDown 0.8s ease-in 1s forwards'
    }
  },

  headerSubtitle: {
    letterSpacing: 0.5,
    display: 'block',
    width: '295px',
    fontSize: '1.0rem',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: 1,
    textAlign: 'right',

    animation: '$fadeIn 5s ease-out 1s forwards'
  },

  underline: {
    height: '2px',
    borderRadius: '2px',
    width: '100%',

    minWidth: '100px',
    maxWidth: '80vw',
    
    background: theme.palette.primary.contrastText,
    opacity: 0.2,
    animation: '$underlineFadeIn 1.5s 1s forwards, $scaleToRight 1.2s ease-in 1s forwards'
  },

  featuresGrid: {
    animation: '$fadeIn 3s ease-out 1s forwards, $moveUp 0.8s ease-in 1s forwards'
  },

  brand: {
    fontWeight: 800,
    color: theme.palette.secondary.main
  },

  connect: {
    width: '300px',

    marginLeft: 'auto',
    marginRight: 'auto',

    paddingTop: 60,
    paddingBottom: 20,

    animation: '$fadeIn 3s ease 1s forwards',

    // '& > .g-signin2' : {
    //   width: '120px',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   textAlign: 'center',
    //   transform: 'scale(1.35, 1.35)'
    // },

    alignItems: 'middle',

    '& > .g-signin2' : {
      height: '50px',
      minWidth: '120px',
      maxWidth: '240px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  },

  connectButton: {
    transform: 'scale(1.35, 1.35)'
  },

  connectHelper: {
    textAlign: 'center',
    lineHeight: 1.3,
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.3)',
    paddingTop: 15,

    '& > a': {
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 600,
    }
  },

  footer: {
    animation: '$fadeIn 5s ease 1s fowards',
    marginTop: 200,
  }
}));

export default function SundialAuthPage({ networker, onGoogleSuccess }) {
  const classes = useStyles();
  const sundialGoogleButtonId = "SundialGoogleButton";

  const sundialSVG = (
    <svg className={classes.sundialSVG}  fill="#fff" xmlns="http://www.w3.org/2000/svg" data-name="Layer 51" viewBox="0 0 100 100" x="0px" y="0px">
      <title>Sundial</title>
      <path d="M51,24V20.44h0a.94.94,0,0,0,0-.3l0-.07a.61.61,0,0,0-.07-.14l0-.06a.46.46,0,0,0-.07-.07.57.57,0,0,0-.16-.15l-.06-.05a1.39,1.39,0,0,0-.28-.12h-.06a.57.57,0,0,0-.18,0H45a1,1,0,0,0-.89.56L41.9,24.41C20.39,26.58,4,37.23,4,50,4,64.34,24.64,76,50,76S96,64.34,96,50C96,35.85,75.9,24.32,51,24Zm0,7.15c20.29.26,36.64,8.61,36.64,18.84a10.6,10.6,0,0,1-1.85,5.83L51,49ZM25.65,59l3.83,2.34.1,0,.07,0,.05,0a1,1,0,0,0,.29,0h.07l54-3.37C78,64.44,65,68.86,50,68.86,29.24,68.86,12.36,60.4,12.36,50c0-8.3,10.77-15.37,25.68-17.88L25.28,57.66A1,1,0,0,0,25.65,59ZM50.16,50.9l28.22,5.52L34.57,59.16ZM49,49.25,32.29,58.1,49,24.68ZM45.62,21.44h2.76L29.59,59l-2.11-1.29ZM50,74C25.74,74,6,63.23,6,50,6,38.48,21,28.83,40.84,26.53L39.13,30C22.54,32.44,10.36,40.48,10.36,50c0,11.5,17.78,20.86,39.64,20.86,16.68,0,31-5.45,36.82-13.15a.94.94,0,0,0,.33-.43A12.5,12.5,0,0,0,89.64,50C89.64,38.68,72.4,29.44,51,29.16V26c23.8.3,43,10.94,43,24C94,63.23,74.26,74,50,74Z"></path>
    </svg>
  );

  useEffect(() => {
    const handleGoogleFailure = (e) => {
      console.log(e);
    }

    if (!window.gapi) {
      return;
    }

    // 1. load the google oauth web library (if available)
    window.gapi.load('auth2', function() {
      // 2. initialize auth2 instance using our public client ID
      window.gapi.auth2.init({
        client_id: '536519055297-nvagfvf3pjp7rui21aar1cd55khih4vq.apps.googleusercontent.com'
      }).then(auth2 => {
        // 3. render custom sign-in button if things loaded properly
        window.gapi.signin2.render(sundialGoogleButtonId, {
          'scope': 'profile email',
          'width': 200,
          'height': 38,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onGoogleSuccess,
          'onfailure': handleGoogleFailure
        });

        // 4. attach click handler to receive success/failure callbacks on button
        auth2.attachClickHandler(sundialGoogleButtonId, {}, onGoogleSuccess, handleGoogleFailure);

        // 5. listen for sign-in state changes
        const signinChanged = function (val) {
          console.log('Sign In state changed to ', val);
          // alert(val);
        };
        auth2.isSignedIn.listen(signinChanged);

        // 6. listen for user changes
        const userChanged = function (user) {
          console.log('User now: ', user);
          // alert(JSON.stringify(user, undefined, 2));
          onGoogleSuccess(user);
        };

        auth2.currentUser.listen(userChanged);

        // 7. sign in the user if they are currently authenticated
        // if (auth2.isSignedIn.get() === true) {
          // auth2.signIn();
        // }

        // 8 . get up-to-date values
        // const signedInUser = auth2.currentUser.get();
        // if (signedInUser) {
        //   onGoogleSuccess(signedInUser);
        // }

        // reauthenticate if token has expired to prevent need to click button (again)
        // const currentUser = auth2.currentUser.get();
        // if (currentUser) {
        //   currentUser.reloadAuthResponse().then(r => {
        //     // console.log(r);
        //   }).catch(e => {
        //     handleGoogleFailure(e);
        //   });
        // }
      }).catch(e => {
        console.log(e);
      });
    });
  }, [onGoogleSuccess]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          { sundialSVG }
          <div className={classes.headerText}>
            <div>Welcome</div> <div>to</div> <div><span className={classes.brand}>Sundial</span></div>
            <div className={classes.underline}/>
          </div>
        </div>

        <div className={classes.featuresGrid}>
          <SundialAuthFeaturesGrid />
        </div>

        <div className={classes.connect}>
          <div className={classes.connectButton}><center>
            <div className="g-signin2" id={ sundialGoogleButtonId }></div>
          </center></div>

          <div className={classes.connectHelper}>
            Use Sundial by signing into your Google account.<br/>By clicking, you agree to the use of <a href="https://policies.google.com/technologies/cookies">cookies</a>.<br/>
          </div>
        </div>

        <div className={classes.footer}>
          <SundialFooter />
        </div>
      </div>
    </div>
  );
}