import React, { Component, PropTypes } from 'react';
import Navigation from './Footer';
import ToggleSwitch from './ToggleSwitch';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List'; 

import {grey800} from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object,
  };

  constructor() {
    super();

    this.styles = {
      root: {
        backgroundColor: grey800
      }
    };
  }

  renderContent() {
    return (
      <section>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Paper style={this.styles.root}>
            <List>
              <ToggleSwitch labelOn="Light 1 On" labelOff="Light 1 Off" />
              <ToggleSwitch labelOn="Light 2 On" labelOff="Light 2 Off" />
              <ToggleSwitch labelOn="Light 3 On" labelOff="Light 3 Off" />
              <ToggleSwitch labelOn="Light 4 On" labelOff="Light 4 Off" />
              <ToggleSwitch labelOn="Light 5 On" labelOff="Light 5 Off" />
            </List>
            <Navigation />
          </Paper>
        </MuiThemeProvider>
      </section>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default App