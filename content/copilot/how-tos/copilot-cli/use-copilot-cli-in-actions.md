---
title: Using Copilot CLI in GitHub Actions with GITHUB_TOKEN
shortTitle: Copilot CLI in Actions
intro: 'Run {% data variables.copilot.copilot_cli_short %} in a {% data variables.product.prodname_actions %} workflow using the built-in `GITHUB_TOKEN`, without a {% data variables.product.pat_generic %}.'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Manage Copilot for a team # Copilot discovery page
  - Administer Copilot CLI # Copilot CLI bespoke landing page
docsTeamMetrics:
  - copilot-cli
---

For background on authentication options and how billing works when running {% data variables.copilot.copilot_cli_short %} in {% data variables.product.prodname_actions %}, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/copilot-cli-in-github-actions).

## Enabling the policy

For workflows in your organization to use {% data variables.copilot.copilot_cli_short %} with `GITHUB_TOKEN`, the policy must be enabled. This policy is enabled by default for organizations with {% data variables.copilot.copilot_cli_short %} turned on, but you can confirm or change this setting in your organization's policy settings.

1. Navigate to the policy settings for your organization. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).
1. Under "{% data variables.copilot.copilot_cli_short %}", confirm that **Allow use of {% data variables.copilot.copilot_cli_short %} billed to the organization** is selected.

## Recommended approach: {% data variables.product.github %} Agentic Workflows

For most automation use cases, we recommend using [{% data variables.product.github %} Agentic Workflows](https://github.com/github/gh-aw) rather than invoking `copilot` directly in workflow steps. Agentic workflows use `GITHUB_TOKEN` authentication by default and include additional guardrails suited for automated environments.

For setup instructions, see [Quick Start](https://github.github.com/gh-aw/setup/quick-start/) in the {% data variables.product.github %} Agentic Workflows documentation. Your workflow must also grant the `copilot-requests: write` permission. See [Permissions](https://github.github.com/gh-aw/reference/permissions/) in the {% data variables.product.github %} Agentic Workflows documentation.

## Using {% data variables.copilot.copilot_cli_short %} directly in a workflow

If you need to invoke {% data variables.copilot.copilot_cli_short %} directly in a workflow step, install the CLI with npm.

> [!WARNING]
> Invoking {% data variables.copilot.copilot_cli_short %} directly in workflow steps gives it broad access to your workflow environment. Review your workflow triggers and permissions carefully before using this approach. Workflows triggered by pull requests from forks are particularly at risk.

### Example workflow

```yaml
name: Copilot CLI example
on: [push]

permissions:
  contents: read
  copilot-requests: write

jobs:
  copilot:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install Copilot CLI
        run: npm install -g @github/copilot
      - name: Run Copilot
        run: copilot --yolo -p "Summarize the changes in this commit"
        env:
          GITHUB_TOKEN: ${{ github.token }}
```

Key details about this example:

* The `--yolo` flag suppresses interactive prompts, which is required for non-interactive environments like {% data variables.product.prodname_actions %}.
* The `copilot-requests: write` permission is required for the workflow to make {% data variables.product.prodname_copilot_short %} requests.
* The `GITHUB_TOKEN` provided by {% data variables.product.prodname_actions %} handles authentication automatically, no additional secrets are needed.

> [!NOTE]
> You must be on a recent version of {% data variables.copilot.copilot_cli_short %} to use `GITHUB_TOKEN` authentication. Update with `copilot update`, or reinstall the latest version with `npm install -g @github/copilot`.
