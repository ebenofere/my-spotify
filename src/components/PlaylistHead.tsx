import { Box, Flex } from '../../styled-system/jsx'
import { Text } from '@/primitives'

const PlaylistHead = () => {
  return (
    <Flex alignItems={"flex-end"} mb={"4"} gap={"1.5em"}>
        <Box rounded={"lg"} bg="#ffffff" w="9em" h="9em"></Box>
        <Flex flexDir={"column"}>
            <Text fontSize={"14px"}>Playlist</Text>
            <Text fontSize={"3em"} fontWeight={"bold"}>Afrobeats</Text>
            <Flex alignItems={"center"} gap={"8px"}>
                <Text fontSize={"14px"} color={"#ffffff"} fontWeight={"bold"}>Eben Ofere</Text>
                <Text fontSize={"14px"} color={"#ffffff"} fontWeight={"extrabold"}> . </Text>
                <Text fontSize={"14px"} color={"#ffffff"}>122 songs, </Text>
                <Text fontSize={"14px"} color={"#ffffff"}>about 6 hr 30 min</Text>
            </Flex>
        </Flex>
    </Flex>
)
}

export default PlaylistHead