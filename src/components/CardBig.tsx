import { Box, Flex } from '../../styled-system/jsx'
import { Text } from '@/primitives'

const CardBig = ({ title }) => {
  return (
    <>
        <Box bg={"#121212"} rounded={"lg"} boxShadow="lg">
          <Box rounded={"lg"} bg="#ffffff" w="9em" h="9em" mb={4}></Box>
          <Box border={'1px solid #ffffff'}>
            <Text fontWeight={"bold"} fontSize={"16px"}>Daily Mix 1</Text>
            <Text fontSize={"14px"}>Davido, Kizz Daniel, Burna Boy and more</Text>
          </Box>
        </Box>
    </>
  )
}

export default CardBig