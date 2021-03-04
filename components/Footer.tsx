import * as React from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      <div className={styles.settings}>
        <a
          className={styles.toggleDarkMode}
          onClick={toggleDarkModeCb}
          title='Tottle dark mode'
        >
          {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
        </a>
      </div>
    </footer>
  )
}
