import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../css/SkillsList.css"



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="main-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel-header"
        >
          <Typography className="typography-heading">Python</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion">
          <Typography className="typography-text">
          Python was the first language I came into contact with, which I have more knowledge.
          </Typography>
        </AccordionDetails >
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel-header"
        >
          <Typography className="typography-heading">React JS</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion">
          <Typography className="typography-text">
          This framework is sensational! In it I was able to have my first contact with front-end development in a more professional way.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel-header"
        >
          <Typography className="typography-heading">HTML5/CSS3</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion">
          <Typography className="typography-text">
          I was introduced to these technologies while improving my skills in web development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel-header"
        >
          <Typography className="typography-heading">JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion">
          <Typography className="typography-text">
          I learned JS for web development and lately I have used this a lot to develop my projects.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
