import React from 'react';
import Information from '../../../common/infomation/Information';
import { Flex, Image, Typography } from 'antd';
import styles from './NorthAmericaComponent.module.scss';
export default function NorthAmericaComponent() {
	return (
		<div className={styles.root}>
			<Information description="North America Travel Guide" />
			<Flex vertical className="layout bg-white pt-10">
				<Flex vertical>
					<Typography.Title level={1}>
						North America Travel Guide
					</Typography.Title>
					<Image
						className="pl-5"
						preview={false}
						src="https://mindthetravel.com/wp-content/uploads/2016/05/north-america-travel-guide.jpg"
					/>
					<Typography.Text>
						When Columbus first reached the islands next to the then unknown
						continent in 1492, he couldn’t have imagined how vast and
						picturesque this land really is. The seafarers were looking for a
						short way to India, but actually discovered something more important
						that was yet to be realized.
					</Typography.Text>
					<Typography.Text>
						North America embraces the glaciers of the Arctic Circle and hot
						beaches of the Gulf of Mexico. It divides the Atlantic, the Arctic,
						and Pacific Oceans.
					</Typography.Text>
					<Typography.Text>
						Mexico is great because of cheap accommodation, delicious food, and
						cultural heritage. While prices in Mexico are lower than in the USA
						you can find quite the same service quality. Mix buzzing nightlife
						of Cancun with visiting lost civilizations of Maya and Aztec.
					</Typography.Text>
					<Typography.Text>
						Canada has amazing northern nature and enormous size. Take a road
						trip across Canada to find out how big it really is. From the bread
						basket of Saskatchewan to the Yukon’s icy tundra, Canada offers
						great opportunities for camping in the wild, visiting national parks
						and meet lots of friendly people.
					</Typography.Text>
					<Typography.Text>
						The United States is a country that has everything from soup to
						nuts. You can’t say you have visited it by only sticking to one or
						two cities. As the vast majority of Americans travel by car within
						the country, there is no better way to get acquainted with the U.S.
						culture than by driving around or taking some cross-country tours.
						California, Florida, Texas, Hawaii, New York, Chicago, Washington,
						San Francisco and Los Angeles, each of these states and cities has
						its own spirit, food, and breathtaking attractions. North America
						has a diverse geography with so many things to do and places to
						visit.
					</Typography.Text>
				</Flex>
				<Flex vertical>
					<Typography.Title level={1}>
						DESTINATION GUIDES FOR NORTH AMERICA
					</Typography.Title>
					<Typography.Title level={3}>
						Getting Around in North America
					</Typography.Title>
					<Typography.Text>
						With so many means of transport to travel in the US, you may
						discover that some of them are quite expensive. Flying is your best
						bet if you are in a hurry, but might eat your money really fast.
						While train routes in the USA cover all popular destinations, there
						are spots that will require bus or car to reach them. Besides,
						trains are almost always more expensive than buses. To reduce your
						transportation expenses in the US stick to bus services like
						Greyhound or hire a car that is usually a worthwhile investment
						since you can share fuel cost and gain a freedom when your
						destination is difficult to get to.
					</Typography.Text>
					<Typography.Text>
						Mexico can be best seen from the window of the bus. You can use them
						at any time, almost everywhere. With a large network of bus routes,
						the only thing you should do is to pick a destination and the bus
						class. First class buses are equipped with A/C, TV and a WC and
						offer long-distance bus services. When traveling over-night first
						class buses can get really cool. Have a pullover handy. Second class
						buses with the windows wide open and music playing normally connect
						cities and villages, use bumpy side roads and generally cheaper.
						These buses are great if you want to feel the spirit of Mexico.
						Major cities have subway systems. Flights are widely available in
						Mexico and sometimes costs less than long-distance buses.
					</Typography.Text>
					<Typography.Text>
						Canada is a big country and getting around can be tough. Youth
						backpackers and students can take advantage of their age and get a
						discount for bus or train. Buses are great value but they don’t
						always stop near the place you need outside big cities. They are
						still comfortable and noticeably cheaper than trains, however. Buses
						are usually the only option in less densely populated areas. You can
						find bus companies ranging small family-run businesses to large
						international subsidiaries. Greyhound runs most of the long-distance
						routes. If you rent a car, try to share fuel costs. Hitchhiking is
						available almost everywhere (except some highways) but usually
						practiced near ski and hiking resorts.
					</Typography.Text>
					<Typography.Title level={3}>Food In North America</Typography.Title>
					<Typography.Text>
						Mexico is a food delicious destination. After Asia, Mexico has the
						nicest street food in the world. To get authentic Mexican food like
						tacos, enchiladas, tamales and guacamole stick to small family-run
						eateries. Tourist restaurants are usually quite expensive by
						comparison. The set menu and meal of the day allow you to cut some
						food expenses. Mexico has plenty of fast food restaurant chains,
						both Mexican and American and supermarkets, which offer excellent
						bakeries, so eating cheaply on the move is easy.
					</Typography.Text>
					<Typography.Text>
						Meals in the USA can be quite cheap if you stick to fast food or
						ethnic cuisine. Major cities like New York or LA will offer the
						complete blend of food ranging from cheap eateries to decent
						mid-range sit-down restaurants. In tiny towns, you can find roadside
						diners with deep-fried fast food. Portions are immensely large. Most
						restaurants (except for some fast food) offer complimentary water
						and soft drinks, which are often free in bars if bought with
						alcohol. You may expect your final bill to be higher because they
						add 15-20 percent and local sales tax. Cooking your own meals would
						always be cheaper and allows to save some extra money.
					</Typography.Text>
					<Typography.Text>
						Food in Canada can be cheap if you prefer street vendors and
						homemade foods. Falafels, hot dogs, pizza slices and doner kebab
						come for less than 5 USD. Food beyond the Arctic Circle is more
						expensive. Supermarkets in major cities are omnipresent, providing
						possibilities to cook your own food. Expect to pay around 60 USD per
						week.
					</Typography.Text>
				</Flex>
			</Flex>
		</div>
	);
}
