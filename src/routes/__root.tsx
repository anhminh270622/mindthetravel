import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import HeaderScreen from '../web/features/header/screen/HeaderScreen';
import FooterScreen from '../web/features/footer/footerScreen/FooterScreen';
import ScrollToTop from '../web/features/scrollToTop/ScrollToTop';
import SideBar from '../web/features/sideBar/SideBar';
export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div>
			<HeaderScreen />
			<Outlet />
			<FooterScreen />
			<ScrollToTop />
			<SideBar />
			<TanStackRouterDevtools position="bottom-right" />
		</div>
	);
}
