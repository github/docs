import { notFound } from 'next/navigation'

// This page handles internal /_not-found redirects from Express middleware
export default function InternalNotFound() {
  // This will trigger Next.js to render the not-found.tsx page
  notFound()
}
