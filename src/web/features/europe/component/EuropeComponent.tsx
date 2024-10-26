import React from 'react';
import Information from '../../../common/infomation/Information';
import { Flex, Image, Typography } from 'antd';
import styles from './EuropeComponent.module.scss';
export default function EuropeComponent() {
    return (
        <div className={styles.root}>
            <Information description="Europe Travel Guide: Things to Do On a Budget & Ways to Save Money" />
            <Flex vertical className={styles.content}>
                <Flex vertical>
                    <Typography.Title level={2} className="center">
                        Europe Travel Guide: Things to Do On a Budget & Ways to Save Money
                    </Typography.Title>
                    <Typography.Text>
                        If you are planning a trip to Europe, it can be an overwhelming
                        experience. Which
                        <a href="https://mindthetravel.com/how-to-choose-a-travel-destination-things-to-consider/">
                            destination to choose
                        </a>
                        ? How much will it cost? How many days should you allocate for
                        Europe? With so many awe-inspiring castles, ancient cathedrals,
                        beautiful architecture, fascinating history, and art, Europe is a
                        great place to start your travels. Since I get so many emails from
                        folks who want advice planning a trip to Europe, I’ve put together
                        the
                        <a href="">Europe travel guide</a>
                        revealing things to do on a budget, safety travel tips and ways to
                        save money.
                    </Typography.Text>
                    <Typography.Text>
                        Backpacking Europe is obviously not as cheap as traveling in
                        Southeast Asia, however, you will find all of Europe to be super
                        diverse, easy to navigate, and safe. From
                        <a
                            href="https://mindthetravel.com/things-to-do-in-barcelona/"
                            className="pl-1"
                        >
                            Barcelona
                        </a>
                        ,{' '}
                        <a href="https://mindthetravel.com/things-to-do-in-prague/s">
                            Prague
                        </a>{' '}
                        , and Budapest, <a>Hungary</a> to <a>Moscow</a>, there are a lot of
                        destinations in Europe for backpackers and budget travelers. With a
                        few travel tips for backpacking Europe up your sleeve, you can
                        really get the most out of your trip to Europe without spending a
                        lot of money.
                    </Typography.Text>
                    <Typography.Text>
                        Each country in Europe has its own unique appeal, charm, and culture
                        that dates back centuries. I could spend countless hours describing
                        its history and culinary traditions but it’s better to see Europe
                        with your own eyes. At least once.
                    </Typography.Text>
                </Flex>
                <div className={styles.hr} />

                <Flex vertical>
                    <Typography.Title className="center" level={3}>
                        Read Next: Southeast Asia Travel Guide
                    </Typography.Title>
                    <Typography.Text>
                        <a>Backpacking</a> Europe is a journey through different as diverse
                        as the world itself. Hit the <a href="">beach in Barcelona</a>. Get
                        to know the gorgeous architecture in Prague, Czech Republic. Explore
                        the most beautiful
                        <a href="https://mindthetravel.com/french-nature-reserves-and-national-parks/">
                            national parks in France
                        </a>
                        . Spend three or four days in the Cinque Terre and{' '}
                        <a href="">Rome</a> in <a href="">Italy</a>. Check the best beaches
                        in <a href="">Cyprus</a>. Visit beautiful{' '}
                        <a href="">Salzburg, Austria</a>, the birthplace of Wolfgang Amadeus
                        Mozart.
                    </Typography.Text>
                    <Typography.Text>
                        Experience life in one of Europe’s most exciting cities in Paris,
                        <a href="https://mindthetravel.com/backpacking-france-travel-guide-2/">
                            France.
                        </a>{' '}
                        Get off the beaten path in Moscow, Russia. Admire the magnificent
                        Cliffs of Moher in Ireland. Go on a Greek island hopping tour. Enjoy
                        the charming seaside towns on{' '}
                        <a href="https://mindthetravel.com/spend-perfect-weekend-on-rugen-island/">
                            Rügen
                        </a>
                        , Germany. Fall in love with the breathtaking landscapes in Finland.
                        Visit Egeskov Castle in Funen,{' '}
                        <a href="https://mindthetravel.com/denmark-travel-guide/">
                            Denmark
                        </a>
                        . Or just head to{' '}
                        <a href="https://mindthetravel.com/malta-travel-guide/">Malta.</a>
                    </Typography.Text>
                    <Typography.Text>
                        There are countless options when it comes to backpacking Europe.
                        Ultimately, planning a trip to Europe depends on what you want to
                        accomplish. Some folks have a destination in mind, or an activity
                        they plan to center their vacation around. Whatever your choice is
                        I’m here to provide you with all the awesome vacation ideas for your
                        Europe trip!
                    </Typography.Text>
                    <Image
                        preview={false}
                        src="https://mindthetravel.com/wp-content/uploads/2019/07/how-to-save-money-on-food-while-staying-at-hotels.jpg"
                    />
                </Flex>
                <div className={styles.hr} />

                <Flex vertical>
                    <Typography.Title className="center" level={3}>
                        Getting Around Europe On a Budget
                    </Typography.Title>
                    <Typography.Title level={3} className="mt-0">
                        Budget Flying Within Europe
                    </Typography.Title>
                    <Typography.Text>
                        As a frequent flyer, I can’t imagine traveling Europe on a budget
                        without the low-cost carriers. They offer great flight deals so you
                        can find cheap return flights for only 25 EUR from Italy to{' '}
                        <a href="https://mindthetravel.com/germany-travel-guide/">
                            Germany
                        </a>
                        . Book in advance if you’re planning to spend your summer holidays
                        in Europe. Traveling during the high season often mean flight prices
                        will double, triple, so you may want to reap those savings. There is
                        a number of low-cost airlines that make traveling Europe on a budget
                        possible and will help you get to your next destination{' '}
                        <a href="https://mindthetravel.com/getting-through-airport-security-faster/">
                            faster
                        </a>
                        .
                    </Typography.Text>
                    <Typography.Title level={3} className="mt-0">
                        Use Cheap Bus Travel in Europe
                    </Typography.Title>
                    <Typography.Text>
                        Taking a bus is a great option if you’re backpacking through Europe.
                        They offer a reliable way of getting around Europe and are generally
                        cheaper than trains. Companies like Flixbus, Megabus and Eurolines
                        have an extensive network across Europe with ‘funfares’ as cheap as
                        5 EUR if booked in advance. Some companies like Flixbus offer bus
                        pass that can take you to over 1,200 destinations across Europe and
                        is valid for three months.
                    </Typography.Text>
                    <Image
                        preview={false}
                        src="https://mindthetravel.com/wp-content/uploads/2019/07/Europe-Travel-Guide-Things-to-Do-On-a-Budget-Ways-to-Save-Money.jpg"
                    />
                    <Typography.Text className="mb-7">
                        You can travel from Dresden to Berlin for as little as 9 EUR with
                        Flixibus. I used them for my trip between Berlin and Prague.
                        Busabout is another affordable long-distance bus I used to get back
                        to Munich from Stuttgart. That trip cost me 10 EUR.
                    </Typography.Text>
                </Flex>
            </Flex>
        </div>
    );
}
