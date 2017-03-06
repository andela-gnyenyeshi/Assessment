import {shallow, mount } from 'enzyme';
import expect from 'expect';
import React from 'react';
import { App } from '../views/App';

describe('App component test', function() {
  it('Renders App Component', () => {
    let props = {
      children: [],
      fetchPhpUsers: function() {}
    };
    let renderedComponent = shallow(<App {...props} />);
    expect(renderedComponent.find('.nav-wrapper').length).toBe(1);
    expect(renderedComponent.props().children).toBeA('object');
  });
});