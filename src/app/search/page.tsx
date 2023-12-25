import Sidebar from '@/components/Sidebar';
import MusicPlayer from '@/components/MusicPlayer';
import { Flex } from '../../../styled-system/jsx';
import { SearchpagePartition } from '@/components/SearchpagePartition';
 
export default function Search() {
  return (
    <Flex flexDir={"column"} w={"full"} bg={"#000000"} h={"100vh"} overflow={'hidden'}>
        <Flex w={"full"} h={'80%'} overflow={'scroll'} scrollbar={'hidden'}>
          <Sidebar />
          <SearchpagePartition />
        </Flex>
        <MusicPlayer />
    </Flex>
  )
}