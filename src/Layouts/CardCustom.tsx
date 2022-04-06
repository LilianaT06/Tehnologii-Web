 lab5_2
import { Button, Checkbox } from 'antd'


import { Checkbox } from 'antd'
 main
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
//import { useEffect } from 'react'
//import { ChangeEvent } from 'react'
//import{ Button, Input } from 'antd'
//import {  useState } from 'react'
import { IContentModel } from '../interfaces/interfaces'




export const CardCustom = observer( ({content}: {content: IContentModel}) =>{


    const { title, description,notes, changeNotes, changeSeen, isSeen, addNote} = content
    

import Card from 'antd/lib/card'
import{ Button, Input } from 'antd'
import { useEffect, useRef, useState } from 'react'


export const CardCustom = ({title,description, }: {title:string, description:string}) =>{
    
const [ inputValue, setInputValue] = useState('')

 
useEffect(() =>{
    console.log(">>useEffect")

    return () => {
        console.log(">>UseCount")
    }
},[])






const showValueInAlert = ()=>{
    alert(inputValue)
} 
 main

 return (

        <Card  title={title} bordered={false}>
            {description}

            <input 
            value={notes} 
            placeholder={notes}
             onChange={(e) => changeNotes(e.target.value)}/>

             <Checkbox value={isSeen} onChange={(e)=>changeSeen(e.target.value)}/>
        
        <Button onClick={addNote}>Add Notes</Button>


        </Card>
    )
}
)

            <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder={title}/>
       <Button onClick = {showValueInAlert}> Send </Button>
        </Card>
    )
}
 main
