import { createFileRoute } from '@tanstack/react-router'
import DestinationScreen from '../web/features/destinations/screen/DestinationScreen'

export const Route = createFileRoute('/destinations')({
    component: () => <DestinationScreen />,
})
