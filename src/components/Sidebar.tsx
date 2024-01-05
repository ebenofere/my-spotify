import { Box, Flex, Spacer, HStack, VStack } from "../../styled-system/jsx"
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi';
import { MdLibraryMusic, MdHomeFilled } from "react-icons/md";
import { FaPlus, FaArrowRight, FaList } from "react-icons/fa6"
import {Icon, Text } from "../primitives";
import { Pills } from "@/custom/pills";
import LibraryCard from "./LibraryCard";
import { trunc } from "@/utils/helpers";

const Sidebar = () => {
  return (
    <Box p={"2"} w={"35%"} h={'full'}>
        <Box rounded={"lg"} bg={"#121212"} color={"#ffffff"} px="8" py="4" mb="2">
            <Link href="/home">
                <Flex alignItems={"center"} mb={4} gap={"1em"}>
                    <Icon>
                        <MdHomeFilled  />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Home
                    </Text>
                </Flex>
            </Link>
            <Link href="/search">
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
            <Flex alignItems={"center"} justifyContent={"space-between"} w={'full'}>
                <Link href="/">
                    <Flex alignItems={"center"} gap={"16px"}>
                        <Icon>
                            <MdLibraryMusic />
                        </Icon>
                        <Text ml={2} fontWeight="bold">
                            Your Library
                        </Text>
                    </Flex>
                </Link>
                <Flex gap={"16px"} >
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
            
            {/* Your Library */}
            <Box overflow={"scroll"} height={"40rem"} scrollbar={"hidden"} >
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

                <VStack gap={"4"} alignItems={"left"}>
                    <LibraryCard title={trunc("Liked Songs", 30)} author="Eben Ofere" songsTotal="5 songs" />
                    <LibraryCard title={trunc("Naija Gospel", 30)} author="Eben Ofere" />
                    <LibraryCard title={trunc("South African House", 30)} author="Eben Ofere" />
                    <LibraryCard title={trunc("Razz", 30)} author="Eben Ofere" />
                    <LibraryCard title={trunc("Yinka Ayefele's Playlist", 30)} author="Mokson, the Playlist Guy!" />
                    <LibraryCard title={trunc("Old School", 30)} author="Eben Ofere" />
                    <LibraryCard title={trunc("Seyi Vibez", 30)} author="Mokson, the Playlist Guy!" />
                    <LibraryCard title={trunc("EDM Classics", 30)} author="Mokson, the Playlist Guy!" />
                    <LibraryCard title={trunc("RYAN OFEI ESSENTIALS | New Every Morning", 30)} author="Ryan Ofei" />
                </VStack>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar