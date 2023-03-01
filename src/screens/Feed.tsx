import {
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
  Image,
  Textarea,
  Button,
  CircularProgress,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { BsImage, BsPlus, BsStar } from "react-icons/bs";
import {
  AiOutlineGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";

const FeedScreen: React.FC = () => {
  const [count, setCount] = useState(1);
  const tweets = useMemo(
    () => new Array(count).fill(true).map((_, index) => index),
    [count]
  );

  const progressColor = useColorModeValue("gray.100", "whiteAlpha.300");

  return (
    <Stack divider={<StackDivider />} spacing={0} direction="row">
      <Stack  spacing={0} maxWidth={600} width="100%">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          paddingX={4}
          paddingY={3}
        >
          <Text fontSize="lg" fontWeight="bold">
            Inicio
          </Text>
        </Stack>
        <Stack direction="row" fontWeight="bold" paddingY={2}>
          <Stack cursor="pointer" width='50%' justifyContent='center' alignItems='center'>
            <Box borderBottom="1px solid primary">
              Para ti
            </Box>
          </Stack>
          <Stack cursor="pointer" width='50%' justifyContent='center' alignItems='center'>
            <Box>Siguiendo</Box>
          </Stack>
        </Stack>
        <Stack direction="row" paddingY={2} paddingX={4} spacing={4}>
          <Image
            src="https://pbs.twimg.com/profile_images/1148504776407232512/LJF8Bnz8_400x400.jpg"
            borderRadius="50%"
            width={12}
            height={12}
          />
          <Stack divider={<StackDivider />} width="100%" spacing={3}>
            <Textarea
              variant="unstyled"
              fontSize="xl"
              fontWeight="500"
            ></Textarea>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" color="primary.500" spacing={4}>
                <Icon as={BsImage} width={5} height={5}></Icon>
                <Icon as={AiOutlineGif} width={5} height={5}></Icon>
                <Icon as={RiBarChartHorizontalLine} width={5} height={5}></Icon>
                <Icon as={AiOutlineSmile} width={5} height={5}></Icon>
                <Icon as={AiOutlineCalendar} width={5} height={5}></Icon>
                <Icon as={MdOutlineLocationOn} width={5} height={5}></Icon>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack
                  direction="row"
                  divider={<StackDivider />}
                  alignItems="center"
                  spacing={4}
                >
                  <CircularProgress
                    size={6}
                    trackColor={progressColor}
                    value={20}
                    color="primary.500"
                  ></CircularProgress>
                  <Box
                    cursor="pointer"
                    as="button"
                    alignItems="center"
                    borderColor="primary.500"
                    borderRadius="50%"
                    borderWidth={1}
                    display="flex"
                    height={6}
                    justifyContent="center"
                    position="relative"
                    width={6}
                  >
                    <Icon
                      as={BsPlus}
                      width={6}
                      height={6}
                      color="primary.500"
                      position="absolute"
                    ></Icon>
                  </Box>
                </Stack>
                <Button
                  colorScheme="primary"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Twittear
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider borderTopWidth={6} borderBottomWidth={6}></Divider>
        <Stack
          divider={<StackDivider />}
          flex={1}
          spacing={0}
          overflowY="auto"
          maxHeight="100vh"
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          {tweets.map((index) => (
            <Stack key={index} spacing={4} padding={4} width="100%">
              <Stack direction="row" alignItems="center">
                <SkeletonCircle
                  startColor="whiteAlpha.300"
                  endColor="whiteAlpha.300"
                  height={12}
                  width={12}
                  minWidth={12}
                  minHeight={12}
                />
                <Stack spacing={4} width="100%">
                  <Stack alignItems="flex-end" direction="row" spacing={2}>
                    <Skeleton
                      startColor="whiteAlpha.300"
                      endColor="whiteAlpha.300"
                      height={6}
                      width="120px"
                    />
                    <Skeleton
                      startColor="whiteAlpha.300"
                      endColor="whiteAlpha.300"
                      height={3}
                      width="80px"
                    />
                  </Stack>
                </Stack>
              </Stack>

              <SkeletonText
                startColor="whiteAlpha.300"
                endColor="whiteAlpha.300"
                height="100%"
                noOfLines={6}
                spacing={2}
                paddingX={4}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack>
            <Text>asdsa</Text>
      </Stack>
     
    </Stack>
  );
};

export default FeedScreen;
