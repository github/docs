---
title: Manage and track {% data variables.copilot.copilot_cloud_agent %} sessions
shortTitle: Manage and track agents
intro: 'Monitor your agent''s progress in real time, steer it with follow-up prompts, and stop or archive sessions.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/manage-agents
---

Use the agents panel on {% data variables.product.github %} to start, monitor, and manage agent sessions across your repositories.

## Monitor agent activity

Track sessions from the agents panel (available from any page on {% data variables.product.github %}) or from the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text). Sessions that you started, or that another user prompted {% data variables.product.prodname_copilot_short %} to work on, appear in your sessions list.

Click a session to open the session log and overview, where you can monitor the agent's progress, token usage, and session length.

## Review session logs

Session logs show {% data variables.product.prodname_copilot_short %}'s internal reasoning and the tools it used to understand your repository, make changes, and validate its work. {% data variables.product.prodname_copilot_short %} has its own ephemeral development environment, so it can run automated tests and linters to validate changes before pushing.

## Trace commits to session logs

Commits from {% data variables.copilot.copilot_cloud_agent %} are authored by {% data variables.product.prodname_copilot_short %}, with the person who started the task listed as co-author. Each commit message includes a link to the session logs, so you can trace why a change was made during code review or an audit. Commits are signed and appear as "Verified" on {% data variables.product.github %}.

## Steer an agent session

If {% data variables.product.prodname_copilot_short %} is heading in the wrong direction, or you realize your original prompt needs adjusting, you can redirect it without stopping the session.

1. Open the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) and select the session.
1. In the prompt box below the session log, type your follow-up. For example:

   ```text
   Use our existing ErrorHandler utility class instead of writing custom try-catch blocks for each endpoint.
   ```

1. Press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot_short %} implements your input after it finishes its current tool call.

Each steering message uses **one premium request**. Steering is not available for third-party coding agents.

## Stop a session

If the task no longer needs to be done, or you want to start over with a new prompt, click **Stop session** in the session log viewer. Stopping a session ends the {% data variables.product.prodname_actions %} run and preserves any commits already pushed.

## Archive sessions

Archive stopped sessions to remove them from your sessions list.

1. Open the stopped session.
1. Click **{% octicon "kebab-horizontal" aria-label="More actions" %}**, then click **{% octicon "inbox" aria-hidden="true" aria-label="inbox" %} Archive session**.
1. In the dialog, click **Yes, archive**.

## Further reading

* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
