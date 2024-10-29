import { Button, Flex, Form, Input, Typography } from 'antd';
import styles from './EmotionForm.module.scss';
export default function EmotionForm() {
	return (
		<Flex justify="center" className={styles.root}>
			<Form layout="vertical">
				<Typography.Title level={3} className="pb-5 b">
					SIGN UP FOR NEW EMOTIONS!
				</Typography.Title>
				<Form.Item label="Email Address *">
					<Input />
				</Form.Item>
				<Form.Item label="First Name">
					<Input />
				</Form.Item>

				<Form.Item label="Country *">
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary">Subscribe</Button>
				</Form.Item>
			</Form>
		</Flex>
	);
}
