/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './AssignmentInfo.scss'
import { DateUtils } from '../../utils'
import Avatar from '../Avatar'


const AssignmentInfo = (props) => {

  const endAt = new Date(props.assignment.get('assignmentEndAt'))

  const date = `${endAt.getFullYear()}년 
    ${(endAt.getMonth() + 1)}월 
    ${endAt.getDate()}일 
    (${DateUtils.dayToKoreanWeekday(endAt.getDay())})`
  const time = `${endAt.toString().substring(15,21)}`
  const generation = `${props.assignment.get('articleGenerationId')}기 | `


  return (
    <div className={styles.wrapper}>
      <div className={styles.subject}>
        <span className={styles.label}>강의명</span>
        <span className={styles.content}>{props.assignment.get('articleSubject')}</span>
      </div>
      <div className={styles.articleWriter}>
        <span className={styles.label}>출제자</span>
        <Avatar className={styles.avatar}/>
        <span className={styles.content}>{props.assignment.getIn(['articleWriter', 'userName'])}</span>
      </div>
      <div className={styles.date}>
        <span className={styles.label}>기한</span>
        <span className={styles.content}>
          <span className={classNames(styles.content, styles.day)}>{date}</span>
          <span className={classNames(styles.content, styles.time)}>{time}</span>
        </span>
      </div>
      <div className={styles.content}>
        <span className={styles.label}>내용</span>
        <span className={styles.content}>{props.assignment.get('articleContent')}</span>
      </div>
      <div className={styles.attahment}>
        <span className={styles.label}>첨부파일</span>
        <span className={styles.content}>파일</span>
      </div>
      <p className={styles.horizontalLine}/>
      <div className={styles.createdAt}>
        <span>{`${props.assignment.get('articleCreatedAt')} 작성`}</span>
      </div>
    </div>
  )

}

export default AssignmentInfo