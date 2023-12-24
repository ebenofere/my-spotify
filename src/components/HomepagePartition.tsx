import React from 'react'
import { Box } from '../../styled-system/jsx'
import Navbar from './Navbar'
import PlaylistHead from './PlaylistHead'
import PlaylistOptions from './PlaylistOptions'
import CustomTable from './CustomTable'

const HomepagePartition = () => {
  return (
    <Box  w={"65%"} p={"2"} h={'full'}>
        <Box bg={"#121212"} color={"#ffffff"} px="10" py="5">
            <Navbar />
            
        </Box>
    </Box>
  )
}

export default HomepagePartition