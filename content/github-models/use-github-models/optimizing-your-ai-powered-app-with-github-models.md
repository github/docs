---
title: Optimizing your AI-powered app with Models
shortTitle: Optimize your AI-powered app
intro: 'Learn how to test models and refine prompts for your AI-powered application.'
versions:
  feature: github-models
allowTitleToDifferFromFilename: true
---

With new AI models being released regularly, choosing the right one for your application can be challenging. {% data variables.product.prodname_github_models %} helps you optimize your AI-powered application by letting you **compare different models and prompt variations** against sample inputs, while using **built-in evaluators** to validate model output.

Through an example scenario, we'll build an AI-powered assistant that helps users learn how to use Git from the command line. We'll walk through comparing different models, and you'll learn how to refine prompt variations to enhance output quality.

>[!NOTE]
>
> * {% data variables.product.prodname_github_models %} is in {% data variables.release-phases.public_preview %} and subject to change.
> * Usage is rate limited. See [AUTOTITLE](/github-models/use-github-models/prototyping-with-ai-models#rate-limits).

## Testing a prompt

The {% data variables.product.prodname_github_models %} **Comparisons** view allows you to adjust model parameters and prompts to test model output.

### 1. Creating a sample repository

You can access the **Comparisons** view directly from the **Models** tab in any repository, but in this guide we'll create a new repository to use as a test environment.

1. Navigate to the [new repository](https://github.com/new) page.
1. Under "Owner", make sure your user account is selected.
1. In the "Repository name" field, type `models-playground`.
1. Beneath the description field, select **Private** to set the repository visibility.
1. Click **Create repository**.

### 2. Creating a new prompt

1. On the main page of your new repository, click the **Models** tab.
1. In the "Prompts" section, click **{% octicon "plus" aria-hidden="true" %} New Prompt**.
1. In the upper-left corner, choose a model from the dropdown menu.

### 3. Writing a system prompt

A system prompt is a set of instructions that defines the role, behavior, and limitations of an AI model before it interacts with users. In this example, we'll be working on an AI-powered application that explains how to use Git from the command line.

In the **System prompt** field, copy and paste the following text:

```text copy
You are an expert at using the Git version control system. I will ask questions looking for guidance on the best way to perform tasks using Git, and you will give clear, step-by-step answers that explain each step you are recommending.
```

> [!NOTE] If the **System** text field is not editable, try choosing a different model in the model dropdown above. Not all models allow the system prompt to be modified.

### 4. Writing a user prompt

The user prompt is the direct question or instruction to an AI system during their conversation, which the AI system responds to.

In the **User prompt** field, copy and paste the following text:

  ```text copy
  I want to learn how to use Git from the command line. {{input}}
  ```

### 5. Entering sample input

The  {% raw %}`{{input}}`{% endraw %} variable in the **User prompt** functions as a placeholder for sample input. To manage this placeholder, click the **Variables** button and enter the following text:
  
```text copy
When should I use rebase or merge?
```

### 6. Running the sample prompt

1. In the upper-right corner, click **{% octicon "play" aria-hidden="true" %} Play**.
1. Make a change to the model or prompt, then run the prompt again to see what results you get.

## Testing different models against a prompt

Now, let's determine which model will work best for our application, using the **Comparisons** view. This view allows you to test different models on the same input, revealing differences in accuracy, creativity, tone, reasoning, and reliability. That will help us choose the model that best fits our needs in terms of quality, speed, cost, and consistency.

1. In the upper-left corner, click **Comparisons**.
1. To compare different models, click **{% octicon "plus" aria-hidden="true" %} Add prompt** and select **{% octicon "repo-forked" aria-hidden="true" %} Copy original prompt** to duplicate your existing system and user prompts. Create at least two copies of the original prompt to evaluate three different models.
1. Next to each prompt, click {% octicon "pencil" aria-hidden="Edit prompt" %}. From the **Model** dropdown, choose a different model for each prompt you created.
1. Click **{% octicon "plus" aria-hidden="true" %} Add inputs** to create new rows for sample inputs.

    * Click **{% octicon "plus" aria-hidden="true" %} Add inputs**. Then, in the "Input" field, copy and paste the following text:

      ```text copy
      How do I modify the most recent commit message in my current branch?   
      ```

    * Click **{% octicon "plus" aria-hidden="true" %} Add inputs** again, then paste the following input:

      ```text copy
      How do I move a specific commit from one branch to a different branch?
      ```

    * Click **{% octicon "plus" aria-hidden="true" %} Add inputs** one more time, and paste this input:

      ```text copy
      How do I find the author of a specific commit in a repository's history?
      ```

1. To run the prompts, in the upper-right corner, click **{% octicon "play" aria-hidden="true" %} Run**.
1. Try out different models against your prompt, making note of the **Latency** and the **Input** and **Output** token usage of the different models.

## Testing prompt variations with a specific model

If you’re building an application with a specific AI model, you need responses to be predictable and reliable. Testing prompt variations helps you to:

* **Optimize performance and quality**: Slight changes in phrasing can affect the response quality. By testing variations you can find the wording that gets the best response.
* **Clarify instructions**: By varying the phrasing of your prompt, you can identify which version the model understands most clearly.
* **Adapt to specific model behavior**: You can tailor your input to how a specific model interprets language.
* **Verify the format of the output**: You may want a list, a paragraph, a code block, or a specific tone. Testing prompt variation helps you enforce a specific structure or style.

Now, let's use {% data variables.product.prodname_github_models %} to test prompt variations against user input for your specific model.

### 1. Adding prompt variations

For this example scenario, select the **same model for each column**, but provide a different prompt variation by editing the "User prompt" field of our existing prompts. Next to each prompt, click {% octicon "pencil" aria-hidden="Edit prompt" %}.
  
1. Click **{% octicon "pencil" aria-hidden="Edit prompt" %}** in "Prompt 2." Then, in the "User prompt" field, copy and paste the following text:
  
    ```text copy
    I want to learn how to use Git from the command line, but explain it to me like I am five years old. {{input}}  
    ```

1. Click **{% octicon "pencil" aria-hidden="Edit prompt" %}** in "Prompt 3", then paste the following input:

    ```text copy
    I want to learn how to use Git from the command line. Give me instructions in the form of a haiku. {{input}}
    ```

### 2. Running prompt variations

1. To run the prompts, in the upper-right corner, click **{% octicon "play" aria-hidden="true" %} Run**.
1. Try out different prompt variations, and compare the types of output the model gives you.

## Evaluating model output

We’ve tested different models and prompt variations in {% data variables.product.prodname_github_models %}, and the next step is interpreting and comparing the results to make informed decisions for our AI-powered application.

As you ran the models in the example scenarios, the **Input** and **Output** token usage and **Latency** were displayed after each run. Token usage matters because it directly affects **cost, performance, and model limitations.**

* Since most models charge per token both for input and output, using more tokens increases your cost.
* Each model also has a maximum token limit (called a context window), and exceeding it can result in errors or truncated responses.
* Longer prompts can slow down response time or reduce clarity, while concise prompts often lead to better, more efficient outputs.

Using {% data variables.product.prodname_github_models %} to test token usage and latency helps you stay within limits, manage costs, and improve overall effectiveness of your AI-powered application.

### Using evaluators to judge output

Depending on the number of prompts and models you are evaluating, the model output can be overwhelming to sort through manually. To help assess the quality of each model's output, you can use **Evaluators** to score results across key dimensions like clarity, accuracy, and relevance. You can define your own evaluation criteria, or use built-in evaluators to automatically rate outputs, making it easier to identify the best-performing model and prompt variation.

For this example scenario, let's use the **String check** evaluator to check for a string in the output.

1. In the lower-right corner of the **Prompts** field, click **{% octicon "plus" aria-hidden="true" %} Add evaluator** and select **{% octicon "note" aria-hidden="true" %} String check**.
1. In the **Name** field, enter "Amend check", then copy and paste the following input for the **Value** field:

    ```text copy
   git commit --amend
   ```

1. To run the prompts, in the upper-right corner, click **{% octicon "play" aria-hidden="true" %} Run**.
1. The prompt output will now show a **Pass** or **Fail** label, letting you know which model contained the required string.

To learn more about the pre-built evaluators like similarity, groundedness, and relevance, see [AUTOTITLE](/github-models/use-github-models/evaluating-ai-models#evaluating-outputs).

## Next steps

Now that you've explored how to test models, refine prompts, and evaluate outputs using {% data variables.product.prodname_github_models %}, you're ready to start building prompts for your AI-powered application. After creating a prompt, you can store, version, and share it by committing a `.prompt.yml` file to your repository. This keeps your prompts under version control, and enables easy collaboration on prompt and model refinement. For more information, see [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories).

## Join the community

To ask questions and share feedback, see this [GitHub Models discussion post](https://github.com/orgs/community/discussions/159087).  
To learn how others are using {% data variables.product.prodname_github_models %}, visit the [GitHub Community discussions for Models](https://github.com/orgs/community/discussions/categories/models).
