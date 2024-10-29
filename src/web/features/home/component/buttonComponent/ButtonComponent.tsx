import { Button, Flex, Typography } from 'antd';

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
			<Typography.Title level={2} className="pb-0 mb-0">
				{title}
			</Typography.Title>
			<a href={link}>
				<Button style={{ color: '#222' }} className="px-6">
					{btnText}
				</Button>
			</a>
		</Flex>
	);
}
