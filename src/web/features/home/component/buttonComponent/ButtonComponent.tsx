import { Link } from '@tanstack/react-router';
import { Button, Flex, Typography } from 'antd';
import React from 'react';

interface ButtonComponentProps {
	title: string;
	btnText: string;
	link?: string;
}
export default function ButtonComponent({
	title,
	btnText,
	link,
}: ButtonComponentProps) {
	return (
		<Flex vertical align="center">
			<Typography.Title level={2} className="pb-0">
				{title}
			</Typography.Title>

			<Link to={link}>
				<Button className="px-6">{btnText}</Button>
			</Link>
		</Flex>
	);
}
