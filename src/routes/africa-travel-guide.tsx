import { createFileRoute } from '@tanstack/react-router'
import AfricaScreen from '../web/features/africa/screen/AfricaScreen'

export const Route = createFileRoute('/africa-travel-guide')({
  component: () => <AfricaScreen />,
})
