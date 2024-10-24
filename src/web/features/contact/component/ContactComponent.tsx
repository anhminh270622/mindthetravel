import React from 'react';
import Information from '../../../common/infomation/Information';
import { Flex, Typography } from 'antd';
import styles from './ContactComponent.module.scss';
import ContactForm from './contactForm/ContactForm';

export default function ContactComponent() {
	return (
		<div className={styles.root}>
			<Information description="Contact" />
			<Flex className={styles.containerContact} vertical>
				<Flex vertical className={styles.textContainer}>
					<Typography.Title level={1}>Contact</Typography.Title>
					<Typography.Text>
						Please note, I don’t accept guest posts and link insertions on my
						website. For other types of collaboration, visit this{' '}
						<a href="https://mindthetravel.com/advertisepr/" className="bold">
							page
						</a>{' '}
					</Typography.Text>
					<Typography.Text>
						I won’t respond if you offer me guest posting or link insertion.
					</Typography.Text>
					<Typography.Text>
						If you have any other questions please use this form below to
						contact me directly. It might take a while to respond your letters,
						but be sure to hear from me anyway. If you are looking for the new
						piece of travel information see this pages
						<a href="https://mindthetravel.com/advertisepr/" className="bold">
							Travel tips
						</a>
						and
						<a href="https://mindthetravel.com/destinations/" className="bold">
							Travel Guides.
						</a>
					</Typography.Text>
					<Typography.Text>
						You can find me on Twitter, Facebook, Instagram and Pinterest. Hope
						to see you there as well!
					</Typography.Text>
				</Flex>
				<Flex className={styles.form}>
					<Typography.Title level={1} className="pt-5">
						SEND ME A MESSAGE
					</Typography.Title>
				</Flex>
				<ContactForm />
			</Flex>
		</div>
	);
}
