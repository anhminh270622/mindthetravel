import { Flex } from 'antd'
import React from 'react'
import styles from "./ContentText.module.scss"
export default function ContentText() {
    return (
        <Flex className={styles.root} vertical>
            <h2>Mind The Travel Blog: Start Planning Your Trip Here</h2>
            <h3>Welcome!</h3>
            <p>Planning your next trip and organizing a backpacking adventure can feel overwhelming. Trust me, I’ve been doing it for almost 10 years now, and I understand the extensive research involved.</p>
            <p>The primary objective of Mind The Travel is to inspire you to explore new destinations. I aim to share the knowledge I’ve gathered over the years to assist you in mastering the art of long-term travel and achieving location independence.</p>
            <p>The articles below will provide you with valuable insights on saving money, securing affordable flights, maintaining your health, and finding budget-friendly accommodations.</p>
            <p>I like to believe I have a good understanding of travel. Now, I aim to simplify the process for you, enabling you to travel more frequently on a budget and create lasting travel memories.</p>
            <p>I’ve experienced the constraints of a 14-day vacation as well as the freedom of living out of a backpack for a year. I’ve engaged in volunteering, long-term travel, road trips, and various other travel experiences.</p>
            <p>I’ve encountered situations like boarding a plane with an expired license, navigating Thailand with a broken finger, and embarking on solo trips to places like Socotra. While I prefer traveling alone due to being an introvert, I’ve also enjoyed group travels with 4 to 8 travel buddies.</p>
            <p>With over 150 articles on the website, there is a wealth of information available. Unsure where to begin? Check out this curated page containing articles tailored to help you plan your ideal trip and dive into the content you need.</p>
            <p>Learn from my mistakes to save both <b>money</b> and time. Simply scroll down and click on the images below to delve into the content. Let’s explore the world</p>
        </Flex>
    )
}
