/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './User.scss'
import usersStyles from '../Users.scss'
import Link from '../../Link'
import { formatGroups, formatGender, formatSignupDate, formatStatus } from '../../../utils/FormatUtils'

const User = (props) => {

  return (
    <Link to={"/users/" + props.user.get('userId')}>
      <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0}, props.className)}>
        <div className={usersStyles.cellId} hidden={!props.isAdmin}>{props.user.get('userId')}</div>
        <div className={usersStyles.cellGroup}>{formatGroups(props.user.get('userGroups'))}</div>
        <div className={usersStyles.cellName}>{props.user.get('userName')}</div>
        <div className={usersStyles.cellEmail}>{props.user.get('userEmail')}</div>
        <div className={usersStyles.cellPhone} hidden={!props.isAdmin}>{props.user.get('userPhone')}</div>
        <div className={usersStyles.cellGender} hidden={!props.isAdmin}>{formatGender(props.user.get('userGender'))}</div>
        <div className={usersStyles.cellSignupDate} hidden={!props.isAdmin}>{formatSignupDate(props.user.get('userCreatedAt'))}</div>
        <div className={usersStyles.cellStatus} hidden={!props.isAdmin}>{formatStatus(props.user.get('userStatus'))}</div>
      </div>
    </Link>
  )
}

export default User
