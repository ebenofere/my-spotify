import { Box } from '../../styled-system/jsx'
import CustomTable from './CustomTable';
import Navbar from './Navbar';
import PlaylistHead from './PlaylistHead';
import PlaylistOptions from './PlaylistOptions';

const Playlist = () => {
  return (
    <Box w={"65%"} overflow={"scroll"} scrollbar={"hidden"} position={"relative"} bg={"#121212"} rounded={"lg"} my={"2"}>
        <Navbar />
        <Box width={"full"} color={"#ffffff"} px="10" py="5" rounded={"lg"}>
            <PlaylistHead />
            <PlaylistOptions />
            
            {/* Music Library Table */}
            <CustomTable />
        </Box>
    </Box>
  )
}

export { Playlist }