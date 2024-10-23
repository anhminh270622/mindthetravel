import { createFileRoute } from '@tanstack/react-router'
import BlogScreen from '../web/features/blog/screen/BlogScreen'

export const Route = createFileRoute('/blog')({
  component: () => <BlogScreen />,
})
