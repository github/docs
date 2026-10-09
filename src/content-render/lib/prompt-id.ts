import murmur from 'imurmurhash'

// Hash prompt content deterministically so server and client IDs match during hydration.
export function generatePromptId(promptContent: string): string {
  return murmur('prompt').hash(promptContent).result().toString()
}
