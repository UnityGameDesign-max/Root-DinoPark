import 
   Environment 
from 'common/Environment';


export class ActivityProvider {

    static coinDataUri = `${Environment.apiHost}`;

    static async getAllActivityLogs(){
        try{
            const coinRes = await fetch(`${CoinProvider.coinDataUri}/list`);
            const result = await coinRes.json();
            return result;
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
