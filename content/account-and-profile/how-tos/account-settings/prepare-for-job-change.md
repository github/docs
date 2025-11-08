---
title: Prepare for job change
intro: If you use your {% data variables.product.github %} account for both personal and work purposes, there are steps to follow when you leave your company or organization.
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/best-practices-for-leaving-your-company
  - /account-and-profile/reference/best-practices-for-leaving-your-company
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/prepare-for-job-change
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Prepare for job change
contentType: how-tos
---

## Update your personal account information

1. Unverify your company email address by deleting it in your Email settings.
  
   After removal, you can re-add this email without verifying to keep any associated commits linked to your account.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

1. Change your primary email address from your company email to your personal email.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

1. Verify your new primary email address.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address).

1. Update your {% data variables.product.github %} username if it contains references to your company or organization.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username).

1. Review and update your two-factor authentication (2FA) methods to ensure they aren't linked to company resources:

   * If you use a TOTP app on a company phone, transfer it to your personal device.
   * If you've registered company-owned security keys, remove them and add personal ones instead.
   * If you're using {% data variables.product.prodname_mobile %} on a company device, install it on your personal device.
   * Download fresh recovery codes and store them in a personal secure location.

   For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Leave organization memberships

> [!NOTE] Unless you're using a {% data variables.enterprise.prodname_managed_user %}, you'll still be able to access your personal account after leaving an organization.

1. If you're the organization owner, transfer ownership to another person before removing yourself.
  
   For more information, see [AUTOTITLE](/organizations/managing-organization-settings/transferring-organization-ownership).

1. Remove yourself from the organization.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization).

## Clean up professional repository associations

1. Remove yourself as a collaborator from repositories owned by others.
  
   For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/removing-yourself-from-a-collaborators-repository).

1. Stop watching work-related repositories to avoid unnecessary notifications.
  
   To manage your watched repositories, visit https://github.com/watching.

1. Transfer repositories that you own that others may need to continue working on.
  
   For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/transferring-a-repository).

1. Delete any work-related forks that belong to you.
  
   Deleting a fork doesn't delete the upstream repository.
  
   For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/deleting-a-repository).

1. Delete local copies of your work repositories from your computer by running the following command:

   ```shell
   rm -rf --one-file-system -- WORK_DIRECTORY
   ```
  
   Replace `WORK_DIRECTORY` with the path to your work repository.
