import 
   Environment 
from 'common/Environment';


const activityLogUri = `${Environment.apiHost}`;

export const getAllActivityLogs = async () => {

    try{
        const logRes = await fetch(`${activityLogUri}`);
        const result = await logRes.json();
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

