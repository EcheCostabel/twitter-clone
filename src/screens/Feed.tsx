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
  Box
} from "@chakra-ui/react";
import React from "react";
import { BsPlus, BsStar } from "react-icons/bs";

const TWEETS = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => (
  <Stack divider={<StackDivider />} spacing={0} direction='row' >
    <Stack divider={<StackDivider />} spacing={0} width='100%'>
      <Stack direction='row' alignItems='center' justifyContent='space-between' paddingX={4} paddingY={3}>
        <Text fontWeight='2xl' fontSize='lg'>Inicio</Text>
      </Stack>
      <Stack direction='row' justifyContent='space-between' paddingY={3} paddingX={20} fontWeight='bold'>
        <Button>Para ti</Button>
        <Button>Siguiendo</Button>
      </Stack>
      <Stack direction='row' paddingY={2} paddingX={4} spacing={4}>
        <Image  src='https://pbs.twimg.com/profile_images/1148504776407232512/LJF8Bnz8_400x400.jpg' borderRadius='50%' width={12} height={12} />
      <Stack divider={<StackDivider />} width='100%'>
        <Textarea variant='unstyled' fontSize='xl' fontWeight='500'></Textarea>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>  
          <Stack direction='row' color='primary.500'>
            <Icon as={BsStar} ></Icon>
            <Icon as={BsStar} ></Icon>
            <Icon as={BsStar} ></Icon>
            <Icon as={BsStar} ></Icon>
            <Icon as={BsStar} ></Icon>
          </Stack>
          <Stack direction='row' spacing={3}>
            <Stack direction='row' divider={<StackDivider />} alignItems='center' spacing={4}>
              <CircularProgress size={6} trackColor='whiteAlpha.400' value={20} color='primary.500' ></CircularProgress>
              <Box alignItems='center' borderColor='primary.500' borderRadius='50%' borderWidth={1} display='flex' height={6} justifyContent='center' position='relative' width={6}>
                <Icon as={BsPlus} width={6} height={6} color='primary.500' position='absolute'></Icon>
              </Box>
            </Stack>
          <Button colorScheme='primary'>Twittear</Button>
          </Stack>
        </Stack>
      </Stack>
      </Stack>
      <Stack
      divider={<StackDivider />}
      flex={1}
        maxWidth="600px"
        spacing={0}
        overflowY="auto"
        maxHeight="100vh"
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
       
        >
        {TWEETS.map((index) => (
          <Stack key={index} spacing={4}>
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              maxWidth={480}
              padding={4}
            >
              <SkeletonCircle
                height="12"
                width="12"
                minWidth={12}
                minHeight={12}
              />
              <Stack>
                <Skeleton height={6} width="120px" />
                <Skeleton height={3} width="80px" />
              </Stack>
            </Stack>
            <SkeletonText height="100%" noOfLines={6} spacing={2} paddingX={4} />
          </Stack>
        ))}
      </Stack>
    </Stack>
    <Text maxWidth={350} width="100%">
      {""}
    </Text>
  </Stack>
);

export default FeedScreen;
