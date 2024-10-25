import React from 'react';
import Information from '../../../common/infomation/Information';
import { Flex, Image, Typography } from 'antd';

export default function AfricaComponent() {
	return (
		<div className='bg-white'>
			<Information description="Africa Travel Guide: Trip Highlights, Itineraries, and Tips" />
			<Flex vertical className="layout">
				<Flex vertical gap={20}>
					<Typography.Title level={1} className="center pt-10">
						Africa Travel Guide: Trip Highlights, Itineraries, & Tips
					</Typography.Title>
					<Typography.Text>
						In another few weeks, Africa will enter its peak travel season.
						Thousands of travelers from Europe, North America and other parts of
						the world will flock to the continent in search of their own
						adventures. Of course, plenty of them will be chasing the Big Five
						in Botswana and Tanzania. If you are one of the lucky travelers
						heading to Africa, here is Africa travel guide with trip highlights,
						itineraries, & tips you need to know before you go.
					</Typography.Text>
					<Typography.Text>
						What’s the first thing that comes to mind when you think of
						traveling to Africa? For most travelers, Morocco, Egypt and South
						Africa are the top destinations, but there are so much more than
						that! From the jaw-dropping natural wonders, the richest traditions,
						cultural heritages to the vibrant bazaars, Africa has everything for
						a once-in-a-lifetime adventure. With 54 strikingly unique countries
						scattered all over the region picking the best destinations in
						Africa can be a daunting task.
					</Typography.Text>
					<Typography.Title level={3} className="center color-h mb-0">
						Read More: How To Overcome Jet Lag Naturally
					</Typography.Title>
					<Typography.Text>
						This where I come in to help you plan a trip to Africa on a budget.
						I know, it’s not uncommon to experience anxiety before going there.
						Use this Africa travel guide and my experience to wipe out any
						concerns and familiarize yourself with the customs and traditions of
						Sub-Saharan Africa. This guide applies to every type of traveler.
						Whether you’re a photographer, adventure seeker, holidaymaker or a
						recharge retreater, I did my best to give you the most comprehensive
						information on countries I’ve visited so you can get the idea and
						have a starting point for your planning.
					</Typography.Text>
					<Typography.Text>
						There is so much to do and see in Africa, so I highly recommend
						allocating at least three weeks to a backpacking trip in Africa.
					</Typography.Text>
				</Flex>
				<span className="hr"></span>
				<Flex vertical gap={20} className="pb-10">
					<Typography.Title level={3} className="center color-h mb-0">
						Where to Begin a Trip in Africa
					</Typography.Title>
					<Typography.Text>
						Africa is arguably one of the most diverse continents on the planet.
						It is home to the highest mountain in Africa, over 3000 diverse
						tribes, unique wildlife, the world’s driest Namib desert, vast and
						arid African savannah, Serengeti, and rare animal species not found
						anywhere else.
					</Typography.Text>
					<Typography.Text>
						Every country you visit while backpacking through Africa highlights
						the different flavors and offers up the opportunity to experience
						the amazing natural phenomena and incredible cultural diversity
						unique to that region.
					</Typography.Text>
					<Typography.Text>
						Explore the epic snow-capped peaks of Mount Kilimanjaro in Tanzania.
						Soak up the sun on the striking Grotto Beach in Hermanus, South
						Africa. Party with the amazing people at the famous Carnaval de
						Mindelo in Cape Verde. Trek the Simien Mountains in Ethiopia. Get
						off the beaten path in Majete Wildlife Reserve, Malawi. Experience
						the sun-drenched deserts of North Africa. Climb Ras Dashen, the
						highest peak in Ethiopia. Backpacking through South Africa truly is
						an eye-opening experience if you’re looking for meaningful
						cross-cultural exchanges with communities totally different from
						your own.
					</Typography.Text>
					<Image
						className="pl-5"
						preview={false}
						src="https://mindthetravel.com/wp-content/uploads/2019/07/travelling-africa-alone-1024x682.jpg"
					></Image>
					<Typography.Text>
						Most travelers start in Nairobi to make their way down to Cape Town.
						Take advantage of the largest airports in Nairobi or Cape Town to
						quickly find flights from and to your home destination.
					</Typography.Text>
					<Typography.Text>
						There are some fairly dangerous corners on the Dark Continent that
						you should avoid if you’re traveling to Africa alone. You will fall
						in love with Africa. Let’s dive in and take a look at a few Africa
						travel itineraries and backpacking routes to prepare for your trip.
					</Typography.Text>
				</Flex>
			</Flex>
		</div>
	);
}
