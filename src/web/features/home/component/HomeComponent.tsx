import { Button, Flex, Typography } from 'antd';
import React from 'react';
import CardItem from './cardItem/CardItem';
import { homeData, travelData } from '../../../api/home/mocks';
import styles from './HomeComponent.module.scss';
import EmotionForm from '../../../common/infomation/emotionForm/EmotionForm';
import BoxContainer from '../../../common/infomation/boxContainer/BoxContainer';
import ContentBlog from './contentBlog/ContentBlog';
import FeaturePost from './featurePost/FeaturePost';
export default function HomeComponent() {
	return (
		<Flex vertical className={styles.root} align="center">
			<Flex vertical className={styles.card} align="center">
				<Typography.Title level={2}>RECENT POSTS</Typography.Title>
				<Flex flex={3} gap={20}>
					{homeData.map((item) => (
						<CardItem key={item.id} {...item} />
					))}
				</Flex>
				<Button className="px-6">VISIT THE BLOG →</Button>
			</Flex>
			<EmotionForm />
			<Flex vertical className={styles.boxContainer}>
				<BoxContainer
					image="https://mindthetravel.com/wp-content/uploads/2020/01/Photo3-878x878.jpg"
					children={<ContentBlog />}
				/>

				<Flex flex={3} gap={20} className={styles.featurePost} vertical>
					<Flex vertical align="center">
						<Typography.Title level={2} className="pb-0">
							FEATURED POSTS
						</Typography.Title>
						<Button className="px-6">GET MORE!</Button>
					</Flex>

					<Flex className={styles.cardFeaturePost}>
						<Flex
							wrap
							justify="space-between"
							gap={15}
							className={styles.cardItem}
						>
							{travelData.map((item) => (
								<FeaturePost key={item.id} {...item} />
							))}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
