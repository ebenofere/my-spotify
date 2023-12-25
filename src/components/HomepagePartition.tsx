import { Box, Circle, Divider, Flex, Grid, HStack, VStack } from '../../styled-system/jsx'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from './Navbar'
import { Text } from '@/primitives'
import CardSmall from './CardSmall'
import CardBig from './CardBig'
import { trunc } from '@/utils/helpers'
import Footer from './Footer';

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

            <Footer />
        </Box>
    </Box>
  )
}

export { HomepagePartition }