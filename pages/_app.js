import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'

function MyApp({Component, pageProps}) {
	const ThemeObjet = {
		palette:{
			type:'light', 
			primary: {
			main: '#B71C1C',
			},
			secundary:{
			main: '#1cb7b7',
			},
			background:{
			default:'#ffebee',
			paper:'#EF5350',
			},
		},
		typography: {
            fontFamily: '"Bebas Neue"',
            h1: {
                fontWeight: 500,
            },
			h6: {
				fontFamily: '"Source Sans Pro"',
			},
			body1: {
				fontFamily: '"Source Sans Pro"',
			},
			
        },
	}
  const theme=createTheme(ThemeObjet)
  return (
    <ThemeProvider theme={theme} >
		<Head>
                    <link rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin />
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css?family=Bebas+Neueo&display=swap" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
                        media="print" onLoad="this.media='all'" />

                    <noscript>
                    <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" />
                    </noscript>
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
                        media="print" onLoad="this.media='all'" />

                    <noscript>
                    <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" />
                    </noscript>
                </Head>
		<CssBaseline />

      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
