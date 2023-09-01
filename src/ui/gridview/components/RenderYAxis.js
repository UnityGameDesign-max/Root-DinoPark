import {
    Grid
} from '@mui/material';

import { 
    gridCellLabelStyle 
} from 'common/styles/gridCellStyle';

function RenderYAxisLabels({numOfRows}){
    const labels = [];
    for (let row = 0; row < numOfRows; row++) {
        labels.push(
            <Grid style={gridCellLabelStyle} key={row} item align="center">
                {row + 1}
            </Grid>
        );
    }
    return (
        <Grid container direction="column" spacing={0.8} justifyContent="space-between">
            {labels}
        </Grid>
    );
}

export default RenderYAxisLabels;