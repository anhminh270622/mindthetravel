import { Flex } from 'antd';
import styles from './Information.module.scss';
interface InformationProps {
	tile?: string;
	description: string;
	image?: boolean;
}
const Information = ({
	tile,
	description,
	image = false,
}: InformationProps) => {
	return (
		<div
			className={styles.root}
			style={
				image
					? {
							backgroundImage: `url(https://mindthetravel.com/wp-content/uploads/2016/06/IMG_1503.jpg)`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}
					: {}
			}
		>
			<Flex
				className={styles.arrowBox}
				align={tile ? 'center' : 'start'}
				justify="center"
				vertical
			>
				<h3>{tile}</h3>
				<p>{`MindTheTravel / ${description}`}</p>
			</Flex>
		</div>
	);
};

export default Information;
