import { TSearchPageCard } from '@/types/card'
import { Box } from '../../styled-system/jsx'
import { Text } from '@/primitives'
import Link from 'next/link'

const SearchpageCard = ({ title } : TSearchPageCard) => {
  return (
    <Link href={"#"}>
        <Box rounded={"lg"} bg="#8400E7" color={"#ffffff"} w="11em" h="11em" p={"16px"} mb={2}>
            <Text fontSize={"1.5em"} fontWeight={"bold"}>{title}</Text>
        </Box>
    </Link>
  )
}

export default SearchpageCard