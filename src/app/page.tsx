import Sidebar from '@/components/Sidebar';
import { css } from '../../styled-system/css';
import { Box, Flex } from '../../styled-system/jsx';
 
export default function Home() {
  return (
    <Flex flexDirection="row">
      <Sidebar />
      <Box>Lasgidi</Box>
    </Flex>
  )
}

{/* <div className={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div> */}
