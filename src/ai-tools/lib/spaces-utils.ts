/**
 * Copilot Space API response types
 */
export interface SpaceResource {
  id: number
  resource_type: string
  copilot_chat_attachment_id: string | null
  metadata: {
    name: string
    text: string
  }
}

export interface SpaceData {
  id: number
  number: number
  name: string
  description: string
  general_instructions: string
  resources_attributes: SpaceResource[]
  html_url: string
  created_at: string
  updated_at: string
}

/**
 * Parse a Copilot Space URL to extract org and space ID
 */
export function parseSpaceUrl(url: string): { org: string; id: string } {
  // Expected format: https://api.github.com/orgs/{org}/copilot-spaces/{id}
  const match = url.match(/\/orgs\/([^/]+)\/copilot-spaces\/(\d+)/)

  if (!match) {
    throw new Error(
      `Invalid Copilot Space URL format. Expected: https://api.github.com/orgs/{org}/copilot-spaces/{id}`,
    )
  }

  return {
    org: match[1],
    id: match[2],
  }
}

/**
 * Fetch a Copilot Space from the GitHub API
 */
export async function fetchCopilotSpace(spaceUrl: string): Promise<SpaceData> {
  const { org, id } = parseSpaceUrl(spaceUrl)
  const apiUrl = `https://api.github.com/orgs/${org}/copilot-spaces/${id}`

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Copilot Space not found: ${apiUrl}`)
    } else if (response.status === 401 || response.status === 403) {
      throw new Error(
        `Authentication failed. Check your GitHub token has access to Copilot Spaces.`,
      )
    } else {
      throw new Error(`Failed to fetch Copilot Space: ${response.status} ${response.statusText}`)
    }
  }

  return (await response.json()) as SpaceData
}

/**
 * Convert a Copilot Space to a markdown prompt file
 */
export function convertSpaceToPrompt(space: SpaceData): string {
  const timestamp = new Date().toISOString()
  const lines: string[] = []

  // Header with metadata
  lines.push(`<!-- Generated from Copilot Space: ${space.name} -->`)
  lines.push(`<!-- Space ID: ${space.number} | Generated: ${timestamp} -->`)
  lines.push(`<!-- Space URL: ${space.html_url} -->`)
  lines.push('')

  // General instructions
  if (space.general_instructions) {
    lines.push(space.general_instructions.trim())
    lines.push('')
  }

  // Add each resource as a context section
  if (space.resources_attributes && space.resources_attributes.length > 0) {
    for (const resource of space.resources_attributes) {
      if (resource.resource_type === 'free_text' && resource.metadata) {
        lines.push('---')
        lines.push('')
        lines.push(`# Context: ${resource.metadata.name}`)
        lines.push('')
        lines.push(resource.metadata.text.trim())
        lines.push('')
      }
    }
  }

  return lines.join('\n')
}
