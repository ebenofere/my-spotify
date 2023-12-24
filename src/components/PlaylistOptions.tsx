import React from 'react'
import { Circle, Flex, Spacer } from '../../styled-system/jsx'
import { FaEllipsis, FaList, FaPlay } from 'react-icons/fa6'
import { Icon, Text } from '@/primitives'

const PlaylistOptions = () => {
  return (
    <Flex alignItems={"center"} my={"2em"}>
        <Flex alignItems={"center"} gap={"2em"}>
            <Circle size={'3em'} bg={"#1ED760"} color={"#000000"}>
                <FaPlay />
            </Circle>
            <Flex>
                <FaEllipsis />
            </Flex>
        </Flex>
        <Spacer />
        <Flex alignItems={"center"} gap={"8px"}>
            <Text fontSize={"14px"}>List</Text>
            <Icon>
                <FaList  />
            </Icon>
        </Flex>
    </Flex>
  )
}

export default PlaylistOptions