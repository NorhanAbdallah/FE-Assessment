import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  dropContainer: {
    '&:not($container)': {
      height: '77vh',
      overflow: 'auto',

      '&::-webkit-scrollbar': {
        width: 5,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey[800],
        borderRadius: 20,
      },
    },

    '&.dragOver': {
      backgroundColor: '#eee',
    },
  },
  column: {
    width: '18.5vw',
    marginRight: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(50, 71, 92, 0.04)',
    borderRadius: '16px 16px 0px 0px',
    padding: theme.spacing(0, 1.5),

    '& .task-drop': {
      padding: 5,
      marginTop: '32px !important',
      marginBottom: '16px',
    },
    '& .card': {
      // border: '1px solid lightgray',
      marginBottom: theme.spacing(1),
      backgroundColor: '#fff',
      // padding: theme.spacing(1),
      padding: '20px 16px',
      borderRadius: 16,
      boxShadow:
        ' 0px 1px 6px 2px rgba(50, 71, 92, 0.06), 0px 2px 6px 1px rgba(50, 71, 92, 0.04), 0px 1px 4px 2px rgba(50, 71, 92, 0.02)',
      '& .name': {
        color: '#32475CDE',
        fontWeight: 700,
      },
      '& .userName': {
        background: theme.palette.primary.main,
        borderRadius: '50%',
        width: 30,
        height: 30,
        marginRight: theme.spacing(1),
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize',
      },
      '& .type': {
        // marginLeft: 'auto',
        padding: '4px 6px',
        borderRadius: 4,
        textTransform: 'capitalize',
        minWidth: '50px',
        display: 'inline-flex',
        justifyContent: 'center',
        '&.AUTOMATIC': {
          backgroundColor: '#E9F0FD',
          color: '#0099FF',
        },
        '&.MANUAL': {
          backgroundColor: 'rgba(109, 120, 141, 0.12)',
          color: '#8592A3',
        },
      },
      '& .icon': {
        width: 17,
        height: 17,
        color: '#32475C8A',
        marginRight: 8,
      },
      '& .text': {
        color: '#32475C99',
      },
    },
  },
  title: {
    margin: theme.spacing(1.5),
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'rgba(50, 71, 92, 0.87)',
    position: 'relative',
    '& .total-tasks': {
      width: 25,
      height: 25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#E0E0E0',
      color: 'rgba(50, 71, 92, 0.87)',
      borderRadius: '50%',
      fontWeight: 'bold',
      marginLeft: theme.spacing(1.5),
    },
    '& .dot': {
      width: '8px',
      height: '8px',
      borderRadius: '8px',
      marginRight: '10px',
      '&.column-1': {
        background: '#6cbaf2',
      },
      '&.column-2': {
        background: '##89d177',
      },
      '&.column-3': {
        background: '#ec695c',
      },
    },
    '&:after': {
      width: '100%',
      height: '4px',
      content: "''",
      position: 'absolute',
      bottom: '-11px',
    },
    '&.column-1': {
      '&:after': {
        background: '#6cbaf2',
      },
    },
    '&.column-2': {
      '&:after': {
        background: '#89d177',
      },
    },
    '&.column-3': {
      '&:after': {
        background: '#ec695c',
      },
    },
  },
}));
