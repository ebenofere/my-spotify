import { GrNext, GrPrevious } from "react-icons/gr"
import { Circle, Flex } from "../../styled-system/jsx"
import { Pills } from "@/custom/pills"
import { MdOutlineDownloadForOffline } from "react-icons/md"
import { HiOutlineBell, HiOutlineUser } from "react-icons/hi"

const Navbar = () => {
  return (
    <Flex w={"full"} align={"center"} justifyContent={"space-between"} mb={"12"}>
        <Flex alignItems={"center"} gap={"8px"}>
            <Circle size={'2em'} bg={"#000000"}>
                <GrPrevious />
            </Circle>
            <Circle size={'2em'} bg={"#000000"}>
                <GrNext />
            </Circle>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={"16px"} w={"60%"}>
            <Pills bg={"#ffffff"} color={"#000000"} fontSize={"14px"}>
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