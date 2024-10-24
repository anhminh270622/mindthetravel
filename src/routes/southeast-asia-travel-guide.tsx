import { createFileRoute } from '@tanstack/react-router'
import SoutheastAsiaScreen from '../web/features/southeastAsia/screen/SoutheastAsiaScreen'

export const Route = createFileRoute('/southeast-asia-travel-guide')({
  component: () => <SoutheastAsiaScreen />
})
