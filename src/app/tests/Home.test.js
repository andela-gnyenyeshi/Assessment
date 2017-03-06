import expect from 'expect';
import {shallow, mount } from 'enzyme';
import React from 'react';
import { Home } from '../views/container/Home';

describe('Tests Home Component', () => {
  it('Renders the home component', () => {
    let props = {
      users: {
        data: []
      }
    };
    let renderedComponent = shallow(<Home {...props}/>);
    expect(renderedComponent.text()).toInclude('Github');
  });
});