import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'

import Button from '@material-ui/core/Button'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: '20px',
	},
	input: {
		margin: '5px',
	},
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: 'white',
	},
})

class Form extends React.Component {
	state = {
		name: 'Composed TextField',
		age: '',
		labelWidth: 0,
		checked: [0],
	}
	handleChange = event => {
		this.setState({ name: event.target.value })
	}
	handleToggle = value => () => {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked,
		})
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.container}>
				<List className={classes.root}>
					{[0, 1, 2, 3].map(value => (
						<ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
							<Checkbox checked={this.state.checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
							<ListItemText primary={`Line item ${value + 1}`} />
							<ListItemSecondaryAction>
								<IconButton aria-label="Comments">
									<CommentIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
					<ListItem>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="age-helper">Age</InputLabel>
							<Select
								value={this.state.age}
								onChange={this.handleChange}
								input={<Input name="age" id="age-helper" />}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<FormHelperText>Some important helper text</FormHelperText>
						</FormControl>
					</ListItem>
					<ListItem>
						<FormControl className={classes.formControl} variant="outlined">
							<InputLabel
								ref={ref => {
									this.labelRef = ReactDOM.findDOMNode(ref)
								}}
								htmlFor="component-outlined"
							>
								Name
							</InputLabel>
							<OutlinedInput
								id="component-outlined"
								value={this.state.name}
								onChange={this.handleChange}
								labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
							/>
						</FormControl>
					</ListItem>
					<ListItem>
						<Input
							placeholder="Placeholder"
							className={classes.input}
							inputProps={{
								'aria-label': 'Description',
							}}
						/>
					</ListItem>
					<ListItem>
						<Button variant="contained" color="primary" >
							save
						</Button>
					</ListItem>
				</List>
			</div>
		)
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Form)
