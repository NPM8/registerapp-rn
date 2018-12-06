import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import MyButtonHandler from '../components/MyButtonHandler';
import API from '../api';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
    this.handleOnChangeLogin = this.handleOnChangeLogin.bind(this);
    this.handleOnChangePsswd = this.handleOnChangePsswd.bind(this);
    this.handleRegisterPress = this.handleRegisterPress.bind(this);
  }

  handleRegisterPress() {
    console.log(this.state.login, this.state.password, "Click");
    API.addUser({username: this.state.login, password: this.state.password}).then(res => console.log(res));
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
        <View style={styles.titleMain} >
          <Text style={styles.titleText} >Register User App</Text>
        </View>
        <View style={styles.inputMain}>
          <View style={{width: 300, alignSelf: 'center'}}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Login"
              onChangeText={this.handleOnChangeLogin}
            />
            <TextInput
              style={styles.inputLogin}
              placeholder="Password"
              onChangeText={this.handleOnChangePsswd}
            />
          </View>
          <MyButtonHandler handleOnPress={this.handleRegisterPress}>Register</MyButtonHandler>
        </View>

      </KeyboardAvoidingView>
    );
  }

  handleOnChangeLogin(text) {
    this.setState({login: text});
  }

  handleOnChangePsswd(text) {
    this.setState({password: text});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4056',
    flexDirection: 'column',
  },
  titleMain: {
      flex: 1,
      backgroundColor: '#009587',
      flexDirection: 'column',
      justifyContent: 'center'
    },
  titleText: {
      width: 200,
      fontSize: 24,
      color: '#fff',
      alignSelf: 'center',
      textAlign: 'center'
    },
  inputMain: {
      flex: 2,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40
  },
  inputLogin: {
      width: 250,
      height: 50,
      fontSize: 18,
      color: '#565656',
      borderBottomColor: '#858585',
    borderBottomWidth: 2,
    padding: 10,
    alignSelf: 'center'
  }
});
