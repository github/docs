---
title: Roll out stacked pull requests to your organization
shortTitle: Roll out stacked PRs
intro: 'Plan and roll out stacked pull requests to your organization, so your teams can ship large changes as small, reviewable layers without compromising your existing rules and checks.'
versions:
  feature: pr-stacks
contentType: tutorials
permissions: Enterprise and organization owners
category:
- Create pull requests
---

> [!NOTE]
> Stacked pull requests are in {% data variables.release-phases.public_preview %} and subject to change.

Stacked pull requests let developers break large changes into a chain of small, focused pull requests that build on each other, making each layer easier to review, merge, and ship. Stacked pull requests give developers the flexibility to finish one piece of work and move straight to the next without waiting for reviews to land. This matters most when work naturally depends on what came before it, which is common when a team is working on a big release and every change builds on the last.

This tutorial walks you through preparing your organization for stacked pull requests: reviewing rollout considerations, understanding how your branch protection rules and CI work with stacks, and getting your teams started. For a fundamental understanding of stacked pull requests, see [AUTOTITLE](/pull-requests/get-started/about-stacked-prs).

## Prerequisites

If your team is already using pull requests, you're set up to use stacked pull requests. Everything else in this tutorial is optional, but assumes your organization has:

* {% data variables.product.prodname_cli %}, with the `gh-stack` extension installed. The CLI extension is the most comprehensive way to create and manage stacks.
* Branch protection rules configured for your default branch.
* {% data variables.product.prodname_actions %} workflows that run on pull requests targeting your default branch.

{% data variables.product.prodname_copilot_short %} isn't required to use stacked pull requests, but is encouraged for teams that want to stack AI-generated changes. Stacked pull requests also work with other AI coding agents, such as Claude Code and Codex, using the provided agent skill. See [AUTOTITLE](/copilot/tutorials/stack-ai-generated-code-in-pull-requests).

## 1. Review rollout considerations

Before you introduce stacked pull requests to your teams, review the following considerations so everyone knows what to expect.

### Stacks must be linear, and can't include forks

Every pull request in a stack must be part of the same repository and build on a single, linear chain of branches. Stacks with branching structures, or pull requests from forks, aren't supported. If your teams rely on forks for contributions, plan to keep those contributions outside of stacks for now.

### Reordering a stack requires {% data variables.product.prodname_cli %}

If your team needs to reorder the pull requests in a stack, they will need to use `gh stack modify` in the `gh stack` {% data variables.product.prodname_cli %} extension. There's no way to reorder a stack from the {% data variables.product.github %} website. Teams who don't use the CLI locally should plan their stack order carefully upfront, or install the extension for this task.

### A completed stack can't be extended

Once every pull request in a stack has merged, that stack is closed. If a team adds new branches on top and runs `gh stack submit`, the CLI starts a new stack with the same base branch. Teams who want to continue working on a stack should plan to keep the stack open until all work is complete.

## 2. Understand how branch protection rules and CI work with stacks

Stacked pull requests are designed to enforce your existing rules the same way as any other pull request, but it's worth understanding how, since every pull request in a stack is evaluated a bit differently than you might expect.

Every pull request in a stack, not just the bottom one, is evaluated against the **base of the stack** (typically `main`), rather than against the branch it directly targets. That means:

* Required reviews, required status checks, and CODEOWNERS are all enforced against the stack's base branch for every pull request in the stack.
* A {% data variables.product.prodname_actions %} workflow that triggers on `pull_request` events targeting `main` runs for **every** pull request in the stack, so your existing CI configuration doesn't need to change.
* Stack metadata is available in workflow expressions via `github.event.pull_request.stack`, if you want to customize workflow behavior specifically for stacked pull requests. Since a workflow runs once per pull request in a stack, teams can use this metadata to skip expensive jobs on redundant runs and reduce CI usage. For details, see [AUTOTITLE](/pull-requests/how-tos/merge-and-close-pull-requests/optimizing-ci-for-stacked-pull-requests).

Optionally, you can see this in action by opening a small test stack against a repository with your standard rulesets and required checks in place, and confirming that:

1. Reviews and status checks are required on every pull request in the stack, not just the bottom one.
1. Your CI workflows run on every pull request in the stack.
1. Merging is blocked until the pull request in the stack you want to merge, and everything below it, meets your requirements.

For the full list of rules and requirements, see [AUTOTITLE](/pull-requests/reference/stacked-pull-requests).

## 3. Get your teams started

Once you've reviewed the rollout considerations and understand how your rules and CI work with stacks, point your teams to [AUTOTITLE](/pull-requests/how-tos/stacked-pull-requests), which brings together everything they need to start creating, reviewing, and merging stacked pull requests.

## 4. Update your programmatic tooling

As your organization adopts stacked pull requests, review any in-house tools, bots, or dashboards that create, merge, or track pull requests programmatically, and update them to account for stacks.

> [!IMPORTANT]
> Merging a stacked pull request requires the Stacks API. The legacy pull request merge endpoints can't merge a stack. If your organization merges pull requests programmatically, for example, through in-house tooling or ChatOps bots, update that tooling to call the Stacks API before rolling out stacked pull requests.

You may also want to track stack activity programmatically, for example, across dashboards, bots, or internal tooling.

* **REST API**: Every pull request returned by the API includes a `stack` object when it belongs to a stack, showing the stack's number, size, the pull request's position within it, and the stack's base branch. A dedicated Stacks API (`GET /repos/{owner}/{repo}/stacks`) also lists every stack in a repository, or the specific stack containing a given pull request. See [AUTOTITLE](/pull-requests/reference/stacked-pull-requests-rest-and-graphql-apis).
* **Webhooks**: The `pull_request` webhook payload includes the same `stack` object whenever a pull request belongs to a stack. A dedicated `stacked` action fires when a pull request is first added to a stack, so you can react the moment a stack forms.

In both cases, the `stack` field is `null` for standalone pull requests, so existing integrations that don't expect stacks continue to work unchanged.
