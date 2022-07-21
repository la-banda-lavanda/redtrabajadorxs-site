import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
function MyApp({Component, pageProps}) {
  const ThemeObjet = {
    palette:{
      type:'light', 
      primary: {
        main:'#EF5350',
        
      },
      secundary:{
        main: '#B71C1C',
      },
      background:{
        default:'#EDE7F3',
        paper:'#ed6d6d',
      },
    },
    Typography:{
      fontFamily: '"bebas"', 
      h1:{
        fontWeight: 500,
      },
    },
  }
  const theme=createTheme(ThemeObjet)
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
