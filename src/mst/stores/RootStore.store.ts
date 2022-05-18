import {types} from 'mobx-state-tree'
import { ContentModel } from '../models/Content.model'


const RootStore = types.model('RootStore', {
       contents: types.array(ContentModel),

       content_notes: types.array(types.safeReference(ContentModel))
           
})
       
       
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
              console.log('>>$ {} was removed')
       } 
}))

.actions((self) => ({
       
       setInitialStorageContents(){
              self.setDataToLocalStorage(self.contents)
       },

       addNote(id:string){
              self.content_notes.push()
       }

}))




export default RootStore