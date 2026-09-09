---
title: Use GitHub Copilot code review across the pull request lifecycle
shortTitle: Pull request lifecycle
allowTitleToDifferFromFilename: true
intro: Build a repeatable workflow for {% data variables.copilot.copilot_code-review_short %} from draft pull request to merge.
versions:
  feature: copilot
contentType: tutorials
category:
  - Accelerate PR velocity
  - Team collaboration
  - Author and optimize with Copilot
---

## Introduction

{% data variables.copilot.copilot_code-review_short %} is most effective when you use it as part of a pull request workflow. This tutorial shows how to choose between manual and automatic reviews, request reviews early on draft pull requests, and decide when to trigger re-review before merge.

You will also learn when to use customization, skills, MCP servers, and runner options to tailor {% data variables.product.prodname_copilot_short %}'s reviews to your needs.

## Work through the pull request lifecycle

Choose a review model and set up early feedback for draft and active pull requests.

### Choose the right review model for your team

{% data variables.copilot.copilot_code-review_short %} can run manually, when you trigger it yourself, or automatically, at one or more points in a pull request's lifecycle. Manual reviews give you control over exactly when {% data variables.copilot.copilot_code-review_short %} weighs in. Automatic reviews ensure consistent coverage, and you can choose whether they trigger on open, on draft, or on every new push.

| Review model | Best for | Why |
| --- | --- | --- |
| Manual review request | High-context changes or selective use | You can trigger {% data variables.product.prodname_copilot_short %} only when you want another perspective. |
| Automatic review on open pull requests | Teams that want broad, consistent coverage | Every pull request gets baseline feedback without relying on individual habits. |
| Automatic review on draft pull requests | Teams that want earlier feedback loops | Authors can fix issues before human review starts. |
| Automatic review on new pushes | Fast-moving pull requests with multiple revisions | {% data variables.product.prodname_copilot_short %} reevaluates substantial updates as the pull request evolves. |

For setup steps, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review) and [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-automatic-review).

### Use {% data variables.copilot.copilot_code-review_short %} early on draft pull requests

Reviewing draft pull requests with {% data variables.copilot.copilot_code-review_short %} gives you an early, dependable check on your code before you request a review from your team.

A useful draft workflow is:

1. Open a pull request as draft.
1. Request a review from {% data variables.copilot.copilot_code-review_short %} under **Reviewers**, or enable automatic review for draft pull requests.
1. Address high-confidence feedback first, such as correctness, security, and clear maintainability issues.
1. Push updates and confirm that major comments have been resolved.
1. Mark the pull request as ready for human review.

This approach helps your team spend more human review time on design tradeoffs and product impact, instead of obvious issues that could have been caught earlier.

## Tune review quality

Improve review quality by deciding when to request re-review and where customization, external context, and runners add value.

### Use re-review before merge

After substantial changes, request re-review to check whether new risks were introduced while addressing earlier feedback.

Request re-review when you:

* Update multiple files across service or package boundaries.
* Change security-sensitive or data-sensitive behavior.
* Apply a large batch of suggested changes and want a final pass.

For teams with frequent updates to active pull requests, enabling automatic reviews on new pushes can reduce manual re-review requests while keeping feedback current.

### Match customization to your workflow

Customization is most useful when each file type supports a review decision point in your workflow:

* Use `.github/copilot-instructions.md` for repository-wide review expectations that should apply to most pull requests.
* Use `.github/instructions/**/*.instructions.md` for agent-specific and path-specific guidance when different parts of the codebase have different standards.
* Use `AGENTS.md` to provide repository context that improves relevance, such as intentional patterns, architecture boundaries, or review priorities.

Keep these files focused on what reviewers need to decide during pull requests. Avoid turning them into full engineering handbooks.

For detailed customization mechanics and examples, see [AUTOTITLE](/copilot/tutorials/customize-code-review).

### Use agent skills and MCP servers for specialized review goals

Agent skills and MCP servers are most valuable when your team needs reviews that depend on organization-specific context.

Use agent skills when you want reusable review routines, for example:

* Applying a standard checklist to migration pull requests.
* Running language- or framework-specific review passes in a monorepo.
* Prioritizing certain risk areas, such as authorization or billing logic.

Use MCP servers when reviews should reference context outside the pull request itself, for example:

* Linking pull request changes to issue, incident, or service ownership data.
* Checking expected rollout or operational context from internal systems.
* Validating implementation details against external documentation sources.

For setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) and [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

### Decide whether you need self-hosted runners

In many cases, standard {% data variables.product.prodname_dotcom %}-hosted runners are sufficient for {% data variables.copilot.copilot_code-review_short %} and require no setup; they are configured for you by default.

Consider self-hosted or larger runners when you need:

* Better performance for heavier review workloads.
* Network access to internal systems required by your organization.

Runners are required because {% data variables.copilot.copilot_code-review_short %} uses {% data variables.product.prodname_actions %} for agentic operations, such as deeper context gathering and tool-calling. If {% data variables.product.prodname_dotcom %}-hosted runners are unavailable and no supported self-hosted option is configured correctly, reviews will fall back to a more limited mode.

For planning and setup details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/configure-runners).

## Recommended workflows by scenario

| Team scenario | Recommended workflow |
| --- | --- |
| Small team with frequent pull requests | Enable automatic reviews for all pull requests, review drafts for early feedback, and use manual re-review before merge when changes are substantial. |
| Large monorepo with mixed stacks | Enable automatic reviews and review new pushes, add path-specific instructions for each major area, and use skills for repeated review patterns. |
| Security-sensitive or regulated codebase | Use draft pull request reviews plus required re-review before merge, keep repository-wide security expectations in `.github/copilot-instructions.md`, and use MCP servers for incident or compliance context stored outside of GitHub. |
| Team with internal platform dependencies | Start with automatic review, then add self-hosted runners and MCP context only when internal-system access is required for useful review feedback. |

## Next steps

* For broader concepts, including review effort and agentic capabilities, see [AUTOTITLE](/copilot/concepts/agents/code-review).
* To tune automated review quality for specific repositories, see [AUTOTITLE](/copilot/tutorials/optimize-code-reviews).
* For excluded file types and other limits, see [AUTOTITLE](/copilot/reference/review-excluded-files).
