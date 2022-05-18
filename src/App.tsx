import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './login'
import { useAuthContext } from './hooks/useAuth'
import './App.css'


import  {Layout} from 'antd'
import { HeaderLayout } from './Layouts/HeaderLayout';
import { ContentLayout } from './Layouts/ContentLayout';
import { useRootStore } from './index'

function App() {

const rootStore = useRootStore()

const { isLogined } = useAuthContext()
useEffect(()=>{
  rootStore.setInitialStorageContents()
 // rootStore.setDataToLocalStorage()
 // rootStore.getDataFromLocalStorage()
//  rootStore.removeLocalStore()
})
const Panel = () => {
  return(
  <Layout className='layout'>
    <HeaderLayout/>
    <ContentLayout/>
  </Layout>
  )
}


  return (
    <BrowserRouter>
       <Routes>
        
         {
           !isLogined ?         
          
              <Route path="/" element={<Login/>} />
           :   
              <Route path="/panel" element={<Panel/>}/>
          
         }
       
       </Routes>
    </BrowserRouter>
  );
}

export default App;
