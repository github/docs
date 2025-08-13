---
title: Using GitHub Copilot to explore issues and discussions
shortTitle: Explore issues and discussions
intro: '{% data variables.copilot.copilot_chat %} can help you quickly gain context of lengthy discussions and issues.'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/tutorials/using-copilot-to-explore-issues-and-discussions
contentType: tutorials
---

## Introduction

{% data variables.product.prodname_copilot_short %} can help you quickly gain context of lengthy discussions and issues on {% data variables.product.github %}. You can ask {% data variables.product.prodname_copilot_short %} to summarize discussions, identify key participants, and provide insights into the status of an issue or discussion.

The quality of {% data variables.copilot.copilot_chat_short %}'s responses may be degraded when working with issues or discussions that have very long bodies or a large number of comments. For example, this may occur if you ask {% data variables.product.prodname_copilot_short %} to summarize a long-running discussion. Where this happens, {% data variables.product.prodname_copilot_short %} will warn you so you can double check its output.

## Exploring issues and discussions

1. Navigate to an issue or discussion on {% data variables.product.github %}.
{% data reusables.copilot.open-chat-panel %}
{% data reusables.copilot.chat-previous-conversation %}
1. At the bottom of the {% data variables.product.prodname_copilot_short %} chat panel, in the prompt box, type a question and press <kbd>Enter</kbd>.

   {% data variables.product.prodname_copilot_short %} responds to your request in the panel.

   > [!TIP] Instead of navigating to an issue or discussion in your browser to ask a question, you can include the relevant URL in your message. For example, `Summarize https://github.com/monalisa/octokit/issues/1`.

## Example prompts

The following prompts are examples of the kind of questions you can ask {% data variables.product.prodname_copilot_short %} to help you find out about an issue or discussion.

### General questions

* `Summarize this issue`
* `What is the current status of this discussion?`
* `What are the main points of contention in this issue?`
* `Who are the key participants in this discussion?`

### Specific questions

* `What are the proposed solutions for this issue?`
* `What are the potential impacts of this issue?`
* `What are the next steps for this discussion?`

## Further reading

* [AUTOTITLE](/copilot/tutorials/using-copilot-to-explore-a-codebase#further-reading)
