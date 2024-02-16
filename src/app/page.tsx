import Sidebar from '@/components/Sidebar';
import MusicPlayer from '@/components/MusicPlayer';
import { Playlist } from '@/components/Playlist';
import { Flex } from '../../styled-system/jsx';
 
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