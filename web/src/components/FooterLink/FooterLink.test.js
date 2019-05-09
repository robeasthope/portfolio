import React from 'react';
import renderer from 'react-test-renderer';

import FooterLink from './FooterLink';

describe('FooterLink', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FooterLink href="https://www.google.com">Google.com</FooterLink>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
