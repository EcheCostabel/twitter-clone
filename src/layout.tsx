import React from 'react'
import {Container, Stack, Text, Icon, Box, Button, StackDivider, useColorMode, useColorModeValue} from  '@chakra-ui/react';
import {FaTwitter} from 'react-icons/fa'
import { BsHouse, BsHash, BsBell, BsEnvelope, BsBookmark, BsList, BsPerson, BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom';

interface propsWithChildren {
    children: React.ReactNode
}


const Layout = ({ children }: propsWithChildren): JSX.Element => {

    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue('primary.500', undefined)

    return (
        <Container alignSelf='center' maxWidth='container.xl' height='100%' paddingX={0}>
            
            <Stack direction='row' height='100%' divider={<StackDivider />}>
                <Stack spacing={8} paddingX={6} paddingY={3} minWidth={72}>
                    
                    <Icon as={FaTwitter} color={logoColor} width={7} height={7} onClick={toggleColorMode}></Icon>
                    
                    <Stack spacing={6}>
                        <Link to='/'>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsHouse} height={6} width={6} ></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Inicio</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsHash} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Explorar</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsBell} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Notificaciones</Text>
                        </Stack>
                        <Link to='/messages'>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsEnvelope} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Mensajes</Text>
                        </Stack>
                        </Link>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsBookmark} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Guardados</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsList} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Listas</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsPerson} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Perfil</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={6}>
                            <Icon as={BsThreeDots} height={6} width={6}></Icon>
                            <Text fontWeight='bold' fontSize='lg'>Mas opciones</Text>
                        </Stack>
                    </Stack>
                    <Button size='lg' colorScheme={'primary'}>Twittear</Button>
                </Stack>
               <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    )
}


export default Layout;