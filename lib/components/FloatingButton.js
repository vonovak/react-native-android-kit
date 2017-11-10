import React, {
	Component,
} from "react";
import PropTypes from 'prop-types';

import {
	View,
	TouchableWithoutFeedback,
	requireNativeComponent,
    ViewPropTypes,
} from "react-native";

const RNAKFloatingButton = requireNativeComponent("FloatingButtonAndroid", FloatingButton, {});

export default class FloatingButton extends Component {
	static displayName = "FloatingButtonAndroid";
	static propTypes = {
		...ViewPropTypes,
		...TouchableWithoutFeedback.propTypes,
		backgroundColor: PropTypes.string,
		rippleColor: PropTypes.string,
		icon: PropTypes.string,
		hidden: PropTypes.bool,
		rippleEffect: PropTypes.bool
	};
	static defaultProps = {
		style: {width: 50, height: 50},
		hidden: false,
		rippleEffect: true
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableWithoutFeedback {...this.props}>
				<RNAKFloatingButton
					style={this.props.style}
					backgroundColor={this.props.backgroundColor}
					rippleColor={this.props.rippleColor}
					icon={this.props.icon}
					hidden={this.props.hidden}
					rippleEffect={this.props.rippleEffect}/>
			</TouchableWithoutFeedback>
		);
	}
}
