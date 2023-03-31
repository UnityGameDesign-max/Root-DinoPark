import { 
    useState
} from 'react';

import{
    Button,
    Grid,
    Box
}from '@mui/material';

import
    TabularView
from 'ui/coinview/components/TabularView';

import
    GridView
from 'ui/coinview/components/GridView'

function CoinView(){

    const [switcher, setSwitcher] = useState(false);

    const handleViewChange = () => {
        setSwitcher(!switcher);
    };
    return(
        <Box>
            <Grid 
             container
             justifyContent={'flex-start'}
            >
                <Button
                sx={{ 
                    mt : 4,
                    ml: 1
                }}
                variant='outlined'
                onClick={handleViewChange}
                >
                    {switcher ? 'Grid View' : 'Table View'}
                </Button>
            </Grid>

            <Grid>
                {switcher ?
                    <TabularView />
                    :
                    <GridView />
                }
            </Grid>
        </Box>
    )
}

export default CoinView;