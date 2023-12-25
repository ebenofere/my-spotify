import { Box, Circle, Divider, Flex, Grid, HStack, VStack } from '../../styled-system/jsx'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from './Navbar'
import { Text } from '@/primitives'
import CardSmall from './CardSmall'
import CardBig from './CardBig'
import { trunc } from '@/utils/helpers'

const HomepagePartition = () => {
  return (
    <Box  w={"65%"} p={"2"} h={'full'} overflow={"scroll"} scrollbar={"hidden"} >
        <Box bg={"#0F171C"} color={"#ffffff"} px="10" py="5" rounded={"lg"}>
            <Navbar />
            <Text fontSize={"2em"} fontWeight={"bold"} mb={4}>Good evening</Text>
            <Box mb={8}>
              <Grid gridTemplateColumns="repeat(1, 1fr)" gap={"2px"}>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="Gospel" />
                  <CardSmall title="Hiphop" />
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="Afrobeats" />
                  <CardSmall title="Amapiano" />
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} gap={"16px"}>
                  <CardSmall title="UK Drill" />
                  <CardSmall title="Rap" />
                </Flex>
              </Grid>
            </Box>

            <Box mb={8}>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Made For Eben Ofere</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>Show all</Text>
              </Flex>
              <HStack justify={"space-between"} gap={"16px"}>
                <CardBig title={trunc("Daily Mix 1")} artist={trunc("Davido, Kizz Daniel, Burna Boy, Wizkid and more", 32)} />
                <CardBig title={trunc("Daily Mix 2")} artist={trunc("Bethel Music, Elevation Worship, Maverick City Music", 32)} />
                <CardBig title={trunc("Daily Mix 3")} artist={trunc("Travis Greene, Nathaniel Bassey, TY Bello, Dunsin Oyekan", 32)} />
                <CardBig title={trunc("Daily Mix 4")} artist={trunc("Limoblaze, CalledOut Music, Marizu, Greatman Takit", 32)} />
              </HStack>
            </Box>

            <Box mb={8}>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Your playlists</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>Show all</Text>
              </Flex>
              <HStack justify={"space-between"} gap={"16px"}>
                <CardBig title={trunc("New School")} artist={trunc("By Eben Ofere")} />
                <CardBig title="Razz" artist={trunc("By Eben Ofere")} />
                <CardBig title={trunc("South African House")} artist={trunc("By Eben Ofere")} />
                <CardBig title={trunc("EDM")} artist={trunc("By Eben Ofere")} />
              </HStack>
            </Box>

            <Box mb={8}>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Recently played</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>Show all</Text>
              </Flex>
              <HStack justify={"space-between"} gap={"16px"}>
                <CardBig title={trunc("Dreamy Forest Music")} artist={trunc("Wander into the magical mix of music")} />
                <CardBig title={trunc("Contemporary Gospel")}  artist={trunc("By Eben Ofere")} />
                <CardBig title={trunc("S2")} artist={trunc("Wizkid")} />
                <CardBig title={trunc("New School")} artist={trunc("By Eben Ofere")} />
              </HStack>
            </Box>

            <Box mb={8}>
              <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
                <Text fontSize={"1.5em"} fontWeight={"bold"}>Jump back in</Text>
                <Text fontSize={"14px"} fontWeight={"bold"}>Show all</Text>
              </Flex>
              <HStack justify={"space-between"} gap={"16px"}>
                <CardBig title={trunc("Yinka Ayefele's Playlist")} artist={trunc("By Mokson, the Playlist Guy!")} />
                <CardBig title={trunc("Naija Razz & Old School")}  artist={trunc("By Eben Ofere")} />
                <CardBig title={trunc("Coco Moon")} artist={trunc("Owl City")} />
                <CardBig title={trunc("The Lion King: The Gift [Deluxe Edition]")} artist={trunc("Beyoncé")} />
              </HStack>
            </Box>

            <HStack alignItems={"flex-start"} justify={"space-between"} mt={12}>
              <HStack alignItems={"flex-start"} gap={"5em"} justify={"space-between"}>
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={"bold"}>Company</Text>
                  <Text>About</Text>
                  <Text>Jobs</Text>
                  <Text>For the Record</Text>
                </VStack>
                <VStack alignItems={"flex-start"}> 
                  <Text fontWeight={"bold"}>Communities</Text>
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
              <Text fontWeight={"bold"}>Useful links</Text>
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
    </Box>
  )
}

export { HomepagePartition }