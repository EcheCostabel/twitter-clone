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
  BsEnvelopeFill
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
];

interface propsWithChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: propsWithChildren): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
  const logoColor = useColorModeValue("primary.500", undefined);

  return (
    <Container
      alignSelf="center"
      maxWidth="container.xl"
      height="100%"
      paddingX={0}
    >
      <Stack direction="row" height="100%" divider={<StackDivider />}>
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
            <Stack direction="row" alignItems="center" spacing={6}>
              <Icon as={BsBookmark} height={6} width={6}></Icon>
              <Text fontWeight="bold" fontSize="lg">
                Guardados
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={6}>
              <Icon as={BsList} height={6} width={6}></Icon>
              <Text fontWeight="bold" fontSize="lg">
                Listas
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={6}>
              <Icon as={BsPerson} height={6} width={6}></Icon>
              <Text fontWeight="bold" fontSize="lg">
                Perfil
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={6}>
              <Icon as={BsThreeDots} height={6} width={6}></Icon>
              <Text fontWeight="bold" fontSize="lg">
                Mas opciones
              </Text>
            </Stack>
          </Stack>
          <Button size="lg" colorScheme={"primary"}>
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;
