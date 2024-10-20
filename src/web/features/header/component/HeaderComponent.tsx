import React from 'react';
import { Flex, Image } from 'antd';
import { FacebookOutlined, InstagramOutlined, PinterestOutlined, SearchOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from './HeaderComponent.module.scss';
import { Link } from '@tanstack/react-router';

const HeaderComponent = () => (
    <Flex justify="space-between" align="center" className={styles.root} >
        <Flex justify="space-between" >
            <Image src="https://mindthetravel.com/wp-content/uploads/2016/05/Mind_The_Travel_final1.png" />
        </Flex>
        <Flex justify="space-between" className={styles.textHeader} >
            <ul className="gap-6 flex-center">
                <Link to="/about-mind-the-travel" className="menu-item">About</Link>
                <li className="menu-item">Start here</li>
                <li className="menu-item">Contact</li>
                <li className="menu-item">Travel Destinations</li>
                <li className="menu-item">Blog</li>
            </ul>
        </Flex>
        <Flex justify="space-between" gap="10px" align="center">
            <FacebookOutlined />
            <TwitterOutlined />
            <PinterestOutlined />
            <InstagramOutlined />
            <SearchOutlined />
        </Flex>
    </Flex>
);

export default HeaderComponent;