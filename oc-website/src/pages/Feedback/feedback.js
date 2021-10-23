import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Masonry from 'react-masonry-css'
import { format } from 'date-fns'
import Stack from '@mui/material/Stack';
import { positions } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, CardHeader, Container, Drawer, Icon, IconButton, makeStyles, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { shadows } from '@mui/system';
import Navbar from '../../components/navigation'
// import Footer from '../../components/footer'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Feedback() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [title, setTitle] = useState('')
  const [feedback, setFeedback] = useState('')

  const [titleError, setTitleError] = useState('false')
  const [feedbackError, setFeedbackError] = useState('false')

  const handleSubmit = (e) => {
    e.preventDefualt()
    setTitleError(false)
    setFeedbackError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (feedback === '') {
      setFeedbackError(true)
    }

    if (title && feedback) {
      console.log(title, feedback)
    }
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (

    <Container style={{ display: 'flex', marginRight: 0, marginLeft: 0 }} style={{ maxWidth: '1400px'}}>

      <TableContainer component={Paper} sx={{ mb: '3%'}} > 
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '20%' }} sx={{ borderRight: 1, textAlign: 'center', verticalAlign: 'baseline' }}>  
                <div>
                  <Typography variant="h5" letterSpacing={8} sx={{ mx: 5, my: 1, textAlign: 'center', fontWeight: 600 }}>
                    Feedback Form
                  </Typography>
                  <Divider />
                  <form noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mx: 5, mt: 2 }}>
                    <TextField
                      onChange={(e) => setTitle(e.target.value)}
                      label="Name:"
                      sx={{ mt: 5, width: "90%" }}
                      required
                    //error={titleError}
                    />
                    <br /><br />
                    <TextField
                      onChange={(e) => setFeedback(e.target.value)}
                      label="Feedback:"
                      multiline
                      rows={4}
                      sx={{ width: "90%" }}
                      required
                    //error={feedbackError}
                    />
                    <br /><br />
                    <Rating
                      name="hover-feedback"
                      value={value}
                      defaultValue={2}
                      //style={{ textAlign: "left"}}
                      sx={{ width: '100%' }}
                      sx={{ justifyContent: 'flex-start' }}
                      size='large'
                      left
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                    <br />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "90%" }}
                      endIcon={<SendIcon />}
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </TableCell>
              <TableCell>
                <Masonry
                  breakpointCols={breakpoints}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                  style={{ marginLeft: 0, marginRight: 0 }}
                >
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#f77728" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#58c406" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#0238bf" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#58c406" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#0238bf" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#f77728" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                      <CardHeader style={{ textAlign: "left" }}
                        avatar={
                          <Avatar style={{ background: "#f77728" }}>
                            K
                          </Avatar>
                        }
                        title='Karan Shah'
                        subheader={format(new Date(), 'do MMMM Y')}
                      />
                      <Divider />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" align={'justify'}>
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                          This is a demo feedback to show case the card layout.
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </Masonry>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Feedback
