import { Breadcrumb, Layout, List} from 'antd'
import  { Content } from 'antd/lib/layout/layout'
import { useRootStore } from '..'
import { CardCustom } from './CardCustom'
//import { CardCustom } from './CardCustom'
//import { CustomForm } from '../components/CustomForm/CustomForm'
import { Row } from 'antd'
import { IContentModel } from '../interfaces/interfaces'

const { Footer } = Layout

export const ContentLayout = () => {
    const {contents,contents_notes,Note} = useRootStore()
    console.log('>>root_store', contents)
    
    return (
<>

        <Content style = {{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0'}}>
            <Breadcrumb.Item> Home </Breadcrumb.Item>
            <Breadcrumb.Item> List </Breadcrumb.Item>
            <Breadcrumb.Item> App </Breadcrumb.Item>
        
        </Breadcrumb>

        <div   className="site-layout-content">

        <Row gutter={16}>
            {contents.map((content: IContentModel) => {
                return (
                    <CardCustom key={content.id} content={content}/>)
                 })}
                  </Row>

        </div>
        <div>
            <List
            itemLayout='horizontal'
            dataSource={ contents_notes}
            renderItem ={ (content:any) => (
                <List.Item>
                <Note content = { content}/>
                </List.Item>
            )}
            />
                      
                      </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </>
    )


}
