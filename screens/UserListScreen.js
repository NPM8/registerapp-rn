import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
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
  }

  render() {
    return (
      <FlatList
        data={this.state.date}
        renderItem={(item) => <UserHolder handleOnPressEdit={this.handleOnPressEdit} handleOnPressDelete={}/>}
      />
    );
  }

  handleOnPressEdit(id) {
    const { navigation:  { navigate } } = this.props;

    navigate("edit", { id });
  }

  handleOnDefetePress(id) {
    fetch.
  }
}

UserListScreen.propTypes = {};

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(UserListScreen)(UserListScreen);
