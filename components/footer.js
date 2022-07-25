import img3 from '../pages/img/img3.png'
import img4 from '../pages/img/img4.jpg'
import Image from 'next/image'
import { Box, Typography } from '@mui/material';


export default function Footer(props) {

    const { mobile } = props;
    return (<Box sx={{ display: 'flex', background: '#000000' }} >
        <Box sx={{ display: 'flex' }} >
            <Typography color="primary" variant="h3" xs={12} sx={{ p: 5 }}>
                RED
            </Typography>

            <Box width={mobile ? '70%' : '100%'} sx={{ minWidth: '200px' }} backgroundColor='black'>
                <Image
                    src={img3}
                />
            </Box>
            
        </Box>
        <Box display='flex' justifyContent='center'>
            <Image
                src={img3}
                width={300}
                height={300}

            />

        </Box>
        <Box >
                <Typography color="primary" variant="h3" xs={{my:6}} >
                    LABANDA
                </Typography>
            </Box>
    </Box>
    )
}