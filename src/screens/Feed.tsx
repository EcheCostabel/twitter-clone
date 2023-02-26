import { SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import React from 'react';


const TWEETS = new Array(12).fill(true).map((_, index) => index);


const FeedScreen: React.FC = () => {
  return (
    <Stack paddingY={12} spacing={6}>
      {
        TWEETS.map((index) => (
          <Stack>
            <Stack direction='row'>
              <SkeletonCircle />
            <SkeletonText height={36} noOfLines={6}/>

            </Stack>
            <SkeletonText height={36} noOfLines={6} key={index}/>
          </Stack>
        ))
      }

    </Stack>
  )
}
 
export default FeedScreen