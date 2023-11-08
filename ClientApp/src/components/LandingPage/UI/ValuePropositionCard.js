import React from 'react';
import styles from './ValuePropositionCard.module.css';

const ValuePropositionCard = React.forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			style={{
				backgroundColor: props.bgcolor === 'black' ? '#181818' : null,
				color: props.bgcolor === 'black' ? 'white' : '#black',
				zIndex: props.bgcolor === 'black' ? 200 : 100,
			}}
			className={styles.vpcard}>
			{props.children}
		</div>
	);
});

export default ValuePropositionCard;