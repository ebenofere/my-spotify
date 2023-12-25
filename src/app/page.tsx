import Sidebar from '@/components/Sidebar';
import { Box, Center, Flex } from '../../styled-system/jsx';
import MusicPlayer from '@/components/MusicPlayer';
import { Playlist } from '@/components/Playlist';
 
export default function Home() {
  return (
    <Flex flexDir={"column"} w={"full"} bg={"#000000"} h={"100vh"} overflow={'hidden'}>
        <Flex w={"full"} h={'80%'} overflow={'hidden'} scrollbar={'hidden'}>
          <Sidebar />
          <Playlist />
        </Flex>
        <MusicPlayer />
    </Flex>
  )
}