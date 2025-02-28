---
title: 'Analyzing and incorporating user feedback'
shortTitle: Incorporate feedback
intro: '{% data variables.product.prodname_copilot_chat_short %} can enhance the process of incorporating user feedback into your project.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/functionality-analysis-and-feature-suggestions/analyzing-and-incorporating-user-feedback
versions:
  feature: copilot
category:
  - 'Functionality analysis'
complexity:
  - Intermediate
octicon: lightbulb
topics:
  - Copilot
---

Gathering and incorporating user feedback is crucial for product development, but it can be a challenging process. Developers and product teams often struggle to effectively analyze user feedback, prioritize it, and implement changes based on that feedback without disrupting existing workflows or introducing new issues.

## Analyzing user feedback

User feedback can be overwhelming and it may be difficult to identify what you should respond to.

### Example scenario

Imagine you are a maintainer of a popular open source repository. Because the community is very invested in your project, they often open issues to provide feedback. They also frequently interact with open issues. You want to respond to this feedback, but you aren't sure where to start.

### Example prompt

This example assumes that you use labels to track issues related to user feedback in your repository.

Navigate to the **Issues** tab in your repository, then type:

`Find the issues with the feedback label that have the most reactions, and categorize them based on sentiment.`

>[!TIP] To try out this prompt, you can go to the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository, which uses labels to track feature requests, and type: `Find the issues with the feature-request label that have the most reactions, and categorize them based on sentiment.`

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} lists the issues with the most reactions, and provides a sentiment analysis for each issue. You can use this list to make more informed decisions when you are prioritizing your work.

For example:

```text
1. [Feedback] CLI error messages are difficult to understand
  * Issue URL: #321
  * Reactions: 543
  * Sentiment: Negative

1. [Feedback] Add API to enable third party integration
  * Issue URL: #210
  * Reactions: 482
  * Sentiment: Positive

1. [Feedback] Shortcut for --with-token CLI option
  * Issue URL: #426
  * Reactions: 187
  * Sentiment: Neutral to slightly positive
```

## Generating feature specifications

Feature specifications provide a plan for development and are useful for communication and alignment prior to implementing a new feature.

### Example scenario

In this scenario, you've chosen a piece of user feedback to address. Someone requested a shortcut to an existing CLI option. Now you want to create a plan for how you'll implement this.

### Example prompt

This example assumes you are asking about an issue in the same repository where you are using {% data variables.product.prodname_copilot_chat_short %}.

`Write a feature specification for Issue #426.`

### Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} generates a feature specification, similar to the following.

```text
# Feature Specification for Issue #426: Shortcut for --with-token CLI option

## Description:
Currently, the --with-token option is used to to pass in a token to commands. Typing --with-token each time is cumbersome. This feature proposes a new flag -wt as a shortcut to quickly specify the --with-token option when running various commands.

## Problem:
Typing --with-token repeatedly is time-consuming and inconvenient for users who frequently use this option.

## Solution:
Introduce a new flag -wt that serves as a shortcut for the --with-token option.

## Feature Details:

### 1. Flag Introduction:
-wt will be introduced as a shorthand for --with-token.
Usage: <command> -wt <token>

### 2. Commands Affected:
All commands that currently support the --with-token option.

### 3. Backward Compatibility:
- The existing --with-token option will continue to work as before.
- No existing functionality will be removed or altered.

### 4. Documentation:
- Update documentation to include the new -wt flag.
- Provide examples and usage scenarios for the new flag.

### 5. Testing:
- Ensure thorough testing of the -wt flag across various commands.
- Test cases should include:
  - Valid and invalid tokens.
  - Interaction with other options.
  - Ensuring no regression in current --with-token functionality.

## Benefits:
- Improved user experience by reducing the amount of typing required.
- Streamlined command execution for users who frequently use the --with-token option.

## Potential Risks:
Minimal risk as this feature is an addition and does not alter existing functionality.
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
