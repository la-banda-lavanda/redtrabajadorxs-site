import React, { useEffect, useState } from 'react';
import VisionMision from '../components/index/VisionMision';
import Denuncias from '../components/index/denuncias'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { Box } from '@mui/material';


export default function Home() {

    const [mobile, setMobile] = useState()

    useEffect(() => {
        const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

        setMobile(width < 900)

        const handleChangeWindowSize = (event) => {
            const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
            setMobile(width < 900)
        }

        window.addEventListener('resize', handleChangeWindowSize)

        return () => {
            window.removeEventListener('resize', handleChangeWindowSize)
        };
    }, [])

    return (
        <Box>
            <Nav mobile={mobile} />
            <Denuncias mobile={mobile} />
            <Footer mobile={mobile} />
        </Box>
    );
}