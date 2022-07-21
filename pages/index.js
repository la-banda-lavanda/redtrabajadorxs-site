import * as React from 'react';
import Divider from '@mui/material/Divider';
import VisionMision from '../components/index/VisionMision';


export default function Home() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <div>
        <Divider orientation="vertical" flexItem>
            VERTICAL
        </Divider>
        <VisionMision />
    </div>
     
      
      
  
  );
}