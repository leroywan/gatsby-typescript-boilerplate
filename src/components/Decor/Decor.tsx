import React from 'react';

import {Line} from './components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Decor extends React.PureComponent<ComposedProps, State> {
  static Line;
  render() {
    return null;
  }
}

Decor.Line = Line;
