import { Box, Flex, VStack } from '../../styled-system/jsx'
import { Text } from '@/primitives'
import { TCardBig } from '@/types/card'
import { trunc } from '@/utils/helpers'

const CardBig = ({ title, artist } : TCardBig) => {
  return (
    <>
        <VStack bg={"#181818"} rounded={"lg"} boxShadow="lg" p={"1em"} w={"full"} alignItems={"flex-start"}>
          <Box rounded={"lg"} bg="#ffffff" w="full" h="9em" mb={2}></Box>
          <Box mb={2}>
            <Text fontWeight={"bold"} fontSize={"16px"}>{ title }</Text>
            <Text fontSize={"14px"}>{ artist }</Text>
          </Box>
        </VStack>
    </>
  )
}

export default CardBig