import ImageWrench from 'common/components/ImageWrench';

import {
    ActivityKind, Colors, monthCalendar
} from 'common/constants';

import { 
    gridCellStyle,
} from 'common/styles/gridCellStyle';



export const cellLocation = (row, col) => {
    return `${String.fromCharCode('A'.charCodeAt(0) + col)}${row + 1}`
}

export const getTodayDate = () => {
    const date = new Date();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${monthCalendar[monthIndex]} ${year}`;

    return formattedDate;
} 

getTodayDate()

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

    if(activityLog){
        if(activityLog.kind === ActivityKind.MaintenancePerform){
            gridStyles.Color = Colors.White;
            cellContent = <ImageWrench />

        }else if (activityLog.kind === ActivityKind.DinoLocationUpdate){
            gridStyles.backgroundColor = Colors.SapGreen
            cellContent = '';
        }
    }

    return {cellContent, gridStyles }
}



