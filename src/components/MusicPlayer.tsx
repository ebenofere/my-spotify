import { Text } from '@/primitives'
import { Box, Flex } from '../../styled-system/jsx'
import { FcLike } from "react-icons/fc";
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { BsPlayBtn } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOfflineShare } from "react-icons/md";
import { LuVolume2 } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";

const MusicPlayer = () => {
  return (
    <Flex border={"1px solid #ffffff"} color={"#ffffff"} alignItems={"center"} justifyContent={"space-between"} p={"1em"}>
        <Flex alignItems={"center"} gap={"16px"}>
            <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
            <Flex flexDir={"column"}>
                <Text fontSize={"16px"}>Remember </Text>
                <Text fontSize={"14px"}>Asake</Text>
            </Flex>
            <FcLike />
        </Flex>

        <Flex alignItems={"center"} gap={"16px"}>
            <BsPlayBtn />
            <TbMicrophone2 />
            <HiOutlineQueueList />
            <MdOfflineShare />
            <LuVolume2 />
            <Box rounded={"lg"} w={"5em"} h={"1em"} bg={"#ffffff"}></Box>
            <CgMiniPlayer />
        </Flex>


    </Flex>
  )
}

export default MusicPlayer