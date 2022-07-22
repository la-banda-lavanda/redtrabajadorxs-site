import React from 'react';
import { Box, Typography} from '@mui/material';
import Image from 'next/image'
import img1 from '../../pages/img/imagen1.png'
import img2 from '../../pages/img/img2.png'
import img3 from '../../pages/img/img3.png'
import img4 from '../../pages/img/img4.jpg'

export default function VisionMision() {


    return (


        <Box color="primary.dark" sx={{ flexGrow: 1  }} >
            <main>

            

            <Box sx={{
            minHeight: '87vh',
            display: 'flex',
            alignItems: 'center',
            background: '#ffff'
            }}>
                <Box sx={{ minHeight: '20%' }} display='flex' flexWrap='wrap' >
                    <Box minHeight='50px' width='5%' sx={{ p:4, justifycontent: "flex-end", minWidth: '250px', flexWrap: 'wrap' }}>
                        <Image src={img1} />
                    </Box>
                    <Box p={{ xs: 2, sm: 3, md: 4 }}>
                        <Typography aling="center  " variant='body1' >
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
            </main>
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

};