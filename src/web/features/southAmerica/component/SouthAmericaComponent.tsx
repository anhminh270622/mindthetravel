import { Flex, Image, Typography } from 'antd';
import React from 'react';
import Information from '../../../common/infomation/Information';

export default function SouthAmericaComponent() {
	return (
		<div className="bg-white">
			<Information description="Backpacking South America Travel Guide: Tips & Advice for your trip of a lifetime" />
			<Flex vertical className="layout">
				<Flex vertical>
					<Typography.Title level={1} className="center pt-10">
						South America Travel Guide
					</Typography.Title>
					<Typography.Text className="pt-5">
						This backpacking South America travel guide with tips & advice for
						your trip can give you enough information for planning and starting
						your ultimate adventure. I’ll cover topics ranging from “backpacking
						South America on a budget” to “finding the best country in Latin
						America for backpacking.” Yup, I also know how difficult deciding
						where to go in South America can be. That is why I’ve packed
						everything you need to know about traveling through South America in
						this guide.
					</Typography.Text>
					<Typography.Text className="pt-5">
						Backpacking South America had always been a dream of mine. I’d
						always had a fascination with this vast continent. The Nazca Lines,
						the Andes, diverse set of cultural traditions, it had all entranced
						me at one point or another! The memories that I have from the 2
						months I spent both volunteering and backpacking in South America
						are some of the fondest of this part of the world.
					</Typography.Text>{' '}
					<Typography.Text className="pt-5">
						There are countless beautiful places to explore and plenty of sights
						that rival backpacking hotspots like Thailand and Vietnam. Аdd into
						this the least expensive countries like Peru, Ecuador and Bolivia
						and you have a great backpacking destination. It may easily take up
						to several months in itself. Because it’s a continent where
						travelers tend to get lost, especially if they get drawn into
						hiking, trekking and experiencing the one-of-a-kind landscape!
					</Typography.Text>{' '}
					<Typography.Text className="pt-5">
						Let’s get started: This is the ultimate backpacking South America
						travel guide!
					</Typography.Text>{' '}
				</Flex>
				<span className="hr"></span>
				<Flex vertical>
					<Typography.Title level={3} className="center pt-10 mb-0 color-h">
						Traveling South America Alone
					</Typography.Title>
					<Typography.Text>
						Why travel to South America Solo? It’s one of the best regions of
						the world to get in touch with the local culture. South America
						truly has everything a solo traveler could ask for.
					</Typography.Text>
					<Typography.Text className="pt-5">
						Are you a foodie on an eating spree? Go check ceviche in Peru,
						empanadas in Argentina and coxinhas in Brazil.
					</Typography.Text>
					<Typography.Text className="pt-5">
						Want to take some pretty good photos? Visit Salar de Uyuni in
						Bolivia, Perito Moreno Glacier in Argentina, Cotopaxi in Ecuador or
						Marble Caves in Chile.
					</Typography.Text>
					<Typography.Text className="pt-5">
						A party goer? Don’t miss Rio de Janeiro, Buenos Aires and Montanita,
						Ecuador.
					</Typography.Text>
					<Image
						preview={false}
						className="pl-5 pt-5"
						src="https://mindthetravel.com/wp-content/uploads/2019/07/2-months-in-south-america-budget-1024x768.jpg"
					/>
					<Typography.Text className="pt-5">
						Fascinating colonial cities like Cuenca and Cuzco? The colorful
						Rainbow Mountains of Peru? The stunning beaches in Ecuador? Gorgeous
						men or women? (Hey… Brazil and Argentina. I’m talking about you!)
						Not only does South America have all of those things, but the
						continent also has dozens of destinations that have each of those
						things.
					</Typography.Text>
					<Typography.Text className="pt-5 pb-10">
						Also, know that it’s extremely common for backpackers to travel solo
						in South America. While you may be the only one of your friends who
						has traveled solo, nobody in South America will give you a second
						glance for being on your own. Traveling alone in South America
						promises diversity. You’ll enjoy many cool South America backpacking
						routes and have many stories to tell at home. Just be sure to brush
						up on your Spanish (or Portuguese) language skills!
					</Typography.Text>
				</Flex>
			</Flex>
		</div>
	);
}
