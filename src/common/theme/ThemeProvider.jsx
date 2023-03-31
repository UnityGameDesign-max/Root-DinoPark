import { 
    useState 
} from 'react';

import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles';

import { 
    Button,
    CssBaseline, 
    Switch 
} from '@mui/material';


import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

function ThemeProvider({
    children
}){
    const [theme, setTheme] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: theme ? 'dark' : 'light'
        }
    })

    const handleThemeChange = (event) => {
        setTheme(
            !theme
        )
    }

    return(
        <MuiThemeProvider 
        theme={darkTheme}
        >
         <CssBaseline />

         <Button
          variant='outlined'
          onClick={handleThemeChange}
         >
            { theme ? <LightModeIcon /> : <DarkModeIcon /> }
         </Button>
        

          {children}
        </MuiThemeProvider>
    );
}

export default ThemeProvider;