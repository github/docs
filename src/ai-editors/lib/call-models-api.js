const modelsCompletionsEndpoint = 'https://models.github.ai/inference/chat/completions'

export async function callModelsApi(promptWithContent) {
  let aiResponse
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
    const data = await response.json()
    aiResponse = data.choices[0]
  } catch (error) {
    console.error('Error calling GitHub Models REST API')
    throw error
  }

  return aiResponse.message.content
}
