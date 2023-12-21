import Sidebar from '@/components/Sidebar';
import { css } from '../../styled-system/css';
import { Box, Center, Flex } from '../../styled-system/jsx';
import { Button } from '@/custom/button';
import { Playlist } from '@/components/Playlist';
import MusicPlayer from '@/components/MusicPlayer';
 
export default function Home() {
  return (
    <Flex flexDir={"column"} w={"full"} bg={"#000000"} h={"100vh"} overflow={'hidden'}>
        <Flex w={"full"} h={'80%'} overflow={'scroll'} scrollbar={'hidden'}>
          <Sidebar />
          <Playlist />
        </Flex>
        <MusicPlayer />
    </Flex>
  )
}