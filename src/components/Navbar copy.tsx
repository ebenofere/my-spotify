"use client"

import { GrNext, GrPrevious } from "react-icons/gr"
import { Circle, Flex } from "../../styled-system/jsx"
import { Pills } from "@/custom/pills"
import { MdOutlineDownloadForOffline } from "react-icons/md"
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi"
import { usePathname } from 'next/navigation'
import { Input } from "@/primitives/Input"


const Navbar = () => {
    const pathName = usePathname();

  return (
    <Flex w={"full"} align={"center"} justifyContent={"space-between"} height={"75px"} mb={"6"} position={"sticky"} top={"0"} bg={"#121212"} px="10">
        <Flex alignItems={"center"} gap={"8px"} width={"50%"}>
            <Circle size={'2em'} bg={"#000000"} color={"#ffffff"}>
                <GrPrevious />
            </Circle>
            <Circle size={'2em'} bg={"#000000"} color={"#ffffff"}>
                <GrNext />
            </Circle>
            <Input visibility={pathName === "/search" ? "visible" : "hidden"} placeholder="What do you want to listen to?" />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"} w={"60%"}>
            <Pills visibility={pathName === "/search" ? "hidden" : "visible"} bg={"#ffffff"} color={"#000000"} fontSize={"14px"}>
                Explore Premium
            </Pills>
            <Pills bg={"#000000"} color={"#ffffff"} fontSize={"14px"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={"4px"}>
                    <MdOutlineDownloadForOffline />
                    Install App
                </Flex>
            </Pills>
        
            <Circle size={'2em'} bg={"#000000"} color={"#ffffff"}>
                <HiOutlineBell />
            </Circle>
            <Circle size={'2em'} bg={"#000000"} color={"#ffffff"}>
                <HiOutlineUser />
            </Circle>
        </Flex>
    </Flex>
  )
}

export default Navbar