import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import { ListItem } from 'material-ui/List';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import { yellow300, grey600 } from 'material-ui/styles/colors'; 

const styles = {
    paddingBottom: 15,
    paddingTop: 15
};

class ToggleSwitch extends Component {
    state = {
        iconColor: grey600,
        isActive: false
    }

    toggleIcon() {
        this.setState({
            isActive: !this.state.isActive,
            iconColor: (!this.state.isActive) ? yellow300 : grey600 
        });
    }

    renderContent() {
        let label = this.state.isActive ? this.props.labelOn : this.props.labelOff; 
        return (
            <ListItem 
                style={styles}
                primaryText={label} 
                leftIcon={<LightBulbIcon color={this.state.iconColor} />} 
                rightToggle={<Toggle onToggle={() => this.toggleIcon()} />} />
        )
    }

    render() {
        return this.renderContent();
    }
}

export default ToggleSwitch;