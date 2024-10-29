import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import AboutScreen from '../web/features/about/screen/AboutScreen';

export const Route = createFileRoute('/about-mind-the-travel')({
	component: AboutScreen,
});
