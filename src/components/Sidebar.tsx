import { Box, Flex, Spacer, HStack } from "../../styled-system/jsx"
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi';
import { MdLibraryMusic, MdHomeFilled, MdCancel } from "react-icons/md";
import { FaPlus, FaArrowRight, FaList } from "react-icons/fa6"
import { TiPin } from "react-icons/ti";
import {Icon, SpanText, Text} from "../primitives";
import { Button } from "@/custom/button";
import { Pills } from "@/custom/pills";

const Sidebar = () => {
  return (
    <Box border={"1px solid black"} bg={"#000000"} p={"2"} w={"40%"}>
        
        <Box rounded={"lg"} bg={"#121212"} color={"#ffffff"} px="10" py="5" mb="12">
            <Link href="#">
                <Flex alignItems={"center"} mb={4}>
                    <Icon>
                        <MdHomeFilled  />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Home
                    </Text>
                </Flex>
            </Link>
            <Link href="#">
                <Flex alignItems={"center"} mb={4}>
                    <Icon>
                        <FiSearch />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Search
                    </Text>
                </Flex>
            </Link>
        </Box>

        <Box borderRadius={"8"} bg={"#121212"} color={"#ffffff"} px={"10"} py={"5"}>
            <Flex alignItems={"center"}>
                <Link href="#">
                    <Flex alignItems={"center"}>
                        <Icon>
                            <MdLibraryMusic />
                        </Icon>
                        <Text ml={2} fontWeight="bold">
                            Your Library
                        </Text>
                    </Flex>
                </Link>
                <Spacer />
                <Flex gap={"16px"} w={"100%"}>
                    <Icon>
                        <FaPlus />
                    </Icon>
                    <Icon>
                        <FaArrowRight />
                    </Icon>
                </Flex>
            </Flex>
            <HStack alignItems={"center"}>
                <Pills>
                    Playlist
                </Pills>
                <Pills>
                    Artists
                </Pills>
                <Pills>
                    Albums
                </Pills>
                <Pills>
                    Podcasts & Shows
                </Pills>
            </HStack>
            <Flex>
                <Icon>
                    <FiSearch />
                </Icon>
                <Spacer />
               <Flex alignItems={"center"}>
                    <Text>Recents</Text>
                    <Icon>
                        <FaList  />
                    </Icon>
               </Flex>
            </Flex>
            
            {/* Your Library */}
            <Flex alignItems={"center"}>
                <Box bg="#ffffff" w="50px" h="50px" border={"5px solid white"}>Box</Box>
                <Flex flexDir={"column"}>
                    <Text>Liked Songs</Text>
                    <Flex alignItems={"center"}>
                        <Text>Playlist</Text>
                        <Text>3 songs</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"center"}>
                <Box bg="#ffffff" w="50px" h="50px" border={"5px solid white"}>Box</Box>
                <Flex flexDir={"column"}>
                    <Text>Liked Songs</Text>
                    <Flex alignItems={"center"}>
                        <Text>Afrobeats</Text>
                        <Text>Eben Ofere</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default Sidebar