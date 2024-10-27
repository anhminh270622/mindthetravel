import { Flex, Image } from 'antd';
import {
	FacebookOutlined,
	InstagramOutlined,
	PinterestOutlined,
	TwitterOutlined,
} from '@ant-design/icons';
import styles from './HeaderComponent.module.scss';

const HeaderComponent = () => {
	return (
		<div className={styles.root}>
			<Flex justify="space-between" align="center" className={styles.header}>
				<Flex justify="space-between">
					<a href="/">
						<Image
							preview={false}
							src="https://mindthetravel.com/wp-content/uploads/2016/05/Mind_The_Travel_final1.png"
						/>
					</a>
				</Flex>
				<Flex justify="space-between" className={styles.textHeader}>
					<ul className="gap-10 flex-center">
						<a href="/about-mind-the-travel" className="menu-item">
							About
						</a>
						<a href="/start-here" className="menu-item">
							Start here
						</a>
						<a href="/contact" className="menu-item">
							Contact
						</a>
						<a className={`${styles.destinations} menu-item`}>
							<a href="/destinations">Travel Destinations </a>
							<ul className={styles.menu}>
								<a href="/europe-travel-guide">EUROPE</a>
								<a href="/southeast-asia-travel-guide">SE ASIA</a>
								<a href="/north-america-travel-guide">N-AMERICA</a>
								<a href="/south-america-travel-guide">S-AMERICA</a>
								<a href="/africa-travel-guide">AFRICA</a>
							</ul>
						</a>
						<a href="/blog" className="menu-item">
							Blog
						</a>
					</ul>
					<Flex
						justify="space-between"
						gap="10px"
						align="center"
						className={styles.iconHeader}
					>
						<FacebookOutlined />
						<TwitterOutlined />
						<PinterestOutlined />
						<InstagramOutlined />
					</Flex>
				</Flex>
			</Flex>
		</div>
	);
};
export default HeaderComponent;
