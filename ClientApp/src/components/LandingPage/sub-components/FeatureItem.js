import React from 'react';
import Badge from '../Badge/Badge';
import FeatureCard from '../UI/FeatureCard';
import styles from './FeatureItem.module.css';

const FeatureItem = props => {
	return (
		<FeatureCard bgcolor={props.bgcolor} color={props.color}>
			<div>
				<h4 className={styles['feature-card__title']}>{props.title}</h4>
				<Badge bcolor={props.color}>{props.badgetext}</Badge>
			</div>
			<img className={styles.image} src={props.image} alt={props.imagealt} />
		</FeatureCard>
	);
};

export default FeatureItem;