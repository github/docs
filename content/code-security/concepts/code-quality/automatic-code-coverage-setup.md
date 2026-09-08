---
title: Automatic code coverage setup
shortTitle: Automatic code coverage
intro: 'An AI-powered agent can analyze your repository and generate a working code coverage workflow, so you can start tracking test coverage without manually authoring CI configuration.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
contentType: concepts
category:
  - Improve code quality
---

When you use automatic setup for code coverage, an AI-powered agent analyzes your repository, identifies your test framework, and opens a pull request with a coverage workflow ready for review. 

**There is no additional cost for using this feature.**

## How the agent works

The agent works in three phases:

1. **Discovery:** The agent reads your CI configuration, documentation, and build files to understand your project structure and identify your test framework.
1. **Execution:** The agent installs dependencies, builds the project, and runs your tests with coverage enabled. If coverage tooling is not already configured, the agent adds it to your project configuration (for example, `vitest.config.ts` or `jest.config.js`).
1. **Workflow integration:** If the agent produces a valid coverage report, it checks whether your repository already has a {% data variables.product.prodname_actions %} workflow that runs tests on pull requests. If so, the agent augments that workflow with a coverage upload step. If not, it creates a new workflow file and opens a pull request.

## When the agent stops

The agent may stop before opening a pull request in the following situations:

* **No tests found.** The agent couldn't find tests to instrument, so there's nothing to generate coverage for.
* **Can't reproduce the build.** Missing private registries, proprietary SDKs, or system dependencies prevent the agent from verifying the test suite.

If the agent stops or produces unexpected results, you can review the agent's session log for details. Navigate to the **Tasks** tab in your repository to find the session associated with the workflow generation attempt.
* **Unsupported coverage report conversion.** The agent won't reconstruct Cobertura XML from reports that only expose aggregated counters. For example, JaCoCo XML does not contain enough line and branch structure for a trustworthy Cobertura upload, so JVM projects that only produce JaCoCo XML may need manual setup instead.
## Pull request outcomes

> [!NOTE]
> The agent opens the pull request immediately with an initial planning commit that contains no code changes. The actual implementation commit typically arrives a few minutes later. If the pull request initially shows 0 changed files, wait a few minutes and refresh the page.

If the agent successfully opens a pull request, the pull request may be in one of these states:

* **Mergeable as-is:** The workflow completes successfully in CI and coverage uploads correctly.
* **Ready to iterate:** The workflow runs but requires adjustments (for example, missing secrets, self-hosted runner configuration, or path differences between local verification and CI).
* **Useful as a reference:** Maintainers may prefer to configure coverage themselves, using the agent's pull request as a starting point for the build and test commands it discovered.

## Further reading

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage#automatic-setup)
* [AUTOTITLE](/code-security/concepts/code-quality/code-quality)
