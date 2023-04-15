import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";


export const colors = {
    brand: "#8B919F",
    green: "#4AB299",
    pink: "#E55986",
    primary: "#2A2D40",
    whiteSmoke: "#F0F0F0"
}


const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg:  "#FAFAFA",
      }
    })
  },
  fonts: {
    heading: `pvc, sans-serif`,
    body: `Outfit, sans-serif`,
  },
  colors: {
    brand: "#8B919F", 
  },
  
})

export default theme