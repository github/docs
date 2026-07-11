---
title: Setting an {% data variables.product.prodname_ai_credit_singular %} session limit in {% data variables.copilot.copilot_cli %}
shortTitle: Set an {% data variables.product.prodname_ai_credit_singular %} limit
allowTitleToDifferFromFilename: true
intro: 'Limit the amount of {% data variables.product.prodname_ai_credits_short %} {% data variables.product.prodname_copilot_short %} can spend on a session to control costs and keep tasks predictable.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

> [!NOTE]
> {% data variables.product.prodname_ai_credit_singular %} session limits are currently in {% data variables.release-phases.public_preview %} and subject to change.

An {% data variables.product.prodname_ai_credit_singular %} session limit caps the amount of {% data variables.product.prodname_ai_credits %} that {% data variables.product.prodname_copilot_short %} can spend in a session.

{% data variables.product.prodname_ai_credits_short %} are the unit {% data variables.product.prodname_copilot_short %} uses to track the cost of AI model interactions: each credit equals {% data variables.product.prodname_ai_credits_value %}, and usage depends on the model and the number of tokens consumed.

When you set an {% data variables.product.prodname_ai_credit_singular %} session limit for {% data variables.product.prodname_copilot_short %}, instead of running until the task is done or until you intervene, {% data variables.product.prodname_copilot_short %} stops when it hits the limit and gives you the option to reset or adjust it.

These session limits are **soft limits**. If a response is in progress when the limit is reached, that response completes before the session stops, so actual usage may slightly exceed the configured number.

## Setting an {% data variables.product.prodname_ai_credit_singular %} session limit

How the limit is set and applied depends on whether you are in an interactive session or running the CLI programmatically.

> [!TIP]
> {% data variables.product.prodname_ai_credit_singular %} session limits work best when set to > 30 {% data variables.product.prodname_ai_credits_short %} as most model calls will cost more than 20 {% data variables.product.prodname_ai_credits_short %}.

### Setting a limit within an interactive session

In an interactive CLI session, the limit applies for the entire session and depletes as each message is processed, independent of how many messages you send. When the limit is reached, you are prompted to reset it.

To set your session limit, use `/limits set`.

```copilot copy
/limits set max-ai-credits NUMBER
```

To remove the limit, enter:

```copilot copy
/limits unset
```

### Setting a limit in non-interactive mode

When you run {% data variables.copilot.copilot_cli_short %} programmatically from the command line, the limit applies for the duration of {% data variables.product.prodname_copilot_short %}'s work on the task and remains active until {% data variables.product.prodname_copilot_short %} finishes responding.

To set a limit, pass `--max-ai-credits=NUMBER`.

```bash copy
copilot -p "YOUR PROMPT" --max-ai-credits NUMBER
```

## What happens when the limit is reached

When the limit is hit, the agent stops cleanly and lets you know.

* **In interactive mode**, you are prompted to reset the limit. You can use `/limits set` to raise the limit and continue your session from where the agent stopped.
* **In non-interactive mode**, the run ends when the limit is reached.

## Further reading

* [AUTOTITLE](/copilot/tutorials/optimize-ai-usage)
* [What are {% data variables.product.prodname_ai_credits %}](/copilot/concepts/billing/usage-based-billing-for-individuals#what-are--data-variablesproductprodname_ai_credits-)
