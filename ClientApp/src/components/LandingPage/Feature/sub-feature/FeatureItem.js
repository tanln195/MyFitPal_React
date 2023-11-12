import React from 'react';

import FeatureCard from '../../UI/FeatureCard';
import styles from './FeatureItem.module.css';

const FeatureItem = props => {
	return (
		<FeatureCard bgcolor={props.bgcolor} color={props.color}>
			<div>
				<h4 className={styles['feature-card__title']}>{props.title}</h4>
			</div>
			<img className={styles.image} src={props.image} alt={props.imagealt} />
		</FeatureCard>
	);
};

export default FeatureItem;