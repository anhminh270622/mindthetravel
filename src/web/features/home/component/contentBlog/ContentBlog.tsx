import { Button, Flex } from 'antd';
import React from 'react';
import styles from './ContentBlog.module.scss';
import { Link } from '@tanstack/react-router';
export default function ContentBlog() {
	return (
		<Flex vertical className={styles.root} align="center">
			<h2>About Mind The Travel Blog</h2>
			<p>
				<b>Howdy!</b>I’m Ivan and welcome to adventure travel and photography
				blog <b>Mind The Travel!</b> Deciding the traditional “9-5 career” was
				not for me when I turned 23 I quit my job to travel the world and some
				time later launched this blog to document my travels, and help you
				optimize your travel experience and achieve your travel goals.
			</p>
			<p>
				I’m originally from <b>Dresden</b> and I did my best to embrace the
				minimalist travel mindset. I’ve lived in 5 different countries, love
				learning new languages, and I’m an avid hiker. You’ll most likely find
				me exploring nature’s wonders, hanging out at the sandy beaches, or
				anywhere else where I can appreciate the breathtaking natural beauty
				Mother Nature has gifted us. I’m also a freelancer and travel
				photographer, so you’ll rarely find me without my camera. I’m just an
				ordinary guy who’s on a mission to explore the world and show you how to
				travel more for less.
			</p>

			<Link to="/about-mind-the-travel">
				<Button className="px-6">MORE ABOUT IVAN</Button>
			</Link>
		</Flex>
	);
}
