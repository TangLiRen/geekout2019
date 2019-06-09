import * as React from 'react';
import { IndividualProblem } from './IndividualProblem';
import { problemDetails } from './problemDetails';

export class Door2Door extends React.Component {
  render() {
    return <IndividualProblem problem={problemDetails['topic2']} />;
  }
}
