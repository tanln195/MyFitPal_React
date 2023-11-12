import React from 'react'
import styles from './Wrapper.module.css'

const Wrapper = (props) => {
    return (
        <div className={styles.wrapper} style={props.style}>
            {props.children}
        </div>
    )
}

export default Wrapper