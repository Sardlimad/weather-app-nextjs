import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ACItem = ({ value, loading, icon, label }) => {
    return (
        <Flex gap={2} p={2}>
            <Box>
                <FontAwesomeIcon icon={icon} />
            </Box>
            <Box>
                <Text minWidth="100px" >{label}</Text>
                <Skeleton isLoaded={!loading}><Text fontWeight="700" fontSize="25px" lineHeight="1.1">{value}</Text></Skeleton>
            </Box>
        </Flex >
    )
}
