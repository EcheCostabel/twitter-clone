import React from 'react'
import Layout from "./layout"
import { Stack, Text } from '@chakra-ui/react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import FeedScreen from './screens/Feed';
import { Navigate } from 'react-router-dom';

const navigate = useNavigate()

const App: React.FC = () => {

  return (
  <Layout>
    <Stack direction='row'>
      <Stack>
        <Text>Logo de Twitter</Text>
      </Stack>

        <Routes>
          <Route path='/' element={<FeedScreen />}></Route>
          {/* navigate('/') */}
        </Routes>

    </Stack>
  </Layout>
  )
  
};

export default App
