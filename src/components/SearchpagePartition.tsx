import { Box, Grid } from '../../styled-system/jsx'
import Navbar from './Navbar'
import { Text } from '@/primitives'
import SearchpageCard from './SearchpageCard';
import Footer from './Footer';

const SearchpagePartition = () => {
    return (
        <Box  w={"65%"} h={'full'} overflow={"scroll"} scrollbar={"hidden"} bg={"#121212"} rounded={"lg"} my={"2"}>
            <Navbar />
            <Box color={"#ffffff"} px="10" pb="5" rounded={"lg"}>
                <Text fontSize={"1.5em"} fontWeight={"bold"} mb={4}>Browse all</Text>
                <Grid gridTemplateColumns="repeat(4, 1fr)" gap={"16px"}>
                    <SearchpageCard title={"Podcasts"} />
                    <SearchpageCard title={"Audiobooks"} />
                    <SearchpageCard title={"Podcasts"} />
                    <SearchpageCard title={"Live Events"} />
                    <SearchpageCard title={"Made For You"} />
                    <SearchpageCard title={"New Releases"} />
                    <SearchpageCard title={"Top Albums"} />
                    <SearchpageCard title={"2023 in Music"} />
                    <SearchpageCard title={"2023 in Podcasts"} />
                    <SearchpageCard title={"Merch"} />
                    <SearchpageCard title={"Happy Holidays"} />
                    <SearchpageCard title={"Hip-Hop"} />
                    <SearchpageCard title={"Pop"} />
                    <SearchpageCard title={"Country"} />
                    <SearchpageCard title={"Podcast Charts"} />
                    <SearchpageCard title={"Educational"} />
                    <SearchpageCard title={"Documentary"} />
                    <SearchpageCard title={"Comedy"} />
                    <SearchpageCard title={"Charts"} />
                    <SearchpageCard title={"Francophone"} />
                    <SearchpageCard title={"GLOW"} />
                    <SearchpageCard title={"Rock"} />
                    <SearchpageCard title={"Frequency"} />
                    <SearchpageCard title={"Discover"} />
                </Grid>
                <Footer />
            </Box>
        </Box>
      )
}

export { SearchpagePartition }