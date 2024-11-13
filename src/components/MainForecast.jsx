import { Box, Flex, HStack, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'

export const MainForecast = ({ main, loading }) => {
    return (
        <Flex margin={2} padding={2} width="stretch" justifyContent={'space-between'}>
            <Box>
                <Skeleton isLoaded={!loading}>
                    <Text fontSize="30px" fontWeight="700">{main.name}</Text>
                    <HStack divider={<p>,&nbsp;</p>}>
                        <Text fontSize="15px" fontWeight="200">{main.region}</Text>
                        <Text fontSize="15px" fontWeight="200">{main.country}</Text>
                    </HStack>
                    <Text fontSize="50px" fontWeight="700">{main.temp_c}°C</Text>
                </Skeleton>
            </Box>
            {/* {console.log(code)} */}
            <Skeleton isLoaded={!loading}>
                <Image src={main.icon} mr={5} />
            </Skeleton>
        </Flex>
    )
}
