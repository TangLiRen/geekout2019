import * as React from 'react';
import { IndividualProblem } from './IndividualProblem';
import { problemDetails } from './problemDetails';

export class MOLSchooling extends React.Component {
  render() {
    return <IndividualProblem problem={problemDetails['topic3']} />;
  }
}
