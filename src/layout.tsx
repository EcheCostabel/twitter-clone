import React from 'react'
import {Container, Stack, Text, Icon, Box} from  '@chakra-ui/react';
import {FaTwitter} from 'react-icons/fa'
import theme from './theme';
import { Link } from 'react-router-dom';

interface propsWithChildren {
    children: React.ReactNode
}



const Layout = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <Container alignSelf='center' maxWidth='container.md' height='100%' paddingX={0}>
            
            <Stack direction='row' height='100%'>
                <Stack spacing={4} paddingX={4} paddingY={4} borderRightWidth={1} borderRightColor='gray.900' >
                    <Link to='/'>
                    <Icon as={FaTwitter}></Icon>
                    </Link>
                    <Stack>
                        <Link to='/'>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Inicio</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Explorar</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Notificaciones</Text>
                        </Stack>
                        <Link to='/messages'>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Mensajes</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Guardados</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Listas</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Perfil</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Mas opciones</Text>
                        </Stack>
                    </Stack>
                </Stack>
               <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    )
}



export default Layout;