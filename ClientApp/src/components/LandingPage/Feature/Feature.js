import React from 'react';
import { motion } from 'framer-motion';

import FeatureItem from '../sub-components/FeatureItem';
import { features as featuredata } from '../sub-components/FeatureData';
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
	return (
		<>
			<Wrapper>
				<div id='feature' className={styles.feature}>
					<motion.div
						variants={mainTitleAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.8 }}>
						<p className={styles['feature-title']}>We Provide You</p>
						<p className={styles['feature-title__italic']}>Best Feature</p>
					</motion.div>
					<div className={styles['feature-card']}>
						{featuredata.map(item => (
							<FeatureItem
								key={item.id}
								bgcolor={item.backgroundcolor}
								color={item.textcolor}
								title={item.title}
								badgetext={item.badgetext}
								imagealt={item.imagealt}
								image={item.imagelink}
							/>
						))}
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Feature;