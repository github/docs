---
title: Best practices for leaving your company
intro: 'If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
---

Before you leave your company, make sure you update the following information in your personal account:

- Unverify your company email address by [deleting it in your Email settings](/articles/changing-your-primary-email-address). You can then re-add it without verifying to keep any associated commits linked to your account.
- [Change your primary email address](/articles/changing-your-primary-email-address) from your company email to your personal email.
- [Verify your new primary email address](/articles/verifying-your-email-address).
- [Change your GitHub username](/articles/changing-your-github-username) to remove any references to your company or organization, if necessary.
- If you've enabled two-factor (2FA) authentication for your personl account, make sure that you (not your company) control the 2FA authentication method you have configured. For more information, see "[Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

## Leaving organizations

If you've been working with repositories that belong to an organization, you'll want to [remove yourself as a member of the organization](/articles/removing-yourself-from-an-organization). Note that if you are the organization owner, you should first [transfer ownership of the organization](/articles/transferring-organization-ownership) to another person.

Unless you're using a {% data variables.product.prodname_managed_user %}, you'll still be able to access your personal account, even after leaving the organization. For more information about {% data variables.product.prodname_emus %}, see "[About {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

## Removing professional associations with personal repositories

If you've been collaborating professionally with another person on repositories that belong to their personal account, you'll want to [remove yourself as a collaborator](/articles/removing-yourself-from-a-collaborator-s-repository) from those repositories.

- [Stop watching repositories](https://github.com/watching) related to your work. You won't want those notifications anymore!
- [Transfer repositories you own](/articles/how-to-transfer-a-repository) that others may need to continue working on after you leave.
- [Delete forks that belong to you](/articles/deleting-a-repository) that are related to the work you were doing. Don't worry, deleting a fork doesn't delete the upstream repository.
- Delete local copies of your forks that may exist on your computer:

```shell
$ rm -rf <em>work_directory</em>
```
