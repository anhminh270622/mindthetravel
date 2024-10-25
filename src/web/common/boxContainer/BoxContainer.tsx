import { Flex, Image } from 'antd';
import React from 'react';
import styles from './BoxContainer.module.scss';
interface BoxContainerProps {
	image: string;
	title?: string;
	children: React.ReactNode;
	isReverse?: boolean;
}

export default function BoxContainer({
	image,
	title,
	children,
	isReverse,
}: BoxContainerProps) {
	return (
		<Flex className={styles.root} justify="space-between" gap={20}>
			{!isReverse ? (
				<>
					<Flex flex={1}>
						<Image preview={false} src={image} />
					</Flex>
					<Flex flex={1} vertical className={styles.textContainer}>
						<h3>{title}</h3>
						{children}
					</Flex>
				</>
			) : (
				<>
					<Flex flex={1} vertical className={styles.textContainer}>
						<h3>{title}</h3>
						{children}
					</Flex>
					<Flex flex={1}>
						<Image preview={false} src={image} />
					</Flex>
				</>
			)}
		</Flex>
	);
}
