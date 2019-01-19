import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { NavLink} from 'react-router-dom'



const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: '#09121a',
		height: '100vh',
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
	selected: {
		color: 'white',
	},
	draftsIcon: {
		color: 'white',
	},
})

class NestedList extends React.Component {
	state = {
		open: true,
	}

	handleClick = () => {
		this.setState(state => ({ open: !state.open }))
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<List component="nav" subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
					<ListItem button>
						<ListItemIcon>
							<SendIcon className={classes.draftsIcon} />
						</ListItemIcon>
						 <NavLink exact activeClassName="active" to="/form"> 
							<ListItemText inset primary="Form" classes={{ primary: classes.selected }} />
						 </NavLink> 
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon className={classes.draftsIcon} />
						</ListItemIcon>
						<NavLink exact activeClassName="active" to="/table">
							<ListItemText inset primary="Table" classes={{ primary: classes.selected }} />
						</NavLink>
					</ListItem>
					<ListItem button onClick={this.handleClick}>
						<ListItemIcon>
							<InboxIcon className={classes.draftsIcon} />
						</ListItemIcon>
						<ListItemText inset primary="Inbox" classes={{ primary: classes.selected }} />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.draftsIcon}>
									<StarBorder className={classes.draftsIcon} />
								</ListItemIcon>
								<ListItemText inset primary="Starred" classes={{ primary: classes.selected }} />
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		)
	}
}

NestedList.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NestedList)
