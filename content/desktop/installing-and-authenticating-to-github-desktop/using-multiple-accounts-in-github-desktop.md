---
title: Using multiple accounts in GitHub Desktop
shortTitle: Multiple accounts
intro: Sign in to more than one account on the same host, and choose which account {% data variables.product.prodname_desktop %} uses for each repository.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
category:
  - Set up GitHub Desktop
---

## About multiple accounts

You can sign in to {% data variables.product.prodname_desktop %} with more than one account on the same host. For example, you can use a personal account and a work account on {% data variables.product.prodname_dotcom_the_website %}, or several accounts on {% data variables.product.prodname_ghe_server %} or {% data variables.enterprise.data_residency_site %}. You don't need to sign out of one account to use another.

A repository in {% data variables.product.prodname_desktop %} can be assigned to one account on the repository's host. {% data variables.product.prodname_desktop %} uses the assigned account for {% data variables.product.github %} API requests and for HTTPS authentication when Git pushes, pulls, or fetches.

{% data variables.product.prodname_copilot_short %} features in {% data variables.product.prodname_desktop %}, such as generating commit messages, use the repository's account if it has access to {% data variables.product.prodname_copilot_short %}. Otherwise, they use another signed-in account that does.

If you used {% data variables.product.prodname_desktop %} before multiple accounts were supported, each of your existing repositories is assigned to the account you were signed in to on that host. If you only use one account, nothing changes.

> [!NOTE]
> The account assigned to a repository doesn't change the name and email address that Git uses as the author of your commits. For more information, see [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop).

## Adding another account

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}

1. In the "Settings" window, on the **Accounts** pane, click **Add {% data variables.product.prodname_dotcom_the_website %} account**. To sign in to {% data variables.product.prodname_ghe_server %} or {% data variables.enterprise.data_residency_site %}, click **Add {% data variables.product.prodname_enterprise %} account** instead.

   ![Screenshot of the "Accounts" pane in "Settings" on a Mac. Two {% data variables.product.prodname_dotcom_the_website %} accounts are listed. "Add {% data variables.product.prodname_dotcom_the_website %} account" is outlined in dark orange.](/assets/images/help/desktop/mac-accounts-multiple-accounts.png)

1. Follow the prompts to sign in. See [AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

   > [!TIP]
   > Your browser might ask which {% data variables.product.github %} account to use, even if you're already signed in. Choose the account you want to add, or sign in to a different account.

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}

1. In the "Options" window, on the **Accounts** pane, click **Add {% data variables.product.prodname_dotcom_the_website %} account**. To sign in to {% data variables.product.prodname_ghe_server %} or {% data variables.enterprise.data_residency_site %}, click **Add {% data variables.product.prodname_enterprise %} account** instead.

   ![Screenshot of the "Accounts" pane in "Options" on Windows. Two {% data variables.product.prodname_dotcom_the_website %} accounts are listed. "Add {% data variables.product.prodname_dotcom_the_website %} account" is outlined in dark orange.](/assets/images/help/desktop/windows-accounts-multiple-accounts.png)

1. Follow the prompts to sign in. For more information, see [AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

   > [!TIP]
   > Your browser might ask which {% data variables.product.github %} account to use, even if you're already signed in. Choose the account you want to add, or sign in to a different account.

{% endwindows %}

The "Accounts" pane lists your {% data variables.product.prodname_dotcom_the_website %} accounts under "{% data variables.product.prodname_dotcom_the_website %}". Your {% data variables.product.prodname_ghe_server %} and {% data variables.enterprise.data_residency_site %} accounts are listed under "{% data variables.product.prodname_enterprise %}", grouped by hostname.

## How {% data variables.product.prodname_desktop %} chooses an account for a repository

{% data variables.product.prodname_desktop %} assigns an account to a repository when you clone, add, or publish it.

* **Cloning from the "{% data variables.product.github %}" tab:** Choose an account from the **Account** dropdown menu at the top of the "Clone a Repository" window. This dropdown menu only appears if you're signed in to more than one account. The list shows the repositories that account can access. When you clone, the repository is assigned to that account. For more information, see [AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop).
* **Cloning from the "URL" tab, or adding a local repository:** {% data variables.product.prodname_desktop %} checks which of your accounts on the repository's host can access the repository.
  * If one account can access it, the repository is assigned to that account.
  * If more than one account can access it, {% data variables.product.prodname_desktop %} asks you to choose. Every account can access a public repository, so you're always asked to choose if you're signed in to more than one account on its host.
  * If none of your accounts can access it, the repository is added without an assigned account. If you're cloning a private repository over HTTPS, the clone fails.
* **Publishing a repository:** Choose an account from the **Account** dropdown menu in the "Publish Repository" window. If the repository's assigned account is signed in, that account is selected. For more information, see [AUTOTITLE](/desktop/adding-and-cloning-repositories/adding-an-existing-project-to-github-using-github-desktop).

### Choosing an account when {% data variables.product.prodname_desktop %} asks

If a repository doesn't have an assigned account, the "Repository account" window opens when {% data variables.product.prodname_desktop %} needs one. For example:

* Git needs HTTPS credentials to push or pull.
* {% data variables.product.prodname_desktop %} refreshes pull requests or creates a fork.

Background fetches never open this window. If you aren't signed in to any account on the repository's host, {% data variables.product.prodname_desktop %} asks you to sign in instead.

If the repository's assigned account is signed out, the "Repository account" window asks you to sign in to that account. Click **Sign in** to sign in again. If you're signed in to another account on the same host, you can click **Choose another account** to assign that account to the repository instead.

To choose an account for a repository that doesn't have one:

1. In the "Repository account" window, select the **Account** dropdown menu, then click the account you want to use for this repository. The list only shows accounts on the repository's host.

   If the account you want isn't listed, click **Cancel**, sign in to the account, then try again. For more information, see [Adding another account](#adding-another-account).

   {% mac %}

   ![Screenshot of the "Repository account" window on a Mac. It asks which account to use for Spoon-Knife on {% data variables.product.prodname_dotcom_the_website %}, with an "Account" dropdown.](/assets/images/help/desktop/mac-repository-account-dialog.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "Repository account" window on Windows. It asks which account to use for Spoon-Knife on {% data variables.product.prodname_dotcom_the_website %}, with an "Account" dropdown.](/assets/images/help/desktop/windows-repository-account-dialog.png)

   {% endwindows %}

1. Click **Use account**.

## Changing the account for a repository

You can change the account for any repository that has a remote on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_ghe_server %}, or {% data variables.enterprise.data_residency_site %}. You can only choose accounts that are signed in to the repository's host.

### Using repository settings

{% data reusables.desktop.open-repository-settings %}
1. In the "Repository Settings" window, on the **Remote** pane, select the **Account** dropdown menu, then click the account you want to use.

   To remove the repository's account, click **None (unassigned)**.

   {% mac %}

   ![Screenshot of the "Remote" pane in the "Repository Settings" window on a Mac. The "Account" dropdown is outlined in dark orange.](/assets/images/help/desktop/mac-repository-settings-account.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "Remote" pane in the "Repository settings" window on Windows. The "Account" dropdown is outlined in dark orange.](/assets/images/help/desktop/windows-repository-settings-account.png)

   {% endwindows %}

1. Click **Save**.

### Using the repository list

If a repository has a remote on a {% data variables.product.github %} host and there's more than one account to choose from, you can switch the repository's account from the repository list.

1. In the repository bar, click **Current Repository**.
1. Right-click the repository, select **Account**, then click the account you want to use.

   The current account has a checkmark. If the current account is signed out, it's listed as "@USERNAME (Signed out)".

   {% mac %}

   ![Screenshot of a repository's context menu in the repository list on a Mac. The "Account" submenu is open and shows two accounts.](/assets/images/help/desktop/mac-repository-list-account-submenu.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of a repository's context menu in the repository list on Windows. The "Account" submenu is open and shows two accounts.](/assets/images/help/desktop/windows-repository-list-account-submenu.png)

   {% endwindows %}

You can also open a repository's settings from the same context menu. Right-click the repository, then click **Repository Settings…**.

## Signing out of an account

When you sign out of an account that has repositories assigned to it, {% data variables.product.prodname_desktop %} asks whether to keep those assignments.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}

1. In the "Settings" window, on the **Accounts** pane, next to the account you want to sign out of, click **Sign Out**.
1. If repositories are assigned to the account, choose what happens to them in the "Sign out of @USERNAME?" window.
   * To keep the assignments, leave **Clear repository account assignments** deselected. When you sign in to the account again, {% data variables.product.prodname_desktop %} uses it for these repositories again.
   * To remove the assignments, select **Clear repository account assignments**. {% data variables.product.prodname_desktop %} asks you to choose an account the next time it needs credentials for these repositories.

   ![Screenshot of the "Sign out of @octocat?" window on a Mac, with a "Clear repository account assignments" checkbox.](/assets/images/help/desktop/mac-sign-out-account-dialog.png)

1. Click **Sign out**.

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}

1. In the "Options" window, on the **Accounts** pane, next to the account you want to sign out of, click **Sign out**.
1. If repositories are assigned to the account, choose what happens to them in the "Sign out of @USERNAME?" window.
   * To keep the assignments, leave **Clear repository account assignments** deselected. When you sign in to the account again, {% data variables.product.prodname_desktop %} uses it for these repositories again.
   * To remove the assignments, select **Clear repository account assignments**. {% data variables.product.prodname_desktop %} asks you to choose an account the next time it needs credentials for these repositories.

   ![Screenshot of the "Sign out of @octocat?" window on Windows, with a "Clear repository account assignments" checkbox.](/assets/images/help/desktop/windows-sign-out-account-dialog.png)

1. Click **Sign out**.

{% endwindows %}

If the account’s token is no longer valid and {% data variables.product.prodname_desktop %} removes the account, the repository assignments are kept.

## Further reading

* [AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/about-connections-to-github-in-github-desktop)
