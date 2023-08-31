import { 
    Grid 
} from "@mui/material";

import { 
    gridCellLabelStyle 
} from "common/styles/gridCellStyle";

function RenderXAxisLabel({numOfCols}){
    const labels = [<Grid key="spacer" item ></Grid>];

    for (let col = 0; col < numOfCols; col++) {
        labels.push(
        <Grid style={gridCellLabelStyle} key={col} item>
            {String.fromCharCode('A'.charCodeAt(0) + col)}
        </Grid>
        );
    }
    return (
        <Grid spacing={2.4} container>
            {labels}
        </Grid>
    );
}

export default RenderXAxisLabel;