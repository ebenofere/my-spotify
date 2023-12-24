import { Box, Flex } from '../../styled-system/jsx'
import { Text } from '@/primitives'

const CardSmall = ({ title }) => {
  return (
    <>
        <Flex alignItems={"center"} mb={"4"} gap={"16px"} w={"full"} bg={"rgba(0, 0, 0, 0.3)"} rounded={"sm"}>
            <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
            <Text fontWeight={"bold"} fontSize={"14px"}>{title}</Text>
        </Flex>
    </>
  )
}

export default CardSmall