import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { ACItem } from './childs_components/ACItem'
import { faDroplet, faSun, faTemperatureHalf, faWater, faWind } from '@fortawesome/free-solid-svg-icons'


export const AirConditions = ({ air, loading }) => {
    return (
        <Box bgColor="gray.100" borderRadius="15px" p={3} pt="5px">
            <Heading fontSize="sm" fontWeight={200} m="10px" >AIR CONDITIONS</Heading>
            <SimpleGrid columns={4}>
                <ACItem label="Real Feel" value={`${air.feelslike_c}°C`} icon={faTemperatureHalf} loading={loading} />
                <ACItem label="Wind" value={`${air.wind_kph} km/h`} icon={faWind} loading={loading} />
                <ACItem label="Precipitations" value={`${air.precip_mm} mm`} icon={faDroplet} loading={loading} />
                <ACItem label="UV Index" value={air.uv} icon={faSun} loading={loading} />
            </SimpleGrid>
        </Box>
    )
}
