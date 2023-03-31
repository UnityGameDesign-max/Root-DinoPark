import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';

import { 
    CoinProvider 
} from 'providers/coinProvider';
import { useEffect } from 'react';

function TabularView({
    common
}){

    useEffect(() => {
        getCoinTable();
    },[])
    const getCoinTable = async () => {
        const coinRes = await CoinProvider.coinDataUri();

        console.log(coinRes)
    }
    return(
        <h1>dsds</h1>
    )
}

export default TabularView;