import React from 'react';
import { motion } from 'framer-motion';

import FeatureItem from './sub-feature/FeatureItem';
import { features as featuredata } from './sub-feature/FeatureData';
import Wrapper from '../UI/Wrapper';
import styles from './Feature.module.css';

const mainTitleAnimation = {
	hidden: { opacity: 0, y: -90 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const Feature = () => {
    const customWrapperStyle = {
        backgroundColor: '#181818',
        paddingBottom: '2rem',
    };

    return (
        <Wrapper style={customWrapperStyle }>
            <div id='feature' className={styles.feature}>
                <motion.div
                    variants={mainTitleAnimation}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.8 }}
                    className={styles['feature-title-holder']}
                >
                    <p className={styles['feature-title']}>Special Features</p>
                    <p className={styles['feature-title__italic']}>Just For You</p>
                </motion.div>
                <div className={styles['feature-card']}>
                    {featuredata.map(item => (
                        <FeatureItem
                            key={item.id}
                            bgcolor={item.backgroundcolor}
                            color={item.textcolor}
                            title={item.title}
                            imagealt={item.imagealt}
                            image={item.imagelink}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>

    );
};

export default Feature;