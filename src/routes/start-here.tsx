import { createFileRoute } from '@tanstack/react-router'
import StartHereScreen from '../web/features/startHere/screen/StartHereScreen'

export const Route = createFileRoute('/start-here')({
    component: () => <StartHereScreen />,
})
