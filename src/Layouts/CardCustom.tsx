import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
//import { ChangeEvent } from 'react'
//import{ Button, Input } from 'antd'
//import {  useState } from 'react'
import { IContentModel } from '../interfaces/interfaces'


export const CardCustom = observer( ({content}: {content: IContentModel}) =>{


    const { title, description,notes, changeNotes} = content
    
 return (

        <Card  title={title} bordered={false}>
            {description}
            <input 
            value={notes} 
            placeholder={notes}
             onChange={(e) => changeNotes(e.target.value)}/>
        </Card>
    )
}
)