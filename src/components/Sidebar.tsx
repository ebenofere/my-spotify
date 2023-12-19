import { Box, Flex, Spacer } from "../../styled-system/jsx"
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi';
import { MdLibraryMusic, MdHomeFilled  } from "react-icons/md";
import {Icon, SpanText, Text} from "../primitives";

const Sidebar = () => {
  return (
    <Box border={"1px solid black"} bg={"#000000"} color={"#ffffff"} >
        
        <Box borderRadius={"4"} bg={"#121212"}>
            <Link href="#">
                <Flex alignItems={"center"} mb={4}>
                    <Icon>
                        <MdHomeFilled  />
                    </Icon>
                    <Text ml={2} fontWeight="bold">
                        Dashboard
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

        <Box borderRadius={"4"} bg={"#121212"}>
            <Flex alignItems={"center"}>
                <Link href="#">
                    <Flex alignItems={"center"} mb={4}>
                        <Icon>
                            <MdLibraryMusic />
                        </Icon>
                        <Text ml={2} fontWeight="bold">
                            Your Library
                        </Text>
                    </Flex>
                </Link>
                <Spacer />
                <Flex>
                    <Icon>
                        <MdLibraryMusic />
                    </Icon>
                    <Icon>
                        <MdLibraryMusic />
                    </Icon>
                </Flex>
            </Flex>
            <Flex alignItems={"center"}>
                <Icon>
                    <MdLibraryMusic />
                </Icon>
                <Icon>
                    <MdLibraryMusic />
                </Icon>
                <Icon>
                    <MdLibraryMusic />
                </Icon>
            </Flex>
            <Flex>
                <Icon>
                    <MdLibraryMusic />
                </Icon>
                <Spacer />
                <Icon>
                    <MdLibraryMusic />
                </Icon>
            </Flex>
            
            {/* Your Library */}
            <Flex>
                <Icon>
                    <MdLibraryMusic />
                </Icon>
                <Flex flexDir={"column"}>
                    <Text>Liked Songs</Text>
                    <Flex alignItems={"center"}>
                        <Icon>
                            <MdLibraryMusic />
                        </Icon>
                        <Text>3 songs</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default Sidebar