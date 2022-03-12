import { Layout, Menu} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { CardCustom } from './CardCustom'

const {Header} = Layout
const information = [
{
     id: 1,
     title: 'Title',
     description: 'Some more text'
},
{ id: 2,
    title: 'Title',
    description: 'Some more text'

},
{
    id: 3,
    title: 'Title',
    description: 'Some more text'
},
{
    id: 4,
    title: 'Title',
    description: 'Some more text'
}]


export const ContentLayout = () => {





  
    
    return (
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
            {information.map((el,index)=>{
                return(
                    <CardCustom key={el.id}  title={ el.title } description={ el.description}  />
                )
            })
        }
        </Content>
    )


}