import React from "react";
import {
  Container,
  Stack,
  Text,
  Icon,
  Box,
  Button,
  StackDivider,
  useColorMode,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import {
  BsHouse,
  BsHash,
  BsBell,
  BsEnvelope,
  BsBookmark,
  BsList,
  BsPerson,
  BsThreeDots,
  BsHouseFill,
  BsBellFill,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notifiations",
    text: "Notificaciones",
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Guardados",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Lista",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/options",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

interface propsWithChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: propsWithChildren): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
  const logoColor = useColorModeValue("primary.500", undefined);
  const userColor = useColorModeValue(undefined, 'white');

  return (
    <Container
      alignSelf="center"
      maxWidth="container.xl"
      height="100%"
      paddingX={0}
    >
      <Stack direction="row" height="100%" divider={<StackDivider />}>
        <Stack maxHeight='100%' justifyContent='space-between'>
          <Stack spacing={8} paddingX={6} paddingY={3} minWidth={72}>
            <Icon
              as={FaTwitter}
              color={logoColor}
              width={7}
              height={7}
              onClick={toggleColorMode}
            ></Icon>

            <Stack spacing={6} fontSize="xl" fontWeight="bold">
              {LINKS.map((link) => (
                <Link to={link.href} key={link.href}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={6}
                    color={pathname === link.href ? "primary.500" : "inherit"}
                  >
                    <Icon
                      as={
                        pathname === link.href
                          ? link.activeIcon
                          : link.inactiveIcon
                      }
                      height={6}
                      width={6}
                    ></Icon>
                    <Text fontWeight="bold" fontSize="lg">
                      {link.text}
                    </Text>
                  </Stack>
                </Link>
              ))}
            </Stack>
            <Button size="lg" colorScheme={"primary"}>
              Twittear
            </Button>
          </Stack>
          <Stack direction='row' justifyContent='space-between' alignItems='center' paddingY={4} paddingX={4}>
            <Stack direction='row' alignItems='center'>
            <Image src="//placehold.it/64x64" borderRadius='50%' width={10} height={10} />
            <Stack spacing='0'>
                <Text fontWeight='bold' color={userColor} fontSize='sm'>.</Text>
                <Text fontSize='sm' color='gray.600'>@echecostabel</Text>
            </Stack>
            </Stack>
            <Icon as={BsThreeDots}></Icon>
          </Stack>
        </Stack>
        <Box paddingX={4} width='100%'>{children}</Box>
      </Stack>

    </Container>
  );
};

export default Layout;
