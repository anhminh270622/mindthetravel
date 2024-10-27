import { Flex, Image, Typography } from 'antd';
import styles from './CardItem.module.scss';
import { useState } from 'react';

interface CardItemProps {
	image: string;
	title: string;
	by?: string;
	description: string;
}

export default function CardItem({
	image,
	title,
	by,
	description,
}: CardItemProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const maxChar = 100;

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Flex vertical className={styles.root} flex={1}>
			<Image preview={false} src={image} />
			<Typography.Text style={{ fontStyle: by && 'italic' }} className={styles.title}>
				{title}
			</Typography.Text>
			<Typography.Text className={styles.by}>
				{by}
			</Typography.Text>
			<Typography.Text className={styles.description}>
				{isExpanded ? description : `${description.substring(0, maxChar)}... `}
				<div
					onClick={toggleExpand}
					style={{ color: 'black', cursor: 'pointer', fontWeight: '400', textAlign: 'right', marginRight: '10px' }}
				>
					{isExpanded ? 'view less' : 'view more'}
				</div>
			</Typography.Text>
		</Flex>
	);
}	
