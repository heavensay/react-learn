import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';
/*
react state传递测试
组件生命周期查看
*/
 class Main extends React.Component{

  constructor(props) {
      super(props);  
      this.state = {num: 0};  
  } 

  add = () =>{
    var num = this.state.num+1;
    this.setState({num:num});
  }

  render() {
    return (
    	<div>   
    		<Content num={this.state.num} id="1"></Content>
        <Content num="999" id="2"></Content>
        <button type="button" onClick={this.add}>add+1</button>
    	</div>
    	)
  }
}



	ReactDOM.render(
      <Main/>
	, document.getElementById('root'));