const modelsCompletionsEndpoint = 'https://models.github.ai/inference/chat/completions'

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

export async function callModelsApi(promptWithContent: ChatCompletionRequest): Promise<string> {
  let aiResponse: ChatCompletionChoice

  try {
    const response = await fetch(modelsCompletionsEndpoint, {
      method: 'post',
      body: JSON.stringify(promptWithContent),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'Accept: application/vnd.github+json',
      },
    })

    const data: ChatCompletionResponse = await response.json()
    aiResponse = data.choices[0]
  } catch (error) {
    console.error('Error calling GitHub Models REST API')
    throw error
  }

  return aiResponse.message.content
}
