// This module overrides "Hogan" that instantsearch.js uses
// Hogan uses `new Function`,
// so we can't use it with our content security policy.
// Turns out, we use all our own templates anyway,
// so we just have to shim out Hogan so it doesn't error!

export default {
  compile (template) {
    return {
      render (data) {
        return ''
      }
    }
  }
}
