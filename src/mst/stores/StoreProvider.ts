
import RootStore from "./RootStore.store"

const storeProvider = RootStore.create( {
    contents: [
        {
        
            id: '1',
            title: 'Card 1',
            description: 'Some more text',
            seen: false
       
       },
       { id: '2',
           title: 'Card 2',
           description: 'Some more text',
           seen: false
     
       
       },
       {
           id: '3',
           title: 'Card 3',
           description: 'Some more text',
           seen: false
       },
           
       {
           id: '4',
           title: 'Card 4',
           description: 'Some more text',
           seen: false
        
       },

       {
        id: '5',
        title: 'Card 4',
        description: 'Some more text',
        seen: true
  
         }
    ]
})

export default storeProvider