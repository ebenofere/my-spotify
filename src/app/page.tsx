import Sidebar from '@/components/Sidebar';
import { css } from '../../styled-system/css';
import { Box, Center, Flex } from '../../styled-system/jsx';
import { Button } from '@/custom/button';
import { Playlist } from '@/components/Playlist';
 
export default function Home() {
  return (
    <Flex border={"1px solid black"} w={"full"}>
        <Sidebar />
        <Playlist />
    </Flex>
  )
}