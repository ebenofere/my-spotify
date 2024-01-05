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
import Navbar from './Navbar';
import PlaylistHead from './PlaylistHead';
import PlaylistOptions from './PlaylistOptions';

const Playlist = () => {
  return (
    <Box h={'full'} w={"full"} overflow={"scroll"} scrollbar={"hidden"} position={"relative"} border={"1px solid #ffffff"}>
        <Navbar />
        <Box w={"65%"} bg={"#121212"} color={"#ffffff"} px="10" py="5" rounded={"lg"}>
            <PlaylistHead />
            <PlaylistOptions />
            
            {/* Music Library Table */}
            <CustomTable />
        </Box>
    </Box>
  )
}

export { Playlist }