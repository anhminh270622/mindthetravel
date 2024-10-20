import { FacebookOutlined, InstagramOutlined, PinterestOutlined, TwitterOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'

export default function ContentMindTheTravel() {
    return (
        <div>
            <p className="pt-5">
                I came up with the name of this blog after my trip to London. No, that doesn’t mean I’m here to discourage you from traveling the world.
            </p>
            <p>
                In fact, after hearing London’s iconic “Mind the Gap” announcements, I realized the importance of being a responsible traveler. Additionally, traveling involves mindfulness.</p>
            <p>
                Since that moment, I have advocated for purposeful travel. Just as you always remember the spatial gap between the train door and the station platform, I believe we should remember that without intention, travel can become merely a constant party or another consumerist activity.
            </p>
            <p>
                Traveling mindfully is even easier when on a tight budget, at least for the sake of your wallet.
            </p>
            <p>
                I started the MindTheTravel blog to demonstrate that traveling on a budget doesn’t always mean staying in subpar accommodations with noisy roommates.
            </p>
            <p><b>On my blog,</b> you will find comprehensive advice and practical travel tips on how to travel more while spending less.</p>
            <p>I will also emphasize the importance of environmental consciousness and the rewards of respecting other cultures, traditions, and people.</p>
            <p>Having embarked on various adventures, I decided to share my experiences and thoughts on travel with you.</p>
            <p>Mind The Travel blog aims to inspire those seeking to begin a long-term journey, break free from daily routines, and cultivate positive habits.</p>
            <p>The first step is crucial as it shapes the outcome of your trip and your overall travel experience. Explore the sections below to access quick travel guides to the destinations I have visited.</p>
            <h3 className="py-5">Where I Have Been</h3>
            <p>
                I have travelled to 38 countries so far, including
                <b>Thailand</b>, <b>Israel</b>, Serbia, <b>Indonesia</b>, Tunisia, Turkey,
                <b>Greece</b>, <b>Italy</b>, <b>Spain</b>, <b>Cyprus</b>, <b>France</b>,
                <b>Malta</b>, Portugal, Mexico, <b>Belgium</b>, <b>Denmark</b>,
                <b>Australia</b>, UK, Russia, <b>Austria</b>,
                <b>the Dominican Republic</b>, Poland, Montenegro, Vietnam, and
                <b>the USA</b>.
            </p>
            <hr className='my-5' />
            <Flex>
                <FacebookOutlined style={{ color: "#3B5998" }} />
                <TwitterOutlined style={{ color: "#55ACEE" }} />
                <PinterestOutlined style={{ color: '#9F1121' }} />
                <InstagramOutlined style={{ color: '#CE6448' }} />
            </Flex>
            <p>Follow me here and on social media to learn how to become a savvy traveler, receive valuable travel tips, and access guides to destinations worldwide. Feel free to ask any questions!</p>
            <p>The optimal method to stay updated with new articles is by subscribing to my weekly newsletter. Rest assured, no spam—I promise!</p>
        </div>
    )
}
