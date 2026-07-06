---
title: Securely using pull_request_target
shortTitle: Securely using pull_request_target
intro: Learn about the security risks of the `pull_request_target event`.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
category:
  - Secure your workflows
---

This guide helps you assess whether your workflow should use the `pull_request_target` event and understand the security risks involved. It also explains the protection {% data variables.product.github %} applies to [`actions/checkout`](https://github.com/actions/checkout) v7 and later to reduce these risks by default, and when to opt out of that protection if necessary.

Read [`pull_request_target`](/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target) before you check out pull request code from one of these workflows, or before you set the `allow-unsafe-pr-checkout` input on `actions/checkout`.

## The risks of the pull_request_target event

Workflows triggered by `pull_request_target` run with elevated trust: the job receives the base repository's `GITHUB_TOKEN`, access to repository and organization secrets, and write access to the default-branch cache. This is the same trust given to events like `push` that only collaborators can trigger, and it is what makes `pull_request_target` useful for automation that responds to pull requests from forks, such as labeling, triage, or for posting authenticated status checks.

To understand why this is safe by default, and how that safety is commonly broken, review `pull_request_target` against [`pull_request`](/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request).

The `pull_request` event (along with `pull_request_review` and `pull_request_review_comment`) is unusual: it runs the workflow file from the **merge commit of the pull request**. For a pull request opened from a fork, that commit is controlled by someone without write access to the base repository. To run untrusted workflow code safely, {% data variables.product.github %} restricts these events to a read-only `GITHUB_TOKEN`, withholds access to other secrets, and applies fork approval policies to prevent compute abuse. For more information, see [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request). By default, `actions/checkout` in a `pull_request` workflow also checks out the pull request's merge commit, so the code checked out and the workflow that runs are consistent.

`pull_request_target` makes one critical and subtle change: the workflow, and any subsequent `actions/checkout` call that does not specify a `ref`, is taken from the **base repository's default branch**, not from the pull request. Because only trusted code from the default branch runs, it is safe to grant secrets and a read/write token. No code from the fork is executed by default.

You introduce risk when a workflow author overrides this default to run the fork's code. Developers frequently choose `pull_request_target` because they want to run a fork's pull request through CI _and_ have access to secrets, for example to run tests that need a private registry. To do this, they point `actions/checkout` at the pull request head instead of the default branch, which is insecure:

```yaml
# INSECURE. Provided as an example only.
on:
  pull_request_target:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
      - name: Test
        run: make test
```

The checkout step alone does not execute untrusted code. The workflow file itself still comes from the default branch. The vulnerability is completed by the _next_ step that runs code checked out into the current working directory. Here, `make test` executes a `Makefile` taken from the pull request head. An attacker only needs to open a pull request from a fork whose `Makefile` (or build script, test command, dependency, or configuration file) contains malicious commands. Those commands then run with the base repository's secrets and token.

This pattern is known as a "pwn request" and has been the root cause of multiple supply-chain compromises. For more information, see [Preventing pwn requests](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/) from the {% data variables.product.prodname_security %}. Common vulnerable shapes include:

* Checking out a pull request's head or merge commit in `actions/checkout` (`ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}`, `ref: refs/pull/{% raw %}${{ github.event.pull_request.number }}{% endraw %}/merge`) and then building, testing, or otherwise executing the result.
* Setting `repository:` to the fork (`repository: {% raw %}${{ github.event.pull_request.head.repo.full_name }}{% endraw %}`) to pull the fork's branch directly.
* Fetching the pull request code outside of `actions/checkout` (for example with `git fetch`, `gh pr checkout`, or by downloading an artifact from a fork's `pull_request` run) and then running it.

Pwn requests are also not unique to `pull_request_target`. Any event that runs with secrets can introduce a pwn request if it checks out or downloads and executes untrusted code. For example, an `issue_comment` or `workflow_run` workflow that fetches and runs a fork's pull request code is vulnerable in the same way. A `workflow_run` workflow should treat artifacts uploaded by other workflows as untrusted data, since their contents can come from a fork.

## Deciding whether to use pull_request_target

Some workflows need to check out fork pull request code with elevated trust, and this is why `pull_request_target` was created in the first place. For example, generating coverage reports that require a private artifact registry or producing and running authenticated checks against the changes introduced from the pull request. Consider the questions below before using `pull_request_target` or opting into the `allow-unsafe-pr-checkout` flag in `actions/checkout`.

* **Can you use `pull_request` instead?** `pull_request` triggers on the same events as `pull_request_target` and runs the workflow code from the `pull_request` merge branch. It does this safely on pull requests from forks with the protections detailed above. If additional secret access is not needed, use `pull_request`. More complex workflows can be restructured to separate potentially dangerous handling of pull request code from accessing secrets. For more information, see [Preventing pwn requests](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/#preventing-pwn-requests) from the {% data variables.product.prodname_security %}.

* **Is the checked-out code ever executed?** This is the flaw that introduces pwn request vulnerabilities. It is most commonly introduced with `actions/checkout` by checking out a pull request head into the working directory and then running it. Unless the `path` input is set, `actions/checkout` writes the code into the `$GITHUB_WORKSPACE` directory, which is typically the working directory where subsequent commands run. Execution is not limited to your own steps: build and test commands such as `npm install` and `npm run build`, as well as configuration files and dependencies the code brings with it, can all run attacker-controlled code. Execution does not require an obvious build step. **You must ensure the checked-out code is only ever inspected as data and never executed before using a `pull_request_target` event**.

## Hardening a pull_request_target workflow

If you have confirmed you need `pull_request_target`, apply these controls to limit the impact of this high-risk event. These apply whether or not your workflow checks out pull request code.

* **Restrict secrets.** Confirm that the permissions set on the `GITHUB_TOKEN` have the least privileges and that only the necessary repository and organization secrets are used for the workflow. For more information, see [AUTOTITLE](/actions/tutorials/authenticate-with-github_token#modifying-the-permissions-for-the-github_token).

* **Understand the impact to caching.** Outside of the `GITHUB_TOKEN` and configured secrets, workflows that run on `pull_request_target` also have write access to the cache shared with other workflows on the default branch. Malicious changes to this cache from `pull_request_target` events could impact the execution of other, unrelated, workflows.

* **Ensure the underlying compute is isolated and ephemeral.** If self-hosted runners are used, you must confirm that the runner environment is properly restricted from internal resources and is not reused across {% data variables.product.prodname_actions %} runs. For more information, see [AUTOTITLE](/actions/reference/security/secure-use#hardening-for-self-hosted-runners).

* **Enforce {% data variables.product.prodname_actions %} security best practices.** In addition to the specific risks of pwn requests, other common vulnerabilities, such as command injection, can exist and impact the code executed in this privileged event. For more information, see [Keeping your GitHub Actions and workflows secure: Untrusted input](https://securitylab.github.com/resources/github-actions-untrusted-input/) from the {% data variables.product.prodname_security %}. To identify and proactively protect against common {% data variables.product.prodname_actions %} vulnerabilities, enable {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

## Opting out of built-in protections

If you have worked through the questions above and confirmed your workflow requires `pull_request_target` and uses it safely, you can opt out of the `actions/checkout` protection. Setting `allow-unsafe-pr-checkout: true` as an `actions/checkout` input allows checking out pull request head refs from forks. Only do this after confirming the checked-out code is never executed. The input is intentionally named to be easy to spot in code review and static analysis.

This protection only covers fork pull request refs. Checking out other untrusted code, such as an unrelated third-party repository, fetching code with `git fetch` or `gh pr checkout`, or running a downloaded artifact, is not covered by the `actions/checkout` checks.

{% ifversion fpt or ghec %}

## Restricting the use of pull_request_target

If a repository has no legitimate use for `pull_request_target`, restricting the event removes the risk regardless of how individual workflows are written. Administrators can use workflow execution protections to control which events and actors can trigger workflows. For more information, see the workflow execution protections documentation for repositories ([AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/actions-policies/workflow-execution-protections)){% ifversion ghec %}, organizations ([AUTOTITLE](/organizations/managing-organization-settings/actions-policies/workflow-execution-protections)), and across your enterprise ([AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/actions-policies/workflow-execution-protections)){% else %} and organizations ([AUTOTITLE](/organizations/managing-organization-settings/actions-policies/workflow-execution-protections)){% endif %}.

{% endif %}
