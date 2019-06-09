import * as React from 'react';
import styled from 'styled-components';
import { ProblemCard } from './ProblemCard';
import { problemDetails } from './problemDetails';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 800px;
  @media only screen and (max-width: 1080px) {
    width: 460px;
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }

  @media only screen and (max-width: 500px) {
    width: 80%;
  }
`;

const ProblemCardsWrapper = styled.div`
  margin-top: 3em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

export class ProblemStatements extends React.Component {
  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          <h1>Choose a problem statement</h1>
          <h3>
            Get started by first choosing which problem you want to learn about
          </h3>

          <ProblemCardsWrapper>
            {Object.values(problemDetails).map((problem, i) => (
              <ProblemCard problem={problem} key={i} />
            ))}
          </ProblemCardsWrapper>
        </InnerWrapper>
      </Wrapper>
    );
  }
}
