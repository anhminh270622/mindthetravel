import { useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';

function ScrollToTopAndReload() {
	const router = useRouter();
	const currentPath = router.state.location.pathname;

	const [hasReloaded, setHasReloaded] = useState(false); // Trạng thái để theo dõi việc reload

	useEffect(() => {
		// Chỉ thực hiện khi chưa reload
		if (!hasReloaded) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth', // Cuộn mượt mà
			});

			// Đánh dấu đã reload và reload trang
			setHasReloaded(true);
			window.location.reload();
		} else {
			// Đặt lại trạng thái reload khi có thay đổi route
			setHasReloaded(false);
		}
	}, [currentPath]);

	return null;
}

export default ScrollToTopAndReload;
