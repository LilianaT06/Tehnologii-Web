
import { List } from "antd"
import { Content } from "antd/lib/layout/layout"
import { IContentModel } from "../../../interfaces/interfaces"



export const Note = ({content}: {content:IContentModel} ) => {
    return(
        <List.Item.Meta
                title={Content}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
    )
}