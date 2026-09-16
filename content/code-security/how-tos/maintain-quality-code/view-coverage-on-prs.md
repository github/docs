---
title: Viewing code coverage on pull requests
shortTitle: View coverage on PRs
allowTitleToDifferFromFilename: true
intro: 'Review the coverage summary posted on your pull requests to identify files with low or declining code coverage.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
category:
  - Improve code quality
---

## Prerequisites

* Code coverage is configured for your repository. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Reading the coverage summary comment

After code coverage is configured for your repository, the `{% data variables.code-quality.pr_commenter %}` posts a coverage summary comment on each pull request. The comment includes:

* **Branch-vs-default-branch comparison:** The aggregate coverage percentage for the pull request branch and the default branch (for example, "65% on pull request branch, 44% on default branch").
* **Most impacted files:** The 10 files with the largest coverage changes between the default branch and the pull request branch. This list may include files not directly modified in the pull request. New or modified files are ranked above deleted files. Within each group, files are sorted by the absolute change in line coverage weighted by the number of lines in the file, with coverage magnitude and then filename as tiebreakers.
* **Per-file breakdown:** An expandable section listing each file with its coverage percentage and delta value. A positive delta means the file gained coverage on this branch. A negative delta indicates coverage decreased, which may signal untested code paths introduced by the change.

Use the coverage summary to identify files with low or declining coverage and prioritize review attention on untested changes.

If you need to extend coverage of your test suite, {% data variables.product.prodname_copilot_short %} can help you write and update your tests. See [AUTOTITLE](/copilot/tutorials/copilot-cookbook/testing-code).

## Next steps

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/unblock-your-pr)
