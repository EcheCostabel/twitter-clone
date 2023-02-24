import React from 'react'
import {Container, Stack, Text, Icon, Box, Button} from  '@chakra-ui/react';
import {FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH} from 'react-icons/fa'
import theme from './theme';
import { Link } from 'react-router-dom';

interface propsWithChildren {
    children: React.ReactNode
}


const Layout = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <Container alignSelf='center' maxWidth='container.md' height='100%' paddingX={0}>
            
            <Stack direction='row' height='100%'>
                <Stack spacing={8} paddingX={4} paddingY={4} borderRightWidth={1} borderRightColor='gray.900' paddingLeft={4} paddingRight={12} >
                    <Link to='/'>
                    <Icon as={FaTwitter} width={6} height={6}></Icon>
                    </Link>
                    <Stack spacing={6}>
                        <Link to='/'>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaHome} height={6} width={6} ></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Inicio</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaHashtag} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Explorar</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaBell} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Notificaciones</Text>
                        </Stack>
                        <Link to='/messages'>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaEnvelope} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Mensajes</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaBookmark} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Guardados</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaList} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Listas</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaUser} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Perfil</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={FaEllipsisH} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Mas opciones</Text>
                        </Stack>
                    </Stack>
                    <Button size='lg' colorScheme='primary'>Twittear</Button>
                </Stack>
               <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    )
}


export default Layout;