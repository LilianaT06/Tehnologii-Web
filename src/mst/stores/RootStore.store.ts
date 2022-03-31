import { values } from 'mobx'
import {types} from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'


const RootStore = types.model('RootStore', {
       contents: types.array(ContentModel)})

.actions(() => ({
       setDataToLocalStorage(any = {}){
              localStorage.setItem('initialState','string')
       },
       getDataFromLocalStorage(string = 'initialState'){
             const storage =  localStorage.getItem('')
             console.log('>>storage', storage)
             return storage
       },
       removeLocalStorage(string = 'initialState'){
              localStorage.removeItem('')
              console.log('>>$() was removed')
       }
}))

export default RootStore