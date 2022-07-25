import REACT from 'react';
import { AppBar, Box, Typography, Toolbar, List, ListItem, ListItemText } from '@mui/material';


export default function NAV(props) {

    const { mobile } = props;

    return (


        <AppBar position="static">

            <Toolbar variant="dense" sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                height: 100
            }}>

                <Typography variant="h4" sx={{ mx: 1, fontWeight: 'bold' }}>
                    {mobile ? 'RED' : ' RED'}
                </Typography>
                {mobile ? 
                <Box>
                    
                    
                </Box>
                :
                <List
                    component="nav"
                    sx={{ display: 'flex' }}
                >
                
                    <ListItem button>
                        <ListItemText primary="Inicio" color='secondary' variant="h1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="¿QUIENES SOMOS?" color='secondary' />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="TESTIMONIOS       " color='secondary' />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="DENUNCIAS" color='secondary' />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="VISIÓN & MISIÓN" color='secondary' />
                    </ListItem>
                </List>
                }
            </Toolbar>
        </AppBar>

    );
};