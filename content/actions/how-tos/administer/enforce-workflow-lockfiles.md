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

> [!NOTE] {% data reusables.actions.workflow-lockfiles-preview %}

Requiring lockfiles gives you consistent, auditable assurance that every workflow runs vetted code, without asking each team to adopt the practice on its own. For an introduction, see [AUTOTITLE](/actions/concepts/security/workflow-dependency-lockfiles).

This guide helps you run a pilot in selected repositories and set up automations to keep the lockfiles up to date. When you're confident the lockfiles are working as intended and not introducing developer friction, you can enforce the **Require lockfile** policy.

## Prerequisites

Before you enforce workflow lockfiles and create processes to keep them up to date, the lockfile must exist in your repositories. For instructions, see [AUTOTITLE](/actions/how-tos/secure-your-work/lock-workflow-dependencies).

## 1. Pilot the "require lockfile" policy

>[!IMPORTANT] **Evaluate** mode for policies is only available on {% data variables.product.prodname_enterprise %}. Do not enable this policy in **Active** mode until you're confident you have systems in place to keep the lockfile up to date for all targeted workflows.

The **Require lockfile** policy blocks runs of targeted workflows that include action dependencies but are **not** onboarded to the repository's lockfile. To configure the policy, see [AUTOTITLE](/actions/how-tos/administer/control-workflow-execution).

Run a pilot before enforcing this policy in all repositories. You should:

* Scope the policy to specific repositories that have onboarded to lockfiles.
* Target specific workflows that have been onboarded to the lockfile. Do this until all workflows are onboarded _and_ you have processes in place to ensure new workflows are onboarded automatically.
* Start with the policy in **Evaluate** mode and analyze the results under **Policy insights**

## 2. Keep lockfiles current

Enforcement only works if lockfiles stay up to date. Add automations so that developers do not need to remember to run the lock command every time they create or edit workflows.

The following sections give examples for how to prevent stale lockfiles at different points of the development lifecycle.

* Keep the file up to date by enabling {% data variables.product.prodname_dependabot %} and creating a workflow to run the lock command.
* Add a skill and pre-commit hook to shorten the feedback loop for developers.

For ready-to-copy implementations of the workflow and the skill, see the [gh-actions-lock](https://github.com/github/gh-actions-lock) repository.

### {% data variables.product.prodname_dependabot %} version updates

When {% data variables.product.prodname_dependabot %} bumps an action version, it regenerates the matching lockfile entry in the same pull request.

You don't need any configuration beyond having {% data variables.product.prodname_dependabot %} manage {% data variables.product.prodname_actions %} dependencies. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions).

{% data variables.product.prodname_dependabot %} will **not** onboard a workflow that has no lockfile entries yet, so this option maintains coverage rather than extending it.

### A dedicated {% data variables.product.prodname_actions %} workflow

When someone adds or edits a workflow, run another workflow that runs the lock command. Trigger the workflow on changes to `.github/workflows/**` and to any `action.yml` or `action.yaml` file, then give it two jobs:

* An **update** job that regenerates the lockfile on push and commits the result. This job needs `contents: write` permissions, and your branch protection rules or rulesets must allow {% data variables.product.prodname_actions %} to push to the branches it runs on.
* A **verify** job that runs `gh actions-lock --verify` on pull requests. This should exit with an error if the lockfile is stale, making it useful for a required check.

### A {% data variables.product.prodname_copilot_short %} skill

When {% data variables.product.prodname_copilot_short %} edits a workflow file, tell it to run the command to update the lockfile in the same changeset.

The skill should tell {% data variables.product.prodname_copilot_short %} to regenerate the lockfile with the CLI whenever it changes a workflow or a local action, and never to edit the lockfile directly. It only covers edits made with {% data variables.product.prodname_copilot_short %}, so treat it as a convenience rather than a control. See [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

### A pre-commit hook

This catches a stale lockfile before a commit exists, which is the earliest feedback a developer can get.

Use `gh actions-lock --verify-local --no-fix` in the hook. It works offline, doesn't need authentication, and is fast enough to run on every commit. This command confirms that every dependency has a lockfile entry, but does not re-verify the pins against {% data variables.product.github %}.

## 3. Set up a review process for lockfile changes

A lockfile is only a security control if someone reads the diff. A changed commit SHA tells you that the code your workflows run has changed.

1. Add `.github/workflows/actions.lock` to your `CODEOWNERS` file so that the team responsible for build security is automatically requested for review. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
1. Configure a branch protection rule or repository ruleset to require approval from a code owner.
1. Tell reviewers what to look for. For guidance, see [AUTOTITLE](/actions/how-tos/secure-your-work/lock-workflow-dependencies#reviewing-lockfile-changes).

## 4. Enforce the policy

When you're confident that lockfiles are in place and will stay up to date, change the enforcement status of the **Require lockfile** policy to **Active**, and ensure all onboarded repositories and workflows are targeted.

Leave the verification from step 2 in place. The policy will block a workflow run that has no valid lockfile, but a verification check tells an author their lockfile is stale while they're still working on the pull request.
