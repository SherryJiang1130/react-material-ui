import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Table from './component/Table.jsx'
import Form from './component/Form.jsx'
const Routes = () => {
	return (
		<Switch>
			<Route path="/table" component={Table} />
            <Route path="/form" component={Form} />
		</Switch>
	)
}
export default Routes
