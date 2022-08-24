import React from 'react'

import styles from '../static/Tab.module.css'

const Tab = (props) => {

  const {text, index, tabs, active, setTabs} = props

  const handleChange = e => {
    const newTabs = tabs.map(tab => tab.index === index? {...tab, active: true} : {...tab, active: false})
    setTabs(newTabs)
  }

  return (
    <button className={active === true? styles.activated + ' ' + styles.tab : styles.tab} onClick={handleChange}>{text}</button>
  )
}

export default Tab