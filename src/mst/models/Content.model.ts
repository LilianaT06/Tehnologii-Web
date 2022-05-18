import { getParentOfType, types, } from "mobx-state-tree";
import RootStore from "../stores/RootStore.store";

export const ContentModel = types.model('ContentModel', {
id: types.identifier,
title: '',
description: '',
seen: false,
notes: ''
})
.views((self)=>({
    get isSeen(){
        return self.seen
    }, 
    findInTitle (param:any){
        self.title.includes(param)
    }


}
))

.actions((self)=> ({
changeNotes(value:string){
    self.notes = value
},
changeSeen(state:boolean){
    self.seen = state
},
addNote(){
   const rootStore= getParentOfType(self, RootStore)
   console.log('>>Before', rootStore.content_notes)
   rootStore.addNote(self.id)
   console.log('>>After', rootStore.content_notes)
   // getParent()
}
}))