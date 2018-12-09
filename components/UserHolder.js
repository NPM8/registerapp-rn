import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import MyButtonHandler from './MyButtonHandler';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  main: {
    height: 250,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 250,
    justifyContent: 'center'
  }
});

class UserHolder extends PureComponent {

  constructor (props) {
    super(props);
    this.handleOnPressEdit = this.handleOnPressEdit.bind(this);
  }

  render () {
    return (
      <View style={styles.main}>
        <Avatar
          rounded
          size="medium"
          icon={{name: 'user', type: 'font-awesome'}}
          containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
        />
        <View>{this.props.children}</View><MyButtonHandler handleOnPress={this.handleOnPressEdit} buttonStyle={styles.button}>Edit</MyButtonHandler><MyButtonHandler handleOnPress={styles.button}>Delete</MyButtonHandler>
      </View>
    );
  }

  handleOnPressEdit() {
    this.props.handleOnPressEdit(this.props.id);
  }

  handleOnPressDefete() {
    this.props.handleOnPressDelete(this.props.id);
  }

}

UserHolder.propTypes = {
  handleOnPressEdit: PropTypes.func.isRequired,
  handleOnPressDelete: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserHolder.defaultProps = {
  id: "lol",
};

export default UserHolder;
