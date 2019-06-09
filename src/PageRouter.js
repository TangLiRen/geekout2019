import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { ProblemStatements } from './ProblemStatements/ProblemStatements';
import { CommunityFrontDoor } from './ProblemStatements/CommunityFrontDoor';
import { Door2Door } from './ProblemStatements/Door2Door';
import { MOLSchooling } from './ProblemStatements/MOLSchooling';
import { HomeBuying } from './ProblemStatements/HomeBuying';

export const pageList = [
  {
    component: LandingPage,
    exact: true,
    path: '/',
  },
  {
    component: ProblemStatements,
    exact: true,
    path: '/problem-statements',
  },
  {
    component: CommunityFrontDoor,
    exact: true,
    path: '/problem-statements/community-front-door',
  },
  {
    component: Door2Door,
    exact: true,
    path: '/problem-statements/door2door',
  },
  {
    component: MOLSchooling,
    exact: true,
    path: '/problem-statements/mol-schooling',
  },
  {
    component: HomeBuying,
    exact: true,
    path: '/problem-statements/home-buying',
  },
];

export class PageRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {pageList.map(page => (
            <Route {...page} key={page.path} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}
