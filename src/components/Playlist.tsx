import { Button } from '@/custom/button'
import { Box, Flex } from '../../styled-system/jsx'
import { Icon } from '@/primitives'

import { FaPlus } from 'react-icons/fa6'
import { GrNext, GrPrevious } from "react-icons/gr";

const Playlist = () => {
  return (
    <Box bg={"#121212"} color={"#ffffff"} px="10" py="5" w={"60%"} minH={"100vh"} border={"5px solid red"}>
        <Flex w={"full"}>
            <Flex>
                <Icon>
                    <GrPrevious />
                </Icon>
                <Icon>
                    <GrNext />
                </Icon>
            </Flex>
        </Flex>
    </Box>
  )
}

export { Playlist }

{/* <Button bg="#a7a7a7" p={"5"}>
            Book a Consultation
        </Button> */}