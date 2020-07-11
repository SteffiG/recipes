import React from 'react';

import '../../pages/Recipe/Recipe.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import './SimpleCards.css';
import '../../pages/Recipe/Recipe.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const SimpleCard = ({ name, ingredients, steps, pictureUrl }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className="separation">
        <div className="recipe">
          <h2>{name}</h2>
          <div className="steps">
            <CardContent>
              <CardMedia
                component="img"
                alt="Food"
                height="160"
                image={pictureUrl}
              />
              <Typography gutterBottom variant="h5" component="h2">
                <p className="ingredients">{ingredients}</p>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p className="ingredients">{steps}</p>
              </Typography>
            </CardContent>
          </div>
        </div>
      </CardActionArea>
    </Card>
  )
}

export default SimpleCard;