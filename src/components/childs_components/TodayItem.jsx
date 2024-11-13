import { Box, Image, Skeleton, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const TodayItem = ({ time, temp, img }) => {
    return (
        <VStack margin="10px" textAlign="center" >
            <Text>{time}</Text>
            <Image src={img} width="50%" />
            <Text>{temp}°C</Text>
        </VStack>
    )
}
