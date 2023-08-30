import { 
    Colors 
} from "common/constants";


export const palette = (mode) =>{
 const themeBackground = mode ? 'dark' : 'light';
 return {
    mode: themeBackground,
    primary: {
        main: Colors.SapGreen,
        contrastText: Colors.White,
        dark: Colors.SapGreen
    },
    secondary: {
        main: Colors.DavyGrey,
        light: Colors.Platinum,
        contrastText: Colors.White,
    },
    shape: {
        borderRadius: 7
    }
 }
}