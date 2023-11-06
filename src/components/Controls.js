import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Controls = (props) => {

  return (
    <div>
        <Box sx={{ width:230}}>
          <h3>{props.title}: {props.unit}{props.value.toLocaleString('en-US')} </h3>
            <Slider 
              defaultValue={props.defaultValue} 
              min={0}
              step={100}
              max={props.defaultValue * 4}
              valueLabelDisplay="auto" 
              onChange={props.handler}
              aria-label={props.title} 
            />
        </Box>
    </div>
  )
}

export default Controls
