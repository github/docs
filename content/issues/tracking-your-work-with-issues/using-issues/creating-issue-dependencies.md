---
title: Creating issue dependencies
intro: 'Learn how to create issue dependencies so that you can see which issues are blocked by, or blocking, other work.'
versions:
  fpt: '*' 
  ghec: '*' 
type: overview
topics:
  - Project management
permissions: 'People with at least triage permissions for a repository can create issue dependencies.'
product: 'Issue dependencies are available for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %} plans.'
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
