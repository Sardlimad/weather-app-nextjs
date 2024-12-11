import formatTo12Hour from '@/helpers/formatTo12Hour'
import { getIcon } from '@/helpers/getIcon'
import weatherIcons from '@/helpers/weatherIcons'
import { Box, Heading, HStack, Skeleton, StackDivider, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { TodayItem } from './childs_components/TodayItem'

export const TodayForecast = ({ hour, loading }) => {


    const items = hour.map((item) => {
        return <TodayItem time={formatTo12Hour(item.time)} temp={item.temp_c} img={getIcon(item.code, item.is_day)} />;
    });

    const skel = () => {
        return <Skeleton><Text>Hola</Text></Skeleton>
    }


    return (
        <Box bgColor="gray.100" borderRadius="15px" p={3} pt="5px">
            <Heading fontSize="sm" fontWeight={200} m="10px" >TODAY'S FORECAST</Heading>
            <HStack divider={<StackDivider borderColor='gray.500' />} >
                {!loading ? items : skel}
            </HStack>
        </Box>
    )
}
