const modelsCompletionsEndpoint = 'https://models.github.ai/inference/chat/completions'
const API_TIMEOUT_MS = 180000 // 3 minutes
const DEFAULT_MODEL = 'openai/gpt-4o'

interface ChatMessage {
  role: string
  content: string
}

interface ChatCompletionRequest {
  messages: ChatMessage[]
  model?: string
  temperature?: number
  max_tokens?: number
}

interface ChatCompletionChoice {
  message: {
    content: string
    role: string
  }
  finish_reason: string
  index: number
}

interface ChatCompletionResponse {
  choices: ChatCompletionChoice[]
  id: string
  object: string
  created: number
  model: string
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export async function callModelsApi(
  promptWithContent: ChatCompletionRequest,
  verbose = false,
): Promise<string> {
  let aiResponse: ChatCompletionChoice

  // Set default model if none specified
  if (!promptWithContent.model) {
    promptWithContent.model = DEFAULT_MODEL
    if (verbose) {
      console.log(`⚠️  No model specified, using default: ${DEFAULT_MODEL}`)
    }
  }

  try {
    // Create an AbortController for timeout handling
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)

    const startTime = Date.now()
    if (verbose) {
      console.log(`🚀 Making API request to GitHub Models using ${promptWithContent.model}...`)
    }

    const response = await fetch(modelsCompletionsEndpoint, {
      method: 'post',
      body: JSON.stringify(promptWithContent),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github+json',
      },
      signal: controller.signal,
    })

    const fetchTime = Date.now() - startTime
    if (verbose) {
      console.log(`⏱️  API response received in ${fetchTime}ms`)
    }

    clearTimeout(timeoutId)

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status} - ${response.statusText}`

      // Try to get more detailed error information
      try {
        const errorBody = await response.json()
        if (errorBody.error && errorBody.error.message) {
          errorMessage += ` - ${errorBody.error.message}`
        }
      } catch {
        // If we can't parse error body, continue with basic error
      }

      // Add helpful hints for common errors
      if (response.status === 401) {
        errorMessage += ' (Check your GITHUB_TOKEN)'
      } else if (response.status === 400) {
        errorMessage += ' (This may be due to an invalid model or malformed request)'
      } else if (response.status === 429) {
        errorMessage += ' (Rate limit exceeded - try again later)'
      }

      throw new Error(errorMessage)
    }

    const data: ChatCompletionResponse = await response.json()

    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response choices returned from API')
    }

    aiResponse = data.choices[0]

    if (verbose) {
      const totalTime = Date.now() - startTime
      console.log(`✅ Total API call completed in ${totalTime}ms`)

      if (data.usage) {
        console.log(
          `📊 Tokens: ${data.usage.prompt_tokens} prompt + ${data.usage.completion_tokens} completion = ${data.usage.total_tokens} total`,
        )
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error(`API call timed out after ${API_TIMEOUT_MS / 1000} seconds`)
      }
      console.error('Error calling GitHub Models REST API:', error.message)
    }
    throw error
  }

  return cleanAIResponse(aiResponse.message.content)
}

// Helper function to clean up AI response content
function cleanAIResponse(content: string): string {
  // Remove markdown code blocks
  return content
    .replace(/^```[\w]*\n/gm, '') // Remove opening code blocks
    .replace(/\n```$/gm, '') // Remove closing code blocks at end
    .replace(/\n```\n/gm, '\n') // Remove standalone closing code blocks
    .trim()
}
