import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#777777',
    padding: 5,
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

class MyButtonHandler extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {textStyle, buttonStyle, handleOnPress, children} = this.props;
    return (
      <TouchableOpacity style={buttonStyle} onPress={handleOnPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

MyButtonHandler.propTypes = {
  textStyle: Text.propTypes.style,
  buttonStyle: TouchableOpacity.propTypes.style,
  handleOnPress: PropTypes.func.isRequired
};

MyButtonHandler.defaultProps = {
  textStyle: styles.text,
  buttonStyle: styles.button,
};



export default MyButtonHandler;

