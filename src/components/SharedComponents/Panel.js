import { rem } from 'polished';
import styled from 'styled-components';

export const Panel = styled.div`
  padding: 1.3rem;
  background: white;
  border-radius: 6px;
  border: ${rem('1px')} solid #efefef;
  box-shadow: 0 ${rem('2px')} ${rem('20px')} 0 #efefef;
`;
