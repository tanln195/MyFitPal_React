﻿import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLike } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive'

import styles from './ValueProposition.module.css';
import ValuePropositionCard from '../UI/ValuePropositionCard';

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

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
		width: '100%',
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const cardParentAnimate = {
	visible: {
		transition: {
			staggerChildren: 0.8,
		},
	},
};

const cardChildAnimate = {
	hidden: { x: -200 },
	visible: {
		x: 0,
		transition: {
			duration: 1.5,
			ease: [0.2, 0.65, 0.3, 0.9],
		},
	},
};

const ValueProposition = () => {
	const isSmall = useMediaQuery({ minWidth: 351, maxWidth: 765 });
	const CustomMotionValuePropositionCard = motion(ValuePropositionCard);

	const cardChildAnimate2 = isSmall
		? {
			hidden: { x: -600, opacity: 0 },
			visible: {
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.5,
					ease: [0.2, 0.65, 0.3, 0.9],
				},
			},
		}
		: {
			hidden: { x: -200, opacity: 0 },
			visible: {
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.5,
					ease: [0.2, 0.65, 0.3, 0.9],
				},
			},
		};

	return (
		<aside className={styles['value-proposition-wrapper']}>
			<div className={styles['value-proposition-info__div']}>
				<motion.p
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.8 }}
					className={styles.title}>
					Why Choose Us?
				</motion.p>
				<motion.hr
					variants={lineanimate}
					initial='initial'
					whileInView='start'
					viewport={{ once: true, amount: 0.8 }}
				/>
				<IconContext.Provider value={{ size: '3em' }}>
					<motion.div
						variants={cardParentAnimate}
						animate='visible'
						className={styles['value-proposition-card__info']}>
						<CustomMotionValuePropositionCard
							variants={cardChildAnimate}
							initial='hidden'
							whileInView='visible'
							bgcolor='black'>
							<AiOutlineLike color='#f35508' />
							<h4>The Best in World</h4>
							<p>
								Discover a world of fitness at your fingertips. Our website features cutting-edge
								services, personalized workouts, expert guidance, and a global community to
								motivate.
							</p>
						</CustomMotionValuePropositionCard>
						<CustomMotionValuePropositionCard
							variants={cardChildAnimate2}
							initial='hidden'
							whileInView='visible'>
							<BiCheckCircle />
							<h4>Qualifield Instructor</h4>
							<p>
								Experience the best with our world-class fitness instructors. Get expert guidance,
								personalized training, and reach your fitness goals efficiently.
							</p>
						</CustomMotionValuePropositionCard>
					</motion.div>
				</IconContext.Provider>
			</div>
		</aside>
	);
};

export default ValueProposition;