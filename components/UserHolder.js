import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements';
import MyButtonHandler from './MyButtonHandler';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: 'center'
  }
});

class UserHolder extends PureComponent {

  constructor (props) {
    super(props);
    this.handleOnPressEdit = this.handleOnPressEdit.bind(this);
    this.handleOnPressDefete = this.handleOnPressDefete.bind(this);
  }

  render () {
    return (
      <View style={styles.main}>
        <View style={{width: 60, marginLeft: 20, marginTop: 15}}>
          <Avatar
            rounded
            size="medium"
            icon={{name: 'user', type: 'font-awesome'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
          <Text>{this.props.children}</Text>
        </View>
        <MyButtonHandler handleOnPress={this.handleOnPressEdit} buttonStyle={styles.button}>Edit</MyButtonHandler>
        <MyButtonHandler handleOnPress={this.handleOnPressDefete} buttonStyle={styles.button}>Delete</MyButtonHandler>
      </View>
    );
  }

  handleOnPressEdit() {
    this.props.handleOnPressEdit(this.props.id);
  }

  handleOnPressDefete() {
    this.props.handleOnPressDelete(this.props.userObj);

  }

}

UserHolder.propTypes = {
  handleOnPressEdit: PropTypes.func.isRequired,
  handleOnPressDelete: PropTypes.func,
  userObj: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserHolder.defaultProps = {
  id: "lol",
};


export default UserHolder;
