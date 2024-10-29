import Information from '../../../common/infomation/Information';
import styles from './DestinationComponent.module.scss';
import { Flex, Image, Typography } from 'antd';
import { dataDestinations } from '../../../api/destinations/mock';
export default function DestinationComponent() {
	return (
		<div className={styles.root}>
			<Information image description="Destinations" />
			<Flex className={styles.titledContainer} vertical>
				<Typography.Title level={1} className="pt-5">
					Travel Guides and Destinations
				</Typography.Title>
				<Typography.Text className={styles.text}>
					While you can find a lot of posts about travel destinations and
					countries I’ve been to in my{' '}
					<a href="/blog" className="bold">
						Blog
					</a>
					, the travel guides below aim to save your time by providing summaries
					and most up to date information for each particular destination. There
					are not so many guides at the moment, but I do my best to keep this
					list growing. Traveling is a very personal experience. I know that
					every one of us has a different travel style and there is no wrong or
					right way to do it. That is why these travel guides contain only
					general travel tips about places to see, things to do, where to eat
					and average travelling costs.
				</Typography.Text>
			</Flex>
			<Flex className={styles.imageContainer} justify="space-between" wrap>
				{dataDestinations.map((item, index) => (
					<Image key={index} src={item.image} preview={false} />
				))}
			</Flex>
		</div>
	);
}
