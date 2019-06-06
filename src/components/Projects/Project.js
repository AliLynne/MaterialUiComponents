import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

function Project(props) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Project Name
        </Typography>
        <Typography>
          Project Description
        </Typography> 
      </CardContent>
      <CardActions>
        <Button size="small">Project Code</Button>
        <Button size="small">Live Example</Button>
      </CardActions>
    </Card>
  );
}

export default Project;