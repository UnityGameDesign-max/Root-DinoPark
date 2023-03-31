import { 
    useState
} from 'react';

import{
    Button,
    Grid
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
        <Grid
         container
        >
            <Grid 
             item
             xs={6}
             justifyContent={'flex-end'}
            >
                <Button
                variant='outlined'
                onClick={handleViewChange}
                >
                    {switcher ? 'Grid View' : 'Table View'}
                </Button>
            </Grid>

            <Grid item>
                {switcher ?
                    <TabularView />
                    :
                    <GridView />
                }
            </Grid>
        </Grid>
       
    )
}

export default CoinView;