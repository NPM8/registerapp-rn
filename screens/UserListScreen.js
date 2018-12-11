import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from "../reducer";
import PropTypes from 'prop-types';
import UserHolder from '../components/UserHolder';
import Loading from '../components/LoadingComp';
import Api from '../api';
import Colors from '../constants/Colors';

class UserListScreen extends PureComponent {
  static navigationOptions = {
    title: "admin page",
    headerStyle: {
      backgroundColor: Colors.mainColor
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };

  constructor(props) {
    super(props);
    this.handleOnPressEdit = this.handleOnPressEdit.bind(this);
    this.handleOnDefetePress = this.handleOnDefetePress.bind(this);
    // props.getUsers();
  }

  componentDidMount () {
    const {getUsers, navigation: { addListener } } = this.props;
    // console.log(addListener);
    addListener("willFocus", payload => {
      getUsers();
    })
  }

  render() {
    const {users, loadingUsers} = this.props;
    console.log(users);
    if (loadingUsers) {
     return (<Loading/>);
    }else {
      // {item.id}: {item.username} {item.password}
      return (
        <FlatList
          data={users}
          renderItem={(item) => { return (<UserHolder handleOnPressEdit={this.handleOnPressEdit} key={item.item.key} userObj={item.item} id={item.item.id} handleOnPressDelete={this.handleOnDefetePress}> {item.item.key}: {item.item.username} {item.item.password} </UserHolder>) } }
        />
      );
    }
  }

  handleOnPressEdit(id) {
    const { navigation:  { navigate } } = this.props;

    navigate("userDetails", { id , edit: false});
  }

  handleOnDefetePress(data) {
    Api.delUser(data)
      .then(res => {
        this.props.getUsers();
        console.log(res);
      });
  }
}

UserListScreen.propTypes = {};

function mapStateToProps(state){
  const users = state.users.map(value => ({ ...value, key: value.id}));
  return {
    users: users,
    loadingUsers: state.loadingUsers,
  }
}

const mapDispatchToProps ={
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);
