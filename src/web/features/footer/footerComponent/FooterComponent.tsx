import { Layout, Row, Col, Input, Flex } from 'antd';
import {
	InstagramOutlined,
	FacebookOutlined,
	TwitterOutlined,
	PinterestOutlined,
	WifiOutlined,
} from '@ant-design/icons';
import styles from './FooterComponent.module.scss';

const { Footer } = Layout;

const FooterComponent = () => {
	return (
		<Footer className={styles.root}>
			<Row gutter={[32, 32]}>
				<Col xs={24} sm={12} md={6}>
					<h4>ABOUT</h4>
					<ul>
						<li>
							<a href="/contact">Contact</a>
						</li>
						<li>
							<a href="#">Copyright</a>
						</li>
						<li>
							<a href="#">Policy</a>
						</li>
					</ul>
				</Col>
				<Col xs={24} sm={12} md={6}>
					<h4>TRAVEL TIPS</h4>
					<ul>
						<li>
							<a href="/start-here">Start Here</a>
						</li>
						<li>
							<a href="/blog">Travel Blog</a>
						</li>
						<li>
							<a href="/destinations">Destination Guides</a>
						</li>
						<li>
							<a>FAQ</a>
						</li>
					</ul>
				</Col>
				<Col xs={24} sm={12} md={6}>
					<h4>JOIN MY JOURNEY</h4>
					<Flex gap={10} wrap className={styles.iconFooter}>
						<InstagramOutlined />
						<FacebookOutlined />
						<TwitterOutlined />
						<WifiOutlined />
						<PinterestOutlined />
					</Flex>
					<Flex vertical style={{ marginTop: '10px' }}>
						<a href="/" style={{ marginBottom: '0' }}>
							Mind the Travel © 2024
						</a>
						<a href="#">Work With Me</a>
					</Flex>
				</Col>
				<Col xs={24} sm={12} md={6}>
					<h4>SEARCH</h4>
					<Input placeholder="Search The Site" />
				</Col>
			</Row>
		</Footer>
	);
};

export default FooterComponent;
