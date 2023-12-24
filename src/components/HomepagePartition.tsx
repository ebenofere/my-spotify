import React from 'react'
import { Box, Flex, Grid } from '../../styled-system/jsx'
import Navbar from './Navbar'
import { Text } from '@/primitives'
import CardSmall from './CardSmall'
import CardBig from './CardBig'
import RecentlyPlayed from './RecentlyPlayed'

const HomepagePartition = () => {
  return (
    <Box  w={"65%"} p={"2"} h={'full'} >
        <Box bg={"#0F171C"} color={"#ffffff"} px="10" py="5">
            <Navbar />
            <Text fontSize={"2em"} fontWeight={"bold"} mb={4}>Good evening</Text>
            <Box mb={8}>
              <Grid gridTemplateColumns="repeat(1, 1fr)" gap={"2px"}>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="Gospel" />
                  <CardSmall title="Hiphop" />
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="Afrobeats" />
                  <CardSmall title="Amapiano" />
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="UK Drill" />
                  <CardSmall title="Rap" />
                </Flex>
              </Grid>
            </Box>

            <Box mb={8}>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Made For Eben Ofere</Text>
                <Text fontSize={"14px"}>Show all</Text>
              </Flex>
              <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"} border={"1px solid #ffffff"}>
                <CardBig title="Davido" />
                <CardBig title="Davido" />
                <CardBig title="Davido" />
                <CardBig title="Davido" />
              </Flex>
            </Box>

            <Box>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Recently played</Text>
                <Text fontSize={"14px"}>Show all</Text>
              </Flex>
              <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"} border={"1px solid #ffffff"}>
                <RecentlyPlayed />
                <RecentlyPlayed />
                <RecentlyPlayed />
                <RecentlyPlayed />
              </Flex>
            </Box>
              
        </Box>
    </Box>
  )
}

export { HomepagePartition }