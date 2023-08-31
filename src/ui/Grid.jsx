
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
    assignCellContents 
} from 'common/helpers/filterZones';

import 
    PopModal 
from 'common/components/PopModal';



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
        async function getAllActivity(){
            getAllActivityLogs().then((res) => {
                setLogs(res)
                console.log(res)
            })
        } 
    getAllActivity()
  },[])
    

  const open = Boolean(anchorEl);

    const numOfRows = 16;
    const numOfCols = 26;


    const placeCells = () => {
        const cells = [];
        
        for (let row = 0; row < numOfRows; row++){
            const rowCells = [];
            for(let col=0; col< numOfCols; col++){
                const cellContents = assignCellContents(logs, row, col);
                
                rowCells.push(
                    <Grid 
                        key={col}
                        item
                        onMouseEnter={(event) => handleCellHover(event, row, col)}
                    >
                        <Box style={cellContents.gridStyles}>
                            {cellContents.cellContent}
                        </Box>
                        
                    </Grid>
                )
            }

            cells.push(
                <Grid key={row} container >
                    {rowCells}
                </Grid>
            )
        }

        return cells
    }

    const renderXAxisLabels = () => {
        const labels = [<Grid key="spacer" item ></Grid>];

        for (let col = 0; col < numOfCols; col++) {
          labels.push(
            <Grid key={col} item>
              {String.fromCharCode('A'.charCodeAt(0) + col)}
            </Grid>
          );
        }
        return (
          <Grid spacing={2.4} container>
            {labels}
          </Grid>
        );
    };

    const renderYAxisLabels = () => {
        const labels = [];
        for (let row = 0; row < numOfRows; row++) {
          labels.push(
            <Grid key={row} item align="center">
              {row + 1}
            </Grid>
          );
        }
        return (
          <Grid container direction="column" spacing={0.8} justifyContent="space-between">
            {labels}
          </Grid>
        );
      };

    
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
                        >
                            <Typography 
                                variant='h3'
                                style={{fontFamily: theme.typography.fontFamily}}
                            >
                                Park Zones
                            </Typography>
                            <Typography
                                variant='h5'
                                style={{fontFamily: theme.typography.fontFamily}}
                            >21 May 2018</Typography>
                        </Box>
                        
                        <Grid 
                            container 
                            display={'flex'}
                            onMouseLeave={handlePopoverClose} 
                        >
                            <Grid item>
                                {renderYAxisLabels()}
                            </Grid>
                            <Grid item>
                                {placeCells()}
                                {renderXAxisLabels()}
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