import Sidebar from '@/components/Sidebar';
import { css } from '../../styled-system/css';
import { Box, Center, Flex } from '../../styled-system/jsx';
import { Button } from '@/custom/button';
import { Playlist } from '@/components/Playlist';
import MusicPlayer from '@/components/MusicPlayer';
 
export default function Home() {
  return (
    <Flex flexDir={"column"} border={"1px solid black"} w={"full"} bg={"#000000"} minH={"100vh"}>
        <Flex w={"full"}>
          <Sidebar />
          <Playlist />
        </Flex>
        <MusicPlayer />
    </Flex>
  )
}