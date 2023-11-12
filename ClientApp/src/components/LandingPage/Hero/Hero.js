import React from 'react';
//import Spark from '../../assets/Spark.svg';
import { motion } from 'framer-motion';
import { PiArrowDownLight } from 'react-icons/pi';
import { IconContext } from 'react-icons';

import Wrapper from '../UI/Wrapper';
import styles from './Hero.module.css';

const titleVariants = {
	visible: {
		transition: {
			staggerChildren: 0.8,
		},
	},
};

const titleChildAnimate = {
	hidden: { y: 70, opacity: 0 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 2,
			ease: [0.2, 0.65, 0.3, 0.9],
		},
	},
};

const imageAnimation = {
	hidden: { opacity: 0, y: 60 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			staggerChildren: 1,
			duration: 1.3,
		},
	},
};

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
			<motion.div
				variants={titleVariants}
				initial='hidden'
				animate='visible'
				className={styles.title}>
				{/*<motion.img*/}
				{/*	variants={imageAnimation}*/}
				{/*	initial='hidden'*/}
				{/*	whileInView='show'*/}
				{/*	viewport={{ once: true, amount: 0.8 }}*/}
				{/*	//src={Spark}*/}
				{/*	alt='spark'*/}
				{/*	className={styles.element}*/}
				{/*/>*/}
				<motion.p variants={titleChildAnimate}>Achieve Your </motion.p>
				<motion.p variants={titleChildAnimate}>Goals with</motion.p>
				<motion.p variants={titleChildAnimate} className={styles['title-italic']}>
					MyFitPal
				</motion.p>
			</motion.div>
			<div>
				<IconContext.Provider value={{ size: '4em', color: 'white' }}>
					<motion.div
						variants={imageAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.8 }}
						className={styles['fitness-image__wrapper']}>
						<img
							src='https://www.borntough.com/cdn/shop/articles/How_to_get_big_Biceps.jpg?v=1640200131&width=1800'
							alt='fitness'
							className={styles['fitness-image']}
						/>
						<div className={styles['fitness-text__wrapper']}>
							<p>
								Staying healthy means eating well and keeping a balanced lifestyle – it's about finding the right mix for a strong, happy body.
							</p>
						</div>
						<button className={styles['btn-scroll']} onClick={browseDetailsCaller}>
							<PiArrowDownLight className={styles['btn-scroll__arrow']} />
						</button>
					</motion.div>
				</IconContext.Provider>
			</div>
		</Wrapper>
	);
};

export default Hero;