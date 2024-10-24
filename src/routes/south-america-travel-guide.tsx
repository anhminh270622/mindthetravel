import { createFileRoute } from '@tanstack/react-router'
import SouthAmericaScreen from '../web/features/southAmerica/screen/SouthAmericaScreen'

export const Route = createFileRoute('/south-america-travel-guide')({
  component: () => <SouthAmericaScreen />
})
