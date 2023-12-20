import { Box, Flex, Spacer, HStack } from "../../styled-system/jsx"
import { css } from "../../styled-system/css"
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
    <Box p={"2"} w={"35%"}>
        <Box rounded={"lg"} bg={"#121212"} color={"#ffffff"} px="8" py="4" mb="4">
            <Link href="#">
                <Flex alignItems={"center"} mb={4} gap={"1em"}>
                    <Icon>
                        <MdHomeFilled  />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Home
                    </Text>
                </Flex>
            </Link>
            <Link href="#">
                <Flex alignItems={"center"} gap={"1em"}>
                    <Icon>
                        <FiSearch />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Search
                    </Text>
                </Flex>
            </Link>
        </Box>

        <Box rounded={"lg"} bg={"#121212"} color={"#ffffff"} px="8" py="4">
            <Flex alignItems={"center"} justifyContent={"space-between"} border={"1px solid #ffffff"}>
                <Link href="#">
                    <Flex alignItems={"center"} gap={"16px"}>
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

            <HStack alignItems={"center"} my={"4"}>
                <Pills bg={"#232323"}>
                    Playlist
                </Pills>
                <Pills bg={"#232323"}>
                    Artists
                </Pills>
                <Pills bg={"#232323"}>
                    Albums
                </Pills>
                <Pills bg={"#232323"}>
                    Podcasts
                </Pills>
            </HStack>

            <Flex my={"4"}>
                <Icon>
                    <FiSearch />
                </Icon>
                <Spacer />
               <Flex alignItems={"center"} gap={"8px"}>
                    <Text fontSize={"14px"} >Recents</Text>
                    <Icon>
                        <FaList  />
                    </Icon>
               </Flex>
            </Flex>
            
            {/* Your Library */}
            <Flex alignItems={"center"} mb={"4"} gap={"16px"}>
                <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
                <Flex flexDir={"column"}>
                    <Text fontWeight={"bold"}>Liked Songs</Text>
                    <Flex alignItems={"center"} justifyContent={"space-between"} gap={"8px"} className={css({pos:"relative"})}>
                        <Text fontSize={"14px"}>Playlist </Text>
                        <Text fontWeight={"extrabold"} className={css({pos:"absolute", right:"-5px", top:"-5px"})}>.</Text>
                        <Text fontSize={"14px"}>3 songs</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} mb={"4"} gap={"16px"}>
                <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
                <Flex flexDir={"column"}>
                    <Text fontWeight={"bold"}>Gospel</Text>
                    <Flex alignItems={"center"} justifyContent={"space-between"} gap={"8px"} className={css({pos:"relative"})}>
                        <Text fontSize={"14px"}>Playlist </Text>
                        <Text fontWeight={"extrabold"} className={css({pos:"absolute", right:"-5px", top:"-5px"})}>.</Text>
                        <Text fontSize={"14px"}>Eben Ofere</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems={"center"} mb={"4"} gap={"16px"}>
                <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
                <Flex flexDir={"column"}>
                    <Text fontWeight={"bold"}>Afrobeats</Text>
                    <Flex alignItems={"center"} justifyContent={"space-between"} gap={"8px"} className={css({pos:"relative"})}>
                        <Text fontSize={"14px"}>Playlist </Text>
                        <Text fontWeight={"extrabold"} className={css({pos:"absolute", right:"-5px", top:"-5px"})}>.</Text>
                        <Text fontSize={"14px"}>Eben Ofere</Text>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    </Box>
  )
}

export default Sidebar