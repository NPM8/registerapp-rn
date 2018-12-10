import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const UserInfo = props => {
  return (
    <View style={{flex: 1, flexDirection: "column", justifyContent: "center"}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Avatar
          rounded
          size={200}
          icon={{name: 'user', type: 'font-awesome'}}
        />
      </View>

      <Text style={{textAlign: 'center'}}> {props.data.username}</Text>
      <Text style={{textAlign: 'center'}}> {props.data.password} </Text>
    </View>
  );
};

UserInfo.propTypes = {
  data: PropTypes.object,
};

export default UserInfo;
