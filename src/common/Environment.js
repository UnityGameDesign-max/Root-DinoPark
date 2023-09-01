export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'localhost',
        uiBase: '/',
        apiHost: 'https://dinoparks.herokuapp.com/nudls/feed',
        apiBase: '',
        assetBase: 'https://storage.googleapis.com/root-bank/dinoparks',
    },

    Prod: {
        name: 'Production',
        uiHost: 'https://dinopark-809b7.web.app/',
        uiBase: '/',
        apiHost: 'https://dinoparks.herokuapp.com/nudls/feed',
        apiBase: '',
        assetBase: 'https://storage.googleapis.com/root-bank/dinoparks',
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