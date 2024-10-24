import { createFileRoute } from '@tanstack/react-router'
import NorthAmericaScreen from '../web/features/northAmerica/screen/NorthAmericaScreen'

export const Route = createFileRoute('/north-america-travel-guide')({
  component: () => <NorthAmericaScreen />,
})
