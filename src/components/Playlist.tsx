import { Button } from '@/custom/button'
import { Box, Flex, Spacer } from '../../styled-system/jsx'
import { Icon, Text } from '@/primitives'

import { FaBell, FaList, FaPlay } from 'react-icons/fa6'
import { MdOutlineFileDownload } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HiOutlineUser, HiOutlineBell } from "react-icons/hi";
import { Pills } from '@/custom/pills';

const Playlist = () => {
  return (
    <Box  w={"65%"} minH={"100vh"} p={"2"}>
       <Box bg={"#121212"} rounded={"lg"} color={"#ffffff"} px="10" py="5">
            <Flex w={"full"} align={"center"} justifyContent={"space-between"} border={"1px solid #ffffff"} mb={"12"}>
                <Flex alignItems={"center"} gap={"8px"}>
                    <Icon>
                        <GrPrevious />
                    </Icon>
                    <Icon>
                        <GrNext />
                    </Icon>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"}>
                    <Pills bg={"#ffffff"} color={"#000000"} fontSize={"16px"} p={"4px 16px"}>
                        Explore Premium
                    </Pills>
                    <Pills bg={"#000000"} color={"#ffffff"} p={"4px 1px"} fontSize={"16px"}>
                        <Flex alignItems={"center"} justifyContent={"center"}>
                            <MdOutlineFileDownload />
                            Install App
                        </Flex>
                    </Pills>
                    <Flex rounded={"50%"} bg={"#ff0000"} alignItems={"center"} justifyContent={"center"}>
                        <HiOutlineBell />
                    </Flex>
                    <Flex rounded={"50%"} bg={"#ff0000"} alignItems={"center"} justifyContent={"center"}>
                        <HiOutlineUser />
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"flex-end"} mb={"4"} gap={"1.5em"}>
                <Box rounded={"lg"} bg="#ffffff" w="150px" h="150px"></Box>
                <Flex flexDir={"column"}>
                    <Text fontSize={"14px"}>Playlist</Text>
                    <Text fontSize={"4em"} fontWeight={"bold"}>Naija Gospel</Text>
                    <Flex alignItems={"center"} gap={"8px"}>
                        <Text fontSize={"14px"} color={"#ffffff"} fontWeight={"bold"}>Eben Ofere</Text>
                        <Text fontSize={"14px"} color={"#ffffff"}>122 songs, </Text>
                        <Text fontSize={"14px"} color={"#ffffff"}>about 6 hr 30 min</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"center"}>
                <Flex alignItems={"center"}>
                    <Flex rounded={"50%"} bg={"#ff0000"} alignItems={"center"} justifyContent={"center"}>
                        <FaPlay />
                    </Flex>
                    <Flex fontWeight={"extrabold"}>. . .</Flex>
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
       </Box>






    </Box>
  )
}

export { Playlist }

{/* <Button bg="#a7a7a7" p={"5"}>
            Book a Consultation
        </Button> */}