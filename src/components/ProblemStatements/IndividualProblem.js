import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { BackgroundInfo } from './BackgroundInfo';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'edit tips';
  min-height: 100vh;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 2fr 3fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(${rem('500px')}, 90vh) minmax(
        ${rem('600px')},
        110vh
      );
    grid-template-areas:
      'edit'
      'tips';
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 70%;
  max-width: ${rem('800px')};

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const EditSection = styled.div`
  grid-area: edit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  position: relative;
  padding: 4em;
`;

const TipsSection = styled.div`
  grid-area: tips;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf8f5;
  padding: 16vh 4rem;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 26vh 2rem;
  }

  @media screen and (min-height: 1100px) {
    align-self: center;
    padding-bottom: 20vh;
  }
`;

export class IndividualProblem extends React.Component {
  render() {
    const { problem } = this.props;
    return (
      <Wrapper>
        <EditSection>
          <h1>{problem.name}</h1>
          <h3>Problem Statement:</h3>
          <p>{problem.problemStatement}</p>
          <h3>Vision:</h3>
          <p>{problem.vision}</p>
          <h3>Objectives:</h3>
          {problem.objectives.map(objective => (
            <li>{objective}</li>
          ))}
          <Button
            style={{ marginTop: '3em' }}
            as={Link}
            basic
            color="blue"
            to="/problem-statements"
          >
            Back
          </Button>
        </EditSection>
        <TipsSection>
          <BackgroundImage src={problem.imgUrl} />
          <BackgroundInfo problem={problem} />
        </TipsSection>
      </Wrapper>
    );
  }
}
