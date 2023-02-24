import React from 'react'
import {Container, Stack, Text, Icon} from  '@chakra-ui/react';
import {FaTwitter} from 'react-icons/fa'
import theme from './theme';
import { ColorModeScript } from '@chakra-ui/react'

interface propsWithChildren {
    children: React.ReactNode
}



const Layout = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <Container alignSelf='center' maxWidth='container.md'>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Stack direction='row'>
                <Stack>
                    <Icon as={FaTwitter}></Icon>
                    <Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Inicio</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Explorar</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Notificaciones</Text>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={3}>
                            <Icon as={FaTwitter}></Icon>
                            <Text>Mensajes</Text>
                        </Stack>
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
                {children}
            </Stack>
        </Container>
    )
}



export default Layout;