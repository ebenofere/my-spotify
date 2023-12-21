import { Button } from '@/custom/button'
import { Box, Circle, Flex, Spacer } from '../../styled-system/jsx'
import { Icon, Text } from '@/primitives'

import { FaBell, FaList, FaPlay } from 'react-icons/fa6'
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HiOutlineUser, HiOutlineBell } from "react-icons/hi";
import { FaEllipsis } from "react-icons/fa6";
import { Pills } from '@/custom/pills';
import CustomTable from './CustomTable';

const Playlist = () => {
  return (
    <Box  w={"65%"} p={"2"} h={'full'}>
       <Box bg={"#121212"} color={"#ffffff"} px="10" py="5">
            <Flex w={"full"} align={"center"} justifyContent={"space-between"} mb={"12"}>
                <Flex alignItems={"center"} gap={"8px"}>
                    <Circle size={'2em'} bg={"#000000"}>
                        <GrPrevious />
                    </Circle>
                    <Circle size={'2em'} bg={"#000000"}>
                        <GrNext />
                    </Circle>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"} w={"60%"}>
                    <Pills bg={"#ffffff"} color={"#000000"} fontSize={"14px"}>
                        Explore Premium
                    </Pills>
                    <Pills bg={"#000000"} color={"#ffffff"} p={"4px 1px"} fontSize={"14px"}>
                        <Flex alignItems={"center"} justifyContent={"center"} gap={"4px"}>
                            <MdOutlineDownloadForOffline />
                            Install App
                        </Flex>
                    </Pills>
                    <Circle size={'2em'} bg={"#000000"}>
                        <HiOutlineBell />
                    </Circle>
                    <Circle size={'2em'} bg={"#000000"}>
                        <HiOutlineUser />
                    </Circle>
                </Flex>
            </Flex>

            <Flex alignItems={"flex-end"} mb={"4"} gap={"1.5em"}>
                <Box rounded={"lg"} bg="#ffffff" w="9em" h="9em"></Box>
                <Flex flexDir={"column"}>
                    <Text fontSize={"14px"}>Playlist</Text>
                    <Text fontSize={"4em"} fontWeight={"bold"}>Naija Gospel</Text>
                    <Flex alignItems={"center"} gap={"8px"}>
                        <Text fontSize={"14px"} color={"#ffffff"} fontWeight={"bold"}>Eben Ofere</Text>
                        <Text fontSize={"14px"} color={"#ffffff"} fontWeight={"extrabold"}> . </Text>
                        <Text fontSize={"14px"} color={"#ffffff"}>122 songs, </Text>
                        <Text fontSize={"14px"} color={"#ffffff"}>about 6 hr 30 min</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} my={"2em"}>
                <Flex alignItems={"center"} gap={"2em"}>
                    <Circle size={'3em'} bg={"#1ED760"} color={"#000000"}>
                        <FaPlay />
                    </Circle>
                    <Flex>
                        <FaEllipsis />
                    </Flex>
                </Flex>
                <Spacer />
                <Flex alignItems={"center"} gap={"8px"}>
                    <Text fontSize={"14px"}>List</Text>
                    <Icon>
                        <FaList  />
                    </Icon>
                </Flex>
            </Flex>

                {/* Music Library Table */}
                <CustomTable />
       </Box>
    </Box>
  )
}

export { Playlist }