---
title: Roll out stacked pull requests to your organization
shortTitle: Roll out stacked PRs
intro: 'Stacked pull requests help your organization maintain review quality as teams deliver large changes in small, reviewable layers, while keeping required reviews and status checks in place.'
versions:
  feature: pr-stacks
contentType: tutorials
permissions: Enterprise and organization owners
category:
- Create pull requests
---

> [!NOTE]
> Stacked pull requests are in {% data variables.release-phases.public_preview %} and subject to change.

Stacked pull requests let developers break large changes into a chain of small, focused pull requests that build on each other. This approach can help your organization maintain review quality as developers produce more code, including with {% data variables.product.prodname_copilot_short %} and other coding agents.

Stacked pull requests require **no setup or enablement**. If your team already uses pull requests, they can create a stack today. The steps below help you prepare your existing controls and support a smooth rollout, not turn a feature on.

This tutorial helps you decide whether stacked pull requests fit your organization, make sure the foundations are in place, pilot the workflow, support adoption, and update programmatic tooling. For a fundamental understanding of stacked pull requests, see [AUTOTITLE](/pull-requests/get-started/about-stacked-prs).

## 1. Decide if stacked pull requests are the right fit

Use this quick self-check before investing in a rollout:

* Do your teams produce a high volume of code, either themselves or with {% data variables.product.prodname_copilot_short %} or other coding agents?
* Do your teams work on large features, especially inside monorepos, that are difficult to split into independent pull requests?

If either describes your teams, stacked pull requests can help them submit dependent changes in smaller units without waiting for each pull request to merge before starting the next one, as long as their work fits one constraint: every pull request in a stack must be in the same repository, following a single, linear chain of branches. Stacks can't include forks or branching structures, so teams that rely heavily on forks for contributions should keep those contributions outside stacks for now.

## 2. Make sure the foundations are in place

Each pull request in a stack is evaluated against the **base of the stack** (typically `main`), rather than the branch it directly targets. Your existing branch protection rules or rulesets and CI workflows apply automatically:

* Required reviews, required status checks, and CODEOWNERS are all enforced against the stack's base branch for every pull request in the stack.
* A {% data variables.product.prodname_actions %} workflow that triggers on `pull_request` events targeting the default branch of a repository runs for **every** pull request in the stack, so your existing CI configuration doesn't need to change.
* Stack metadata is available in workflow expressions via `github.event.pull_request.stack`, if you want to customize workflow behavior specifically for stacked pull requests. Since a workflow runs once per pull request in a stack, teams can use this metadata to limit expensive jobs and reduce CI usage. For details, see [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/optimizing-ci-for-stacked-pull-requests).

One optional addition worth considering: if developers need to reorder pull requests after creating a stack without dissolving it, adopt the `gh stack` extension for {% data variables.product.prodname_cli %}. In-place reordering requires `gh stack modify`; on the {% data variables.product.github %} website, developers must unstack the pull requests and recreate the stack in the desired order.

A stack also closes automatically once every pull request in it has merged. If a team adds new branches on top of a merged stack and runs `gh stack submit`, the CLI starts a new stack with the same base branch. It doesn't extend the original. Teams who want to keep working across a set of changes should plan to keep the stack open until all the work is complete.

For the full list of rules and requirements, see [AUTOTITLE](/pull-requests/reference/stacked-pull-requests).

## 3. Pilot with a small group

Choose a small group of developers who produce a high volume of code, either themselves or through {% data variables.product.prodname_copilot_short %} or other coding agents. Ask the group to use a real, representative feature for the pilot instead of a disposable example.

To create their first stack, direct people to [AUTOTITLE](/pull-requests/get-started/stacked-prs-quickstart). After the pilot, gather feedback from developers and reviewers on:

* How stack planning fit into their existing workflow, and whether developers need in-place reordering, which requires the `gh stack` extension
* Whether review flow felt different now that every pull request in the stack carries its own required reviews and status checks
* Any support or documentation gaps they ran into

## 4. Roll out and support adoption

After the pilot, share day-to-day guidance on creating, reviewing, managing, and merging stacks with teams: [AUTOTITLE](/pull-requests/how-tos/stacked-pull-requests).

As noted in step 2, recommend the `gh stack` {% data variables.product.prodname_cli %} extension when developers need to reorder a stack without dissolving it. Teams that don't use local CLI tools can unstack and recreate the stack in the desired order on the {% data variables.product.github %} website.

Teams producing a high volume of AI-generated code, one of the fit signals from step 1, can find guidance on stacking changes from coding agents in [AUTOTITLE](/copilot/tutorials/stack-ai-generated-code-in-pull-requests).

## 5. Update your programmatic tooling

To sustain adoption, review any in-house tools, bots, or dashboards that create, merge, or track pull requests programmatically, and update them to account for stacks.

If your organization provides an internal CLI or other developer tooling, you can use the Stacks API to integrate stack creation and management into those existing tools instead of requiring developers to adopt `gh stack`.

> [!IMPORTANT]
> Merging a stacked pull request programmatically requires the asynchronous merge API, which supports both stacked and standalone pull requests. The legacy pull request merge endpoint can't merge a stack. If your organization merges pull requests programmatically, update that tooling to use the asynchronous merge API before rolling out stacked pull requests. See [AUTOTITLE](/rest/pulls/pulls?apiVersion=2026-03-10#merge-a-pull-request-asynchronously).

You may also want to track stack activity programmatically, for example, across dashboards, bots, or internal tooling.

* **REST API**: Every pull request returned by the API includes a `stack` object when it belongs to a stack, showing the stack's number, size, the pull request's position within it, and the stack's base branch. A dedicated Stacks API (`GET /repos/{owner}/{repo}/stacks`) also lists every stack in a repository, or the specific stack containing a given pull request. See [AUTOTITLE](/pull-requests/reference/stacked-pull-requests-rest-and-graphql-apis).
* **Webhooks**: The `pull_request` webhook payload includes the same `stack` object whenever a pull request belongs to a stack. A dedicated `stacked` action fires when a pull request is first added to a stack, so you can react the moment a stack forms.

In both cases, the `stack` field is `null` for standalone pull requests, so existing integrations that don't expect stacks continue to work unchanged.
