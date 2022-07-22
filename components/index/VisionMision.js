import React from 'react';
import { Box, Typography} from '@mui/material';
import Image from 'next/image'
import img1 from '../../pages/img/imagen1.png'
import img2 from '../../pages/img/img2.png'


export default function VisionMision(props) {

    const { mobile } = props

    return (


        <Box color="primary.dark" sx={{ flexGrow: 1  }}>

            

            <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
            }}>
                <Box display='flex' width={mobile ? '100%' : '50%'} justifyContent='center'>
                    <Box width={mobile ? '70%' : '100%'} sx={{  minWidth: '200px' }} backgroundColor='black'>
                        <Image src={img1} layout='responsive'/>
                    </Box>
                </Box>
                    
                    <Box  width={mobile ? '100%' : '50%'} >

                    
                    <Box>
                        <Typography variant={mobile ? 'h2' : 'h1'} align='center'>VISIÓN</Typography>
                        <Typography aling="center" variant={mobile ? 'body1' : 'h6'} sx={{ px: 3 }}>
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
                    </Box>
                    </Box>
            </Box>
          
            <Box sx={{ backgroundColor: '#ffffff' }}>
                <Box mt={2}
                    sx={{ display: 'inline-flex' }} alignItems='center' >
                    <Box>
                        <Box >
                            <Typography sx={{ mt: 10, mb: 20, justifyContent: 'space-between' }} aling="center  " variant='body1' >
                                Trabajamos para que haya justicia social, equidad e igualdad
                                de género, reducción de la discriminación, acceso y respeto
                                a los DDHHL de las personas trabajadoras mexicanas.
                                Nuestro trabajo se dirige hacia:
                                Brindar  orientación en
                                materia de DDHHL Desarrollar habilidades en las personas
                                trabajadoras para la defensa de los DDHHLL.
                                Construir
                                poder colectivo a través de la organización de las personas
                                trabajadoras.
                                Fortalecer a los sujetos de derechos para
                                identificar estrategias de acción efectiva para la defensa
                                de sus DDHHL
                            </Typography>
                        </Box>
                    </Box>
                    <Box rowHeight={1} sx={{ mt: 1, mb: 3 }}>
                        <Image src={img2} />
                    </Box>
                </Box>
            </Box>
      
        </Box>
    );

};