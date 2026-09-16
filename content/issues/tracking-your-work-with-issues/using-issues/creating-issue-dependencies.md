---
title: Creating issue dependencies
intro: Learn how to create issue dependencies so that you can see which issues are blocked by, or blocking, other work.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with at least triage permissions for a repository can create issue dependencies.
product: Issue dependencies are available for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %} plans.
contentType: concepts
category:
  - Create and work with issues
---

Issue dependencies let you define issues that are blocked by, or blocking, other work.

## Marking an issue as blocked by, or blocking, another issue

1. Navigate to the issue that you want to create a dependency for.
1. In the right sidebar, click **Relationships**.
1. From the dropdown, select a dependency option:
   * To indicate that your issue depends on another issue being completed, select **Mark as blocked by**.
   * To indicate that your issue is preventing another issue from being completed, select **Mark as blocking**.
1. In the dialog box that opens, search for and select all the issues that are blocked by, or blocking, your issue.

Blocked issues are marked with a "Blocked" icon on your project boards or repository's Issues page, so you can easily identify bottlenecks.

## Removing a blocking relationship between two issues

1. Navigate to the issue that you want to remove a dependency from.
1. In the right sidebar, click **Relationships**.
1. From the dropdown, select a dependency option:
   * To indicate that your issue no longer depends on another issue being completed, select **Change blocked by**.
   * To indicate that your issue is no longer preventing another issue from being completed, select **Change blocking**.
1. In the dialog box that opens, deselect the issues that are no longer blocked by, or blocking, your issue.

## Managing issue dependencies with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see [AUTOTITLE](/github-cli/github-cli/about-github-cli).

To create a new issue with dependencies, use the `--blocked-by` and `--blocking` flags on `gh issue create`. Each flag accepts a comma-separated list of issue numbers or URLs.

```shell
gh issue create --title "TITLE" --body "ISSUE-DESCRIPTION" --blocked-by BLOCKED-BY-ISSUE-NUMBER --blocking BLOCKING-ISSUE-NUMBER
```

To add or remove dependencies on an existing issue, use the corresponding flags on `gh issue edit` with the issue number or URL.

```shell
gh issue edit ISSUE-NUMBER --add-blocked-by BLOCKED-BY-ISSUE-NUMBER --add-blocking BLOCKING-ISSUE-NUMBER
gh issue edit ISSUE-NUMBER --remove-blocked-by BLOCKED-BY-ISSUE-NUMBER --remove-blocking BLOCKING-ISSUE-NUMBER
```

To see an issue's dependencies, use `gh issue view`. The output includes "Blocked by" and "Blocking" rows when relationships are set.

```text
My new issue octo-org/octo-repo#123
Open • monalisa opened 3 days ago • 0 comments
Blocked by: octo-org/octo-repo#200 Database schema migration
Blocking: octo-org/octo-repo#300 Release v2.0


  Here are more details.


View this issue on GitHub: https://github.com/octo-org/octo-repo/issues/123
```

You can also access dependencies programmatically with the `--json` flag using the `blockedBy` and `blocking` fields.

```shell
gh issue view ISSUE-NUMBER --json blockedBy,blocking
```
