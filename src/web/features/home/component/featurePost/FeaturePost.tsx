import { Card, Flex } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

interface FeaturePostProps {
	image?: string;
	title?: string;
}
export default function FeaturePost({ image, title }: FeaturePostProps) {
	return (
		<Flex>
			<Card
				hoverable
				style={{ width: '260px' }}
				cover={<img alt="image" src={image} />}
			>
				<Meta title={title} />
			</Card>
		</Flex>
	);
}
