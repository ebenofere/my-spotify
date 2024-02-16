import { Text } from '@/primitives'
import { Box, Circle, Flex } from '../../styled-system/jsx'
import { FcLike } from "react-icons/fc";
import { FaPlay } from 'react-icons/fa';
import { BsPlayBtn, BsFillRewindFill, BsFastForwardFill, BsRepeat } from "react-icons/bs";
import { TbMicrophone2, TbArrowsShuffle  } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOfflineShare } from "react-icons/md";
import { LuVolume2 } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";

const MusicPlayer = () => {
  return (
    <Flex w={'full'} border={"1px solid #ffffff"} color={"#ffffff"} alignItems={"center"} justifyContent={"space-between"} p={"1em"}>
        <Flex alignItems={"center"} gap={"16px"}>
            <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
            <Flex flexDir={"column"}>
                <Text fontSize={"16px"}>Remember </Text>
                <Text fontSize={"14px"}>Asake</Text>
            </Flex>
            <FcLike />
        </Flex>

        <Flex flexDir={"column"} alignItems={"center"} gap={"16px"}>
            <Flex alignItems={"center"} gap={"32px"}>
                <TbArrowsShuffle /> 
                <BsFillRewindFill />
                <Circle size={'2em'} bg={"#ffffff"} color={"#000000"}>
                    <FaPlay />
                </Circle>
                <BsFastForwardFill />
                <BsRepeat />
            </Flex>
            <Flex alignItems={"center"} gap={"16px"}>
                <Text fontSize={"14px"}>0:00</Text>
                <Box rounded={"lg"} w={"20em"} h={"4px"} bg={"#ffffff"}></Box>
                <Text fontSize={"14px"}>3:02</Text>
            </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={"16px"}>
            <BsPlayBtn />
            <TbMicrophone2 />
            <HiOutlineQueueList />
            <MdOfflineShare />
            <LuVolume2 />
            <Box rounded={"lg"} w={"5em"} h={"4px"} bg={"#ffffff"}></Box>
            <CgMiniPlayer />
        </Flex>


    </Flex>
  )
}

export default MusicPlayer