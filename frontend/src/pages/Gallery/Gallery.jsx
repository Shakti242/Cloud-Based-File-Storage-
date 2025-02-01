import React, { useContext, useEffect, useState } from 'react';
import useStyles from './Gallery.styles';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from '../../context';
import { getImageMetadataAPI } from '../../api/crud.js';

const CustomCard = ({ imageUrl, title, labels }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {labels.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Gallery = () => {
  const classes = useStyles();
  const { setAppContext } = useContext(AppContext);

  const [searchText, setSearchText] = useState('');
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    setAppContext({
      buttonRoute: '/',
      buttonTitle: 'Home'
    });

    const fetchData = async () => {
      try {
        let data = await getImageMetadataAPI();

        setImagesData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredData = imagesData.filter(
    (item) =>
      item.labels.some((label) =>
        label.toLowerCase().includes(searchText.toLowerCase())
      ) || item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField
          label="Search by tags or email"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={handleSearchChange}
          className={classes.searchBox}
        />
      </div>

      <div className={classes.grid}>
        <Grid container spacing={2}>
          {filteredData.map((item) => (
            <Grid item key={item.uuid} xs={12} sm={6} md={4} lg={3}>
              <CustomCard
                imageUrl={item.image_url}
                title={item.title}
                labels={item.labels}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;
