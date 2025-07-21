---
title: About GitHub Models
intro: '{% data variables.product.prodname_github_models %} is a suite of developer tools that take you from AI idea to ship, including a model catalog, prompt management, and quantitative evaluations.'
versions:
  feature: github-models
shortTitle: About GitHub Models
topics:
  - GitHub Models
---

{% data reusables.models.models-preview-note %}

## Overview

{% data variables.product.prodname_github_models %} is a workspace lowering the barrier to enterprise-grade AI adoption. It helps you move beyond isolated experimentation by embedding AI development directly into familiar GitHub workflows. {% data variables.product.prodname_github_models %} provides tools to test large language models (LLMs), refine prompts, evaluate outputs, and make informed decisions based on structured metrics. To get started, see [AUTOTITLE](/github-models/use-github-models/optimizing-your-ai-powered-app-with-github-models).

## Capabilities

GitHub Models offers a set of features to support prompt iteration, evaluation, and integration for AI development.

* **Prompt development**: Start AI development directly in a structured editor that supports system instructions, test inputs, and variable configuration.
* **Model comparison**: Test multiple models side by side with identical prompts and inputs to experiment with different outputs.
* **Evaluators**: Use scoring metrics such as similarity, relevance, and groundedness to analyze outputs and track performance.
* **Prompt configurations**: Save prompt, model, and parameter settings as `.prompt.yml` files in your repository. This enables review, collaboration, and reproducibility.
* **Production integration**: Use your saved configuration to build AI features or connect through SDKs and{% ifversion fpt %} the [{% data variables.product.prodname_github_models %} REST API](/rest/models?apiVersion=2022-11-28). {% else %} APIs. {% endif %}

## Enabling GitHub Models

There are a few ways you can start using {% data variables.product.prodname_github_models %}, depending on your role and needs.

To use the {% data variables.product.prodname_github_models %} API, see [Experimenting with AI models using the API](/github-models/use-github-models/prototyping-with-ai-models#experimenting-with-ai-models-using-the-api).

### For individuals

To use {% data variables.product.prodname_github_models %}, create a new GitHub repository or open an existing one. In the repository settings, click **Models** in the sidebar and enable the feature.

### For organizations and enterprises

To use {% data variables.product.prodname_github_models %} in your organization, an enterprise owner must first enable the feature. Organization owners can then configure which models are allowed.

See [AUTOTITLE](/github-models/github-models-at-scale/manage-models-at-scale).

## Prompts

Manage your prompt configurations stored in the repository. Each prompt is saved as a `.prompt.yml` file, which defines the model, parameters, and test inputs. From here, you can create, edit, and organize prompts to support experimentation or production use.

## Comparisons

Use the Comparisons view to evaluate the outputs of multiple prompt configurations in a consistent, test-driven workflow. Run tests across rows of input data and view evaluator scores for each configuration, such as similarity, relevance, and groundedness. This view is ideal for refining prompts, validating changes, and avoiding regressions.

## Playground

Use the Playground to quickly explore models and test prompt ideas in real time. The Playground is ideal for early experimentation, helping you understand a model’s behavior, capabilities, and response style. You can interactively select models, adjust parameters, and compare responses side by side.

## Billing

For more information about billing for {% data variables.product.prodname_github_models %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/about-billing-for-github-models).

## Join the community

To ask questions and share feedback, see this [GitHub Models discussion post](https://github.com/orgs/community/discussions/159087).  
To learn how others are using {% data variables.product.prodname_github_models %}, visit the [GitHub Community discussions for Models](https://github.com/orgs/community/discussions/categories/models).

## Further reading

* [AUTOTITLE](/github-models/use-github-models/prototyping-with-ai-models)
* [AUTOTITLE](/github-models/use-github-models/optimizing-your-ai-powered-app-with-github-models)
* [AUTOTITLE](/github-models/use-github-models/evaluating-ai-models)
* [AUTOTITLE](/billing/managing-billing-for-your-products/about-billing-for-github-models)
