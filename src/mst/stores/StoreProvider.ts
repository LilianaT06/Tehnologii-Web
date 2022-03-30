
import RootStore from "./RootStore.store"

const storeProvider = RootStore.create( {
    contents: [
        {
        
            id: '1',
            title: 'Card 1',
            description: 'Some more text',
            seen: false,
            notes: ''
       
       },
       { id: '2',
           title: 'Card 2',
           description: 'Some more text',
           seen: false,
           notes: ''
     
       
       },
       {
           id: '3',
           title: 'Card 3',
           description: 'Some more text',
           seen: false,
           notes: ''
       },
           
       {
           id: '4',
           title: 'Card 4',
           description: 'Some more text',
           seen: false,
           notes: 'four'
        
       },

       {
        id: '5',
        title: 'Card 5',
        description: 'Some more text',
        seen: true,
        notes: ''
  
         }
    ]
})

export default storeProvider