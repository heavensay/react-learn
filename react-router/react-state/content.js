import React from 'react';
import ReactDOM  from 'react-dom';

class Content extends React.Component{

	constructor(props) {
		super();
 		this.tag = "Content"+props.id;
  	}


  	componentWillMount = () => {
	    console.log(this.tag+' componentWillMount');
	  }

	componentDidMount  = () => {
	    console.log(this.tag+' componentDidMount ');
	  }

	  componentWillReceiveProps  = (newProps) => {
	    console.log(newProps);
	    console.log(this.tag+' componentWillReceiveProps ');
	  }



	  componentWillUpdate = (nextProps, nextState) => {
	    console.log(this.tag+' componentWillUpdate');
	  }

	  componentDidUpdate  = (prevProps, prevState) => {
	    console.log(this.tag+' componentDidUpdate');
	  }  

	  componentWillUnmount  = () => {
	    console.log(this.tag+' componentWillUnmount');
	  }  

 	render() {
   	 return (
   	 	<div style={{backgroundColor: 'yellow'}}>
    		{this.props.num}
    	</div>
      )
	}
}

export default Content;