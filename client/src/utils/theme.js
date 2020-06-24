import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
      light: '64d8cb',
      dark: '#00766c',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

theme.overrides = {
  MuiCard: {
    root: {
      borderRadius: '15px',
      width: '280px',
      marginBottom: '40px',
    },
  },
  MuiContainer: {
    root: {
      padding: '10px 0',
    },
  },
  MuiTextField: {
    root: {
      backgroundColor: theme.palette.common.white,
      fontSize: '30px',
      borderRadius: '5px',
    },
  },

  MuiCardContent: {
    root: {
      padding: '25px !important',
    },
  },
  MuiDialog: {
    root: {
      margin: `${theme.spacing(5)}px`,
    },
    paperFullScreen: {
      backgroundColor: theme.palette.background.default,
    },
  },
  MuiCardHeader: {
    root: {
      padding: theme.spacing(4),
      '& + .MuiCardContent-root': {
        paddingTop: '0 !important',
      },
    },
    title: {
      ...theme.typography.h6,
      color: theme.palette.text.secondary,
    },
    action: {
      marginTop: 0,
      marginRight: 0,
      alignSelf: 'center',
      display: 'flex',
    },
  },
  MuiInputBase: {
    root: {
      borderRadius: '15px',
      height: '3.5em',
    },
  },
  MuiSvgIcon: {
    root: {
      paddingRight: '5px',
      fontSize: '30px',
    },
    fontSizeInherit: {
      fontSize: '60px',
      paddingTop: '25px',
    },
    fontSizeLarge: {
      fontSize: '50px',
    },
  },
  MuiButton: {
    root: {
      margin: '5px',
    },
    sizeLarge: {
      height: '55px',
    },
    outlinedSecondary: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  MuiAppBar: {
    root: {
      background: theme.palette.background.default,
    },
    colorPrimary: {
      backgroundColor: theme.palette.background.default,
    },
  },
};

export default theme;
