import { Flex, Pagination } from 'antd';
import React from 'react';
import styles from './BlogComponent.module.scss';
import Information from '../../../common/infomation/Information';
import CardContainer from './cardContainer/CardContainer';
import { dataBlog } from '../../../api/blog/mock';
export default function BlogComponent() {
	return (
		<Flex className={styles.root} vertical>
			<Information image description="Blog" tile="Blog" />
			<Flex className={styles.containerBlog} vertical>
				{dataBlog.map((item, index) => (
					<CardContainer key={index} {...item} />
				))}
			</Flex>
			<Pagination
				className="layout pt-3"
				defaultCurrent={1}
				total={50}
				pageSize={5}
			/>
			;
		</Flex>
	);
}
