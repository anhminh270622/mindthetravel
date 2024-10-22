import React from 'react';
import { Flex, Image } from 'antd';
import {
	FacebookOutlined,
	InstagramOutlined,
	PinterestOutlined,
	SearchOutlined,
	TwitterOutlined,
} from '@ant-design/icons';
import styles from './HeaderComponent.module.scss';
import { Link } from '@tanstack/react-router';

const HeaderComponent = () => (
	<div className={styles.root}>
		<Flex justify="space-between" align="center" className={styles.header}>
			<Flex justify="space-between">
				<Link to="/" >
					<Image preview={false} src="https://mindthetravel.com/wp-content/uploads/2016/05/Mind_The_Travel_final1.png" />
				</Link>
			</Flex>
			<Flex justify="space-between" className={styles.textHeader} gap={20}>
				<ul className="gap-6 flex-center">
					<Link to="/about-mind-the-travel" className="menu-item">
						About
					</Link>
					<Link to="/start-here" className="menu-item">Start here</Link>
					<Link to="/contact" className="menu-item">Contact</Link>
					<li className="menu-item">Travel Destinations</li>
					<li className="menu-item">Blog</li>
				</ul>
				<Flex justify="space-between" gap="10px" align="center">
					<FacebookOutlined />
					<TwitterOutlined />
					<PinterestOutlined />
					<InstagramOutlined />
					<SearchOutlined />
				</Flex>
			</Flex>
		</Flex>
	</div>
);

export default HeaderComponent;
