---
title: Using GitHub Copilot to reduce technical debt
shortTitle: Reduce technical debt
intro: 'Use {% data variables.product.prodname_copilot_short %} to automate refactoring and maintenance tasks, freeing your team to focus on feature development.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: tutorials
category:
  - Burn down tech debt
  - Author and optimize with Copilot
---

## Introduction

Technical debt accumulates in every codebase: duplicate code, missing tests, outdated dependencies, and inconsistent patterns. These issues can accumulate because feature development is typically given a higher priority. This tutorial explains how you can use {% data variables.product.prodname_copilot %} to tackle technical debt systematically, without sacrificing feature velocity.

### Who this tutorial is for

This tutorial is designed to help engineering teams and technical leads reduce technical debt while maintaining the pace at which new features are delivered. You should have:

* A {% data variables.product.prodname_copilot_short %} subscription with access to {% data variables.copilot.copilot_coding_agent %}
* Admin access to at least one repository
* Familiarity with your team's development workflow

### What you'll accomplish

By the end of this tutorial, you'll have learned about:

* Using {% data variables.product.prodname_copilot_short %} to implement in-the-moment fixes
* Leveraging {% data variables.copilot.copilot_coding_agent %} for large-scale cleanup tasks
* Creating custom instructions to align {% data variables.product.prodname_copilot_short %} with your team's standards
* Measuring the impact of {% data variables.product.prodname_copilot_short %} on your technical debt

## Understanding the technical debt problem

Before starting to reduce the technical debt in a codebase, you should take some time to identify the types of technical debt your team faces most often.

Common types of technical debt include:

* **Code duplication** - The same logic implemented in multiple places
* **Missing tests** - Features without adequate test coverage
* **Outdated dependencies** - Libraries several versions behind current releases
* **Inconsistent patterns** - Different approaches to the same problem across your codebase
* **Legacy code** - Old code that works but doesn't follow current standards

The cost of technical debt compounds over time:

* Senior engineers spend time on routine updates instead of architecture design
* Code reviews become longer as reviewers debate inconsistent patterns
* New developers take longer to onboard due to confusing code organization
* Deployment risk increases as outdated dependencies accumulate vulnerabilities

## Using {% data variables.product.prodname_copilot_short %} in your IDE for in-the-moment fixes

The best way to avoid technical debt accumulating in your codebase is to prevent it getting into the codebase in the first place.

When you encounter technical debt during development, fix it immediately using {% data variables.product.prodname_copilot_short %} in your IDE.

### Quick refactoring workflow

1. While working in your IDE, highlight code that needs improvement.
1. Open {% data variables.copilot.copilot_chat_short %} in the IDE.
1. Ask {% data variables.product.prodname_copilot_short %} to refactor the code. For example:

   * `Extract this into a reusable helper and add error handling`
   * `Standardize this logging format to match our pattern`
   * `Add null checks for all optional parameters`
   * `Replace this deprecated API call with the current version` <!-- markdownlint-disable-line GHD046 -->

1. Review the suggested changes.
1. Accept the changes or ask {% data variables.product.prodname_copilot_short %} to modify its approach.
1. Run your tests to verify the changes work correctly.

### Example: Standardizing error handling

If you find inconsistent error handling—for example:

```javascript id="err-handling"
// Highlight this code
try {
  await fetchData();
} catch (e) {
  console.log(e);
}
```

Ask {% data variables.product.prodname_copilot_short %} to improve the code—for example:

```copilot prompt copy ref="err-handling"
Refactor this to use structured logging and proper error handling
```

{% data variables.product.prodname_copilot_short %} might suggest:

```javascript
try {
  await fetchData();
} catch (error) {
  logger.error('Failed to fetch data', {
    error: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
  throw error;
}
```

> [!NOTE] This response is an example. {% data variables.copilot.copilot_chat_short %} responses are non-deterministic, so you may get a different response if you run the same prompt against the same code.

By adopting the in-the-moment fix approach, you help to ensure that substandard code does not get added to your codebase, and you avoid the creation of a backlog issue that may never be addressed.

For more details on using {% data variables.product.prodname_copilot_short %} in your IDE, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

## Using {% data variables.copilot.copilot_coding_agent %} for large-scale refactoring

Some refactoring tasks are just too big to complete while everyone on the team is busy developing new features. In this situation you can use {% data variables.copilot.copilot_coding_agent %} to handle these tasks autonomously. Human effort will still be required—at a minimum for reviewing the changes {% data variables.copilot.copilot_coding_agent %} proposes—but getting {% data variables.product.prodname_copilot_short %} to do the bulk of the work can allow you to carry out large-scale refactoring with much less impact on your team's productivity.

### When to use {% data variables.copilot.copilot_coding_agent %}

Use {% data variables.copilot.copilot_coding_agent %} for tasks that:

* Touch many files across your codebase
* Require systematic changes (like removing old feature flags)
* Need careful testing but are straightforward to implement
* Would interrupt feature development if done manually

Examples include:

* Framework upgrades that affect 50+ files
* Removing deprecated feature flags <!-- markdownlint-disable-line GHD046 -->
* Migrating to strict TypeScript
* Updating dependency versions
* Standardizing import patterns

### Workflow for {% data variables.copilot.copilot_coding_agent %}

1. Create a {% data variables.product.prodname_dotcom %} issue describing the refactoring task.

   Be specific about what needs to change. For example:

   ```markdown
   Remove all feature flags marked for cleanup in Q2.

   These flags are:
   - `enable_new_dashboard`
   - `beta_export_feature`
   - `experimental_search`

   All three flags are enabled by default in production.

   Remove the flag checks and keep the "enabled" code path.
   ```

1. Assign the issue to the **Copilot** user.
1. {% data variables.copilot.copilot_coding_agent %} will:

   * Set up a development environment
   * Open a draft pull request
   * Make the required changes to the code
   * Run your tests
   * Finalize the pull request for review
   * Request your review of the pull request

1. Review the pull request just as you would a pull request raised by a human.
1. Leave comments if changes are needed—{% data variables.copilot.copilot_coding_agent %} will update the pull request based on your feedback.
1. Iterate in this way until the work is completed correctly.
1. Approve and merge the pull request.

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr#assigning-an-issue-to-copilot) and [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

### Safety guardrails

{% data variables.copilot.copilot_coding_agent %} operates with built-in safety measures:

* It can only push to its own `copilot/*` branches
* It cannot merge pull requests—requires your approval
* All commits are logged and auditable
* Your existing branch protections remain active
* CI/CD checks run before any code is merged

## Creating custom instructions for your team

Custom instructions help {% data variables.product.prodname_copilot_short %} understand your team's coding standards and patterns. This ensures suggestions match your expectations from the start.

### Setting up custom instructions

1. In your repository, create a file named `.github/copilot-instructions.md`.
1. Add your team's coding standards in clear, straightforward statements—for example, using bulleted lists.
1. Commit the file to your repository.

### Example custom instructions

Here's an example of effective custom instructions:

```markdown
## Our Standards

- Use structured logging, not console.log
- Sanitize user input before database queries
- Check for null/undefined on all optional parameters
- Keep functions under 50 lines (extract helpers if needed)
- Every public function needs a test
- Flag any loops that might trigger N+1 queries

## Error Handling

- Always use try-catch blocks for async operations
- Log errors with context (user ID, request ID, timestamp)
- Never swallow errors silently
- Return appropriate HTTP status codes

## Testing Requirements

- Unit tests for all business logic
- Integration tests for API endpoints
- Mock external services in tests
- Test both success and failure paths
```

For detailed guidance on writing custom instructions, see [AUTOTITLE](/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot).

### Benefits of custom instructions

With custom instructions in place:

* {% data variables.product.prodname_copilot_short %} suggests code following your patterns
* Code reviews become faster, with fewer discussions about style changes
* New team members learn your standards through {% data variables.product.prodname_copilot_short %} suggestions
* Consistency improves across your codebase

## Running a pilot program

Start small to validate {% data variables.product.prodname_copilot_short %}'s impact on your technical debt before rolling it out widely.

### Week 1: Set up and establish baselines

1. Ensure all pilot participants have {% data variables.product.prodname_copilot_short %} access with {% data variables.copilot.copilot_coding_agent %} enabled.
1. Count the technical debt items in your backlog:

   * Number of "tech debt", "chore", or similar labeled issues
   * Number of outdated dependencies
   * Number of files failing linter checks

1. Track current metrics:

   * Average time from pull request creation to merge for refactoring PRs
   * Average number of review rounds per refactoring PR

1. Create your first `.github/copilot-instructions.md` file with 3–5 of your most important standards.

### Weeks 2–4: Run the pilot

1. Select 5–10 repositories for your pilot.
1. Choose 1–2 specific problems to address. For example:

   * Code duplication in a particular area
   * Missing tests on frequently changed files
   * Outdated dependencies

1. Use {% data variables.product.prodname_copilot_short %} in your IDE for quick fixes as you encounter issues.
1. Assign larger cleanup tasks to {% data variables.copilot.copilot_coding_agent %}.
1. Review all {% data variables.product.prodname_copilot_short %}-generated PRs carefully.
1. Provide feedback on suggestions to help {% data variables.product.prodname_copilot_short %} learn your preferences.

### Week 5: Evaluate results

After the pilot, measure your results:

* How much faster are refactoring pull requests getting merged?
* How many review rounds do they require now?
* Which types of code change suggestions, made by {% data variables.copilot.copilot_coding_agent %} in pull requests, did developers accept most often?
* Which suggestions needed the most revision?
* Are your technical debt metrics improving?

  * Linter warnings decreasing?
  * Test coverage increasing?
  * Dependency versions more current?

Update your custom instructions based on what you learned about which guidance helped {% data variables.product.prodname_copilot_short %} most.

## Measuring success

Track specific metrics to understand {% data variables.product.prodname_copilot_short %}'s impact on your technical debt.

### Velocity metrics

Monitor how {% data variables.product.prodname_copilot_short %} affects development speed:

* Time to close technical debt issues (target: 30–50% reduction)
* Number of technical debt pull requests merged per week (target: 2–3x increase)
* Average number of review cycles per refactoring pull request (assess whether this increased or decreased)

### Quality metrics

Ensure quality improves alongside velocity:

* Linter warning count (this should trend downward)
* Test coverage percentage (this should trend upward)
* Number of production incidents related to refactored code (assess whether this changed)

### Engineer satisfaction

Survey your team regularly:

* Are engineers spending less time on routine maintenance?
* Are code reviews focusing more on architecture and less on style?
* Is onboarding faster for new team members?

## Troubleshooting

### {% data variables.product.prodname_copilot_short %} suggests incorrect changes

If {% data variables.product.prodname_copilot_short %} consistently suggests code that doesn't match your needs:

* Review your custom instructions—they may be too vague or contradictory
* Provide more specific context in your prompts
* Add examples of good code to your custom instructions
* Leave detailed feedback in pull request reviews to allow {% data variables.copilot.copilot_coding_agent %} to fix the problems

### Pull requests are too large to review

If {% data variables.copilot.copilot_coding_agent %} creates pull requests that are difficult to review:

* Break large tasks into smaller, focused issues
* Ask {% data variables.copilot.copilot_coding_agent %} to handle one file or directory at a time
* Use more specific issue descriptions

### Changes break tests

If refactoring introduces test failures:

* Ensure your test suite runs reliably before using {% data variables.copilot.copilot_coding_agent %}
* Review {% data variables.product.prodname_copilot_short %} changes carefully before merging
* Ask {% data variables.product.prodname_copilot_short %} to update tests along with the code changes

### Team adoption is slow

If your team isn't using {% data variables.product.prodname_copilot_short %} for technical debt:

* Share success stories from early adopters
* Demonstrate time savings in team meetings
* Start with the most annoying technical debt items
* Make creating custom instructions a team activity

## Conclusion

In this tutorial, you learned how to use {% data variables.product.prodname_copilot_short %} to systematically reduce technical debt. You now know how to:

* Fix technical debt immediately using {% data variables.product.prodname_copilot_short %} in your IDE
* Assign large refactoring tasks to {% data variables.copilot.copilot_coding_agent %}
* Create custom instructions that align {% data variables.product.prodname_copilot_short %} with your team's standards
* Run a pilot program to validate the approach
* Measure {% data variables.product.prodname_copilot_short %}'s impact on technical debt

By automating routine refactoring and maintenance tasks, {% data variables.product.prodname_copilot_short %} frees you to focus on architecture, feature development, and other high-value work.

### Quick survey

{% note %}

After reading this tutorial, do you feel confident you can use {% data variables.product.prodname_copilot_short %} to reduce the technical debt in a codebase?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Next steps

* **Expand your pilot**: Roll out to more repositories based on your pilot results.
* **Automate dependency updates**: Create recurring issues for {% data variables.copilot.copilot_coding_agent %} to handle dependency updates.
* **Build a refactoring queue**: Label issues in your backlog as good for {% data variables.product.prodname_copilot_short %} then regularly assign a batch of these to {% data variables.product.prodname_copilot_short %} to work on.
* **Share best practices**: Document successful prompts and custom instructions for your team.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent)
* [AUTOTITLE](/copilot/tutorials/refactoring-code-with-github-copilot)
* [How to use GitHub Copilot in your IDE: Tips, tricks, and best practices](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/) in the {% data variables.product.company_short %} blog
* [5 ways to integrate GitHub Copilot coding agent into your workflow](https://github.blog/ai-and-ml/github-copilot/5-ways-to-integrate-github-copilot-coding-agent-into-your-workflow/) in the {% data variables.product.company_short %} blog
