import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Realize from 'realize'
import {Grid} from 'components/grid'
import {assert} from 'chai';
import {shallow} from 'enzyme';


describe('Grid', () => {
  it('exists', () => {
    assert.ok(Grid);
  });
  it('renders with the default props', () => {
    const content = shallow(
      <Grid
        url=''
      />
    );
    assert.ok(Grid);
  });
});
