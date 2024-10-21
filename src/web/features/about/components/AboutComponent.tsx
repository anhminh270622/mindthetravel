import { Flex } from 'antd';
import Information from '../../../common/infomation/Information';
import BoxContainer from '../../../common/infomation/boxContainer/BoxContainer';
import ContentAuthor from './contentBox/ContentAuthor';
import ContentMindTheTravel from './contentBox/ContentMindTheTravel';
import styles from './AboutComponent.module.scss';
import EmotionForm from '../../../common/infomation/emotionForm/EmotionForm';
const AboutComponent = () => (
	<Flex vertical className={styles.root}>
		<Information description="About Mind The Travel" />
		<BoxContainer
			image="https://mindthetravel.com/wp-content/uploads/2019/06/64955052_939676883054778_8261823327086051328_n-958x958.jpg"
			title="About The Author"
			children={<ContentAuthor />}
		/>
		<hr className="my-10" style={{ height: '3px', background: '#000000' }} />
		<BoxContainer
			image="https://mindthetravel.com/wp-content/uploads/2020/01/Mind-The-Travel-Blogger1-728x728.jpg"
			title="Why MindTheTravel"
			isReverse
			children={<ContentMindTheTravel />}
		/>
		<EmotionForm />
	</Flex>
);

export default AboutComponent;
