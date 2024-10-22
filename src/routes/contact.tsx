import { createFileRoute } from '@tanstack/react-router'
import ContactScreen from '../web/features/contact/screen/ContactScreen'

export const Route = createFileRoute('/contact')({
    component: () => <ContactScreen />,
})
