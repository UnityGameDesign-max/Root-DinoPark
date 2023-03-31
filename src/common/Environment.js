export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'localhost',
        uiBase: '/',
        apiHost: 'https://www.coingecko.com/api/v3/coins',
        apiBase: '',
        assetBase: 'http:localhost:3000/assets/',
    },

    Prod: {
        name: 'Production',
        uiHost: '',
        uiBase: '/',
        apiHost: 'https://www.coingecko.com/api/v3/coins',
        apiBase: '',
        assetBase: '',
    }
};

const currentHost = 
  !!window
  && !!window.location
  && typeof window.location.hostname === 'string'
  && window.location.hostname.toLowerCase();

let Environment;

switch(currentHost) {
    case Environments.Local.uiHost:
        Environment = Environments.Local;
        break;
    case Environments.Prod.uiHost:
        default:
            Environment = Environments.Prod;
            break;
};

export default Environment;