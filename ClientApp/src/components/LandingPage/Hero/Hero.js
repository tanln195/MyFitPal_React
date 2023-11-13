import React from 'react';
//import Spark from '../../assets/Spark.svg';
//import { motion } from 'framer-motion';
//import { PiArrowDownLight } from 'react-icons/pi';
//import { IconContext } from 'react-icons';

import Wrapper from '../UI/Wrapper';
import styles from './Hero.module.css';

const customWrapperStyle = {
	flexDirection: 'column',
};

const Hero = () => {
	const browseDetailsCaller = event => {
		event.preventDefault();
		event.stopPropagation();
		window.scrollTo(0, document.getElementById('feature').offsetTop);
	};

	return (
		<Wrapper style={customWrapperStyle }>
			<div className={styles['hero-image']}>
				<div className={styles['hero-text']}>

					<p>Achieve Your Goals with</p>
					<h1>MyFitPal</h1>
					<button className={styles['btn-default']} onClick={browseDetailsCaller}>Explore</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default Hero;