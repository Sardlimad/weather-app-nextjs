import { Box, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AstroItem } from './childs_components/AstroItem'

export const Astro = ({ astro }) => {
    return (
        <Box bgColor="gray.100" borderRadius="15px" p={7} pt="0px" width="stretch">
            <Text fontSize="sm" fontWeight={200} m="15px" ml={0}>ASTRO</Text>
            <VStack gap={5} pt="5px">
                <AstroItem name="Sunrise" iconName={"icons8-salida-del-sol-100.png"} data={astro.sunrise} />
                <AstroItem name="Sunset" iconName={"icons8-puesta-de-sol-100.png"} data={astro.sunset} />
                <AstroItem name="Moonrise" iconName={"icons8-salida-de-la-luna-100.png"} data={astro.moonrise} />
                <AstroItem name="Moonset" iconName={"icons8-puesta-de-luna-100.png"} data={astro.moonset} />
            </VStack>
        </Box>
    )
}
