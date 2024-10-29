import { Button, Flex, Form, Input, Typography } from 'antd';
import styles from './EmotionForm.module.scss';
export default function EmotionForm() {
	return (
		<Flex justify="center" className={styles.root}>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				layout="vertical"
			>
				<Typography.Title level={3} className="pb-5">
					SIGN UP FOR NEW EMOTIONS!
				</Typography.Title>
				<Form.Item label="Email Address *" name="email">
					<Input />
				</Form.Item>
				<Form.Item label="First Name" name="firstName">
					<Input />
				</Form.Item>

				<Form.Item label="Country *" name="country">
					<Input />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Subscribe
					</Button>
				</Form.Item>
			</Form>
		</Flex>
	);
}
