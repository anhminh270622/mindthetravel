import { Button, Flex, Image, Typography } from 'antd';
import React from 'react';
import styles from './CardContainer.module.scss';

interface CardContainerProps {
	image: string;
	title: string;
	description: string;
	by: string;
	blogIn: string;
	date: string;
}
export default function CardContainer({
	image,
	title,
	description,
	by,
	blogIn,
	date,
}: CardContainerProps) {
	return (
		<div className={styles.root}>
			<Image src={image} preview={false} />
			<Flex vertical>
				<Typography.Title level={2} className="mt-3">
					{' '}
					{title}{' '}
				</Typography.Title>
				<Flex>
					<p>{date}</p>
					<p>{by}</p>
					<p>{blogIn}</p>
				</Flex>
				<Typography.Text>{description}</Typography.Text>
			</Flex>
			<Button className="px-6">Read More</Button>
		</div>
	);
}
