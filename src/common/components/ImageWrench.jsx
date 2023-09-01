import { 
    useTheme 

} from "@mui/material/styles";

import 
    Environment 
from "common/Environment";


function ImageWrench () {
    const theme = useTheme();
    const imageSrc = `${Environment.assetBase}/dino-parks-wrench.png`;

    const imageStyle = {
      width: 15,
      alt: 'wrench-icon',
      filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none'
    };
    
  
    return (
        <img 
         src={imageSrc} 
         style={imageStyle} 
         alt="wrench-icon" 
         width={15} 
        />
    )
  };

export default ImageWrench;
  