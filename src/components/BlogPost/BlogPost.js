import React from 'react';

// *** Material UI Components *** //
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// *** Other Resources *** //

// Expected usage:
// <BlogPost title={someTitle} date={someDate} content={someContent}/>

function BlogPost(props) {
  return (
    <Box p={2}>
      <Container maxWidth="lg">
        <Paper>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography align="center" variant="h6" color="inherit">
                {props.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Box p={2}>
            <Typography variant="overline" color="secondary">
              {props.subtitle}
            </Typography>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              Date: {props.date}
            </Typography>
            <Box p={2}>
              <img src="https://picsum.photos/300/200" alt="random pic from picsum.photos" />
            </Box>
            
            <Typography variant="body1" gutterBottom>
              {props.content}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
    
  );
}

export default BlogPost;