import React from 'react';
import ReactDOM  from 'react-dom';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;


export default class MyTabs extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    console.log(props);
    const panes = [{ title: props.tabTitle, content: '', key: props.tabKey}];

    this.state = {
      activeKey:panes[0].key,
      panes,
    };

    // if(typeof(props.tabTitle)!="undefined" && typeof(props.tabKey) != "undefined"){
    //   panes.push({ title: props.tabTitle, content: '', key: props.tabKey});

    //   this.state.activeKey = "panes[0].key";
    // }

    console.log('MyTabs constructor'+props);
  }



  componentWillMount = () => {
    console.log('<MyTa></MyTa>bs componentWillMount');
  }

  componentDidMount  = () => {
    console.log('MyTabs componentDidMount ');
  }

  componentWillReceiveProps  = (newProps) => {

    let activeKey = this.state.activeKey;
    let lastIndex = 0;
    let panes = this.state.panes;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === activeKey) {
        lastIndex = i - 1;
      }
    });

    console.log("receive::"+lastIndex);
    console.log(newProps);

    if (lastIndex >= 0) {
      activeKey = panes[lastIndex].key;
      this.setState({ panes, activeKey });
    }else{
      this.add(newProps.tabKey,newProps);
    }

    console.log(newProps);
    console.log('MyTabs componentWillReceiveProps ');
  }

  shouldComponentUpdate  = (newProps, newState) => {
    console.log('MyTabs shouldComponentUpdate ');
    return true;
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MyTabs componentWillUpdate');
  }

  componentDidUpdate  = (prevProps, prevState) => {
    console.log('MyTabs componentDidUpdate');
  }  

  componentWillUnmount  = () => {
    console.log('MyTabs componentWillUnmount');
  }  

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  onEdit = (targetKey, action) => {
    console.log('onedit'+action);
    console.log('onedit'+targetKey);
    this[action](targetKey);
  }
  add = (targetKey,tabItem) => {
    const panes = this.state.panes;
    const activeKey = tabItem.tabKey;
    panes.push(tabItem);
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        hideAdd="true"
      >
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content+new Date()}</TabPane>)}
      </Tabs>
    );
  }
}

MyTabs.propTypes={
  tabTitle:React.PropTypes.string.isRequired,
  tabKey:React.PropTypes.string.isRequired
}