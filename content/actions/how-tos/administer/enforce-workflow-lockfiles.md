---
title: Enforcing lockfiles for action dependencies
shortTitle: Enforce workflow lockfiles
intro: 'Require workflow dependency lockfiles across your repositories, and automatically keep the files up to date.'
versions:
  feature: actions-workflow-lockfiles
permissions: 'Repository administrators, organization owners, and enterprise owners'
product: '{% data variables.product.prodname_ghe_cloud %}'
contentType: how-tos
---

Requiring lockfiles gives you consistent, auditable assurance that every workflow runs vetted code, without asking each team to adopt the practice on its own. For an introduction, see [AUTOTITLE](/actions/concepts/security/workflow-dependency-lockfiles).

This guide helps you run a pilot in selected repositories and set up automations to keep the lockfiles up to date. When you're confident the lockfiles are working as intended and not introducing developer friction, you can enforce the **Require lockfile** policy.

## Prerequisites

Before you enforce workflow lockfiles and create processes to keep them up to date, the lockfile must exist in your repositories. For instructions, see [AUTOTITLE](/actions/how-tos/secure-your-work/lock-workflow-dependencies). You don't need to be an administrator to create a lockfile. Anyone with write access to a repository can do this, so you can delegate onboarding to individual teams before enforcing the policy centrally.

If your workflows call reusable workflows from other repositories, confirm those source repositories are also onboarded. The calling repository's lockfile doesn't cover them. If a called reusable workflow isn't onboarded in its own repository, the **Require lockfile** policy blocks the calling workflow's run.

## 1. Pilot the "Require lockfile" policy

> [!IMPORTANT] **Evaluate** mode for policies is only available on {% data variables.product.prodname_ghe_cloud %}. Do not enable this policy in **Active** mode until you're confident you have systems in place to keep the lockfile up to date for all targeted workflows.

The **Require lockfile** policy blocks runs of targeted workflows that aren't onboarded to the repository's lockfile, including workflows with no `uses:` dependencies.

Run a pilot before enforcing this policy in all repositories. You should:

* Scope the policy to specific repositories that have onboarded to lockfiles.
* Target specific workflows that have been onboarded to the lockfile, until all workflows are onboarded and you have automated processes to onboard new ones.
* Start with the policy in **Evaluate** mode and analyze the results under **Policy insights**.

**Require lockfile** is a separate policy from **Require actions to be pinned to a full-length commit SHA**. You can keep both enabled during your rollout. To configure the policy and see how the two interact, see [AUTOTITLE](/actions/how-tos/administer/control-workflow-execution#require-lockfile).

## 2. Keep lockfiles current

Enforcement only works if lockfiles stay up to date. Add automations so that developers do not need to remember to run the lock command every time they create or edit workflows.

The following sections give examples for how to prevent stale lockfiles at different points of the development lifecycle:

* Keep the file up to date by enabling {% data variables.product.prodname_dependabot %}.
* Create a workflow to run the lock command and verify it as part of your pull request requirements.

### {% data variables.product.prodname_dependabot %} version updates

When {% data variables.product.prodname_dependabot %} bumps an action version, it regenerates the matching lockfile entry in the same pull request.

You don't need any configuration beyond having {% data variables.product.prodname_dependabot %} manage {% data variables.product.prodname_actions %} dependencies. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions).

{% data variables.product.prodname_dependabot %} will **not** onboard a workflow that has no lockfile entries yet, so this option maintains coverage rather than extending it.

### A dedicated workflow or {% data variables.product.prodname_copilot_short %}

When someone adds or edits a workflow, run another workflow that runs the lock command. Trigger the workflow on changes to `.github/workflows/**` and to any `action.yml` or `action.yaml` file, then give it two jobs:

* An **update** job that regenerates the lockfile on push and commits the result. This job needs `contents: write` permissions, and your branch protection rules or rulesets must allow {% data variables.product.prodname_actions %} to push to the branches the workflow runs on. Writing to the lockfile requires the `workflow` OAuth scope, so confirm your tooling has that scope.
* A **verify** job that runs `gh actions-lock --verify` on pull requests. This should exit with an error if the lockfile is stale, making it useful for a required check.

For a ready-to-use example workflow, see [verify-lockfile.yml](https://github.com/github/gh-actions-lock/blob/main/.github/workflows/verify-lockfile.yml?utm_source=enforcing-lockfiles-docs-linking-verify-lockfile-workflow&utm_medium=docs&utm_campaign=universe-2026) in the `gh-actions-lock` repository. If you use {% data variables.product.prodname_copilot_short %} to edit workflows, you can also set it up to regenerate the lockfile in the same changeset. See the [gh-actions-lock skill](https://github.com/github/gh-actions-lock/blob/main/skills/gh-actions-lock/SKILL.md?utm_source=another-docs-about-lockfiles&utm_medium=docs&utm_campaign=universe-2026) and [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

## 3. Set up a review process for lockfile changes

A lockfile is only a security control if someone reads the diff. A changed commit SHA, specifically, tells you the code your workflows run has changed.

1. Add `.github/workflows/actions.lock` to your `CODEOWNERS` file so that the team responsible for build security is automatically requested for review. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
1. Configure a branch protection rule or repository ruleset to require approval from a code owner.
1. Tell reviewers what to look for. For guidance, see [AUTOTITLE](/actions/how-tos/secure-your-work/lock-workflow-dependencies#reviewing-lockfile-changes).

## 4. Enforce the policy

When you're confident that lockfiles are in place and will stay up to date, change the enforcement status of the **Require lockfile** policy to **Active**. Make sure all onboarded repositories and workflows are targeted.

> [!IMPORTANT] When **Require lockfile** is **Active**, every targeted workflow that isn't onboarded to its repository's lockfile is blocked, even if other workflows in the same repository are onboarded. Before you activate the policy, run `gh actions-lock --verify` in each targeted repository, or review **Policy insights** in **Evaluate** mode, to confirm that every targeted workflow is covered.

Leave the verification from step 2 in place. The policy blocks a workflow run that has no valid lockfile. A verification check, by contrast, tells an author their lockfile is stale while they're still working on the pull request.

If a verification check fails, see the [gh-actions-lock troubleshooting guide](https://github.com/github/gh-actions-lock/blob/main/docs/troubleshooting.md?utm_source=lockfiles-doc-linking-gh-actions-lock-troubleshooting&utm_medium=docs&utm_campaign=universe-2026) in the `gh-actions-lock` repository.
