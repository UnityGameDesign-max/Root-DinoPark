import { 
    HttpMethod 
} from 'common';

import 
   Environment 
from 'common/Environment';


export class CoinProvider {

    static coinDataUri = `${Environment.apiHost}`;

    static async getAllCoin(){
        try{
            return await fetch({
                method: HttpMethod.GET,
                url: `${CoinProvider.coinDataUri}/list`
            });
        }catch(e){
            return{
                ok: false,
                error: e,
                result: null,
                status: null
            }
        }
    }

    static async getEachCoinInfo(id){
        try{
            return await fetch({
                method: HttpMethod.GET,
                url: `${CoinProvider.coinDataUri}/${id}`
            })
        }catch(e){
            return{
                ok: false,
                error: e,
                result: null,
                status: null
            }
        }
    }
}
