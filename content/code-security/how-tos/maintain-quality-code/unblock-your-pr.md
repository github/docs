---
title: Resolving a block on your pull request
shortTitle: Unblock your PR
intro: Identify and resolve a code quality or coverage threshold block on your pull request so you can merge your changes.
versions:
  feature: code-quality
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
redirect_from:
  - /code-security/code-quality/how-tos/unblock-your-pr
category:
  - Improve code quality
---

## Understanding why your pull request is blocked

Repository administrators and organization owners can set quality gates using {% data variables.product.prodname_code_quality %}. When you open a pull request, checks automatically run to evaluate your changes against these standards.

There are two types of blocks:

* **Code quality findings**: your changes introduce issues that fall below the required quality threshold.
* **Coverage threshold**: your changes cause code coverage to fall below a required minimum, or cause coverage to drop by more than a permitted amount relative to the default branch.

These checks help maintain a healthy, maintainable codebase and prevent technical debt from accumulating.

## Resolving a code quality findings block

If your pull request introduces code that falls below the required quality threshold, you'll see a merge block banner at the bottom of the pull request in the "Checks" section: "Merging is blocked: Code quality findings were detected."

![Screenshot of the merge block banner in the Checks section of a pull request.](/assets/images/help/code-quality/code-quality-merge-block.png)

The quality gate set by your repository administrator or organization owner defines the **minimum severity level** that will block merging. All findings at that severity level or higher must be fixed or dismissed before you can merge. If the merge block banner does not specify a severity level, your repository requires **all findings** to be addressed.

To unblock your pull request, you need to fix or dismiss the findings that meet or exceed the blocking severity:

1. Review the comments left by the `{% data variables.code-quality.pr_commenter %}` on your pull request. Each comment is labeled by severity (**Error**, **Warning**, **Note**).
1. Fix or dismiss the relevant findings. For detailed instructions, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-pr-findings).
1. Verify the merge block banner is no longer present in the "Checks" section of your pull request.

## Resolving a coverage threshold block

If your pull request is blocked by a coverage threshold rule, you'll see a merge block banner in the "Checks" section with a message describing which threshold was not met. For example:

* "Coverage 22.0% is below minimum 50.0%": your pull request branch coverage is below the minimum coverage percentage configured in the ruleset.
* "Coverage decreased by 2.5%, maximum allowed drop is 1.0%": your changes caused coverage to drop by more than the permitted amount relative to the default branch.

To unblock your pull request, you need to add or modify tests so that more of the codebase is executed:

1. Review the coverage summary comment on your pull request to identify which files or areas lack coverage.
1. Add or update tests to increase execution coverage. {% data variables.product.prodname_copilot_short %} can help you write and update your tests. See [AUTOTITLE](/copilot/tutorials/copilot-cookbook/testing-code).
1. Push your changes. The coverage check will re-run automatically.

## Next steps

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-backlog-findings)
