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
import AssignmentHeader from './components/Header/AssignmentHeader'
import UsersHeader from './components/Header/UsersHeader'
import SearchHeader from './components/Header/SearchHeader'
import HomeContainer from './containers/HomeContainer'
import UsersContainer from './containers/UsersContainer'
import UserContainer from './containers/UserContainer'
import UserEditContainer from './containers/UserEditContainer'
import LecturesContainer from './containers/LecturesContainer'
import LectureContainer from './containers/LectureContainer'
import AssignmentsContainer from './containers/AssignmentsContainer'
import AssignmentContainer from './containers/AssignmentContainer'
import AddLectureContainer from './containers/AddLectureContainer'
import AddAssignmentContainer from './containers/AddAssignmentContainer'
import SearchContainer from './containers/SearchContainer'

/************************************************************
 * Redux
 ************************************************************/
import createStore from './redux'
import { Provider } from 'react-redux'

const store = createStore()

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signup" component={Signup}/>
        <Route component={MainFrame} onEnter={(nextState, replace, callback) => {RouteUtils.authCheck(nextState, replace, callback, store)}}>
          <IndexRoute components={{mainPanel: HomeContainer}}/>
          <Route
            path="users"
            components={{mainPanel: UsersContainer, header: UsersHeader}}
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
            path="assignments"
            components={{mainPanel: AssignmentsContainer, header: AssignmentHeader}}
          />
          <Route
            path="assignments/:assignmentID"
            components={{mainPanel: AssignmentContainer}}
          />
          <Route
            path="search"
            components={{mainPanel: SearchContainer, header: SearchHeader}}
          />
          <Route
            path="addLecture"
            components={{mainPanel: AddLectureContainer}}
          />
          <Route
              path="addAssignment"
              components={{mainPanel: AddAssignmentContainer}}
          />
        </Route>
      </Route>
    </Router>
  </Provider>
)
