import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';

/* 路由定义*/
const RouteConfig = (
	<Router history={hashHistory}>
	  <Route path="/" component={Index}>
	     //:content代表传递参数,可通过this.props.params.content来获取
	    <Route path=":content" component={Content}/>
	    <Route path=":content" component={Content}/>
	  </Route>
	</Router>
);

export default RouteConfig;