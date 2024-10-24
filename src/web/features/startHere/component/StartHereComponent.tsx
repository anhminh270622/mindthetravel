import React from 'react';
import Information from '../../../common/infomation/Information';
import ContentText from './ContentText/ContentText';
import { Flex } from 'antd';
import { startHere } from '../../../api/home/mocks';
import FeaturePost from '../../home/component/featurePost/FeaturePost';
import styles from './StartHereComponent.module.scss';
export default function StartHereComponent() {
    return (
        <div className={styles.root}>
            <Information
                tile="Start Planning Your Next Trip Here"
                description="Start Planning Your Next Trip Here"
            />
            <ContentText />
            <Flex className={styles.cartStartHere}>
                <Flex justify="space-between" className={styles.cartItem} gap={20} wrap>
                    {startHere.map((item, index) => (
                        <div style={{ width: '30%', minHeight: "240px" }}>
                            <FeaturePost key={index} {...item} />
                        </div>
                    ))}
                </Flex>
            </Flex>
        </div>
    );
}
