import React from 'react'
import styles from './FeatureCard.module.css'

const FeatureCard = (props) => {
    return (
        <div style={{ backgroundColor: `${props.bgcolor}`, color: `${props.color}` }} className={styles.fcard}>{props.children}</div>
    )
}

export default FeatureCard