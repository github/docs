import type { SafeRedirect } from '@/frame/middleware/safe-redirect'

declare global {
  namespace Express {
    interface Response {
      safeRedirect: SafeRedirect
    }
  }
}
