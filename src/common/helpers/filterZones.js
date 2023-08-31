import 
    Environment 
from 'common/Environment';

import {
    ActivityKind, Colors
} from 'common/constants';

import { 
    gridCellStyle,
} from 'common/styles/gridCellStyle';



export const cellLocation = (row, col) => {
    return `${String.fromCharCode('A'.charCodeAt(0) + col)}${row + 1}`
}

const findActivityLogs = (logs, row, col) => {
    return logs.find(log => {
        if(log.kind === ActivityKind.MaintenancePerform && log.location === cellLocation(row, col)){
            return true
        }else if(log.kind === ActivityKind.DinoLocationUpdate && log.location === cellLocation(row, col)){
            return true
        }
        return false;
    })

}
export const ImageWrench = (theme) => theme ? 
<img width={15} alt='wrench-icon'  src={`${Environment.assetBase}/dino-parks-wrench.png`}/>:
<img width={15} alt='wrench-icon' style={{color: Colors.White}} src={`${Environment.assetBase}/dino-parks-wrench.png`}/>

export const assignCellContents = (logs, row, col, theme) => {
    const activityLog = findActivityLogs(logs, row, col);
    let gridStyles = {...gridCellStyle};
    let cellContent = null;

    if(activityLog){
        if(activityLog.kind === ActivityKind.MaintenancePerform){
            gridStyles.Color = Colors.White;
            cellContent = ImageWrench(theme)

        }else if (activityLog.kind === ActivityKind.DinoLocationUpdate){
            gridStyles.backgroundColor = Colors.SapGreen
            cellContent = '';
        }
    }

    return {cellContent, gridStyles }
}



