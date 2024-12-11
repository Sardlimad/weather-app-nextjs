import getDayOfWeek from '@/helpers/getDayofWeek'
import { getIcon } from '@/helpers/getIcon'
import { Box, Skeleton, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Astro } from './Astro'
import { DayItem } from './childs_components/DayItem'
import { Credits } from './Credits'

export const DaysForecast = ({ days, loading }) => {

    const items = days.map((item) => {
        return <Skeleton isLoaded={!loading} key={item.date}><DayItem day={getDayOfWeek(item.date)} tempMax={item.maxtemp_c} tempMin={item.mintemp_c} condition={item.condition} img={getIcon(item.code, 1)} /></Skeleton>
    })

    return (
        <Box bgColor="gray.100" borderRadius="15px" position={"flex"} p={7} pt="0px" width="stretch" height={"100%"}>
            <Text fontSize="sm" fontWeight={200} m="15px" ml={0}>DAYS FORECAST</Text>
            <VStack divider={<StackDivider borderColor='gray.500' />} gap={3} pt="5px">
                {items}
            </VStack>
        </Box>
    )
}
