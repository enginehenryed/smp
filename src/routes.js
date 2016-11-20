/* Externals */
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'

/* Internals */
import { RouteUtils } from './utils'
import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import MainFrame from './components/MainFrame'
import LectureHeader from './components/Header/LectureHeader'
import HomeContainer from './containers/HomeContainer'
import UsersContainer from './containers/UsersContainer'
import UserContainer from './containers/UserContainer'
import UserEditContainer from './containers/UserEditContainer'
import LecturesContainer from './containers/LecturesContainer'
import LectureContainer from './containers/LectureContainer'
import AssignmentsContainer from './containers/AssignmentsContainer'
//import Assignment$ from './containers/Assignment$'
import New$ from './containers/New$'


console.log(LectureHeader)
/************************************************************
 * Redux
 ************************************************************/
import store from './redux'
import { Provider } from 'react-redux'


export default (
  <Provider store={store()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signup" component={Signup}/>
        <Route component={MainFrame} onEnter={RouteUtils.authCheck}>
          <IndexRoute components={{mainPanel: HomeContainer}}/>
          <Route
            path="users"
            components={{mainPanel: UsersContainer}}
            />
          <Route
            path="users/:userID"
            components={{mainPanel: UserContainer}}
          />
          <Route
            path="users/:userID/edit"
            components={{mainPanel: UserEditContainer}}
          />
          <Route
            path="lectures"
            components={{mainPanel: LecturesContainer, header: LectureHeader}}
            />
          <Route
            path="lectures/:lectureID"
            components={{mainPanel: LectureContainer}}
          />
          <Route
            path="addLecture"
            components={{mainPanel: New$}}
          />
          <Route
            path="assignments"
            components={{mainPanel: AssignmentsContainer}}
          />
        </Route>
      </Route>
    </Router>
  </Provider>
)
