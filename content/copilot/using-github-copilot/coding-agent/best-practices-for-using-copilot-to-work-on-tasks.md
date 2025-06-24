---
title: Best practices for using Copilot to work on tasks
shortTitle: Best practices
intro: 'Learn how to get the best results from {% data variables.copilot.copilot_coding_agent %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=best+practices+for+using+copilot+to+work+on+tasks&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: reference
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/best-practices-for-using-copilot-to-work-on-tasks
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/best-practices-for-using-copilot-to-work-on-issues
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/best-practices-for-using-copilot-to-work-on-tasks
  - /early-access/copilot/coding-agent/best-practices-for-using-copilot-coding-agent
---

{% data reusables.copilot.coding-agent.preview-note %}

## Making sure your issues are well-scoped

{% data variables.product.prodname_copilot %} provides better results when assigned clear, well-scoped tasks. An ideal task includes:

* A clear description of the problem to be solved or the work required.
* Complete acceptance criteria on what a good solution looks like (for example, should there be unit tests?).
* Directions about which files need to be changed.

If you pass a task to {% data variables.product.prodname_copilot_short %} by assigning an issue, it's useful to think of the issue you assign to {% data variables.product.prodname_copilot_short %} as a prompt. Consider whether the issue description is likely to work as an AI prompt, and will enable {% data variables.product.prodname_copilot_short %} to make the required code changes.

## Choosing the right type of tasks to give to {% data variables.product.prodname_copilot_short %}

As you work with {% data variables.product.prodname_copilot_short %}, you'll get a sense of the types of tasks it's best suited to work on. Initially, you might want to start by giving {% data variables.product.prodname_copilot_short %} simpler tasks, to see how it works as a coding agent. For example, you could start by asking {% data variables.product.prodname_copilot_short %} to fix bugs, alter user interface features, improve test coverage, update documentation, improve accessibility, or address technical debt.

Issues that you may choose to work on yourself, rather than assigning to {% data variables.product.prodname_copilot_short %}, include:

* **Complex and broadly scoped tasks**
  * Broad-scoped, context-rich refactoring problems requiring cross-repository knowledge and testing
  * Complex issues requiring understanding dependencies and legacy code
  * Tasks that require deep domain knowledge
  * Tasks that involve substantial business logic
  * Large changes to a codebase requiring design consistency

* **Sensitive and critical tasks**
  * Production-critical issues
  * Tasks involving security, personally identifiable information, authentication repercussions
  * Incident response

* **Ambiguous tasks**
  * Tasks lacking clear definition: tasks with ambiguous requirements, open-ended tasks, tasks that require working through uncertainty to find a solution

* **Learning tasks**
  * Tasks where the developer wants to learn to achieve a deeper understanding

## Using comments to iterate on a pull request

Working with {% data variables.product.prodname_copilot_short %} on a pull request is just like working with a human developer: it's common for the pull request to need further work before it can be merged. The process for getting the pull request to a mergeable state is exactly the same when the pull request is created by {% data variables.product.prodname_copilot_short %} as when it's created by a human. If you want, you can work on the feature branch yourself and push changes to the pull request. However, you can also just add comments to the pull request—explaining what you think is incorrect, or could be improved—and leave {% data variables.product.prodname_copilot_short %} to make the required changes.

{% data variables.product.prodname_copilot_short %} will read all comments as soon as they are submitted by users with write access, and will decide whether they require action. It will then start to make any required changes, and will update the pull request when it's done. Because {% data variables.product.prodname_copilot_short %} starts looking at comments as soon as they are submitted, if you are likely to make multiple comments on a pull request it's best to batch them by clicking **Start a review**, rather than clicking **Add single comment**. You can then submit all of your comments at once, triggering {% data variables.product.prodname_copilot_short %} to work on your entire review, rather than working on individual comments separately.

> [!NOTE]
> {% data reusables.copilot.coding-agent.write-access-required %}

## Adding custom instructions to your repository

By adding custom instructions to your repository, you can guide {% data variables.product.prodname_copilot_short %} on how to understand your project and how to build, test and validate its changes.

If {% data variables.product.prodname_copilot_short %} is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

Add instructions to a `.github/copilot-instructions.md` file in the repository. For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=webui).

Here is an example of an effective `copilot-instructions.md` file:

```markdown
This is a Go based repository with a Ruby client for certain API endpoints. It is primarily responsible for ingesting metered usage for GitHub and recording that usage. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit
- Run `make fmt` before committing any changes to ensure proper code formatting
- This will run gofmt on all Go files to maintain consistent style

### Development Flow
- Build: `make build`
- Test: `make test`
- Full CI check: `make ci` (includes build, fmt, lint, test)

## Repository Structure
- `cmd/`: Main service entry points and executables
- `internal/`: Logic related to interactions with other {% data variables.product.github %} services
- `lib/`: Core Go packages for billing logic
- `admin/`: Admin interface components
- `config/`: Configuration files and templates
- `docs/`: Documentation
- `proto/`: Protocol buffer definitions. Run `make proto` after making updates here.
- `ruby/`: Ruby implementation components. Updates to this folder should include incrementing this version file using semantic versioning: `ruby/lib/billing-platform/version.rb`
- `testing/`: Test helpers and fixtures

## Key Guidelines
1. Follow Go best practices and idiomatic patterns
2. Maintain existing code structure and organization
3. Use dependency injection patterns where appropriate
4. Write unit tests for new functionality. Use table-driven unit tests when possible.
5. Document public APIs and complex logic. Suggest changes to the `docs/` folder when appropriate
```

## Using the Model Context Protocol (MCP)

You can extend the capabilities of {% data variables.copilot.copilot_coding_agent %} by using MCP. This allows {% data variables.copilot.copilot_coding_agent %} use tools provided by local MCP servers. For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Pre-installing dependencies in {% data variables.product.prodname_copilot %}'s environment

While working on a task, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

If {% data variables.product.prodname_copilot_short %} is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

To do that, it will need your project's dependencies. {% data variables.product.prodname_copilot_short %} can discover and install these dependencies itself via a process of trial and error - but this can be slow and unreliable, given the non-deterministic nature of large language models (LLMs).

You can configure a `copilot-setup-steps.yml` file to pre-install these dependencies before the agent starts working so it can hit the ground running. For more information, see [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent#preinstalling-tools-or-dependencies-in-copilots-environment).
