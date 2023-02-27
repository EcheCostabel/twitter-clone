import {
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsStar } from "react-icons/bs";

const TWEETS = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => (
  <Stack divider={<StackDivider />} spacing={0} direction='row' >
    <Stack divider={<StackDivider />} spacing={0} width='100%'>
      <Stack direction='row' alignItems='center' justifyContent='space-between' paddingX={4} paddingY={2}>
        <Text fontWeight='2xl' fontSize='lg'>Inicio</Text>
        <Icon as={BsStar} width={5} height={5} color='primary.500'></Icon>
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
