import API from './api';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USER = 'GET_USER';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

const initialState = {
  users: [],
  user: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, loadingUser: true};
      break;
    case GET_USER_FAIL:
      return {...state, loadingUser: true, loadingError: 'Error getting user'};
      break;
    case GET_USER_SUCCESS:
      return {...state, loadingUser: false, user: action.payload };
      break;
    case GET_USERS:
      return {...state, loadingUsers: true};
      break;
    case GET_USERS_FAIL:
      return {...state, loadingUsers: true, loadingError: 'Error getting users'};
      break;
    case GET_USER_SUCCESS:
      return {...state, loadingUsers: false, users: action.payload};
      break;
  }
}

export function fetchUsers () {
  return {
    type: GET_USERS
  }
}

export function fetchUsersFaild () {
  return {
    type: GET_USERS_FAIL
  }
}

export function fetchusersSuccess (payload) {
  return {
    type: GET_USERS_SUCCESS,
    payload
  }
}

export function fetchUser () {
  return {
    type: GET_USER
  }
}

export function fetchUserFaild () {
  return {
    type: GET_USER_FAIL
  }
}

export function fetchUserSuccess (payload) {
  return {
    type: GET_USER_SUCCESS,
    payload
  }
}

export function getUser(id) {
  return (dispatch) => {
      dispatch(fetchUser());
      API.getUser(id)
        .then(res => dispatch(fetchUserSuccess(res)))
        .catch(err => dispatch(fetchUserFaild()));
  }
}

export function getUsers () {
  return (dispatch) => {
    dispatch(fetchUsers());
    API
  }
}
