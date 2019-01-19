import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import Menulist from './MenuList.jsx'
import MenuAppBar from './HeaderBar.jsx'
import Collapse from '@material-ui/core/Collapse'
import Slide from '@material-ui/core/Slide'
import { BrowserRouter} from 'react-router-dom'
import Routes from '../router.jsx'

const styles = {
	root: {
		flexGrow: 1,
		width: '100%',
		color: 'white',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	show: {
		display: 'block',
	},
	hidden: {
		display: 'none',
	},
	content: {
		color: '#333',
	},
}

class Layerout extends React.Component {
	state = {
		left: true,
		open: true,
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		})
	}
	handleCollapse = () => {
		this.setState(state => ({ open: !state.open }))
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<BrowserRouter>
					<Grid container spacing={0}>
						<Grid item className={this.state.open ? classes.show : classes.hidden}>
							{/* <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
							<div tabIndex={0} role="button">
								<Menulist toggleDrawer={this.toggleDrawer}/>
							</div>
            </Drawer> */}
							{/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
							<Menulist />
						</Collapse> */}
							<Slide direction="right" in={this.state.open} timeout={300}>
								<Menulist />
							</Slide>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={0}>
								<Grid item>
									<MenuAppBar handleCollapse={this.handleCollapse} />
								</Grid>
								<Grid item className={classes.content}>
									<Routes/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</BrowserRouter>
			</div>
		)
	}
}

Layerout.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layerout)
