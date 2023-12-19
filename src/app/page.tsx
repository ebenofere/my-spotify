import Sidebar from '@/components/Sidebar';
import { css } from '../../styled-system/css';
import { Box, Center, Flex } from '../../styled-system/jsx';
 
export default function Home() {
  return (
    <Box>
      <Flex alignItems={"center"} border={"1px solid black"}>
        <Box flex={"1"}>
          <Sidebar />
        </Box>
        <Box flex={"3"} bg={"blue.500"}>
          <Box>
            Lasgidi
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}