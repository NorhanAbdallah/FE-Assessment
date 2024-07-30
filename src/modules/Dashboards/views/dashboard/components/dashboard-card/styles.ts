import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    cardContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    avatar: {
        marginRight: '8px', borderRadius: '30%'
    },
    name: {
        marginLeft: '8px'
    },
    stars: {
        color: 'black', fontWeight: 500
    },
    phoneNumber: {
        marginLeft: '8px', color: '#9aa7bf'
    },
    chip: {
        color: '#6383ed',
        fontWeight: 'bold',
        minWidth: '28px',
        background: '#f2f4f7',

    }
}));
