
import { 
    Fragment,
    useState 
} from 'react';

import { 
    Box, Card, CardContent, Grid, Typography,
} from '@mui/material';

import { Popover, Backdrop, Fade } from '@mui/material';

import 
    Environment 
from 'common/Environment';

import {
    getAllActivityLogs
} from 'providers/activityProvider';

const gridCells = {
  width: '30px',
  height: '30px',
  border: '1px solid #ccc',
}

function GridSystem(){

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCellHover = (event, row, col) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

    const numOfRows = 16;
    const numOfCols = 26;


    const placeCells = () => {
        const cells = [];

        for (let row = 0; row < numOfRows; row++){
            const rowCells = [];
            for(let col=0; col< numOfCols; col++){
                rowCells.push(
                    <Grid 
                        key={col}
                        item
                        onMouseEnter={(event) => handleCellHover(event, row, col)}
                    >
                        <Box 
                            style={gridCells}
                        >
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
                        >
                            <Typography>Park Zones</Typography>
                            <Typography>21 May 2018</Typography>
                        </Box>
                        
                        <Grid container display={'flex'}>

                            <Grid item>
                                {renderYAxisLabels()}
                            </Grid>
                            <Grid item>
                                {placeCells()}
                                {renderXAxisLabels()}
                            </Grid>
                        </Grid>

                        <Popover
                        open={open}
                        anchorEl={anchorEl}
                        sx={{
                            pointerEvents: 'none',
                          }}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                          vertical: 'center',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'left',
                        }}
                        disableRestoreFocus
                      >
                        <Typography sx={{ p: 2 }}>
                          {open ? `${String.fromCharCode('A'.charCodeAt(0) + anchorEl.cellCol)}${anchorEl.cellRow + 1}` : null}
                        </Typography>
                      </Popover>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
        </Fragment>
    )
}

export default GridSystem;