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
    <Flex w={"full"} align={"center"} justifyContent={"space-between"} height={"100px"} mb={"6"} position={"sticky"} top={"0"} bg={"#0F171C"}>
        <Flex alignItems={"center"} gap={"8px"}>
            <Circle size={'2em'} bg={"#000000"}>
                <GrPrevious />
            </Circle>
            <Circle size={'2em'} bg={"#000000"}>
                <GrNext />
            </Circle>
            <Input visibility={pathName === "/search" ? "visible" : "hidden"} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"} w={"60%"}>
            
            <Pills visibility={pathName === "/search" ? "hidden" : "visible"} bg={"#ffffff"} color={"#000000"} fontSize={"14px"}>
                Explore Premium
            </Pills>
            <Pills bg={"#000000"} color={"#ffffff"} p={"4px 1px"} fontSize={"14px"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={"4px"}>
                    <MdOutlineDownloadForOffline />
                    Install App
                </Flex>
            </Pills>
            <Circle size={'2em'} bg={"#000000"}>
                <HiOutlineBell />
            </Circle>
            <Circle size={'2em'} bg={"#000000"}>
                <HiOutlineUser />
            </Circle>
        </Flex>
    </Flex>
  )
}

export default Navbar