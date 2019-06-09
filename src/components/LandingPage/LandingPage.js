import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Panel } from '../SharedComponents/Panel';

const PageSegment = styled(Segment)`
  background-color: #faf8f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`;

const Dot = styled.div`
  position: absolute;
  width: ${prop('size', '30')}px;
  height: ${prop('size', '30')}px;
  border-radius: 50%;
  background: ${prop('color', '#eee')};
  top: ${prop('top')};
  left: ${prop('left')};
`;

const Rect = styled.div`
  position: absolute;
  width: ${prop('size', '200')}px;
  height: ${prop('size', '200')}px;
  border-radius: 30%;
  background: ${prop('color', '#eee')};
  top: ${prop('top')};
  left: ${prop('left')};
  transform: rotate(${prop('angle', '30')}deg);
`;

const Content = styled(Panel)`
  z-index: 1;
  padding: 4rem;
  width: ${rem('600px')};
  max-width: 90%;
  position: relative;

  @media screen and (max-width: '768px') {
    padding: 4rem 2rem;
  }
`;

const LinkToForm = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  padding: 1rem;
  position: absolute;
  top: -4rem;
  left: -1rem;

  &:hover {
    color: inherit;
  }

  img {
    margin-right: 0.5rem;
  }
`;

const Tag = styled.div`
  background-color: #ffe3a4;
  font-size: 10px;
  font-weight: 700;
  border-radius: 500px;
  padding: 0.3em 1em;
  margin-left: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Headline = styled.h1`
  font-size: 3.5em;
  font-weight: 700;
  color: #474747;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  font-size: 1.3em;
  font-weight: 400;
  color: #474747;
  margin-bottom: 3rem;
`;

export class LandingPage extends React.Component {
  render() {
    return (
      <PageSegment>
        <BackgroundElements>
          <Rect color="#f77849" top="-20%" left="50%" size={200} angle={80} />
          <Rect color="#4be6d7" top="42%" left="10%" size={400} angle={15} />
          <Rect color="#fbdb57" top="60%" left="60%" size={440} angle={60} />
          <Dot color="#4be6d7" top="50%" left="95%" size={20} />
          <Dot color="#fbdb57" top="20%" left="10%" size={70} />
          <Dot color="#f77849" top="30%" left="80%" size={50} />
          <Dot color="#904cd7" top="90%" left="-2%" size={80} />
        </BackgroundElements>
        <Content>
          <LinkToForm href="https://docs.google.com/document/d/1sKk9JkFTkev-SSNGQYouaNV5ERX7KOv9eG_dIwcyuoI/edit?usp=sharing">
            <strong>geekout2019</strong>
            <Tag>by GovTech</Tag>
          </LinkToForm>
          <Headline>Welcome to GeekOut 2019</Headline>
          <Subtitle>
            Here's a simple boilerplate for a frontend website for you to use.
            Click the button below to explore some of the problem statements for
            you to choose. May the odds forever be in your favour.
          </Subtitle>
          <Button as={Link} size={'big'} primary to="/problem-statements">
            Let's get started!
          </Button>
        </Content>
      </PageSegment>
    );
  }
}
