import 
    Environment 
from 'common/Environment';

import {
    ActivityKind, Colors
} from 'common/constants';

import { 
    gridCellStyle, wrenchStyle
} from 'common/styles/gridCellStyle';



export const cellLocation = (row, col) => {
    return `${String.fromCharCode('A'.charCodeAt(0) + col)}${row + 1}`
}

const XAxisLabels = () => {
    return `${String.fromCharCode('A'.charCodeAt(0))}`
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

export const assignCellContents = (logs, row, col) => {
    const activityLog = findActivityLogs(logs, row, col);
    let gridStyles = {...gridCellStyle};
    let cellContent = null;
    let activity = null;

    if(activityLog){
        if(activityLog.kind === ActivityKind.MaintenancePerform){
            cellContent = <img width={15} alt='wrench-icon' src={`${Environment.assetBase}/dino-parks-wrench.png`} />
            activity = activityLog.kind;
        }else if (activityLog.kind === ActivityKind.DinoLocationUpdate){
            gridStyles.backgroundColor = Colors.SapGreen
            cellContent = '';
            activity = activityLog.kind
        }else{
            activity = 'Unknown';
        }
    }

    return {cellContent, gridStyles, activity}
}



