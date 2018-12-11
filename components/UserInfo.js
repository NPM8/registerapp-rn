import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import Colors from '../constants/Colors';

const UserInfo = props => {
  return (
    <View style={{flex: 1, flexDirection: "column", justifyContent: "center"}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Avatar
          rounded
          size={'large'}
          icon={{name: 'user', type: 'font-awesome', color: Colors.mainColor}}
          containerStyle={{
            flex: 5,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: Colors.mainColor
          }}
        />
      </View>

      <Text style={{textAlign: 'center', fontSize: 24}}> {props.data.username}</Text>
      <Text style={{textAlign: 'center', fontSize: 24}}> {props.data.password} </Text>
    </View>
  );
};

UserInfo.propTypes = {
  data: PropTypes.object,
};

export default UserInfo;
