import React from 'react'

import styles from '../static/Status.module.css'

const Status = (props) => {
  return (
    <div className={styles.statusBox}>{props.text} is active</div>
  )
}

export default Status