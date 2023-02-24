import React from 'react'
import Layout from "./layout"
import { Route, Routes } from 'react-router-dom';
import FeedScreen from './screens/Feed';
import MessagesScreen from './screens/Messages';


const App: React.FC = () => {

  return (
  <Layout>
        <Routes>
          <Route path='/' element={<FeedScreen />}></Route>
          <Route path='/messages' element={<MessagesScreen />}></Route>
        </Routes>
  </Layout>
  )
  
};

export default App
