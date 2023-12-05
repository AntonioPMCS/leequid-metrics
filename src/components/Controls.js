import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Controls = ({title, unit, defaultValue, value, max, handler}) => {

  return (
    <div>
        <Box sx={{ width:250}}>
          <h3>{title}: {unit}{value.toLocaleString('en-US')} </h3>
            <Slider 
              defaultValue={defaultValue} 
              value={value}
              min={1}
              step={100}
              max={max? max : defaultValue * 4}
              valueLabelDisplay="auto" 
              onChange={handler}
              aria-label={title} 
            />
        </Box>
    </div>
  )
}

export default Controls
