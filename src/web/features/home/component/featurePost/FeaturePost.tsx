import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import styles from "./FeaturePost.module.scss"
interface FeaturePostProps {
	image?: string;
	title?: string;
	description?: string;
	style?: React.CSSProperties
}
export default function FeaturePost({ image, title, style, description }: FeaturePostProps) {
	return (
		<Flex className={styles.root}>
			<Card
				hoverable
				style={style}
				cover={<img alt="image" src={image} />}
			>
				{title && <Meta
					className={description && styles.title}
					title={title}
					description={description}
				/>}
			</Card>
		</Flex>
	);
}
