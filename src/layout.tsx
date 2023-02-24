import React from 'react'
import {Container} from  '@chakra-ui/react'

interface propsWithChildren {
    children: React.ReactNode
}



const Layout = ({ children }: propsWithChildren): JSX.Element => {
    return (
        <Container>{children}</Container>
    )
}



export default Layout;