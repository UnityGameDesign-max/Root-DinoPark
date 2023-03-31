import { 
    useState 
} from 'react';

import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from '@mui/material/styles';

import { 
    AppBar,
    CssBaseline,
    Grid,
    IconButton,
    Toolbar
} from '@mui/material';


import {
    palette
} from 'common/theme/palette';

import { 
    DarkModeOutlined,
    LightModeOutlined 
} from '@mui/icons-material';

import { 
    typography
} from 'common/theme/typography';

function ThemeProvider({
    children
}){
    const [theme, setTheme] = useState(false);

    const darkTheme = createTheme({
        palette: palette(theme),
        typography: typography()
    })

    const handleThemeChange = () => {
        setTheme(
            !theme
        )
    }

    return(
        <MuiThemeProvider 
          theme={darkTheme}
        >
         <CssBaseline />
        
         <AppBar 
          position='static'
          
         >
            <Toolbar>
              <Grid
                container
                justifyContent={'flex-end'}
               >
                <IconButton
                    onClick={handleThemeChange}
                >
                    { theme ? 
                        <LightModeOutlined /> :
                        <DarkModeOutlined /> }
                </IconButton>
              </Grid>
            </Toolbar>
         </AppBar>
        
          {children}
        </MuiThemeProvider>
    );
}

export default ThemeProvider;