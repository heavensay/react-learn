import React from 'react';
import ReactDOM  from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyTabs from './tabs';

// 引入Ant-Design
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component{

  constructor(props, context) {
    super(props, context)

    this.state = {
      itemTitle:undefined,
      itemKey:undefined
    }
  }

  onClick = (selectdMenu) => {
    this.setState({itemTitle:selectdMenu.item.props.menuName,itemKey:selectdMenu.key});
  }

  render() {
    console.log('ddddddd='+this.state.itemTitle);

    return(
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <div>content1</div>
            <div>content2</div>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              onClick={this.onClick}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />系统管理</span>}>
                <Menu.Item key="1" menuName="app秘钥管理">app秘钥管理</Menu.Item>
                <Menu.Item key="2" menuName="接口调用授权">接口调用授权</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />一键入离职</span>}>
                <Menu.Item key="5">邮件发送字段管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <MyTabs tabTitle={this.state.itemTitle} tabKey={this.state.itemKey} ></MyTabs>
          </Layout>  
        </Layout>
      </Layout>
    )
  }
}


ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);
