## Limitations of {% data variables.product.prodname_copilot_chat %}

Depending on factors such as your codebase and input data, you may experience different levels of performance when using {% data variables.product.prodname_copilot_chat_short %}. The following information is designed to help you understand system limitations and key concepts about performance as they apply to {% data variables.product.prodname_copilot_chat_short %}.

### Limited scope

{% data variables.product.prodname_copilot_chat_short %} has been trained on a large body of code but still has a limited scope and may not be able to handle more complex code structures or obscure programming languages. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language. For example, JavaScript is well-represented in public repositories and is one of {% data variables.product.prodname_copilot %}'s best supported languages. Languages with less representation in public repositories may be more challenging for {% data variables.product.prodname_copilot_chat_short %} to provide assistance with. Additionally, {% data variables.product.prodname_copilot_chat_short %} can only suggest code based on the context of the code being written, so it may not be able to identify larger design or architectural issues.

### Potential biases

{% data variables.product.prodname_copilot_short %}'s training data is drawn from existing code repositories, which may contain biases and errors that can be perpetuated by the tool. Additionally, {% data variables.product.prodname_copilot_chat_short %} may be biased towards certain programming languages or coding styles, which can lead to suboptimal or incomplete code suggestions.

### Security risks

{% data variables.product.prodname_copilot_chat_short %} generates code based on the context of the code being written, which can potentially expose sensitive information or vulnerabilities if not used carefully. You should be careful when using {% data variables.product.prodname_copilot_chat_short %} to generate code for security-sensitive applications and always review and test the generated code thoroughly.

### Matches with public code

{% data variables.product.prodname_copilot_chat_short %} is capable of generating new code, which it does in a probabilistic way. While the probability that it may produce code that matches code in the training set is low, a {% data variables.product.prodname_copilot_chat_short %} suggestion may contain some code snippets that match code in the training set. {% data variables.product.prodname_copilot_chat_short %} utilizes filters that block matches with public code on {% data variables.product.prodname_dotcom %} repositories, but you should always take the same precautions as you would with any code you write that uses material you did not independently originate, including precautions to ensure its suitability. These include rigorous testing, IP scanning, and checking for security vulnerabilities. You should make sure your IDE or editor does not automatically compile or run generated code before you review it.

### Inaccurate code

One of the limitations of {% data variables.product.prodname_copilot_chat_short %} is that it may generate code that appears to be valid but may not actually be semantically or syntactically correct or may not accurately reflect the intent of the developer. To mitigate the risk of inaccurate code, you should carefully review and test the generated code, particularly when dealing with critical or sensitive applications. You should also ensure that the generated code adheres to best practices and design patterns and fits within the overall architecture and style of the codebase.

### Inaccurate responses to non-coding topics

{% data variables.product.prodname_copilot_chat_short %} is not designed to answer non-coding questions, and therefore its responses may not always be accurate or helpful in these contexts. If a user asks {% data variables.product.prodname_copilot_chat_short %} a non-coding question, it may generate an answer that is irrelevant or nonsensical, or it may simply indicate that it is unable to provide a useful response.
