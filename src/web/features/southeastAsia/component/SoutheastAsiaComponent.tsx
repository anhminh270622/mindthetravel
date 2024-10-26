import React from 'react';
import Information from '../../../common/infomation/Information';
import { Flex, Image, Typography } from 'antd';

export default function SoutheastAsiaComponent() {
	return (
		<div className="bg-white">
			<Information description="Southeast Asia Backpacking Guide: Itinerary, Travel Advice, Costs" />
			<Flex vertical className="layout pt-10">
				<Flex vertical>
					<Typography.Title className="center pb-5" level={1}>
						Southeast Asia Backpacking Guide
					</Typography.Title>
					<Typography.Text>
						Southeast Asia is home to some of the world’s most amazing places
						most travelers never heard of. From the Bukal Island, El Nido in the
						Philippines to the Chicken Island off the coast of Ao Nang, you’ll
						find cultural diversity, perfect weather, scenery, and a thriving
						backpacker scene. I know picking your next backpacking destination
						in Southeast Asia can be a daunting task. That is why I put together
						a Southeast Asia backpacking guide with suggested daily budgets,
						packing list, and budget savvy tips.
					</Typography.Text>
					<Typography.Text className="mt-5">
						Backpacking Southeast Asia is as popular as ever and as soon as you
						set foot on the continent you quickly realize why. Pretty much any
						backpacking trip to Southeast Asia is a whirlwind of events and
						days. So if you dream of experiencing once-in-a-lifetime adventures,
						backpacking trip around Southeast Asia is something you should
						definitely consider.
					</Typography.Text>
					<Typography.Title level={3} className="center my-5">
						Read More: Thailand Travel Guide
					</Typography.Title>
					<Typography.Text className="pb-5">
						{' '}
						It has long been known that backpacking Southeast Asia is one of the
						most culturally rewarding experiences any traveler can have. Folks
						from all around the world come here to swim in dazzling clear
						waters, enjoy spectacular sunrises, and indulge in{' '}
						<a href="https://mindthetravel.com/thai-cuisine/" className="bold">
							mouthwatering food
						</a>
						. It doesn’t matter whether you are a first-time backpacker, a
						thrill seeker, photographer or a tech-savvy traveler, Southeast Asia
						has something for everyone.
					</Typography.Text>
					<Image
						className="pl-6"
						preview={false}
						src="https://mindthetravel.com/wp-content/uploads/2019/07/backpacking-southeast-asia.jpg"
					/>
					<Typography.Text className="pb-3">
						I’m writing this guide sitting in the chair, watching over the
						emerald green rice terraces of Bali, trying to adjust to a new
						circadian rhythm. I’ve spent over two years backpacking around
						Southeast Asia over the last ten years. So I can tell you for sure,
						there are plenty of secluded corners, as well as busy and fairly
						modern cities. Just make sure you know what you need!
					</Typography.Text>
					{/* <div className="hr" /> */}
				</Flex>
			</Flex>
		</div>
	);
}
