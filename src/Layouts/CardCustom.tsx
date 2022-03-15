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

 return (

        <Card  title={title} bordered={false}>
            {description}
            <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder={title}/>
       <Button onClick = {showValueInAlert}> Send </Button>
        </Card>
    )
}
