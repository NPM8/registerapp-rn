import 'react-native';
import React from 'react';
import MyButtonHandler from '../MyButtonHandler';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MyButtonHandler handleOnPress={() => console.log("test")}>Test</MyButtonHandler>).toJSON();

  expect(tree).toMatchSnapshot();
});
