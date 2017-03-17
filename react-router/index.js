import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';

var Index = React.createClass({
  render: function() {
    return (
    	<div style={{webkitBoxOrient: 'vertical',backgroundColor: '#00a0e9',boxAlign:'horizontal'}}>

        <div  style={{ display:'-webkit-box',webkitBoxOrient: 'horizontal'}}>
          <Link to="/content1">content1{new Date().toLocaleString()}</Link>
          <Link to="/content2">content2</Link>
        </div>

    		{
    			  React.Children.map(this.props.children, function (child) {
          			return <div>{child}</div>;
          		})
        	}
    	</div>
    	);
  }
});
	

 var Content = React.createClass({
  render: function() {

    return (
    	<div style={{backgroundColor: 'yellow'}}>
        {this.props.params.content+new Date().toLocaleString()}
    	</div>
    	);
  }
});

/* 路由定义*/
var routes = 
<Router history={hashHistory}>
  <Route path="/" component={Index}>
     //:content代表传递参数,可通过this.props.params.content来获取
    <Route path=":content" component={Content}/>
    <Route path=":content" component={Content}/>
  </Route>
</Router>;


  ReactDOM.render(
    routes
  , document.getElementById('root'));