import { Flex } from "../styled.components"
import Carousel from "./Carousel"
import Info from "./Info"


export const Main = () => {
  return (<>
     <Flex>
      <Carousel />
      <Info />
     </Flex>
  </>)
}