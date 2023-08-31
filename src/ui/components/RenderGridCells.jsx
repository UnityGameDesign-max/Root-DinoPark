import {
    Box,
    Grid
} from '@mui/material'


const RenderGridCells = ({numOfRows, numOfCols, placeCellContents, activityLogs, handleCellHover, theme}) => {
    const gridCells = [];

    for(let row=0; row < numOfRows; row++){
        const rowGridCells = [];
        for(let col=0; col<numOfCols; col++){
            const cellContents = placeCellContents(activityLogs, row, col, theme);

            rowGridCells.push(
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

        gridCells.push(
            <Grid key={row} container>
                {rowGridCells}
            </Grid>
        )
    }
    return gridCells;
}

export default RenderGridCells;