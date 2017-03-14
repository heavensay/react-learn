import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';

var Layout = React.createClass({
  render: function() {
    return (
    	<div style={{webkitBoxOrient: 'vertical',backgroundColor: '#00a0e9',boxAlign:'horizontal'}}>
    		{
    			  React.Children.map(this.props.children, function (child) {
          			return <div>{child}</div>;
          		})
        	}
    	</div>
    	);
  }
});
	
	
 var Header = React.createClass({
  render: function() {
    return (
    	<div  style={{ display:'-webkit-box',webkitBoxOrient: 'horizontal'}}>
    		<Link to="/ddd/content1">content1</Link>
    		<Link to="content2">content2</Link>
    	</div>
    	);
  }
});

 var Content = React.createClass({
  render: function() {
    return (
    	<div style={{backgroundColor: 'yellow'}}>
    		{this.props.content}
    	</div>
    	);
  }
});

/* 路由定义*/
var routes = 
<Router history={hashHistory}>
  <Route path="/ddd" component={Layout}>
    <IndexRoute component={Header}/>
    <Route path="/ddd/content1" component={Content}/>
    <Route path="/ddd/content2" component={Content}/>
  </Route>
</Router>;

/**
	ReactDOM.render(
		<Layout>
			<Header></Header>
    	<Content content="kkk"></Content>
		</Layout>
	, document.getElementById('root'));
  */
  ReactDOM.render(
    routes
  , document.getElementById('root'));