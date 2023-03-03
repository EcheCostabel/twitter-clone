import { extendTheme, theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


export default extendTheme ({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    colors: {
        primary: theme.colors.twitter
    },
    styles: {
        global: () => ({
            'html, body, #root': {
                color: mode(undefined, 'whiteAlpha.800'),
                height: '100%'
            }
        })
    },
    components: {
        Button: {
            baseStyle: {
                borderLeftRadius: 9999,
                borderRightRadius: 9999,
            },
            sizes: {
                lg: {
                    paddingY: 3,
                    fontSize: 'md'
                }
            }
        },
        variants: {
            solid: () => ({ 
                color: mode(undefined, 'white'),
                fontWeight: 'bold',
                _hover: { 
                }
            }),

        }
    }
})