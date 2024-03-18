import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail'; // Correct import path
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AppleIcon from '@mui/icons-material/Apple';
import './App.css'
function App() {
  return (
    <div className="App">
      <h1>react vedio player</h1>

      <div className="section1">
        <label htmlFor="Badge">Badge</label>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </div>
      <div className="section2">
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>

      <div className="section-3">
        <h1>Card Design</h1>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="assets/thinkitive.jpeg"
            title="Thinktive tech pune"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </div>
      <div className="section-4">
        <h1>Material libraries icons demo</h1>
        <AppleIcon  />
    
      </div>
    </div>
  );
}

export default App;
