 
import Layout from '@/Layouts/Layout' 
import { Box, Flex, Heading } from '@chakra-ui/react'
import { ReactElement } from "react";
import { NextPageWithLayout } from './_app'
import Title from '@/modules/Home/Title';


const Home: NextPageWithLayout = () => {

  return (
    <Flex p={20} w="full" as="section" wrap={"wrap"} alignContent={"flex-start"} justifyContent={"center"} bg={"#FAFAFA"} height={"100vh"} >
        <Heading w="full" textAlign={"center"}>Wazobia Take Home</Heading> 
        <Flex maxW={"762px"} w={"full"} border="1px solid #E7F1E9"  mt={32} p={8} rounded={"lg"} >
          <Title />
        </Flex>

    </Flex>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>  
          {page} 
    </Layout>

  )
}

export default Home