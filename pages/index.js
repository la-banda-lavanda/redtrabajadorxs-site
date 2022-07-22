import * as React from 'react';
import VisionMision from '../components/index/VisionMision';
import Denuncias from '../components/index/denuncias'
import { AppBar, Box, Typography, Toolbar, List, ListItem, ListItemText } from '@mui/material';
import img3 from '../pages/img/img3.png'
import img4 from '../pages/img/img4.jpg'
import Image from 'next/image'

export default function Home() {


    return (
        <Box>
            <AppBar position="static">

                <Toolbar variant="dense" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    height: 100
                }}>

                    <Typography variant="h4" sx={{ mx: 1, fontWeight: 'bold' }}>
                        RED
                    </Typography>




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
                </Toolbar>
            </AppBar>
            <div>
            <VisionMision/>
            </div>
            <Box sx={{ display: 'flex', background: '#000000' }} >
                <Box sx={{ display: 'flex' }} >
                    <Typography color="primary" variant="h3" xs ={12 } sx={{ p: 5  }}>
                        RED
                    </Typography>
                    <Image
                        src={img3}
                        width={65}
                        height={35}
                    />
                    <Box >
                    <Typography color="primary" variant="h3" xs ={12 } sx={{ p: 5  }} > 
                        LABANDA
                    </Typography>   
                    </Box>
                    
                </Box>
            </Box>
        </Box>





    );
}