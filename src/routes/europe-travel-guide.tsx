import { createFileRoute } from '@tanstack/react-router'
import EuropeScreen from '../web/features/europe/screen/EuropeScreen'

export const Route = createFileRoute('/europe-travel-guide')({
    component: () => <EuropeScreen />
})
