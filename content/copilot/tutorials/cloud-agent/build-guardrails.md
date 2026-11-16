---
title: Building a secure cloud environment for agents in your enterprise
shortTitle: Build enterprise guardrails
allowTitleToDifferFromFilename: true
intro: 'Prepare enterprise policies, repository protections, and runner settings for a controlled rollout of {% data variables.copilot.copilot_in_the_cloud_short %}.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Roll Copilot out at scale
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

This tutorial is for enterprise owners and AI managers preparing to enable **{% data variables.copilot.copilot_in_the_cloud_short %}** for their teams.

Enabling {% data variables.copilot.copilot_in_the_cloud_short %} allows users to start agent sessions in the cloud and assign work to {% data variables.product.prodname_copilot_short %} on {% data variables.product.github %}. Before you do this, it is good practice to set up your enterprise so you can be confident {% data variables.product.prodname_copilot_short %} will operate within secure, predictable guardrails.

## Learn about built-in protections

{% data variables.copilot.copilot_in_the_cloud_short %} has a strong base of built-in security protections designed to protect against common risk points of AI agents. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Plan policy settings

Plan your policies for {% data variables.copilot.copilot_in_the_cloud_short %} in advance. Policies allow you to set a baseline for restrictions at the enterprise level, which organization owners can restrict further if needed.

Some questions to ask are:

* Which organizations and repositories will **{% data variables.copilot.copilot_in_the_cloud_short %}** be enabled in?
* Which MCP servers will you configure to give {% data variables.product.prodname_copilot_short %} access to external tools? See [AUTOTITLE](/copilot/concepts/enterprise/mcp-management).
* Which other policies and managed settings will you use to govern the {% data variables.copilot.copilot_in_the_cloud_short %} experience? See [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies) and [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#supported-keys).

## Adapt rulesets

{% data variables.product.prodname_copilot_short %} is already restricted from actions like pushing to a default branch or merging pull requests. You can build on these default protections in branch rulesets. {% data variables.product.prodname_copilot_short %} is subject to rulesets just like human developers.

To adapt your rulesets for {% data variables.product.prodname_copilot_short %} agents:

* **Consider whether additional rules are required** in repositories where agents will operate, such as requiring results from {% data variables.product.prodname_code_scanning %} or {% data variables.product.prodname_code_quality_short %}. If you have identified the organizations or repositories where {% data variables.copilot.copilot_in_the_cloud_short %} will be enabled, you can apply a custom property to them so they're easy to target in a ruleset.
* **Consider whether {% data variables.product.prodname_copilot_short %} will be blocked** by any of your existing rulesets. {% data variables.product.prodname_copilot_short %} _can_ sign its commits, but it may not be able to follow other rules that restrict commit metadata.
* **Protect important {% data variables.product.prodname_copilot_short %} and MCP configuration files** with a `CODEOWNERS` file, and enable the "Require review from Code Owners" rule, so that edits to these files must be approved by specific teams. For filepaths to target, see [AUTOTITLE](/copilot/reference/customization-cheat-sheet).

## Store variables and secrets

Provide variables and secrets that {% data variables.product.prodname_copilot_short %} needs to access during setup, task execution, and connection to MCP servers. You can configure Agents secrets and variables at the organization or repository level. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

{% data variables.product.prodname_copilot_short %} will be able to access these secrets and variables in sessions running on {% data variables.product.prodname_actions %}. For sessions running in cloud sandboxes, only secrets will be available.

## (Optional) Configure your {% data variables.product.prodname_actions %} environment

{% data reusables.copilot.agent-env-enterprise %}

If users will run agents on {% data variables.product.prodname_actions %}, set up your runners and policies so that {% data variables.product.prodname_copilot_short %} operates securely.

### Keep secrets and variables

You can continue to store data and tokens that you _don't_ want {% data variables.product.prodname_copilot_short %} to access as **{% data variables.product.prodname_actions %} variables or secrets**. {% data variables.product.prodname_copilot_short %} won't be able to access these in its sessions or environment setup steps.

### Configure runners

Decide which runners you will use for {% data variables.copilot.copilot_cloud_agent %}. We recommend using **{% data variables.product.github %}-hosted runners**, so that each {% data variables.copilot.copilot_cloud_agent %} runs on a fresh virtual machine. If you use self-hosted runners, we recommend using ephemeral runners.

Organization owners can restrict the {% data variables.copilot.copilot_cloud_agent %}'s runners to a specific runner label, to be used automatically in all repositories. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent).

### Configure workflow policies

Decide whether **{% data variables.product.prodname_actions %} workflows should be blocked from running** in pull requests that {% data variables.product.prodname_copilot_short %} creates. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings#allowing-github-actions-workflows-to-run-automatically-when-copilot-pushes).

By default, workflows are blocked from running until someone with write access approves them. Repository administrators will be able to disable this feature, so communicate with them in advance about your preferred setting.

### Review default permissions

Review the default permissions for the `GITHUB_TOKEN` in your enterprise. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#workflow-permissions).

This policy does **not** affect the token that {% data variables.product.prodname_copilot_short %} will receive for its sessions, but the `GITHUB_TOKEN` _is_ used in environment setup steps defined in `copilot-setup-steps.yml` workflow files.

Bear in mind that developers will be able to set their own `permissions` in these workflow files, and you should encourage them to use the minimum required permissions in all workflows.
