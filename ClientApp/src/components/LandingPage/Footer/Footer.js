import React from 'react';

import Wrapper from '../UI/Wrapper';
import styles from './Footer.module.css';


const Footer = () => {
	const customWrapperStyle = {
		backgroundColor: '#ffffff',
		borderTop: '1px solid white',
	};

	return (
		<Wrapper style={customWrapperStyle }>
			<footer id='footer' className={styles['footer']}>
				<div className={styles['footer-content']}>
					<div className={styles['contact-info']}>
						<h3>Contact Us</h3>
						<p>Email: 16000@student.vgu.edu.vn</p>
						<p>Phone: (+123) 456-7890</p>
					</div>
					<div className={styles['social-links']}>
						<h3>Follow Us</h3>
						<a href="https://www.facebook.com/tan.le.1951" target="_blank" rel="noreferrer"  className={styles['social-icon']}>Facebook</a>
						<a href="https://www.linkedin.com/in/tanlenang/" target="_blank" rel="noreferrer"  className={styles['social-icon']}>LinkedIn</a>
						<a href="https://github.com/tanln195" target="_blank" rel="noreferrer"  className={styles['social-icon']}>GitHub</a>
					</div>
				</div>
				<div className={styles['copyright']}>
					&copy; {new Date().getFullYear()} MyFitPal. All Rights Reserved.
				</div>
			</footer>
		</Wrapper>
	);
};

export default Footer;