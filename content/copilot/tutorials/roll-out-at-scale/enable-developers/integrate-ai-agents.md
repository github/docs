---
title: Integrating agentic AI into your enterprise's software development lifecycle
shortTitle: Integrate AI agents
intro: See how agents can boost productivity across your enterprise.
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enabling-developers/integrate-ai-agents
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/enable-developers/integrate-ai-agents
contentType: tutorials
category:
  - Roll Copilot out at scale
  - Manage Copilot for a team
---

## About AI agents on {% data variables.product.github %}

Developers in your enterprise may already use AI as a pair programming tool, receiving code suggestions synchronously during development.

AI agents are more like peer programmers. They can:

* Perform asynchronous tasks, such as running tests or fixing issues in your backlog, with less need for human intervention.
* Contribute to workflows beyond the development phase, such as ideation or optimization after a release.

Collaborating with agents can give your employees more time to focus on other priorities, such as high-level planning, and bring the benefits of AI to non-developer roles by giving more power to natural language prompts.

{% data variables.product.prodname_copilot %}'s agentic features are integrated into {% data variables.product.github %}'s platform, providing a streamlined experience and simplified licensing and governance compared to third-party tools.

## Example scenario

You're an engineering manager at Mona's, a boutique umbrella retailer. Your team is adding an **AI-powered widget** to the online store that recommends umbrellas based on the user's location and local weather.

To meet a tight deadline, you want to speed up each stage for both developers and non-developers, while keeping maintenance manageable after launch.

>[!NOTE] {% data variables.product.github %} is continually expanding its AI-powered platform. Some of the features described in this article are in {% data variables.release-phases.public_preview %}, and may not be enabled for enterprises by default. You will find resources for each feature in the [Get started with agentic AI](#get-started-with-agentic-ai) section.

## 1. Plan with {% data variables.copilot.copilot_chat_short %}

1. A product manager starts planning with **{% data variables.copilot.copilot_chat_short %}** at [github.com/copilot](https://github.com/copilot).

   They ask {% data variables.product.prodname_copilot_short %} high-level questions to get a sense of the development work required for the new feature. To give {% data variables.product.prodname_copilot_short %} access to important context about the project, they upload mockup files and link to the repository where the codebase is stored.

1. When the PM has worked with {% data variables.product.prodname_copilot_short %} to get an overview of the tasks required, they ask {% data variables.product.prodname_copilot_short %} to **create issues** for each part of the work.

   The PM marks some of the issues as nice-to-haves or maintenance. These may be good candidates for {% data variables.copilot.copilot_cloud_agent %}.

   ![Screenshot of Copilot Chat. Copilot asks if the user would like to proceed with creating a set of prioritized issues.](/assets/images/help/copilot/sdlc-guide/issue-creation.png)

1. To help the developer get started quickly, the PM creates a space with **{% data variables.copilot.copilot_spaces %}** at [github.com/copilot/spaces](https://github.com/copilot/spaces). The PM collects resources like diagrams and references to code files, submits a few test questions, then shares the space with their organization.

   The developer can now ask questions in the space with all the PM's context already available.

## 2. Create with {% data variables.copilot.copilot_cli_short %}

1. After asking some initial questions in the {% data variables.product.prodname_copilot_short %} space, the developer starts a {% data variables.copilot.copilot_cli_short %} session in their terminal to start looking at the code.
1. In "plan" mode, the developer asks {% data variables.product.prodname_copilot_short %} to recommend several AI models for the job and list the pros and cons of each.
1. After writing some code, the developer asks {% data variables.product.prodname_copilot_short %} to refactor the code into several different functions and lint it based on the organization's standards. They invoke one of the organization's custom agents, which includes custom instructions for the organization.

   {% data variables.product.prodname_copilot_short %} can update multiple files at once and, with the developer's authorization, run commands for actions like installing dependencies or running tests.

1. The developer reviews the diff and chooses which code to keep.

## 3. Test with an MCP server

1. With the code finished, the developer runs tests on their local build using Playwright.

   1. The developer has configured the **Model Context Protocol (MCP) server** for Playwright, an approved server in the enterprise's private MCP registry.
   1. The developer asks {% data variables.product.prodname_copilot_short %} to outline test scenarios in a `.feature` file, then run the tests in the browser.
   1. {% data variables.product.prodname_copilot_short %} asks the developer to authorize its actions as it opens the browser and interacts with the UI. It identifies a failing test and suggests a fix.

1. When they're satisfied with the tests, the developer asks {% data variables.product.prodname_copilot_short %} to open a pull request for the work on {% data variables.product.github %}. Using the **{% data variables.product.github %} MCP server**, {% data variables.product.prodname_copilot_short %} opens a pull request with the title and description already filled in.

   >[!TIP]
   > Interactions with the {% data variables.product.github %} MCP server are secured by **push protection**, which blocks secrets from being included in AI-generated responses and prevents you from exposing secrets through any actions you perform using the server (public repositories only).

## 4. Review with {% data variables.copilot.copilot_code-review_short %}

1. A repository owner has configured automatic **code reviews** by {% data variables.product.prodname_copilot_short %} on the repository. {% data variables.product.prodname_copilot_short %} provides an initial review on the pull request, identifying bugs and potential performance issues that the developer can fix before a human reviewer gets to the pull request.
1. The developer's colleague reviews and approves the pull request. The work is ready to merge.

## 5. Optimize with {% data variables.copilot.copilot_cloud_agent %}

1. After the release, the product manager identifies an opportunity to improve the widget by switching to a more reliable weather API. They create an issue and **assign it to {% data variables.product.prodname_copilot_short %}** directly on {% data variables.product.github %}.
1. {% data variables.copilot.copilot_cloud_agent %} works in the background and opens a pull request, which the product manager marks as ready for review.

   ![Screenshot of a pull request created by {% data variables.copilot.copilot_cloud_agent %}.](/assets/images/help/copilot/sdlc-guide/agent-pr.png)

1. A developer reviews the pull request and leaves feedback, which {% data variables.product.prodname_copilot_short %} incorporates. The developer then merges the pull request.

   >[!TIP] {% data variables.copilot.copilot_cloud_agent %} comes with default guardrails. For example, {% data variables.product.prodname_copilot_short %} cannot merge pull requests by itself. You can define additional protections for target branches using repository rulesets.

1. Later, while working on a separate feature, the developer notices a small bug in the code for the AI widget. To avoid context switching, the developer delegates the work to {% data variables.copilot.copilot_cloud_agent %} directly from their {% data variables.copilot.copilot_cli_short %} session.

   `/delegate Create a PR for the widget function to correctly validate that the user's age is a positive integer.`

## 6. Secure with {% data variables.copilot.copilot_autofix_short %}

1. An administrator has enabled {% data variables.product.prodname_code_scanning %} on the repository, and a {% data variables.product.prodname_code_scanning %} alert suggests a potential vulnerability in the code.
1. A security manager requests **{% data variables.copilot.copilot_autofix_short %}** to automatically suggest a fix for the vulnerability, which a developer reviews and approves.

   ![Screenshot of a code scanning alert on GitHub.com. A button labeled "Generate fix" is outlined in orange.](/assets/images/help/copilot/sdlc-guide/autofix.png)
