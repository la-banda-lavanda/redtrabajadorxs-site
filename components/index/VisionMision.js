import React from 'react';

import { Box, Typography, Container }from '@mui/material';
import Image from 'next/image'
import img1 from '../../pages/img/imagen1.png'



export default function VisionMision() {

   
   
    return(

         
        <Container color="primary   " >
           
            <Box mt={2} 
            sx={{display: 'inline-flex'}}
            
            >
                
                    <Image
                src={img1}
                width={400}
                height={300} 
            />
               
                 
           

            

                
             <Container sx={{mt:14 ,mb:20}}>
                <Typography   aling="center  " variant='body1'>
            Organizamos para garantizar el ejercicio efectivo de los
            Derechos Humanos Laborales (DDHHL) y atender situaciones 
            de desigualdad y relaciones inequitativas basadas en raza,
            género y clase que impiden que las personas trabajadoras 
            mexicanas tengan pleno acceso y el ejercicio de sus 
            derechos. Trabajamos para incidir en la generación de 
            espacios  para el acceso a la justicia de las personas 
            trabajadoras, por lo cual, en el desarrollo de nuestros 
            proyectos tenemos como ejes transversales la perspectiva 
            de Derechos Humanos y de Género. Con nuestro acompaña-
            miento y acciones buscamos que las personas trabajadoras 
            adquieran herramientas para revertir relaciones sociales
            asimétricas,  reducir  las desigualdades en el mundo del 
            trabajo y fomentar un mundo con más justicia social.

            </Typography>
             </Container>
            
            </Box>
            
                <Box>

                    <Image
            src={img1}
            width={400}
                height={300} 

            />
                </Box>
                <Container>
                    <Typography>
            Organizamos para garantizar el ejercicio efectivo de los
            Derechos Humanos Laborales (DDHHL) y atender situaciones 
            de desigualdad y relaciones inequitativas basadas en raza,
            género y clase que impiden que las personas trabajadoras 
            mexicanas tengan pleno acceso y el ejercicio de sus 
            derechos. Trabajamos para incidir en la generación de 
            espacios  para el acceso a la justicia de las personas 
            trabajadoras, por lo cual, en el desarrollo de nuestros 
            proyectos tenemos como ejes transversales la perspectiva 
            de Derechos Humanos y de Género. Con nuestro acompaña-
            miento y acciones buscamos que las personas trabajadoras 
            adquieran herramientas para revertir relaciones sociales
            asimétricas,  reducir  las desigualdades en el mundo del 
            trabajo y fomentar un mundo con más justicia social.
            </Typography>

                </Container>
    
        

        </Container>
        


        
    );
    
};