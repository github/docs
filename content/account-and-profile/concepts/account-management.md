---
title: Personal account management
intro: Learn how to manage your personal account on {% data variables.location.product_location %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Account management
contentType: concepts
redirect_from:
  - /account-and-profile/concepts/personal-account-management
---

{% ifversion ghes < 3.21 %}
## About converting your personal account

Converting a personal account into an organization allows you move to a shared account where a large number of people can collaborate across many projects at once. Converting your account:
* Preserves the repositories as they are without the need to transfer them to another account manually
* Automatically invites collaborators to teams with permissions equivalent to what they had before

When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as outside collaborators. You can then invite outside collaborators to become members of your new organization if you wish. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

To convert your personal account into an organization, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/converting-a-user-into-an-organization).

{% else %}

## About moving your work to an organization

You can move repositories and projects from your personal account to an organization while keeping your personal account intact. This enables team collaboration with granular permissions across your existing work.

For more information, see [AUTOTITLE](/account-and-profile/how-tos/account-management/moving-your-work-to-an-organization).
{% endif %}

## About deletion of your personal account

Deleting your personal account removes all repositories, forks of private repositories, wikis, issues, pull requests, and pages owned by your account. {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. The email address associated with the account becomes available for use with a different account. After 90 days, the account name also becomes available to anyone else to use on a new account.{% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. If there are other owners in the organization, you must remove yourself from the organization before you can delete your personal account.

For more information, see the following articles.

* [AUTOTITLE](/organizations/managing-organization-settings/transferring-organization-ownership)
* [AUTOTITLE](/organizations/managing-organization-settings/deleting-an-organization-account)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)
* [AUTOTITLE](/account-and-profile/reference/personal-account-reference#account-deletion)

To delete your personal account, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/deleting-your-personal-account).

## About unlinking your email address

Since an email address can only be associated with a single {% data variables.product.prodname_dotcom %} account, when you've lost your 2FA credentials and are unable to recover access, unlinking your email address from the locked account allows you to link that email address to a new or existing account. Additionally, linking a previously used commit email address to a new account will connect your commit history to that account. Unless you have chosen to keep your email address private, your account's commit email address is the same as your account's primary email address. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

> [!NOTE]
> The {% data variables.product.github %}-provided `noreply` email address cannot be unlinked from an account. Commits authored with a `noreply` address cannot be reconnected to a different account.

Be aware that nothing else associated with your 2FA locked account, including your repositories, permissions, and profile, will transfer to your new account.

Unlinking email addresses is only available for accounts with 2FA enabled. If you do not have 2FA enabled, you can sign in and remove your email address from your account settings.

Educational benefits cannot be transferred after an email address is unlinked and associated with a different account. To keep these benefits, you must continue using the original account that was used to apply.

To unlink an email address, see [AUTOTITLE](/free-pro-team@latest/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/unlinking-your-email-address-from-a-locked-account).

## About management of multiple accounts

In some cases, you may need to use multiple accounts on {% data variables.product.github %}. For example, you may have a personal account for open source contributions, and your employer may also create and manage a user account for you within an enterprise.

To learn how to manage multiple accounts, see [AUTOTITLE](/free-pro-team@latest/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).

You cannot use a {% data variables.enterprise.prodname_managed_user %} to contribute to public projects on {% data variables.location.product_location %}, so you must contribute to those resources using your personal account. For more information, see [About {% data variables.product.prodname_emus %}]({% ifversion fpt or ghes %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}.{% endif %}

If you need to use multiple accounts, you can stay signed in to your accounts and switch between them. For example, switching between a personal account and a service account. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/switching-between-accounts).

If you want to use one workstation to contribute from both accounts, you can simplify contribution with Git by using a mixture of protocols to access repository data, or by using credentials on a per-repository basis.

> [!WARNING]
> Be mindful when you use one workstation to contribute to two separate accounts. Management of two or more accounts can increase the chance of mistakenly leaking internal code to the public.

If you aren't required to use a {% data variables.enterprise.prodname_managed_user %}, {% data variables.product.company_short %} recommends that you use one personal account for all your work on {% data variables.location.product_location %}. With a single personal account, you can contribute to a combination of personal, open source, or professional projects using one identity. Other people can invite the account to contribute to both individual repositories and repositories owned by an organization, and the account can be a member of multiple organizations or enterprises.

If you contribute with two accounts from one workstation, you can access repositories by using a different protocol and credentials for each account.

Git can use either the HTTPS or SSH protocol to access and update data in repositories on {% data variables.product.github %}. The protocol you use to clone a repository determines which credentials your workstation will use to authenticate when you access the repository. With this approach to account management, you store the credentials for one account to use for HTTPS connections and upload an SSH key to the other account to use for SSH connections.

You can find both the HTTPS or an SSH URLs for cloning a repository on the repository's page. For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository).

For more information about the use of SSH to access repositories, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh).
