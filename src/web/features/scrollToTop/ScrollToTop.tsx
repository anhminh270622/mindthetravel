import { BackTop, Image } from 'antd';

export default function ScrollToTop() {
	return (
		<BackTop visibilityHeight={500}>
			<Image
				preview={false}
				src="https://mindthetravel.com/wp-content/uploads/2016/05/up-arrow.png"
				style={{
					backgroundColor: '#9fa08f',
					padding: '5px',
					borderRadius: '50%',
					color: 'white',
					position: 'fixed',
					bottom: '50px',
					right: '20px',
					width: '44px',
					height: '44px',
				}}
			/>
		</BackTop>
	);
}
