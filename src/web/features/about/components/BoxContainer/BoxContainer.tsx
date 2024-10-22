import { Flex, Image } from 'antd';
import React from 'react';
import styles from './BoxContainer.module.scss';
interface BoxContainerProps {
    image: string;
    titles: string;
    children: React.ReactNode;
    isReverse?: boolean;
}

export default function BoxContainer({ image, titles, children, isReverse }: BoxContainerProps) {
    return (
        <Flex className={styles.root} justify='space-between' gap={20}>
            {!isReverse ? (
                <>
                    <Flex flex={1} >
                        <Image preview={false} src={image} />
                    </Flex>
                    <Flex flex={1} vertical className={styles.textContainer}>
                        <h3>{titles}</h3>
                        {children}
                    </Flex>
                </>
            ) : (
                <>
                    <Flex flex={1} vertical className={styles.textContainer}>
                        <h3>{titles}</h3>
                        {children}
                    </Flex>
                    <Flex flex={1}>
                        <Image preview={false} src={image} />
                    </Flex>
                </>
            )}

        </Flex >
    );
}
