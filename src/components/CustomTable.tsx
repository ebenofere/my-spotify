"use client" 
import { Box, Flex, HStack } from '../../styled-system/jsx'
import { Afrobeats } from '@/constants'
import { THead, TRow, TData } from '@/primitives/Table'
import Image from 'next/image'
import { Text } from '@/primitives'

const CustomTable = () => {
  return (
    <Box>
        <table style={{width:"100%", margin:"1em 0"}}>
            <TRow>
                <THead>#</THead>
                <THead fontSize={"14px"}>Title</THead>
                <THead fontSize={"14px"}>Album</THead>
                <THead fontSize={"14px"}>Date Added</THead>
                <THead fontSize={"14px"}>Time</THead>
            </TRow>
            {Afrobeats.map((music, i) => (
                <TRow key={music.id}>
                    <TData>{i + 1}</TData>
                    <TData>
                       <HStack>
                            <Image src="https://via.placeholder.com/50" width={40} height={40} alt={music.album} />
                            <Flex flexDir={"column"}>
                                <Text>{music.title}</Text>
                                <Text fontSize={"14px"}>{music.artist}</Text>
                            </Flex>
                        </HStack>
                            
                    </TData>
                    <TData fontSize={"14px"}>{music.album}</TData>
                    <TData fontSize={"14px"}>{music.dateAdded}</TData>
                    <TData fontSize={"14px"}>{music.timeLength}</TData>
                </TRow>
            ))}
        </table>
    </Box>
  )
}

export default CustomTable