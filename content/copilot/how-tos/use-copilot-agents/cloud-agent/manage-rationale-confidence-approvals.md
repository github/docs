---
title: Managing rationale, confidence, and approvals for issues
shortTitle: Manage rationale, confidence, and approvals
allowTitleToDifferFromFilename: true
intro: 'Set up and manage rationale, confidence, and approvals for issues handled by {% data variables.copilot.copilot_automation %}.'
product: '{% data reusables.gated-features.copilot-automations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-create-cca-automations&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

Rationale and confidence need no extra configuration. When an {% data variables.copilot.copilot_automation %}'s agent changes a supported issue attribute, it attaches a rationale and a confidence level automatically. Whether that change applies directly or waits for review depends on your repository's automation level, or on an explicit request to suggest rather than apply the change.

## Setting your repository's automation level

> [!NOTE]
> Configuring an automation level is rolling out gradually and might not be available in your repository yet.

Your repository's automation level sets the confidence threshold used to route every supported change. Changes rated below the threshold are held as suggestions; changes at or above it apply automatically. The default level is **Cautious**, so only high-confidence changes apply automatically until you change it.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Planning" section of the sidebar, click **Agent suggestions for issues**.
1. Under "Automation level," select the level that fits your repository:
   * **Full control**: Every change is held for review. Nothing is applied automatically.
   * **Cautious** (default): Only high-confidence changes are applied automatically. Everything else is held for your review.
   * **Balanced**: Routine, clear-cut changes are applied automatically. Anything with ambiguity is held for review.
   * **Full automation**: Every change is applied automatically. The agent only holds a change back if it's flagged as uncertain.
1. Click **Save**.

## With {% data variables.copilot.copilot_cloud_agent %}

1. Create an {% data variables.copilot.copilot_automation %} that triages issues, following [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations). Use the **When an issue is created** trigger, or run the {% data variables.copilot.copilot_automation %} on a schedule.
1. Grant the {% data variables.copilot.copilot_automation %} the issue tools for the attributes you want it to change, such as updating labels, setting the type, editing fields, assigning users, or closing issues.
1. In the prompt, describe the triage task, for example: `Triage this issue by setting a type, labels, and priority, and explain your reasoning for each.` You don't need to mention rationale, confidence, or suggestions explicitly. To hold specific changes for review regardless of confidence, ask the agent to suggest those changes rather than apply them.
1. Save the {% data variables.copilot.copilot_automation %}. When it runs, its changes carry a rationale and a confidence level. Changes below your repository's automation level, and any changes you asked the agent to suggest, wait in the approvals panel on the issue.

## With {% data variables.copilot.github_agentic_workflows %}

Issue intents, the rationale and confidence metadata attached to a workflow's issue changes, are optional and enabled by default. Existing workflows keep working without changes.

1. Update to the latest version of the {% data variables.copilot.github_agentic_workflows %} extension by running `gh aw upgrade`.
1. Add a workflow that triages issues to your repository's `.github/workflows` directory. You can start from an issue triage sample or author your own. See the [{% data variables.copilot.github_agentic_workflows %}](https://gh.io/gh-aw) documentation.
1. Give the workflow the outputs for the attributes you want it to change by listing them under `safe-outputs` in the workflow's frontmatter. For example, `add-labels` to apply labels, `set-issue-type` to set the issue type, `set-issue-field` to edit fields, `assign-to-user` or `assign-to-agent` to assign issues, and `close-issue` to close them. Adding these outputs is enough for the workflow to make the corresponding issue changes with a rationale and confidence level.
1. Optionally, control whether a safe output requires issue intent metadata by setting `issue-intent` on it:

   ```yaml
   safe-outputs:
     add-labels:
       issue-intent: true
   ```

   * Omit `issue-intent`, or leave it unset, to keep it optional: the agent is encouraged to provide a rationale and confidence level, but the output still works without them.
   * Set `issue-intent: true` to require a rationale and confidence level for that output. The workflow fails if the agent omits them.
   * Set `issue-intent: false` to opt out entirely: the output never carries rationale or confidence metadata.
1. In the workflow prompt, describe the triage task. To hold specific changes for review regardless of confidence, ask the agent to suggest those changes rather than apply them.
1. Compile the workflow by running `gh aw compile`, then commit the workflow file and its generated lock file.
1. When the workflow runs, its changes carry a rationale and a confidence level (unless you opted out). Changes below your repository's automation level, and any changes the agent suggested, wait in the approvals panel on the issue.

## With the REST or GraphQL API

If you build your own integration instead of using an {% data variables.copilot.copilot_automation %}, you can use the same issue-writing REST and GraphQL APIs to include a rationale and confidence level with a change, or mark a change as a suggestion to hold it for review. The change is routed the same way as a change from an {% data variables.copilot.copilot_automation %} or a {% data variables.copilot.github_agentic_workflows %} workflow: subject to your repository's automation level, or held for review if you marked it as a suggestion.

## Finding issues with pending suggestions

To find issues that have suggestions waiting for review, search using the `has:suggestions` qualifier, for example `is:issue is:open has:suggestions`.

## Reviewing suggestions in the approvals panel

When a change is held for review, it waits in an approvals panel on the issue instead of taking effect. Use the panel to inspect each suggestion and decide what to apply.

1. Open the issue. Suggested changes appear in the approvals panel.
1. Inspect each suggestion. It shows the proposed change, such as a label, type, field, assignee, or close, along with the rationale and confidence level.
1. Act on the suggestions:
   * Select **Accept** to apply a suggestion, or **Decline** to dismiss it.
   * Select **Accept all** or **Decline all** to act on every pending suggestion at once.

Accepted changes take effect on the issue immediately. Declined suggestions are dismissed without changing the issue.

Ready to put this into practice? See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations) to create an {% data variables.copilot.copilot_automation %} that triages issues for you.
