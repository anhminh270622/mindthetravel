import { Flex, Image, Typography } from 'antd';
import React from 'react';
import styles from './CardItem.module.scss';
interface CardItemProps {
	image: string;
	title: string;
	by: string;
	description: string;
}
export default function CardItem({
	image,
	title,
	by,
	description,
}: CardItemProps) {
	return (
		<Flex vertical className={styles.root} flex={1}>
			<Image preview={false} src={image} />
			<Typography.Title level={4} className="mt-3">
				{title}
			</Typography.Title>
			<Typography.Text className="by">{by}</Typography.Text>
			<Typography.Text className="mt-3 mb-4 text-p">
				{description}
			</Typography.Text>
		</Flex>
	);
}
