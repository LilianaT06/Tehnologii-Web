import React, { useEffect } from 'react'
import './App.css'


import  {Layout} from 'antd'
import { HeaderLayout } from './Layouts/HeaderLayout';
import { ContentLayout } from './Layouts/ContentLayout';
import { useRootStore } from './index'

function App() {

const rootStore = useRootStore()


useEffect(()=>{
  rootStore.setInitialStorageContents()
 // rootStore.setDataToLocalStorage()
 // rootStore.getDataFromLocalStorage()
//  rootStore.removeLocalStore()
})

  return (
    <>
    <Layout className='layout'>
    <HeaderLayout/>
    <ContentLayout/>
    </Layout>
   </>

  );
}

export default App;
