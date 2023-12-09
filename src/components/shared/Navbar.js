"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '../../assets/Group.png'
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';



const navItems = [
    {
        route:'Home',
        pathname:'/',
    },
    {
        route:'Pages',
        pathname:'/pages',
    },
    {
        route:'Category',
        pathname:'/category',
    },
    {
        route:'News',
        pathname:'/mews',
    },
    {
        route:'About',
        pathname:'/about',
    },
    
]

const Navbar=()=> {


  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Image src={logo} width={100} height={100} alt='image'/>
          <Box className='w-full text-center'>
            {navItems.map((page) => (
              <Link key={page} href={page.pathname}><Button className='text-white'>{page.route}</Button></Link>
            ))}
          </Box>
          
          <Box>
            <Stack direction='row' sx={{
                '& svg':{
                    color:"white"
                }
            }}>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <TwitterIcon></TwitterIcon>
            </IconButton>
            <IconButton>
                <InstagramIcon></InstagramIcon>
            </IconButton>
            <IconButton>
                <EmailIcon></EmailIcon>
            </IconButton>
            </Stack>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;