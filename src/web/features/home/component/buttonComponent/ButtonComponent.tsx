import { Button, Flex, Typography } from 'antd'
import React from 'react'

interface ButtonComponentProps {
    title: string;
    btnText: string;
}
export default function ButtonComponent({ title, btnText }: ButtonComponentProps) {
    return (
        <Flex vertical align="center">
            <Typography.Title level={2} className="pb-0">
                {title}
            </Typography.Title>
            <Button className="px-6">{btnText}</Button>
        </Flex>
    )
}
