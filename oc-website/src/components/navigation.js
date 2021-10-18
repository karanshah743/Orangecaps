import React, { useState } from 'react';
import "./navigation.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../pages/Home/home';
import Team from "../pages/Team/team";
import Feedback from "../pages/Feedback/feedback";
import Events from "../pages/Events/event";
import Contact from "../pages/ContactUs/contact";
import Blogs from "../pages/Blogs/blog";
import News from "../pages/News/news";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Navigation() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
      <div className="navigation">

        <Box sx={{ width: '100%' }}>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className="box-model" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className="navi-name" label="Home" {...a11yProps(0)} />
              <Tab className="navi-name" label="Events" {...a11yProps(1)} />
              <Tab className="navi-name" label="Team" {...a11yProps(2)} />
              <Tab className="navi-name" label="Contact-Us" {...a11yProps(3)} />
              <Tab className="navi-name" label="Blogs" {...a11yProps(4)} />
              <Tab className="navi-name" label="News" {...a11yProps(5)} />
              <Tab className="navi-name" label="Feedback" {...a11yProps(6)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>

          </TabPanel>

          <TabPanel value={value} index={1}>
            <Events/>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Team/>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Contact/>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Blogs/>
          </TabPanel>

          <TabPanel value={value} index={5}>
            <News/>
          </TabPanel>

          <TabPanel value={value} index={5}>
            <Feedback/>
          </TabPanel>

        </Box>        
      </div>

      {/* <div>
        <img src={ Img } alt="" />
        <p className="logo-name">ORANGE CAPS</p>
      </div> */}
    </div>
  )
}

export default Navigation









// export default function BasicTabs() {


//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
