import { TSearchPageCard } from '@/types/card'
import { Box } from '../../styled-system/jsx'
import { Text } from '@/primitives'
import Link from 'next/link'
import { generateRandomColor } from '@/utils/helpers'

const SearchpageCard = ({ title } : TSearchPageCard) => {
  const backGround = generateRandomColor();
  console.log(backGround, "background");

  return (
    <Link href={"#"}>
        <Box rounded={"lg"} bg={backGround} color={"#ffffff"} w="11em" h="11em" p={"16px"} mb={2}>
            <Text fontSize={"1.5em"} fontWeight={"bold"}>{title}</Text>
        </Box>
    </Link>
  )
}

export default SearchpageCard