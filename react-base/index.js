import React from 'react';
import ReactDOM from 'react-dom';

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
    		<div>content3</div>   
    		<div>content4</div>
    	</div>
    	);
  }
});

 var Content = React.createClass({
  render: function() {
    return (
    	<div style={{backgroundColor: 'yellow'}}>
    		{this.props.content}
    		gggg
    	</div>
    	);
  }
});


	ReactDOM.render(
		<Layout>
			<Header></Header>
    		<Content content="kkk"></Content>
		</Layout>
	, document.getElementById('root'));