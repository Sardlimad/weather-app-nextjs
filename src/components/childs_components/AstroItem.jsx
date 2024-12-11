import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const AstroItem = ({ name, iconName, data }) => {
    return (
        <HStack gap={5} width="stretch" justifyContent="space-between">
            <Text minWidth="60px" fontSize="14px">{name}</Text>
            <Image src={"/icons/" + iconName} height="30px" mr="5px" />
            <Text fontSize="14px">{data}</Text>
        </HStack>
    )
}
