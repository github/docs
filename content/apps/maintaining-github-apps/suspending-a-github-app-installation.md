---
title: Suspending a GitHub App installation
intro: 'You can temporarily block your {% data variables.product.prodname_github_app %} from accessing resources owned by the accounts that installed the {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
  - /developers/apps/managing-github-apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Suspend an installation
---

{% note %}

**Note**: If you want to suspend a {% data variables.product.prodname_github_app %} that you use but do not own, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access)" instead.

{% endnote %}

When a {% data variables.product.prodname_github_app %} is suspended for an installation, the {% data variables.product.prodname_github_app %} cannot access resources owned by that installation account. For example, you might want to suspend your {% data variables.product.prodname_github_app %} if you are worried that your app's credentials were leaked.

The owner of a {% data variables.product.prodname_github_app %} can suspend the {% data variables.product.prodname_github_app %} for a specific installation. If an organization has designated any app managers for an app owned by the organization, the app managers can also suspend the {% data variables.product.prodname_github_app %} for a specific installation. {% data variables.product.prodname_github_app %} owners and managers can only use the API to suspend their app, and they must suspend the app individually for each installation. For more information, see "[AUTOTITLE](/rest/apps/apps#suspend-an-app-installation)."

Users who installed a {% data variables.product.prodname_github_app %} on their personal account or organization can also suspend a {% data variables.product.prodname_github_app %} from accessing resources owned by their account. People who have installed a {% data variables.product.prodname_github_app %} can only use the {% data variables.product.company_short %} web interface to suspend their app. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps)."

A {% data variables.product.prodname_github_app %} must be unsuspended in the same way it was suspended. If an owner or manager of a {% data variables.product.prodname_github_app %} suspended the app, they can also unsuspend it, but the owner of an account where the app is installed cannot unsuspend it. Similarly, if the owner of an account where a {% data variables.product.prodname_github_app %} is installed suspended the app, they can also unsuspend it, but an owner or manager of the app cannot unsuspend it.
