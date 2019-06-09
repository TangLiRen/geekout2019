import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { Panel } from '../SharedComponents/Panel';

const Wrapper = styled.div`
  width: ${rem('600px')};
  z-index: 1;

  @media screen and (max-width: 1000px) {
    width: 94%;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Card = styled(Panel)`
  padding: 2rem;

  ul,
  ol {
    padding-inline-start: 2rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  p {
    line-height: 1.5;
  }
`;

export class BackgroundInfo extends React.Component {
  render() {
    const { problem } = this.props;
    return (
      <Wrapper>
        <Title>Background Info</Title>
        <Card>
          {problem.background.map(info => (
            <li>{info}</li>
          ))}
          {problem.links && (
            <React.Fragment>
              <h4>Useful Links:</h4>
              {problem.links.map(link => (
                <li>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </React.Fragment>
          )}
        </Card>
      </Wrapper>
    );
  }
}
