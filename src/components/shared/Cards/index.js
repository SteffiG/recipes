import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Cards.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  console.log(props);

  return (
      <Card className={classes.root}>
        <CardActionArea className="separation">
          <CardMedia
            component="img"
            alt="Food"
            height="160"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <Link to={props.typoLink}>{props.title}</Link> 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}