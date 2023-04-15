 
import Layout from '@/Layouts/Layout' 
import { Box } from '@chakra-ui/react'
import { ReactElement } from "react";
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {

  return (
    <Box pb={20} as="section" >
 home
    </Box>
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