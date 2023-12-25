import { TLibraryCard } from '@/types/card'
import { Box, Flex, HStack } from '../../styled-system/jsx'
import { Text } from '@/primitives'
import Link from 'next/link'

function LibraryCard({ title, author, songsTotal } : TLibraryCard) {
    return (
        <Link href={"#"}>
            <Flex alignItems={"center"} mb={"4"} gap={"16px"}>
                <Box rounded={"lg"} bg="#ffffff" w="50px" h="50px"></Box>
                <Flex flexDir={"column"}>
                    <Text fontWeight={"bold"}>{ title }</Text>
                    <HStack gap={"8px"}>
                        <Text fontSize={"14px"}>Playlist</Text>
                        <Text fontWeight={"extrabold"}> . </Text>
                        <Text fontSize={"14px"}>{ author || songsTotal }</Text>
                    </HStack>
                </Flex>
            </Flex>
        </Link>
    )
}

export default LibraryCard