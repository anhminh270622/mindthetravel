import { Button, Flex, Typography } from 'antd';
import React from 'react';
import CardItem from './cardItem/CardItem';
import {
	homeData,
	popularDestinations,
	travelData,
	travelEasier,
} from '../../../api/home/mocks';
import styles from './HomeComponent.module.scss';
import EmotionForm from '../../../common/infomation/emotionForm/EmotionForm';
import BoxContainer from '../../../common/infomation/boxContainer/BoxContainer';
import ContentBlog from './contentBlog/ContentBlog';
import FeaturePost from './featurePost/FeaturePost';
import ButtonComponent from './buttonComponent/ButtonComponent';
import { Link } from '@tanstack/react-router';
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
				<Button className="px-6">
					<Link to="/blog">VISIT THE BLOG →</Link>
				</Button>
			</Flex>
			<EmotionForm />
			<Flex vertical className={styles.boxContainer}>
				<BoxContainer
					image="https://mindthetravel.com/wp-content/uploads/2020/01/Photo3-878x878.jpg"
					children={<ContentBlog />}
				/>
				<Flex flex={3} gap={20} className={styles.featurePost} vertical>
					<ButtonComponent
						title="FEATURED POSTS"
						btnText="GET MORE!"
						link="/blog"
					/>
					<Flex className={styles.cardFeaturePost}>
						<div className={styles.cardItem}>
							{travelData.map((item) => (
								<FeaturePost
									key={item.id}
									{...item}
									style={{ maxHeight: '320px' }}
								/>
							))}
						</div>
					</Flex>
				</Flex>
				<Flex vertical className={styles.popularDestinations}>
					<ButtonComponent
						title="POPULAR DESTINATIONS"
						btnText="EXPLORE THE WORLD!"
						link='/destinations'
					/>
					<Flex
						wrap
						vertical
						justify="space-between"
						className={styles.cardPopular}
					>
						{popularDestinations.map((item) => (
							<img style={{ width: '25%' }} key={item.id} src={item.image} />
						))}
					</Flex>
				</Flex>
				<Flex vertical className={styles.travelEasier}>
					<ButtonComponent
						title="TRAVELING IS EASIER THAN YOU THINK"
						btnText="HERE'S WHY!"
						link="/start-here"
					/>
					<Flex vertical gap={15} className={styles.cardTravelEasier}>
						<Flex flex={3} gap={20}>
							{travelEasier.map((item) => (
								<CardItem key={item.id} {...item} />
							))}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
