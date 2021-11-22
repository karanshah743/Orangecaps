import React from 'react'
import "./benefits.css"
import Logo from '../../asserts/Logo-footer.png'
import Discord from '../../asserts/discord.png'
import OrangeCapsCard from '../../asserts/oc-front.svg'
import OrangeCapsCard2 from '../../asserts/oc-back.svg'
import OrangeCapsCardb from '../../asserts/oc-front-b.svg'
import OrangeCapsCard2p from '../../asserts/oc-back-p.svg'
import EarnImage from '../../asserts/undraw_Savings.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import CourseImg from "../../asserts/courses.jpg"
import ServiceImg from "../../asserts/services.png"
import { Card, Chip, Grid, Icon, Rating, Typography } from '@mui/material'
import { height } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function createData(benefits) {
  return { benefits};
}

const rows = [
  createData('Discount on Courses and Services'),
  createData('Generate Side Income'),
  createData('Volunteering in Events'),
  createData('Promote your Product/Business on Discord Server'),
  createData('Generate Your Own Podcasts'),
  createData('Can launch your services and courses'),
  createData('Create Your Own Blog and get Published on our website'),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Benefits() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card id="perks" sx={{ backgroundColor: '#26292b', height: 200, margin: '2%' }}>
        <div>
          <Grid container spacing={2}> 
            <Grid item xs={5}>
              <Typography id="titletext" sx={{ color: '#ffffff', margin: '8% 0', letterSpacing: 2 }}>
                <h1>Benefits</h1>
                of joining with us
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ArrowRightAltIcon id="arrow" sx={{ color: '#ffffff', margin: '40% 0' }} fontSize="large" />
            </Grid>
            <Grid item xs={5}>
              <img id="logo" src={ Logo } />
            </Grid>
          </Grid>
        </div>
      </Card>

      

      <Paper sx={{ p: 2, margin: '2%', height: 'auto', flexGrow: 1 }} elevation={0}>
        <Typography id="benefitsheading" fontSize={24} style={{ fontWeight: 'bold' }}>
          JOIN THE SERVER
        </Typography>
        <br/><br/>
        <Grid id="gridlayout" container spacing={2}>
          <Grid item xs={6}>
            <img src={ Discord }
              id="discordimage"
              alt="discord image"
              style={{ width: '350px', borderRadius: 10 }}
            />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid id="content" item xs sx={{ textAlign: 'center', margin: '2% 20%'}}>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Join our community server to get latest updates and information
                  regarding webinars and courses.
                  Be a part of the <b>Orange Caps</b> community where people can share
                  ideas and communicate with each other regardless of any barrier.
                </Typography>
                <Chip id="chip" label="Discord Server" component="a" href="https://discord.gg/6WEq9AMQUr" target="_blank" clickable />
                <Typography variant="body2" color="text.secondary">
                  <a></a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>


      

      <Paper sx={{ p: 2, margin: '2%', height: 'auto', flexGrow: 1 }} elevation={0}>
        <Typography id="benefitsheading" fontSize={24} style={{ fontWeight: 'bold' }}>
          BE A MEMBER
        </Typography>
        <br/><br/>
        <Grid id="gridlayout2" container spacing={2}>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid id="content" item xs sx={{ textAlign: 'center', margin: '2% 20%'}}>
                <Typography gutterBottom variant="subtitle1" component="div" style={{ marginTop: '8%'}}>
                  Orange Caps membership avails you with numerous benefits
                  over wide range of courses and webinars.
                  Be a member to get exclusive benefits in our community server as well.
                </Typography>
                <Chip id="chip" onClick={handleOpen} label="View Details" component="a" clickable />
                {'   '}
                <Chip id="chip"  label="Register" href="https://docs.google.com/forms/u/1/d/1ugx2UuavSQXcpDKyDlqWSQXIQfVvIufC4Lk37hJcx8E/edit" component="a" clickable />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box id="modalbox" sx={style}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Benefits</StyledTableCell>
                            
                          </TableRow>
                        </TableHead>
                        <TableBody className='tableBody'>
                          {rows.map((row) => (
                            <StyledTableRow
                              key={row.benefits}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.benefits}
                              </TableCell>
                              
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className="gridMember">
            <div className="member">
              <div className="member1">
                <img src={ OrangeCapsCard } 
                  id="orangecapcardimage1"
                  style={{ width: '350px', borderRadius: 10 }}
                  alt="membership card"
                />
                <img src={ OrangeCapsCardb }
                  id="orangecapcardimage2"
                  style={{ width: '350px', borderRadius: 10 }}
                  alt="membership card"
                />
              </div>
              <div className="member2">
                <img src={ OrangeCapsCard2 } 
                  id="orangecapcardimage1"
                  style={{ width: '350px', borderRadius: 10 }}
                  alt="membership card"
                />
                <img src={ OrangeCapsCard2p }
                  id="orangecapcardimage2"
                  style={{ width: '350px', borderRadius: 10 }}
                  alt="membership card"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>

      

      {/*<div style={{ margin: "2% 4%" }}>
        <Typography id="benefitsheading" fontSize={24} style={{ fontWeight: 'bold', marginBottom: '2%' }}>
          FUTURE EVENTS
        </Typography>
        <br/>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>
              Title of project
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }}>
            <Typography textAlign={'justify'}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>Title of project</Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }} textAlign={'left'}>
            <Typography textAlign={'justify'}>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>
              Title of project
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }}>
            <Typography textAlign={'justify'}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>Title of project</Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }}>
            <Typography textAlign={'justify'}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>Title of project</Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }}>
            <Typography textAlign={'justify'}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: '20%', flexShrink: 0, fontWeight: "bold" }}>Title of project</Typography>
            <Typography sx={{ color: 'text.secondary', fontWeight: "bold", letterSpacing: 1, textAlign: "right" }}>
              Date: 13/11/2021 |
              Duration: 5 Weeks |
              Price: 250/-
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ margin: '0 5%', textAlign: 'left' }}>
            <Typography textAlign={'justify'}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Rating value={3} readOnly></Rating>
          </AccordionDetails>
        </Accordion>
      </div>*/}

      

      <Paper sx={{ p: 2, margin: '2%', height: 'auto', flexGrow: 1 }} elevation={0}>
        <Typography id="benefitsheading" fontSize={24} style={{ fontWeight: 'bold' }}>
          EARN BY YOURSELF
        </Typography>
        <br/><br/>
        <Grid id="gridlayout" container spacing={2}>
          <Grid item xs={6}>
            <img src={ EarnImage }
              id="earnimage"
              alt="discord image"
              style={{ width: '250px', borderRadius: 10 }}
            />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid id="content" item xs sx={{ textAlign: 'center', margin: '2% 20%'}}>
                <Typography gutterBottom variant="subtitle1" component="div" style={{ marginTop: '10%'}}>
                  Orange Caps provides a platform to earn by yourself.
                  It depict the idea of communicating and sharing one's skill and knowlegde with others.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/*<div>
        <img src={ Discord } 
          style={{ width: '30%' }}
        />
        <h1>Discord</h1>
      </div>*/}
    </div>
  )
}

export default Benefits
