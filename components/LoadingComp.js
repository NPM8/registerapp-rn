import React from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <Text style={{textAlign: "center"}}>Loading...</Text>
    </View>
  );
};

export default MyComponent;
