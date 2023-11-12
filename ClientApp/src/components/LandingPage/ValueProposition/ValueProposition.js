import React from 'react';
import { motion } from 'framer-motion';
import { GoGoal } from 'react-icons/go';
import { BiBarChart } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive'

import ValuePropositionCard from '../UI/ValuePropositionCard';
import Wrapper from '../UI/Wrapper';
import styles from './ValueProposition.module.css';

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

    const customWrapperStyle = {
        width: '100%',
        backgroundColor: '#91bdc4',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        padding: '3em 0',
    };

    return (
        <Wrapper style={customWrapperStyle }>
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
                            <GoGoal color='#1EBBD7' />
                            <h4>Customized Goal Achievement</h4>
                            <p>
                                Our application stands out with its personalized goal-setting feature, allowing users to define specific fitness objectives,
                                whether it's shedding pounds, building muscle, or achieving overall wellness. Tailored goal setting ensures a targeted
                                and effective fitness journey, making us the ideal choice for those who want results that matter.
                            </p>
                        </CustomMotionValuePropositionCard>
                        <CustomMotionValuePropositionCard
                            variants={cardChildAnimate2}
                            initial='hidden'
                            whileInView='visible'>
                            <BiBarChart />
                            <h4>Comprehensive Health Insights</h4>
                            <p>
                                With cutting-edge progress visualization tools and nutritional analysis algorithms, our application goes beyond basic tracking.
                                Users benefit from in-depth insights into their exercise routines and nutritional habits, enabling them to make informed decisions.
                                Choose us for a holistic approach to health and wellness, where your progress is not just tracked but thoroughly understood
                                and visualized for a clearer path to success.
                            </p>
                        </CustomMotionValuePropositionCard>
                    </motion.div>
                </IconContext.Provider>
            </div>
        </Wrapper>
    );
};

export default ValueProposition;