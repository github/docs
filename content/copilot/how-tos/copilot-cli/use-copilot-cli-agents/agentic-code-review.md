---
title: Requesting a code review with {% data variables.copilot.copilot_cli %}
shortTitle: Agentic code review
allowTitleToDifferFromFilename: true
intro: 'Use {% data variables.copilot.copilot_cli_short %} to review your code changes directly from the terminal.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Build with Copilot CLI 
---

## About agentic code review 

You can use the `/review` slash command to have {% data variables.product.prodname_copilot_short %} analyze code changes without leaving the CLI. This lets you get quick feedback on your changes prior to committing.

1. Type `/review` and optionally specify a prompt, path, or file pattern to narrow the review scope, then press <kbd>Enter</kbd>.
1. If {% data variables.product.prodname_copilot_short %} proposes running a command (for example, to inspect a diff or verify a file), review the command, then use the arrow keys to choose an option and press <kbd>Enter</kbd>.
   * Select **Yes** to run the command.
   * Select **No** to skip the command and tell {% data variables.product.prodname_copilot_short %} what to do differently.
1. Read the feedback that {% data variables.product.prodname_copilot_short %} provides about your changes and apply any suggested improvements in your code editor.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-with-actions)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/add-custom-instructions)
