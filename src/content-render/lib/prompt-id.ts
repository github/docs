import murmur from 'imurmurhash'

/**
 * Generate a deterministic ID for a prompt based on its content.
 * Uses MurmurHash to create a unique ID that remains consistent across renders,
 * avoiding hydration mismatches in the client.
 */
export function generatePromptId(promptContent: string): string {
  return murmur('prompt').hash(promptContent).result().toString()
}
