import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { Avatar} from 'react-native-elements';
import PropTypes from 'prop-types';

const UserEdit = props => {
  return (
    <View
      style={styles.main}
    >
      <Avatar

      />
      <Text />
      <TextInput

      />
      <TextInput

      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
});

UserEdit.propTypes = {

};

export default UserEdit;
