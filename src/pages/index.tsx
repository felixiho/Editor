
import Layout from '@/Layouts/Layout'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { ReactElement } from "react";
import { NextPageWithLayout } from './_app'
import Title from '@/modules/Home/Title';
import Editor from '@/modules/Editor/Editor';


const Home: NextPageWithLayout = () => {

  return (
    <Flex mb={24} p={[4,6, 20]} w="full" as="section" wrap={"wrap"} alignContent={"flex-start"} justifyContent={"center"}  >
      <Heading w="full" textAlign={"center"}>Wazobia Editor</Heading>
      <Flex maxW={"762px"} w={"full"} wrap="wrap" border="1px solid #E7F1E9" mt={32} p={[4, 8]} rounded={"lg"} >
        <Title />
        <Editor />
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