import { 
    Fragment,
    useEffect,
    useState 
} from 'react';

import { 
    Box, Card, CardContent, Grid, Typography, useTheme,
} from '@mui/material';

import 
    Environment 
from 'common/Environment';

import {
    getAllActivityLogs
} from 'providers/activityProvider';

import { 
    assignCellContents, getTodayDate 
} from 'common/helpers/filterZones';

import 
    PopModal 
from 'common/components/PopModal';

import 
    RenderYAxisLabels 
from 'ui/gridview/components/RenderYAxis';

import 
    RenderXAxisLabel 
from 'ui/gridview/components/RenderXAxis';

import 
    RenderGridCells 
from 'ui/components/RenderGridCells'


function GridSystem(){

  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredCell, setHoveredCell] = useState({ row: null, col: null });
  const [logs, setLogs] = useState([]);
  const theme = useTheme();


  const handleCellHover = (event, row, col) => {
    setAnchorEl(event.currentTarget);
    setHoveredCell({ row, col });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
        function fetchActivityLogs(){
            getAllActivityLogs().then((res) => {
                setLogs(res)
            })
        } 
        fetchActivityLogs();
  },[])

  const open = Boolean(anchorEl);

    const numOfRows = 16;
    const numOfCols = 26;
    
    return(
        <Fragment>
            <Box>
                <img 
                 src={`${Environment.assetBase}/dinoparks-logo.png`} 
                 alt='dinoPark-logo'
                 width={'400'}
                />
            </Box>

        <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Grid 
                item 
                justifyContent={'center'}
                
            >
                <Card
                    style={{
                        padding: '2vh',
                        width: 870
                    }}
                >
                    <CardContent>
                        <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        sx={{ mb: 2 }}
                        >
                            <Typography 
                                variant='h4'
                                style={{fontFamily: theme.typography.fontFamily}}
                            >
                                Park Zones
                            </Typography>
                            <Typography
                                variant='h5'
                                style={{fontFamily: theme.typography.fontFamily}}
                                color={'typographyColor'}
                            >
                            {getTodayDate()}
                            </Typography>
                        </Box>
                        
                        <Grid 
                            container 
                            display={'flex'}
                            onMouseLeave={handlePopoverClose} 
                        >
                            <Grid item>
                                <RenderYAxisLabels numOfRows={numOfRows}/>
                            </Grid>
                            <Grid item>
                                <RenderGridCells 
                                 numOfCols={numOfCols}
                                 numOfRows={numOfRows}
                                 placeCellContents={assignCellContents}
                                 activityLogs={logs}
                                 handleCellHover={handleCellHover}
                                />
                                <RenderXAxisLabel numOfCols={numOfCols}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>

       <PopModal 
        open={open}
        anchorEl={anchorEl}
        hoverCell={hoveredCell}
        handlePopoverClose={handlePopoverClose}
       />
      </Fragment>
    )
}

export default GridSystem;