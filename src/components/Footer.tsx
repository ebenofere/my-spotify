import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Box, Circle, Divider, HStack, VStack } from '../../styled-system/jsx'
import { Text } from '@/primitives'

const Footer = () => {
  return (
    <Box>
        <HStack alignItems={"flex-start"} justify={"space-between"} mt={12}>
            <HStack alignItems={"flex-start"} gap={"9em"} justify={"space-between"}>
                <VStack alignItems={"flex-start"}>
                    <Text fontWeight={"extrabold"}>Company</Text>
                    <Text>About</Text>
                    <Text>Jobs</Text>
                    <Text>For the Record</Text>
                </VStack>
                <VStack alignItems={"flex-start"}> 
                    <Text fontWeight={"extrabold"}>Communities</Text>
                    <Text>For Artists</Text>
                    <Text>Developers</Text>
                    <Text>Advertising</Text>
                    <Text>Investors</Text>
                    <Text>Vendors</Text>
                </VStack>
            </HStack>

            <HStack alignItems={"flex-start"}>
                <Circle bg={"#000000"} size={"40px"} >
                    <FaInstagram />
                </Circle>
                <Circle bg={"#000000"} size={"40px"} >
                    <FaTwitter />
                </Circle>
                <Circle bg={"#000000"} size={"40px"} >
                    <FaFacebook />
                </Circle>
            </HStack>
        </HStack>

        <VStack alignItems={"flex-start"} mt={8}>
            <Text fontWeight={"extrabold"}>Useful links</Text>
            <Text>Support</Text>
            <Text>Free Mobile App</Text>
        </VStack>  

        <Divider orientation={"horizontal"} bg={"#ff0000"} my={8} />

        <HStack justify={"space-between"} mb={12}>
            <HStack>
            <Text fontSize={"14px"}>Legal</Text>
            <Text fontSize={"14px"}>Privacy Center</Text>
            <Text fontSize={"14px"}>Privacy Policy</Text>
            <Text fontSize={"14px"}>Cookies</Text>
            <Text fontSize={"14px"}>About Ads</Text>
            <Text fontSize={"14px"}>Accessibility</Text>
            </HStack>
            <Box fontSize={"14px"}>&copy; 2023 Spotify AB</Box>
        </HStack>        
    </Box>
  )
}

export default Footer