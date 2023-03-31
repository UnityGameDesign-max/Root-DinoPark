export const Colors = {
    Citron: '#89AB31',
    SapGreen: '#577620',
    White: '#FFFFFF',
    DavyGrey: '#555555',
    Platinum: '#E7EBE7',
}

export const palette = (mode) =>{
 const themeBackground = mode ? 'dark' : 'light';
 return {
    mode: themeBackground,
    primary: {
        main: Colors.Citron,
        contrastText: Colors.White,
        dark: Colors.SapGreen
    },
    secondary: {
        main: Colors.DavyGrey,
        light: Colors.Platinum,
        contrastText: Colors.White
    },
    shape: {
        borderRadius: 7
    }
 }
}