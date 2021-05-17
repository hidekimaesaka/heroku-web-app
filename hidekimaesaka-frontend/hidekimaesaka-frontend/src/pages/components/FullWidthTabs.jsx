import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../css/FullWidthTabs.css"
import About from "./About"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="FullWidthTabs">
      <AppBar position="static" color="default">
        <Tabs
          className="Tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className="Tab" label="About" {...a11yProps(0)} />
          <Tab className="Tab" label="Projects" {...a11yProps(1)} />
          <Tab className="Tab" label="Contact" {...a11yProps(2)} />
          <Tab className="Tab" label="Music" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <About/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two...
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three...
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four...
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
