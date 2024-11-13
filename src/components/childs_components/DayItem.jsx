import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const DayItem = ({ day, tempMax, tempMin, condition, img }) => {
    return (
        <HStack gap={5} width="stretch" justifyContent="space-between">
            <Text minWidth="40px" fontSize="14px">{day}</Text>
            <Flex width="100px" textAlign="left">
                <Image src={img} height="30px" mr="5px" />
                <Text margin="auto" ml={0} fontWeight="500" fontSize="12px">{condition}</Text>
            </Flex>
            <Text fontSize="14px"><strong>{tempMax}</strong>/{tempMin}</Text>
        </HStack>
    )
}
