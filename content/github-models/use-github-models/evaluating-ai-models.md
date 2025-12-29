---
title: Evaluating AI models
intro: 'Test and compare AI model outputs using evaluators and scoring metrics in {% data variables.product.prodname_github_models %}.'
versions:
  feature: github-models
shortTitle: Evaluate AI models
topics:
  - GitHub Models
---

## Overview

{% data variables.product.prodname_github_models %} provides a simple evaluation workflow that helps developers compare large language models (LLMs), refine prompts, and make data-driven decisions within the {% data variables.product.github %} platform. You can use {% data variables.product.prodname_github_models %} to experiment with new features or validate model changes by analyzing performance, accuracy, and cost through structured evaluation tools.

>[!TIP]
> You can run evaluations directly from the command line using the `gh models eval` command. It uses the same evaluators as the UI: string match, similarity, custom LLM-as-a-judge evaluators, and more, so you can test your `.prompt.yml` file locally or in CI.

## Use cases for {% data variables.product.prodname_github_models %}

Model behavior can vary widely based on the prompt, input, or configuration. {% data variables.product.prodname_github_models %} helps you:

* Test and compare multiple LLMs across realistic use cases.
* Optimize prompt phrasing, temperature, and other parameters.
* Evaluate model outputs using structured, repeatable metrics.
* Make AI development integrated into your development workflow.

## Example scenario

Consider a scenario where you're building a feature to summarize customer feedback submitted through support tickets. These summaries will be used to generate internal reports and tickets, so the output needs to be clear, relevant, and concise.

You want to:

* Experiment with different models and prompt configurations.
* Evaluate the best-performing configuration based on quality, consistency, and efficiency.
* Save the configuration to your repository for reuse and collaboration.

## Prompt testing in the Playground

To familiarize yourself with how to create and manage prompts in {% data variables.product.prodname_github_models %}, see [Testing a prompt in the Playground](/github-models/use-github-models/optimizing-your-ai-powered-app-with-github-models#testing-a-prompt-in-the-playground).

The Playground lets you compare models side by side, adjust their parameters, and test prompt variations.

In this step, you'll configure a model to generate summaries for customer support feedback. You'll define a system prompt, test it with a sample input, and refine it to ensure the output is concise and relevant.

### Defining the system prompt

Define the model's behavior for your current goal. In this case, the goal is to summarize customer feedback. Under **Parameters**, enter the following System prompt:

    You are a helpful assistant that summarizes support ticket responses into concise summaries.

Leave the remaining settings set to their defaults.

![Screenshot of the system prompt. The system prompt input is highlighted.](/assets/images/help/models/github-models-system-prompt.png)

### Writing a user prompt

Now that the model is set up, enter the following customer feedback into the **Prompt** dialog:

    The app crashes every time I try to upload a PDF from my phone. It works on desktop but not on mobile.

The model may generate a response like the following:

    The user experiences consistent app crashes when attempting to upload a PDF from their phone. Uploading PDFs works normally on desktop. They request an investigation into the issue.

### Using variables in prompts

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

At this point, the configuration generates a clear and concise summary. At the bottom of the **Parameters** settings, click **Create prompt.yml file** to open the Prompt view. Your system prompt will be prefilled automatically.

In the **User prompt** field, enter a prompt that includes one or more variable placeholders inside double curly braces. For example:

```text
Travel or shopping assistants using {% raw %}{{city}}{% endraw %}, {% raw %}{{intent}}{% endraw %}, and {% raw %}{{budget}}{% endraw %} to tailor recommendations.
```

Each variable listed in the prompt will appear as a parameter in compare mode. When running an evaluation, you'll be prompted to provide values for each variable. This allows prompts to be reused with different inputs without modifying the prompt content.

Alternatively, you can add variables in your `.prompt.yml` file system or user prompt to automate the process of evaluating with multiple variables in the future. See [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories).

## Adding test inputs

At the top of the Prompts view, select **Compare** to toggle the Comparisons view. This view allows you to run structured comparisons across multiple prompts or models and apply evaluators to measure performance.

![Screenshot of the compare toggle. The compare toggle is highlighted.](/assets/images/help/models/github-models-compare-toggle.png)

In the Comparisons view, each row in the table represents a single test case, with a specific input and an expected output. Each column presents a different prompt configuration to compare how various models or prompt styles perform using evaluators.

Click **Add rows** to enter your test data. The input simulates a real support message, and the expected output represents the ideal summary the model should return. The table below provides sample test inputs and their corresponding expected outputs for evaluation.

| Row | **Input**                                                                        | **Expected output**                                                                                                           |
|-----|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1   | The app crashes every time I try to upload a PDF from my phone. It works on desktop but not on mobile. | User reports that the mobile app crashes every time they try to upload a PDF, while the desktop version works without issues. |
| 2   | I contacted support two days ago and haven't heard back. I need help recovering my account ASAP.       | User is awaiting support response and urgently needs account recovery assistance.                                             |
| 3   | Please add dark mode. It's very hard to use at night. My eyes hurt after prolonged use.                | User requests dark mode due to eye strain during nighttime use.                                                               |

### Adjusting model parameters

To the right of the table, click {% octicon "plus" aria-label="Add prompt configuration" %} to add a new prompt configuration.

Within the new prompt configuration, you can update the model and fine-tune its behavior using the available parameters settings. These settings control how the model generates text, including its length, randomness, and repetition.

### Configuring the model

From the Model dropdown, choose PHI-4 to create a distinct configuration for comparison.

You can adjust the following parameters to influence the model’s output:

* **Max Tokens**: Sets the maximum number of tokens the model can return. Higher values allow longer outputs.
* **Temperature**: Controls randomness in the response. Lower values (0.2–0.4) produce more focused, deterministic outputs. Higher values (0.8–1.0) introduce more variation and creativity.
* **Top P**: Controls output diversity by selecting from a pool of the most probable next words. Lower values reduce variability, similar to lowering temperature.
* **Presence Penalty**: Discourages the model from introducing new topics. Higher values apply a stronger penalty. A value of 0 is typically suitable for summarization.
* **Frequency Penalty**: Reduces the likelihood of repeating words. Higher values apply a stronger penalty. A value between 0 and 0.5 helps keep summaries clear and free of redundancy.
* **Stop**: Specifies one or more strings that, when generated, will cut off the model's response. Use this to prevent overly long outputs or enforce formatting rules.

The table below provides a parameter configuration for generating concise summaries during model comparison.

| Parameter         | Value      | Reason                                                      |
|-------------------|------------|-------------------------------------------------------------|
| Max Tokens        | 128        | Keeps responses short and on-topic                          |
| Temperature       | 0.3        | Ensures deterministic, focused outputs                      |
| Top P             | 1.0        | Allows full vocabulary but keeps selection guided           |
| Presence Penalty  | 0          | No penalty—summaries don’t need topic variation             |
| Frequency Penalty | 0.3        | Reduces repeated phrasing in compact summaries              |
| Stop              | (optional) | Use if you want to end output after a keyword or symbol     |

After applying the parameters, you can add additional columns to compare more models or prompt configurations side by side.

## Evaluating outputs

Once the prompt is configured, run a structured evaluation to compare model outputs using real data and repeatable metrics.

Model evaluation helps you understand how different models and prompt configurations perform across real inputs. In the Prompt view, you can apply evaluators to multiple models side by side and review metrics such as similarity, fluency, coherence, relevance, and groundedness.

The following evaluators are available:

* **Similarity**: Measures how closely a model's output matches an expected or reference answer. This is useful when you want to confirm that the model returns consistent and accurate responses aligned with a known result. The score ranges from 0 to 1, with higher values indicating greater similarity.
* **Fluency**: Evaluates the linguistic quality of a response, including grammar, coherence, and readability. This results in linguistically correct responses.
* **Coherence**: Assesses the ability of the LLM to generate text that reads naturally, flows smoothly, and resembles human-like language in its responses. Use it when assessing the readability and user-friendliness of a model’s generated responses in real-world applications.
* **Relevance**: Refers to how effectively a response addresses a question. It assesses the accuracy, completeness, and direct relevance of the response based solely on the given information. The score ranges from 0 to 1, with higher values indicating stronger alignment with the input's intent.
* **Groundedness**: Measures how well an answer is anchored in the provided context, evaluating its relevance, accuracy, and completeness based exclusively on that context. It assesses the extent to which the answer fully addresses the question without introducing unrelated or incorrect information. The score ranges from 0 to 1, with higher values indicating higher accuracy.
* **Custom prompt**: Lets you define your own evaluation criteria for one LLM to assess the output of another. This allows you to score model outputs based on your own guidelines. You can choose between pass/fail or scored evaluations, making it ideal for scenarios where standard metrics do not capture testing expectations.

When you’re ready to evaluate, click **Run** to generate and compare the outputs across all prompt configurations. After the run completes, {% data variables.product.prodname_github_models %} displays the output from each prompt configuration, along with evaluator scores.

![Screenshot of the dataset after the evaluator has run.](/assets/images/help/models/github-models-datasets.png)

## Test case: PDF upload crash

**Input**: `The app crashes every time I try to upload a PDF from my phone. It works on desktop but not on mobile.`

The following tables display each model's output and its evaluator scores:

| Model | Output                                                                                                                                     |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| {% data variables.copilot.copilot_gpt_41 %} | User reports that the app crashes when uploading a PDF from mobile, though uploading works on desktop.                           |
| DeepSeek-R1 | <think> Okay, the user is having trouble with the app crashing when they try to upload a PDF from their phone. It works on the desktop but not mobile. Let me break this down. First, the main issue is the app crashing specifically during PDF uploads on mobile. The fact that it works on desktop suggests it's a mobile-specific problem. Possible causes could be related to the mobile app version, the phone's OS, file size limits on mobile, or compatibility issues with certain PDF formats on mobile devices. I need to make sure the summary mentions the crash during PDF uploads on mobile, note that desktop works, and |
| Phi-4 | The app crashes when attempting to upload a PDF from the mobile device, though it functions correctly on the desktop version.                     |

| Model         | Similarity | Relevance | Groundedness | Input tokens | Output tokens | Latency |
|---------------|------------|-----------|--------------|--------------|---------------|---------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%       | 50%       | 100%         | 61           | 20            | 918ms   |
| DeepSeek-R1   | 50%        | 50%       | 75%          | 52           | 128           | 2285ms  |
| Phi-4         | 75%        | 100%      | 100%         | 61           | 66            | 1117ms  |

Use the evaluator scores to assess and compare responses beyond surface-level phrasing.

### Similarity

Evaluate how closely each model’s output aligns with the expected summary. The table below shows the relevance scores for each model.

| Model         | Similarity score |
|---------------|------------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%             |
| DeepSeek-R1   | 50%              |
| Phi-4         | 75%              |

While all models included the key content from the input, DeepSeek-R1’s similarity score is significantly lower due to its verbose internal commentary, which deviate from the expected concise summary format. In contrast, {% data variables.copilot.copilot_gpt_41 %}’s response matches the phrasing and structure of the reference output.

### Relevance

Evaluate how well each model captures the core intent of the input. The table below shows the relevance scores for each model.

| Model         | Relevance score |
|---------------|-----------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 50%             |
| DeepSeek-R1   | 50%             |
| Phi-4         | 100%            |

All three models recognized the key issue of the app crashing during PDF uploads on mobile. Phi-4 earned a higher relevance score for reflecting the user's perspective more completely. DeepSeek-R1 lost points for introducing speculative technical causes not mentioned in the original input.

### Groundedness

Evaluate whether each model’s output stays true to the input without introducing unsupported information.
The table below shows the relevance scores for each model.

| Model         | Groundedness score |
|---------------|--------------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%               |
| DeepSeek-R1   | 75%                |
| Phi-4         | 100%               |

Even though DeepSeek-R1 adds internal commentary, it does not introduce hallucinated facts. Its final summary sentence correctly reflects the original input.

## Test case: Dark mode request

**Input**: `Please add dark mode. It's very hard to use at night. My eyes hurt after prolonged use.`

The following tables display each model's output and its evaluator scores:

| Model | Output                                                                                                                                      |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------|
| {% data variables.copilot.copilot_gpt_41 %} | User requests the addition of a dark mode feature due to discomfort and eye strain when using the app at night.                            |
| DeepSeek-R1 | <think> Okay, the user wants dark mode added because it's hard to use at night and their eyes hurt. I need to make a concise summary. Let me start with the main request: adding dark mode. Then mention the reason: eye strain from prolonged use at night. Keep it to one sentence. Maybe structure it as "Request to implement dark mode to reduce eye strain during nighttime use." That covers the key points without extra details. Check if that's under the character limit. Yep, looks good. </think> Summary: Request to implement dark mode to reduce eye strain caused by prolonged nighttime use. |
| Phi-4 | The customer is requesting the addition of a dark mode feature to reduce eye strain when using the product at night.                       |

| Model         | Similarity | Relevance | Groundedness | Input Tokens | Output Tokens | Latency |
|---------------|------------|-----------|--------------|---------------|----------------|---------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%       | 75%       | 100%         | 57            | 18             | 1286ms  |
| DeepSeek-R1   | 50%        | 0%        | 25%          | 49            | 128            | 1946ms  |
| Phi-4         | 100%       | 75%       | 100%         | 58            | 20             | 899ms   |

### Similarity

Evaluate how closely each model’s output aligns with the expected summary. The table below shows the relevance scores for each model.

| Model         | Similarity score |
|---------------|------------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%             |
| DeepSeek-R1   | 50%              |
| Phi-4         | 100%             |

While all models included the key content from the input, DeepSeek-R1’s similarity score is again, significantly lower due to its verbose internal commentary.

### Relevance

Evaluate how well each model captures the core intent of the input. The table below shows the relevance scores for each model.

| Model         | Relevance score |
|---------------|-----------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 75%             |
| DeepSeek-R1   | 0%              |
| Phi-4         | 75%             |

{% data variables.copilot.copilot_gpt_41 %} and Phi-4 both captured the main intent of the user’s request: the need for dark mode to reduce eye strain and improve usability at night. DeepSeek-R1 scored 0% in relevance due to its verbose internal commentary that distracted from the actual output.

### Groundedness

Evaluate whether each model’s output stays true to the input without introducing unsupported information.
The table below shows the relevance scores for each model.

| Model         | Groundedness score |
|---------------|--------------------|
| {% data variables.copilot.copilot_gpt_41 %}       | 100%               |
| DeepSeek-R1   | 25%                |
| Phi-4         | 100%               |

DeepSeek-R1 scored lower due to its verbose `<think>` block, which included speculative reasoning not present in the original input.

## Save the configuration

After completing your evaluations, the final step is to choose the model that performs best for your specific use case. In the examples above, Phi-4 and {% data variables.copilot.copilot_gpt_41 %} delivered strong, consistent results across all evaluators. DeepSeek-R1 scored lower due to its verbose reasoning and less focused outputs.

Once you've selected your preferred model and prompt configuration, add a descriptive name to the prompt file, then click **Commit changes**. This will save the model, prompt, parameter settings, and associated dataset as a reusable configuration file in your repository.

![Screenshot of the commit changes button. The commit changes button is highlighted.](/assets/images/help/models/github-models-commit-changes.png)

Committing your prompt configuration makes it easy to reuse, collaborate, and iterate across model setups. It makes it easier to rerun evaluations and track the performance of the prompt configuration over time.

## Further reading

* [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories)
* [AUTOTITLE](/github-models/use-github-models/integrating-ai-models-into-your-development-workflow)
