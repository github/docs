### Input processing

The input prompt from the user is pre-processed by the {% data variables.product.prodname_copilot_chat_short %} system, combined with contextual information (for example, the name of the repository the user is currently viewing and the files the user has open), and sent to a large language model. User input can take the form of code snippets or plain language.

The large language model will take the prompt, gather additional context (for example repository data stored on {% data variables.product.prodname_dotcom %}), and provide a response based on the prompt. The system is only intended to respond to coding-related questions.
