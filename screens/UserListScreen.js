import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserHolder from '../components/UserHolder';

class UserListScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleOnPressEdit = this.handleOnPressEdit.bind(this);
    this.handleOnDefetePress = this.handleOnDefetePress.bind(this);
  }

  componentDidMount () {
    const {}
  }

  render() {
    const {users, loadingUsers} = this.props;
    if (loadingUsers) {
     return  (<View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
      }}>
      <Text style={{textAlign: "center"}}>Loading...</Text>
    </View>);
    }else {
      return (
        <FlatList
          data={users}
          renderItem={(item) => <UserHolder handleOnPressEdit={this.handleOnPressEdit} handleOnPressDelete={this.handleOnDefetePress}/>}
        />
      );
    }
  }

  handleOnPressEdit(id) {
    const { navigation:  { navigate } } = this.props;

    navigate("edit", { id });
  }

  handleOnDefetePress(id) {
    fetch("http://")
  }
}

UserListScreen.propTypes = {};

function mapStateToProps(state){
  console.log(state);
  const users = state.users.map(value => ({ ...value, key: value.id}));
  return {
    users: state.users,
    loadingUsers: state.loadingUsers,
  }
}

export default connect(mapStateToProps)(UserListScreen);
