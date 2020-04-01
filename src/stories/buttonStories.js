import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
.add("button", () => (
  <Button label={`Search`} fill={true} active={true} />
))













  // .add('with outline', () => <Button
  //   label="Ouline Button"
  //   style={{ background: 'transparent', border: '3px solid #fecd43' }}
  // />)








  // .add('with rounder corners', () => <Button
  //   label="Rounded Button"
  //   style={{ borderRadius: '15px' }}
  // />)
  // .add('disabled', () => <Button disabled
  //   label="Disabled Button"
  //   style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
  // />)


  