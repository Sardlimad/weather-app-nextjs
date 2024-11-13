import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Credits = () => {
    return (
        <Box textAlign="center" mt="0px">
            <Text fontSize="12px">Powered by <Link href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</Link></Text>
        </Box >
    )
}
