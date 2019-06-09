import { Panel } from '../SharedComponents/Panel';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';

const PanelAsLink = Panel.withComponent(Link);
const Card = styled(PanelAsLink)`
  position: relative;
  text-align: center;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 200;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(1.03);
    outline: none;
    border-color: #548af2;
    box-shadow: 0 0 ${rem('20px')} 0 #548af2;
  }

  &:active {
    box-shadow: 0 0 ${rem('20px')} 0 #548af2 inset;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.p`
  margin-top: 0.9em;
  font-size: 1em;
  font-weight: bold;
`;

export class ProblemCard extends React.Component {
  render() {
    const { name, imgUrl, route } = this.props.problem;
    return (
      <Card to={`/problem-statements/${route}`}>
        <Image src={imgUrl} />
        <Title>{name}</Title>
      </Card>
    );
  }
}
