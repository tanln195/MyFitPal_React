import React from 'react'
import styles from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <aside className={styles.wrapper}>{props.children}</aside>
    )
}

export default Wrapper