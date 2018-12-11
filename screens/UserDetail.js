import React, { PureComponent as Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/LoadingComp';
import UserInfo from '../components/UserInfo';
import { View, StyleSheet, } from 'react-native';
import { getUser } from '../reducer';
import Colors from '../constants/Colors';

class UserDetail extends Component {
  static navigationOptions = {
    title: "edit user",
    headerStyle: {
      backgroundColor: Colors.mainColor
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };

  constructor (props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  componentDidMount () {
    this.setState({
      id: this.props.navigation.getParam('id')
    }, this.props.getUser(this.props.navigation.getParam('id')));

    this.props.navigation.addListener('willFocus', payload => {
      // console.log('id: ',this.props.navigation.getParam('id'))
      this.setState({
        id: this.props.navigation.getParam('id')
      }, this.props.getUser(this.props.navigation.getParam('id')));
    })
  }

  render () {
    const edit = this.props.navigation.getParam('edit');
    const { user, loadingUser } = this.props;
    console.log(user, loadingUser);
    if(loadingUser) {
      return (<Loading/>);
    } else {
      return (<View style={{flex: 1, }}>
        {(!edit) ? <UserInfo data={user}/> : <Text> Test</Text>}
      </View>)
    }
  }
}

const styles = StyleSheet.create({

});

UserDetail.propTypes = {
  edit: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loadingUser: state.loadingUser
  }
};

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
