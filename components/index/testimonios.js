import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import map from '../../pages/img/map.png'


export default function VisionMision() {


    return (
        <Box sx={{ minHeight: '20%' ,background: '#ffff'}} flexWrap='wrap'>
            <Typography variant='h3' sx={{ ms: 8, p: 10, justifyContent: 'center' }}>
                831 denuncias de personas trabjadoras
            </Typography>

            <mai>
                <Box sx={{ display: 'flex',background: '#ffff' }}>
                    <Image src={map} />
                </Box>
            </mai>


            <Box sx={{ display: 'flex', background: '#ffff', p: 10 }} >
                <Box sx={{
                    overflow: 'hidden',
                    my: 2,
                    p: 1,
                }}>
                    <Typography variant='h1'>
                        76
                    </Typography>
                    <Typography>
                        cartas enviadas a las autoridades
                        solicitnado una inspeción laboral
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h1'SX={{border: '1px solid'}}>
                        525
                    </Typography>
                    <Typography>
                        denuncias se enviaron a través
                        de distintas cartas con casos
                        acumulados por entidad fede-
                        rativa

                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h1'>
                        41
                    </Typography>
                    <Typography>
                        respuestas de las autoridades
                        en las que se informa que se le
                        dará seguimiento a la denuncia
                        o se realizo la inspección
                        laboral
                    </Typography>
                </Box>
            </Box>
        </Box>





    );

};