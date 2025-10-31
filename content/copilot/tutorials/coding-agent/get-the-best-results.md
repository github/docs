---
title: Best practices for using GitHub Copilot to work on tasks
shortTitle: Get the best results
allowTitleToDifferFromFilename: true
intro: 'Learn how to get the best results from {% data variables.copilot.copilot_coding_agent %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/best-practices-for-using-copilot-to-work-on-tasks
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/best-practices-for-using-copilot-to-work-on-issues
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/best-practices-for-using-copilot-to-work-on-tasks
  - /early-access/copilot/coding-agent/best-practices-for-using-copilot-coding-agent
  - /copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks
  - /copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks
  - /copilot/tutorials/coding-agent/best-practices
contentType: tutorials
category:
  - Automate simple user stories
  - Author and optimize with Copilot
---

> [!NOTE]
> For an introduction to {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

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

Working with {% data variables.product.prodname_copilot_short %} on a pull request is just like working with a human developer: it's common for the pull request to need further work before it can be merged. The process for getting the pull request to a mergeable state is exactly the same when the pull request is created by {% data variables.product.prodname_copilot_short %} as when it's created by a human.

You can also mention `@copilot` in comments on the pull request—explaining what you think is incorrect, or could be improved—and leave {% data variables.product.prodname_copilot_short %} to make the required changes. Alternatively, you can work on the feature branch yourself and push changes to the pull request.

After a user with write access mentions `@copilot` in a comment, {% data variables.product.prodname_copilot_short %} will start to make any required changes, and will update the pull request when it's done. Because {% data variables.product.prodname_copilot_short %} starts looking at comments as soon as they are submitted, if you are likely to make multiple comments on a pull request it's best to batch them by clicking **Start a review**, rather than clicking **Add single comment**. You can then submit all of your comments at once, triggering {% data variables.product.prodname_copilot_short %} to work on your entire review, rather than working on individual comments separately.

> [!NOTE]
> {% data reusables.copilot.coding-agent.write-access-required %}

As {% data variables.product.prodname_copilot_short %} makes changes to the pull request, it will keep the title and body up to date so they reflect the current changes.

## Adding custom instructions to your repository

By adding custom instructions to your repository, you can guide {% data variables.product.prodname_copilot_short %} on how to understand your project and how to build, test and validate its changes.

If {% data variables.product.prodname_copilot_short %} is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

{% data variables.copilot.copilot_coding_agent %} supports a number of different types of custom instructions files:

* `/.github/copilot-instructions.md`
* `/.github/instructions/**/*.instructions.md`
* `**/AGENTS.md`
* `/CLAUDE.md`
* `/GEMINI.md`

For more information, see [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot?tool=webui).

### Repository-wide instructions

To add instructions that apply to all tasks assigned to {% data variables.product.prodname_copilot_short %} in your repository, create a `.github/copilot-instructions.md` file in the root of your repository. This file should contain information about your project, such as how to build and test it, and any coding standards or conventions you want {% data variables.product.prodname_copilot_short %} to follow. Note that the instructions will also apply to {% data variables.copilot.copilot_chat_short %} and {% data variables.copilot.copilot_code-review_short %}.

The first time you ask {% data variables.product.prodname_copilot_short %} to create a pull request in a given repository, {% data variables.product.prodname_copilot_short %} will leave a comment with a link to automatically generate custom instructions. You can also ask {% data variables.product.prodname_copilot_short %} to generate custom instructions for you at any time using our recommended prompt. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=webui#asking-copilot-coding-agent-to-generate-a-copilot-instructionsmd-file).

You can also choose to write your own custom instructions at any time. Here is an example of an effective `copilot-instructions.md` file:

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

### Path-specific instructions

To add instructions that apply to specific types of files {% data variables.product.prodname_copilot_short %} will work on, like unit tests or React components, create one or more `.github/instructions/**/*.instructions.md` files in your repository.
In these files, include information about the file types, such as how to build and test them, and any coding standards or conventions you want {% data variables.product.prodname_copilot_short %} to follow.

Using the glob pattern in the front matter of the instructions file, you can specify the file types to which they should apply. For example, to create instructions for Playwright tests you could create an instructions file called `.github/instructions/playwright-tests.instructions.md` with the following content:

```markdown
---
applyTo: "**/tests/*.spec.ts"
---

## Playwright test requirements

When writing Playwright tests, please follow these guidelines to ensure consistency and maintainability:

1. **Use stable locators** - Prefer `getByRole()`, `getByText()`, and `getByTestId()` over CSS selectors or XPath
1. **Write isolated tests** - Each test should be independent and not rely on other tests' state
1. **Follow naming conventions** - Use descriptive test names and `*.spec.ts` file naming
1. **Implement proper assertions** - Use Playwright's `expect()` with specific matchers like `toHaveText()`, `toBeVisible()`
1. **Leverage auto-wait** - Avoid manual `setTimeout()` and rely on Playwright's built-in waiting mechanisms
1. **Configure cross-browser testing** - Test across Chromium, Firefox, and WebKit browsers
1. **Use Page Object Model** - Organize selectors and actions into reusable page classes for maintainability
1. **Handle dynamic content** - Properly wait for elements to load and handle loading states
1. **Set up proper test data** - Use beforeEach/afterEach hooks for test setup and cleanup
1. **Configure CI/CD integration** - Set up headless mode, screenshots on failure, and parallel execution
```

## Using the Model Context Protocol (MCP)

You can extend the capabilities of {% data variables.copilot.copilot_coding_agent %} by using MCP. This allows {% data variables.copilot.copilot_coding_agent %} to use tools provided by local and remote MCP servers. The {% data variables.product.github %} MCP server and [Playwright MCP server](https://github.com/microsoft/playwright-mcp) are enabled by default. For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Creating {% data variables.copilot.custom_agents_short %}

While custom instructions help guide {% data variables.product.prodname_copilot_short %}'s general behavior across your repository, {% data variables.copilot.custom_agents_short %} create entirely specialized agents with focused expertise and tailored tool configurations. These agents are designed for specific, recurring workflows where domain expertise and consistent behavior are crucial. {% data variables.copilot.custom_agents_caps_short %} are defined as Markdown files called {% data variables.copilot.agent_profiles %}.

Here are some examples of {% data variables.copilot.custom_agents_short %} you could create:

{% data reusables.copilot.custom-agents-examples-list %}

By default, {% data variables.copilot.custom_agents_short %} inherit any MCP server tools that have been configured in the repository, but you can also configure {% data variables.copilot.custom_agents_short %} to only have access to specific tools.

You can use {% data variables.copilot.custom_agents_short %} anywhere you use {% data variables.copilot.copilot_coding_agent %}, including when assigning an issue or prompting with a task.

For more information on creating and configuring {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

## Pre-installing dependencies in {% data variables.product.prodname_copilot %}'s environment

While working on a task, {% data variables.product.prodname_copilot_short %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

If {% data variables.product.prodname_copilot_short %} is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly.

To do that, it will need your project's dependencies. {% data variables.product.prodname_copilot_short %} can discover and install these dependencies itself via a process of trial and error - but this can be slow and unreliable, given the non-deterministic nature of large language models (LLMs).

You can configure a `copilot-setup-steps.yml` file to pre-install these dependencies before the agent starts working so it can hit the ground running. For more information, see [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent#preinstalling-tools-or-dependencies-in-copilots-environment).
