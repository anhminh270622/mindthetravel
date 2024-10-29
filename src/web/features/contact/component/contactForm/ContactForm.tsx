import { Button, Flex, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
	return (
		<Form name="form_item_path" layout="vertical" className={styles.root}>
			<Form.Item label="Your Name (required) ">
				<Input type="text" />
			</Form.Item>
			<Form.Item label="Your Email (required) ">
				<Input type="text" />
			</Form.Item>
			<Form.Item label="Your country ">
				<Input type="text" />
			</Form.Item>
			<Form.Item label="Your Message ">
				<TextArea rows={8} />
			</Form.Item>
			<Flex>
				<Button className="">SEND</Button>
			</Flex>
		</Form>
	);
}
