import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  search: {
    width: '300px',
    marginBottom: '16px'
  },
  card: {
    maxWidth: 300,
    height: 290,
    border: '1px solid #e0e0e0',
    borderRadius: theme.spacing(1),
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  media: {
    height: 200,
    backgroundSize: 'cover'
  },
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export default useStyles;
