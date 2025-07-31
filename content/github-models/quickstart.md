---
title: Quickstart for GitHub Models
intro: 'Run your first model with {% data variables.product.prodname_github_models %} in minutes.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /models/quickstart
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - GitHub Models
shortTitle: Quickstart
---

## Introduction

{% data variables.product.prodname_github_models %} is an AI inference API from {% data variables.product.prodname_dotcom %} that lets you run AI models using just your {% data variables.product.prodname_dotcom %} credentials. You can choose from many different models—including from OpenAI, Meta, and DeepSeek—and use them in scripts, apps, or even {% data variables.product.prodname_actions %}, with no separate authentication process.

This guide helps you try out models quickly in the playground, then shows you how to run your first model via API or workflow.

## Step 1: Try models in the playground

1. Go to **[https://github.com/marketplace/models](https://github.com/marketplace/models)**.

1. In the playground, select at least one model from the dropdown menu.
1. Test out different prompts using the **Chat** view, and compare responses from different models.
1. Use the **Parameters** view to customize the parameters for the models you are testing, then see how they impact responses.

   > [!NOTE]
   > The playground works out of the box if you're signed in to {% data variables.product.prodname_dotcom %}. It uses your {% data variables.product.prodname_dotcom %} account for access—no setup or API keys required.

## Step 2: Make an API call

For full details on available fields, headers, and request formats, see the [API reference for {% data variables.product.prodname_github_models %}](/free-pro-team@latest/rest/models/inference?apiVersion=2022-11-28).

To call models programmatically, you’ll need:

* A {% data variables.product.prodname_dotcom %} account.
* A {% data variables.product.pat_generic %} (PAT) with the `models` scope, which you can create [in settings](https://github.com/settings/tokens).

1. Run the following `curl` command, replacing `YOUR_GITHUB_PAT` with your token.

    ```bash copy
      curl -L \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -H "Authorization: Bearer YOUR_GITHUB_PAT" \
      -H "X-GitHub-Api-Version: 2022-11-28" \
      -H "Content-Type: application/json" \
      https://models.github.ai/inference/chat/completions \
      -d '{"model":"openai/gpt-4.1","messages":[{"role":"user","content":"What is the capital of France?"}]}'
    ```

1. You’ll receive a response like this:

   ```json
   {
     "choices": [
       {
         "message": {
           "role": "assistant",
           "content": "The capital of France is **Paris**."
         }
       }
     ],
     ...other fields omitted
   }
   ```

1. To try other models, change the value of the `model` field in the JSON payload to one from the [marketplace](https://github.com/marketplace/models).

## Step 3: Run models in GitHub Actions

1. In your repository, create a workflow file at `.github/workflows/models-demo.yml`.

1. Paste the following workflow into the file you just created.

    ```yaml
    name: GitHub Models Demo

    on: [push]

    permissions:
      contents: read
      models: read

    jobs:
      summarize-repo:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: {% data reusables.actions.action-checkout %}

          - name: Summarize the repository README
            run: |
              SUMMARY_INPUT=$(head -c 4000 README.md)
              PROMPT="Summarize this repository in one sentence. Here is the README:\n$SUMMARY_INPUT"
              PAYLOAD=$(jq -n --arg prompt "$PROMPT" '{
                model: "openai/gpt-4.1",
                messages: [
                  {role: "user", content: $prompt}
                ]
              }')
              RESPONSE=$(curl -sL \
                -X POST \
                -H "Accept: application/vnd.github+json" \
                -H "Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}" \
                -H "X-GitHub-Api-Version: 2022-11-28" \
                -H "Content-Type: application/json" \
                https://models.github.ai/inference/chat/completions \
                -d "$PAYLOAD")
              echo "$RESPONSE" | jq -r '.choices[0].message.content'
    ```

     > [!NOTE]
     > Workflows that call {% data variables.product.prodname_github_models %} must include `models: read` in the permissions block. {% data variables.product.prodname_dotcom %}-hosted runners provide a `GITHUB_TOKEN` automatically.

1. Commit and push to trigger the workflow.

This example shows how to send a prompt to a model and use the response in your continuous integration (CI) workflows. For more advanced use cases, such as summarizing issues, detecting missing reproduction steps for bug reports, or responding to pull requests, see [AUTOTITLE](/github-models/use-github-models/integrating-ai-models-into-your-development-workflow).

## Step 4: Save your first prompt file

{% data variables.product.prodname_github_models %} supports reusable prompts defined in `.prompt.yml` files. Once you add this file to your repository, it will appear in the Models page of your repository and can be run directly in the Prompt Editor and evaluation tooling. Learn more about [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories).

1. In your repository, create a file named `summarize.prompt.yml`. You can save it in any directory.

1. Paste the following example prompt into the file you just created.

    ```yaml
    name: One-line summary
    description: Ask the model to summarize a paragraph in one sentence.
    messages:
      - role: user
        content: 'Summarize the following text in one sentence: {{input}}'
    model: openai/gpt-4o
    ```

1. Commit and push the file to your repository.

1. Go to the **Models** tab in your repository.

1. In the navigation menu, click **{% octicon "note" aria-hidden="true" aria-label="none" %} Prompts**, then click on the prompt file.

1. The prompt will open in the prompt editor. Click **Run**. A right-hand sidebar will appear asking you to enter input text. Enter any input text, then click **Run** again in the bottom right corner to test it out.

   > [!NOTE]
   > The prompt editor doesn’t automatically pass repository content into prompts. You provide the input manually.

## Step 5: Set up your first evaluation

Evaluations help you measure how different models respond to the same inputs so you can choose the best one for your use case.

1. Go back to the `summarize.prompt.yml` file you created in the previous step.

1. Update the file to match the following example.

   ```yaml
     name: One-line summary
     description: Ask the model to summarize a paragraph in one sentence.
     messages:
       - role: user
         content: 'Summarize the following text in one sentence: {{input}}'
     model: openai/gpt-4o
     testData:
       - input: >-
           The museum opened a new dinosaur exhibit this weekend. Families from all
           over the city came to see the life-sized fossils and interactive displays.
         expected: >-
           The museum's new dinosaur exhibit attracted many families with its fossils
           and interactive displays.
       - input: >-
           Lucy baked cookies for the school fundraiser. She spent the entire evening
           in the kitchen to make sure there were enough for everyone.
         expected: Lucy baked cookies all evening to support the school fundraiser.
     evaluators:
       - name: Similarity
         uses: github/similarity
     ```

1. Commit and push the file to your repository.

1. In your repository, click the **Models** tab. Then click **{% octicon "note" aria-hidden="true" aria-label="none" %} Prompts** and reopen the same prompt in the prompt editor.

1. In the top left-hand corner, you can toggle the view from **Edit** to **Compare**. Click **Compare**.

1. Your evaluation will be set up automatically. Click **Run** to see results.

   > [!TIP]
   > By clicking **Add prompt**, you can run the same prompt with different models or change the prompt wording to get inference responses with multiple variations at once, see evaluations, and view them side by side to make data-driven model decisions.

## Next steps

* [AUTOTITLE](/github-models/about-github-models).
* [Browse the model catalog](https://github.com/marketplace?type=models)
* [AUTOTITLE](/github-models/use-github-models/storing-prompts-in-github-repositories)
* [AUTOTITLE](/github-models/use-github-models/evaluating-ai-models)
* [AUTOTITLE](/github-models/use-github-models/integrating-ai-models-into-your-development-workflow#using-ai-models-with-github-actions)
