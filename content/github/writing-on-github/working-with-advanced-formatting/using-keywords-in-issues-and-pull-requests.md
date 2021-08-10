---
title: Using keywords in issues and pull requests
intro: Use keywords to link an issue and pull request or to mark an issue or pull request as a duplicate.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Issues
  - Pull requests
---

## Linking a pull request to an issue

To link a pull request to an issue to{% ifversion fpt or ghes or ghae %} show that a fix is in progress and to{% endif %} automatically close the issue when someone merges the pull request, type one of the following keywords followed by a reference to the issue. For example, `Closes #10` or `Fixes octo-org/octo-repo#100`.

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

For more information, see "[Linking a pull request to an issue](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)."

## Marking an issue or pull request as a duplicate

To mark an issue or pull request as a duplicate, type "Duplicate of" followed by the issue or pull request number it duplicates in the body of a new comment. For more information, see "[Marking issues or pull requests as a duplicate](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)."
