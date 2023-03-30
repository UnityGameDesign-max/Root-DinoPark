import { 
    useState
} from 'react';

import{
    Button
}from '@mui/material'

function CoinView(){

    const [switcher, setSwitcher] = useState(false);

    const handleViewChange = () => {
        setSwitcher(!switcher)
    }
    return(
        <Button
         variant='outlined'
         onClick={handleViewChange}
        >
            {switcher ? 'Table View' : 'Grid View'}
        </Button>
    )
}

export default CoinView;