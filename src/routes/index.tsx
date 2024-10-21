import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import HomeScreen from '../web/features/home/screen/HomeScreen';

export const Route = createFileRoute('/')({
	component: HomeScreen,
});
