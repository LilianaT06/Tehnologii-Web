import { Breadcrumb, Layout} from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { CardCustom } from './CardCustom'
import { CustomForm } from '../components/CustomForm/CustomForm'

const {Header} = Layout
const information = [
{
     id: 1,
     title: 'Card 1',
     description: 'Some more text'
},
{ id: 2,
    title: 'Card 2',
    description: 'Some more text'

},
{
    id: 3,
    title: 'Card 3',
    description: 'Some more text'
},
{
    id: 4,
    title: 'Crad 4',
    description: 'Some more text'
}]


export const ContentLayout = () => {



    
    return (
<>

        <Content style = {{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0'}}>
            <Breadcrumb.Item> Home </Breadcrumb.Item>
            <Breadcrumb.Item> List </Breadcrumb.Item>
            <Breadcrumb.Item> App </Breadcrumb.Item>
        
        </Breadcrumb>

        <div   className="site-layout-content">



            {information.map((el,index)=>{
                return(
                    <CardCustom key={el.id}  title={ el.title } description={ el.description}  />
                )
            })

        
        }
      <br></br>
      <br></br>

          <CustomForm/>
        <div>

        </div>

        </div>
        </Content>
        </>
    )


}