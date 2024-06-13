---
title: Reviewing and modifying installed GitHub Apps
shortTitle: Review installations
intro: "You can review the permissions and change the repository access for {% data variables.product.prodname_github_apps %} that you have installed. You can also temporarily or permanently prevent a {% data variables.product.prodname_github_app %} from accessing resources owned by your account or organization."
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About installed {% data variables.product.prodname_github_apps %}

{% data variables.product.company_short %} users can install {% data variables.product.prodname_github_apps %} on their personal account or organizations. When you install a {% data variables.product.prodname_github_app %}, you grant the app the organization-level and repository-level permissions that it requested. You also specify which repositories the {% data variables.product.prodname_github_app %} can access.

You should periodically review the {% data variables.product.prodname_github_apps %} that you have installed. You can review the permissions that you granted and change the repositories that the {% data variables.product.prodname_github_app %} can access. If you no longer use an app, consider suspending or deleting the {% data variables.product.prodname_github_app %} to block its access to resources owned by the account where it is installed.

In addition to reviewing {% data variables.product.prodname_github_apps %} that you have installed, you can review {% data variables.product.prodname_github_apps %} that you have authorized to act on your behalf. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)."

## Navigating to the {% data variables.product.prodname_github_app %} you want to review or modify

* For a {% data variables.product.prodname_github_app %} installed on an organization:
   1. In the top right corner of {% data variables.product.prodname_dotcom %}, click your profile photo, then click **Your organizations**.
   1. Next to your organization name, click **Settings**.
   1. In the side bar, under "Third-party Access," click **GitHub Apps**. A list of the {% data variables.product.prodname_github_apps %} installed on your organization will be displayed.
   1. Next to the {% data variables.product.prodname_github_app %} you want to review or modify, click **Configure**.

* For a {% data variables.product.prodname_github_app %} installed on your personal account:
   1. In the upper-right corner of any page, click your profile photo, then click **Settings**.
   1. Under "Integrations," click **Applications**.
   1. Click **Installed GitHub Apps**. A list of the {% data variables.product.prodname_github_apps %} installed on your personal account will be displayed.
   1. Next to the {% data variables.product.prodname_github_app %} you want to review or modify, click **Configure**.

* For a repository where a {% data variables.product.prodname_github_app %} was granted access:

   {% note %}

   **Note**: In the following steps, you will be taken to the account settings for the organization or personal account where the {% data variables.product.prodname_github_app %} is installed. The settings will affect all repositories where the app is installed under that account, not just the repository where you navigated from.

   {% endnote %}

   1. Navigate to the main page of the organization or repository.
   1. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   1. Under "Integrations," click **GitHub Apps**. A list of the {% data variables.product.prodname_github_apps %} that have been granted access to your repository will be displayed.

   1. Next to the {% data variables.product.prodname_github_app %} you want to review or modify, click **Configure**.

## Reviewing permissions

1. Navigate to the {% data variables.product.prodname_github_app %} you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. Under "Permissions," review the permissions that the {% data variables.product.prodname_github_app %} has. For more information about what different permissions enable a {% data variables.product.prodname_github_app %} to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

## Modifying repository access

1. Navigate to the {% data variables.product.prodname_github_app %} you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. Under "Repository access," select **All repositories** or **Only select repositories**.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the {% data variables.product.prodname_github_app %} to access.

   If the {% data variables.product.prodname_github_app %} creates any repositories later, the app will automatically be granted access to those repositories as well.
1. Click **Save**.

## Blocking access

1. Navigate to the {% data variables.product.prodname_github_app %} you want to modify. For more information, see "[Navigating to the GitHub App you want to review or modify](#navigating-to-the-github-app-you-want-to-review-or-modify)."
1. To keep the {% data variables.product.prodname_github_app %} installed for future use but temporarily block it from accessing resources owned by your account, click **Suspend**.

   When you suspend a {% data variables.product.prodname_github_app %}, your authorization of the app (if the app is installed on your personal account) or the authorization of the app by members of your organization (if the app is installed on an organization) will not be affected. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

   If the {% data variables.product.prodname_github_app %} was previously suspended, you can unsuspend the app by clicking **Unsuspend**. If the {% data variables.product.prodname_github_app %} was suspended by the {% data variables.product.prodname_github_app %} owner, then you cannot unsuspend the app.
1. To uninstall a {% data variables.product.prodname_github_app %} and block it from accessing resources owned by your account, click **Uninstall**.

   When you delete a {% data variables.product.prodname_github_app %}, your authorization of the app (if the app is installed on your personal account) or the authorization of the app by members of your organization (if the app is installed on an organization) will be revoked. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Further reading

* "[AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)"
* "[AUTOTITLE](/apps/using-github-apps/internal-github-apps)"
