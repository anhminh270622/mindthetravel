import React from 'react';
import { Layout, Row, Col, Input, Flex } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined, PinterestOutlined } from '@ant-design/icons';
import styles from './FooterComponent.module.scss';

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer className={styles.root} style={{ backgroundColor: '#333', color: '#fff' }}>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={12} md={6}>
                    <h3>ABOUT</h3>
                    <ul>
                        <li><a href="#" >Contact</a></li>
                        <li><a href="#" >Copyright</a></li>
                        <li><a href="#" >Policy</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <h3>TRAVEL TIPS</h3>
                    <ul>
                        <li><a href="#">Start Here</a></li>
                        <li><a href="#">Travel Blog</a></li>
                        <li><a href="#">Destination Guides</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <h3>JOIN MY JOURNEY</h3>
                    <Flex gap={10} wrap>
                        <InstagramOutlined />
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <YoutubeOutlined />
                        <PinterestOutlined />
                    </Flex>
                    <div style={{ marginTop: '10px' }}>
                        <p style={{ marginBottom: '0' }}>Mind the Travel © 2024</p>
                        <a href="#">Work With Me</a>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <h3>SEARCH</h3>
                    <Input placeholder="Search The Site" />
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterComponent;
