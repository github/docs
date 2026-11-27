---
title: Migrating your enterprise to GitHub Actions
shortTitle: Migrate an enterprise
intro: Plan and run an AI-assisted migration from your existing CI/CD system to {% data variables.product.prodname_actions %}, moving repositories in waves without disrupting delivery.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions
  - /enterprise-onboarding/github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions
  - /admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions
contentType: tutorials
category:
  - Migrate to GitHub Actions
---

## Introduction

This guide is for administrators who are migrating many pipelines from an existing CI/CD system, such as Jenkins, Azure DevOps, GitLab CI/CD, or CircleCI, to {% data variables.product.prodname_actions %}.

By the end of this guide, you'll have:

* A target design that improves on your current setup
* A live inventory of which repositories use which CI/CD system, and how far each one has migrated
* A pilot migration group and a plan for future migration waves
* AI tooling for converting pipeline syntax to your organization's standards
* A plan for retiring the old CI/CD system

This guide draws on [actions-migrations-via-copilot](https://github.com/github/actions-migrations-via-copilot), an open source project from {% data variables.product.github %}. You can use the project for your migration or apply the same principles to plan a migration using your own tooling.

## Choose a pilot group

When you use this guide, we recommend starting with a pilot. Choose a small group of early adopters and a handful of pipelines that represent the breadth of your existing setup, such as your most common build type, a deployment pipeline, and a pipeline with approval gates. Then, you'll follow this guide to migrate these repositories before expanding to the rest of your enterprise.

## Design your target state

Before converting anything, decide what your {% data variables.product.prodname_actions %} setup should look like. Treat the migration as a chance to improve your CI/CD system rather than a line-by-line port. Pipelines that grew over years in another system often contain unnecessarily broad credentials or duplicated logic.

For each pattern in your existing system, choose the {% data variables.product.prodname_actions %} equivalent you want to end up with.

| In your existing system | Aim for in {% data variables.product.prodname_actions %} |
|---|---|
| A flat, global credential store that every pipeline can read | Secrets scoped to the organization, repository, or environment that needs them |
| Long-lived cloud credentials stored in the CI system | Short-lived tokens issued through OpenID Connect (OIDC). See [AUTOTITLE](/actions/concepts/security/openid-connect). |
| Manual approval and promotion steps | Environments with deployment protection rules. See [AUTOTITLE](/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments). |
| Pipeline logic copied between many repositories | A small number of reusable workflows that teams call. See [AUTOTITLE](/actions/how-tos/reuse-automations/reuse-workflows). |
| Build agents with broad access | Runners scoped to the organizations and repositories that need them, with least-privilege `GITHUB_TOKEN` permissions in each workflow |

Identify the gates and checks in your existing system and verify that you can implement them with {% data variables.product.prodname_actions %}. Identify any processes, integrations, and third-party tools that will be affected by your migration, and make a plan for any updates you'll need to make.

Consider how the migration may affect your compliance concerns. For example, will your existing credential scanning and security analysis tools work with {% data variables.product.prodname_actions %}, or will you need to use new tools?

## Inventory your pipelines

Record each repository's source CI/CD system and migration status in a shared inventory. Identify which pipelines are actively used and need to migrate, and which can be left behind.

Your inventory should also include any pipelines that are defined outside of a repository, such as Jenkins freestyle jobs or Azure DevOps classic release pipelines.

If your repositories are hosted on {% data variables.product.github %}, you can use custom properties to create a live migration tracker alongside your inventory of individual pipelines. For example, you could use:

* `ci_source`, with values such as `Jenkins`, `Azure DevOps`, and `GitLab`
* `migration_status`, with values such as `Not started`, `In progress`, `Side by side`, `Migrated`, and `Retired`

You can then filter repositories to select a migration wave, for example with `org:YOUR-ORG props.ci_source:Jenkins props.migration_status:"Not started"`. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

Whichever tracking method you use, keep it updated throughout the migration. If your source code is hosted elsewhere, include moving it to {% data variables.product.github %} in your migration plan.

## Classify your secrets and variables

Before you convert any pipelines, inventory the credentials and configuration values they use. This is your chance to narrow access instead of carrying broad credentials into {% data variables.product.prodname_actions %}.

For each value that a pipeline uses, decide:

* **Is it sensitive?** Store credentials, tokens, and keys as secrets. Store non-sensitive configuration, such as region names and feature flags, as variables. See [AUTOTITLE](/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets) and [AUTOTITLE](/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables).
* **Who needs it?** Store it at the narrowest level that works: an environment, a repository, or an organization with access limited to selected repositories.
* **Can you remove it?** If the value is a long-lived cloud credential, plan to replace it with OIDC where your cloud provider and deployment support it.

Record secret names and scopes in your inventory, never secret values.

You will want to create new, narrowly scoped credentials for {% data variables.product.prodname_actions %} rather than copying the old system's credentials. This means you will be able to revoke the old credentials at retirement without breaking anything.

## Build AI tools for migration

Many enterprises have had success using AI agents to convert pipelines. Agents are good at handling the unpredictability of real-world pipelines and at implementing your organization's standards.

[actions-migrations-via-copilot](https://github.com/github/actions-migrations-via-copilot) includes syntax mappings and a baseline set of migration standards, such as pinning actions to verified commit SHAs and setting least-privilege permissions. Treat these as a starting point and extend them with your organization's own standards.

If you're building custom tooling, you can create custom agents, skills, or plugins with shared migration standards.

{% ifversion ghes %}

If you're on {% data variables.product.prodname_ghe_server %}, check which {% data variables.product.prodname_copilot_short %} capabilities are available before choosing your tooling. See [AUTOTITLE](/copilot/copilot-on-ghes/about-copilot-on-ghes).

{% endif %}

### Define shared migration standards

Provide migrators with your organization's migration standards. For example:

* **Approved actions.** Specify approved actions and verify their dependency references. {% ifversion actions-workflow-lockfiles %}If your organizations use workflow dependency lockfiles, migrated workflows can reference a tag, and the lockfiles can lock tags to a commit SHA. Otherwise, require workflows to include full-length commit SHAs for references to external actions. See [AUTOTITLE](/actions/concepts/security/workflow-dependency-lockfiles).{% else %}Require verified full-length commit SHAs for external repository actions.{% endif %}
* **Token permissions.** Require explicit, least-privilege `GITHUB_TOKEN` permissions, granting additional permissions only to jobs that need them.
* **Secrets and configuration.** Define secret and configuration-variable naming conventions and appropriately scoped organization, repository, and environment access. Keep credential values out of source code, prompts, and reports.
* **Behavior and validation.** Preserve workflow behavior and deployment approval gates, and require representative tests against the source system. Require a report that explicitly identifies missing or unconverted controls.

Continue to refine these standards after the pilot and each subsequent migration wave.

## Run the migration

Use your new AI tools and standards to help people migrate pipelines. Do this for the pilot first, then plan waves for the remaining pipelines.

### Consolidate into reusable code

Review each migration wave for patterns that repeat across repositories, such as the same build, test, or deployment steps. Replace those patterns with a small number of reusable workflows, and add them to your migration standards for the next wave.

### Verify the conversion before cutover

Check each converted workflow before cutover. Run a linter such as [actionlint](https://github.com/rhysd/actionlint) to catch syntax errors, then run representative workflows and confirm that their results match the source system.

AI-assisted conversion tends to fail in predictable ways, so also review what the agent did. Look for anything the agent invented, such as action references or commit SHAs that don't exist, security risks it carried over from the old system, and approval gates or other controls it dropped without an error. Make sure migration reports contain secret names only, and rotate any credential that may have been exposed.

Because one bad pattern can appear across every repository in a wave, review the pilot as a set before expanding. Repeat this review for each subsequent wave before converting the next. For more guidance on securing workflows, see [AUTOTITLE](/actions/reference/security/secure-use).

## Run both systems side by side

Run the old and new pipelines in parallel until you're confident the new workflows are stable and that developers' experience hasn't degraded.

* If your existing system reads pipeline configuration from the repository, such as a `Jenkinsfile` or `.gitlab-ci.yml`, keep that file in place until cutover. Removing or archiving it during conversion stops the old pipeline before you can compare results.
* Let only one system deploy at a time, so a release doesn't run twice.
* If you need build artifacts or logs from the old system, archive them before you retire it.
* When a repository is stable, switch deployments to {% data variables.product.prodname_actions %} and mark it as migrated in your inventory.

## Roll out across the enterprise

After the pilot succeeds, use what you've learned to update your process. Then, migrate the remaining pipelines in waves, applying what you learn along the way to minimize disruption.

1. **Identify waves.** Group the remaining repositories by source CI/CD system and complexity, and migrate one group at a time. Decide whether a central team will migrate each wave, or whether teams will migrate their own repositories using the standards you set during the pilot. Repeat the steps in this guide for each wave, retiring the old system only when the full migration is complete.
1. **Set a deadline.** Set a date for retiring the old system, such as the end of your contract with your current provider, and tell teams early. Look at your business's cadence and the workload of each individual team, and schedule each team's migration at a time that won't impact their ability to deliver. You can point to the successes of other teams to reassure them that migration is possible and desirable.

## Retire the old system

Keep the old system available for repositories outside the pilot that still depend on it. Once every repository in the full migration has migrated, you can retire your old system completely.

1. Check the source pipeline configuration for secrets written directly into the files. Rotate any you find, even if they're no longer used.
1. Disable any remaining pipelines in the old CI/CD system, and archive or remove the source pipeline configuration from your repositories.
1. Revoke credentials used only by the old system. For shared credentials, coordinate with the other teams using them before rotating or replacing them.
1. Shut down the old system, and make sure no one can turn it back on.
1. Update your inventory to record that retirement is complete.
