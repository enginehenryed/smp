import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainFrame.scss'
import LeftBar from '../LeftBar'
import MainPanel from '../MainPanel'
import Masthead from '../Masthead/Masthead'

const MainFrame = ({mainPanel}) => {
  return (
    <div className={styles.wrapper}>
      <Masthead/>
      <div className={styles.body}>
        <Leftbar className={styles.leftBar}/>
        <MainPanel className={styles.mainPanel}>
          {mainPanel}
        </MainPanel>
      </div>
    </div>
  )
}

export default MainFrame
