import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Blog1 from '../../asserts/blog1.png'
import Blog2 from '../../asserts/undrawBlogging.png';
import Blog3 from '../../asserts/undrawWordpress.png';
import Masonry from 'react-masonry-css'
import './blog.css';
import { Box } from '@mui/system';
import CallMadeIcon from '@mui/icons-material/CallMade';
// import Navbar from '../../components/navbar'
// import Footer from '../../components/footer'

function blog() {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <div>
      <br/>
      <p className="BLOGS"><Typography variant="span" style={{ textTransform: 'uppercase', letterSpacing: '2px'}} mt="20px">Be attentive in the world at the ease of your fingertips</Typography></p>
      <br/><br/>

      <div style={{ marginTop: '0px', marginBottom: '20px' }}>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column2"
          style={{ marginLeft: 0, marginRight: 0 }}
        >
          <div className="cards" style={{ marginTop: '30px' }}>
            <Card elevation={8} sx={{ maxWidth: 442 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={Blog1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" style={{ textAlign: "left" }} component="div">
                    The Student's Beat
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align={'justify'}>
                    To view collective information from all over the world at one glance.
                    Get your perspective clear through numerous informative things.
                    Click below button to visit the site.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
                </CardActions>
            </Card>
          </div>

          {/*<div>
            <Card elevation={3} sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 130 }}
                image={Blog1}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" style={{ textAlign: 'left' }}>
                    The Students's Beat
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" align={'justify'}>
                    To view collective information from all over the world at one glance.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', pl: 1, pb: 1 }}>
                <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
                </Box>
              </Box>
            </Card>
          </div>*/}

          {/*<div style={{ marginTop: '30px' }}>
            <Card elevation={8} sx={{ maxWidth: 442 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={Blog2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" style={{ textAlign: "left" }} component="div">
                    The Student's Beat
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align={'justify'}>
                    To view collective information from all over the world at one glance.
                    Get your perspective clear through numerous informative things.
                    Click below button to visit the site.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
                </CardActions>
            </Card>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Card elevation={8} sx={{ maxWidth: 442 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={Blog3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" style={{ textAlign: "left" }} component="div">
                    The Student's Beat
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align={'justify'}>
                    To view collective information from all over the world at one glance.
                    Get your perspective clear through numerous informative things.
                    Click below button to visit the site.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
                </CardActions>
            </Card>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Card elevation={8} sx={{ maxWidth: 442 }}>
              <CardMedia
                component="img"
                height="140"
                image={Blog1}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" style={{ textAlign: "left" }} component="div">
                  The Student's Beat
                </Typography>
                <Typography variant="body2" color="text.secondary" align={'justify'}>
                  To view collective information from all over the world at one glance.
                  Get your perspective clear through numerous informative things.
                  Click below button to visit the site.
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
              </CardActions>
            </Card>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Card elevation={8} sx={{ maxWidth: 442 }}>
              <CardMedia
                component="img"
                height="140"
                image={Blog1}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" style={{ textAlign: "left" }} component="div">
                  The Student's Beat
                </Typography>
                <Typography variant="body2" color="text.secondary" align={'justify'}>
                  To view collective information from all over the world at one glance.
                  Get your perspective clear through numerous informative things.
                  Click below button to visit the site.
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ marginLeft: '5px' }} size="small" endIcon={<CallMadeIcon />} href="https://thestudentsbeat.wordpress.com/2017/09/20/indian-army-pride-of-nation/" target="_blank">Visit</Button>
              </CardActions>
            </Card>
        </div>*/}

        </Masonry>
      </div>
    </div>
  )
}

export default blog
