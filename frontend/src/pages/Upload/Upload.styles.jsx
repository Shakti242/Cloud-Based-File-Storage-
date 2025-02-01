import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px'
  },
  imageSelectorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 250,
    height: 250,
    overflow: 'hidden',
    marginBottom: theme.spacing(2)
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  imageInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer'
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8f2fc',
    color: theme.palette.primary.contrastText
  }
}));

export default useStyles;
