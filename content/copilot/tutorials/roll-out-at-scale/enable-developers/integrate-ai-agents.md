---
title: Integrating agentic AI into your enterprise's software development lifecycle
shortTitle: Integrate AI agents
intro: See how agents can boost productivity across your enterprise.
versions:
  feature: copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/integrate-ai-agents
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enable-developers/integrate-ai-agents
contentType: tutorials
---

## About AI agents on {% data variables.product.github %}

Developers in your enterprise may be used to using AI as a pair programming tool. In this model, developers work with AI assistants synchronously and receive code suggestions during the development phase of a project.

AI agents are more like peer programmers. Agents can:

* Perform asynchronous tasks, such as running tests or fixing issues in your backlog, with less need for human intervention.
* Contribute to workflows beyond the development phase, such as ideation or optimization after a release.

Collaborating with agents can give your employees more time to focus on other priorities, such as high-level planning, and bring the benefits of AI to non-developer roles by giving more power to natural language prompts.

{% data variables.product.prodname_copilot %}'s agentic AI features are integrated into {% data variables.product.github %}'s cohesive platform, providing a more streamlined user experience and simplified licensing and governance controls compared to adopting a range of third-party tools.

## Example scenario

You're an engineering manager at Mona's, a boutique umbrella retailer. Your team has been tasked with adding an **AI-powered widget** to the company's online store. The widget will help customers to choose the right umbrella by making tailored recommendations based on factors like the user's location and local weather trends.

To hit a tight deadline, you're aiming to speed up each stage of the process, for both developers and non-developers in your team. You also want to make sure the team is not overwhelmed with maintenance tasks once the new feature is rolled out.

>[!NOTE] {% data variables.product.github %} is continually expanding its AI-powered platform. Some of the features described in this article are in {% data variables.release-phases.public_preview %}, and may not be enabled for enterprises by default. You will find resources for each feature in the [Get started with agentic AI](#get-started-with-agentic-ai) section.

## 1. Plan with {% data variables.copilot.copilot_chat_short %}

1. To start planning, a product manager works with **{% data variables.copilot.copilot_chat_short %}** at `https://github.com/copilot`.

   They ask {% data variables.product.prodname_copilot_short %} high-level questions to get a sense of the development work required for the new feature. To give {% data variables.product.prodname_copilot_short %} access to important context about the project, they upload mockup files and link to the repository where the codebase is stored.

1. When the PM has worked with {% data variables.product.prodname_copilot_short %} to get an overview of the tasks required, they ask {% data variables.product.prodname_copilot_short %} to **create issues** for each part of the work.

   Copilot drafts the issues in immersive view, where the PM can refine them and publish them to the repository.

   The PM marks some of the issues as nice-to-haves or maintenance. These may be good candidates for {% data variables.copilot.copilot_coding_agent %}.

   ![Screenshot of Copilot Chat in immersive mode. Copilot asks if the user would like to proceed with creating a set of prioritized issues.](/assets/images/help/copilot/sdlc-guide/issue-creation.png)

1. To help the developer get started quickly, the PM creates a space with **{% data variables.copilot.copilot_spaces %}** at `https://github.com/copilot/spaces`. The PM collects resources like diagrams and references to code files, submits a few test questions, then shares the space with their organization.

   Now, the developer can ask questions in the space, and {% data variables.product.prodname_copilot_short %} will already have all the context the PM added.

## 2. Create with {% data variables.product.prodname_github_models %} and agent mode

1. The PM asks the developer to start by finding the best AI model to provide the tailored umbrella recommendations, based on the cost and effectiveness of the models.
1. The developer asks **{% data variables.copilot.copilot_chat_short %}** to recommend several AI models for the job and the pros and cons of each. To provide useful context, they ask Copilot to consider the information in the [AUTOTITLE](/copilot/reference/ai-models/model-comparison) {% data variables.product.prodname_docs %} article.
1. To settle on a model from the shortlist, the developer uses the **{% data variables.product.prodname_github_models %}** playground to compare results from the same prompt across models. They save time by testing models on a single platform, rather than needing to set up an API key for each model separately.

   ![Screenshot of the GitHub Models playground, with windows for sending prompts to two models side by side.](/assets/images/help/copilot/sdlc-guide/model-compare.png)

1. With the model decided, the developer opens the code in **{% data variables.product.prodname_vscode_shortname %}**.
1. The developer starts writing code for the new widget. To speed up their work, they use **{% data variables.copilot.copilot_chat_short %}** in "Ask" and "Edit" mode for syntax questions and high-level suggestions.

    >[!TIP]
    > The developer works with AI in the way that works best for them, but your organization has control over the experience. For example, you can:
    > * **Control the models** that the developer can use for development work in order to meet compliance requirements and manage costs.
    > * **Exclude certain files** from {% data variables.copilot.copilot_chat_short %}'s reach.
    > * **Save effective prompts** that have been tested with {% data variables.product.prodname_github_models %}, so other users can benefit.

1. When the developer has written some code, they switch to **agent mode** to ask {% data variables.product.prodname_copilot_short %} to refactor the code into several different functions for better readability.

   In agent mode, {% data variables.product.prodname_copilot_short %} works more autonomously and is able to update multiple files and, with the developer's authorization, run commands for actions like installing dependencies or running tests.

   ![Screenshot of the Copilot Chat pane in VS Code. Copilot asks the user for permission to run a linting command.](/assets/images/help/copilot/sdlc-guide/agent-mode.png)

   >[!TIP] You can create a more consistent experience by adding a **custom instructions** file to the repository. For example, the file could help ensure that agent mode uses established naming conventions and runs the correct commands to build, test, and lint code according to your organization's standards.

1. The developer reviews the diff of the agent's work and chooses which code to keep.

## 3. Test with an MCP server

1. When the code is finished, the developer wants to run tests on their local build of the site using Playwright, an automated in-browser testing service.

   * A repository administrator has added the **Model Context Protocol (MCP) server** for Playwright, which gives the {% data variables.product.prodname_copilot_short %} agent a predefined interface for integrating with Playwright.
   * The developer asks {% data variables.product.prodname_copilot_short %} to outline test scenarios in a `.feature` file, then tells {% data variables.product.prodname_copilot_short %} to run the tests in the browser.
   * In agent mode, {% data variables.product.prodname_copilot_short %} asks the developer to authorize its actions as it opens the browser and clicks different elements in the UI. As the developer watches the tests in the browser, {% data variables.product.prodname_copilot_short %} identifies a failing test and suggests a fix in the code.

1. When they're satisfied with the tests, the developer asks agent mode to open a pull request for the work on {% data variables.product.github %}.

   >[!TIP]
   > * With the **{% data variables.product.github %} MCP server** enabled, {% data variables.product.prodname_copilot_short %} can run the command to open a pull request directly from {% data variables.product.prodname_vscode_shortname %}, with the title and description already filled in.
   > * Interactions with the {% data variables.product.github %} MCP server are secured by **push protection**, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server (public repositories only). See [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

## 4. Review with {% data variables.copilot.copilot_code-review_short %}

1. A repository owner has configured automatic **code reviews** by {% data variables.product.prodname_copilot_short %} on the repository. {% data variables.product.prodname_copilot_short %} provides an initial review on the pull request, identifying bugs and potential performance issues that the developer can fix before a human reviewer gets to the pull request.
1. The developer's colleague reviews and approves the pull request. The work is ready to merge.

## 5. Optimize with {% data variables.copilot.copilot_coding_agent %}

1. After the release, the product manager collects customer feedback and identifies an opportunity to improve the widget's suggestions by switching to a more reliable API for weather data. They create an issue to implement this change, and **assign it to {% data variables.product.prodname_copilot_short %}** directly on {% data variables.product.github %}.
1. {% data variables.copilot.copilot_coding_agent %} works in the background and opens a pull request, which the product manager marks as ready for review.

   ![Screenshot of a pull request created by {% data variables.copilot.copilot_coding_agent %}.](/assets/images/help/copilot/sdlc-guide/agent-pr.png)

1. A developer reviews {% data variables.product.prodname_copilot_short %}'s pull request and leaves feedback, which {% data variables.product.prodname_copilot_short %} incorporates. Finally, the developer merges the pull request.

   >[!TIP] {% data variables.copilot.copilot_coding_agent %} comes with default guardrails. For example, {% data variables.product.prodname_copilot_short %} cannot merge pull requests by itself. You can define additional protections for target branches using repository rulesets.

1. Later, while working on a separate feature, the developer notices a small bug in the code for the AI widget. To avoid context switching, the developer instructs {% data variables.product.prodname_copilot_short %} to open a pull request directly from {% data variables.product.prodname_vscode_shortname %}.

   `@github Create a PR for the widget function to correctly validate that the user's age is a positive integer.`

1. {% data variables.product.prodname_copilot_short %} works in the background and opens a pull request on {% data variables.product.github %}, ready for another developer to review.

## 6. Secure with {% data variables.copilot.copilot_autofix_short %}

1. An administrator has enabled {% data variables.product.prodname_code_scanning %} on the repository, and a {% data variables.product.prodname_code_scanning %} alert suggests a potential vulnerability in the code.
1. A security manager requests **{% data variables.copilot.copilot_autofix_short %}** to automatically suggest a fix for the vulnerability, which a developer reviews and approves.

   ![Screenshot of a code scanning alert on GitHub.com. A button labeled "Generate fix" is outlined in orange.](/assets/images/help/copilot/sdlc-guide/autofix.png)

## Get started with agentic AI

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=integrating-agentic-ai" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

To get started with the features mentioned in this article, use the links in the following table.

To integrate agentic AI features effectively into your workstreams, you'll need to invest in effective training, governance, and cultural shifts. We recommend experimenting with agentic features with a cross-functional cohort to gather feedback before a larger rollout.

> [!NOTE] Some of these features use **premium requests**. See [AUTOTITLE](/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests).

{% rowheaders %}

| Feature | More information |
| ------- | ---------------- |
| Immersive view of {% data variables.copilot.copilot_chat_short %} | [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-github#submitting-a-question-to-copilot-chat) |
| {% data variables.copilot.copilot_spaces %} ({% data variables.release-phases.public_preview %}) | [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces) |
| {% data variables.copilot.copilot_chat_short %} agent mode | [Use agent mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) |
| Content exclusions | [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot) |
| MCP servers ({% data variables.release-phases.public_preview %}) | [AUTOTITLE](/copilot/customizing-copilot/extending-copilot-chat-with-mcp#configuring-mcp-servers-in-visual-studio-code) |
| GitHub Models playground ({% data variables.release-phases.public_preview %}) | [AUTOTITLE](/github-models/prototyping-with-ai-models#experimenting-with-ai-models-in-the-playground) |
| Custom instructions | [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=vscode) |
| Copilot code review | [AUTOTITLE](/copilot/how-tos/agents/copilot-code-review/automatic-code-review) |
| {% data variables.copilot.copilot_coding_agent %} ({% data variables.release-phases.public_preview %}) | [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org) |
| {% data variables.copilot.copilot_autofix_short %} | [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning) |

{% endrowheaders %}
