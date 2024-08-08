---
title: Deleting users from your instance
intro: "You can delete a user's account to permanently remove their data from {% data variables.location.product_location %}."
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Delete a user
permissions: Site administrators
---

## What happens when I delete a user account?

Deleting a user account removes all repositories, forks of private repositories, wikis, issues, pull requests, pages, and packages and container images owned by the user account. By deleting a user account, **you may break software projects and workflows that depend on these things.**

Issues and pull requests the user has created and comments they've made in repositories owned by other users or organizations will not be deleted and will instead be associated with a `ghost` user account.

Once a user account has been deleted, the username will be available for use with a different account on {% data variables.location.product_location %}.

## When can I delete a user account?

You cannot delete a user that is currently an **organization owner**.

* **If the user is the only owner**: Transfer ownership to another person, or delete the organization. See "[AUTOTITLE](/organizations/managing-organization-settings/transferring-organization-ownership)" and "[AUTOTITLE](/organizations/managing-organization-settings/deleting-an-organization-account)."
* **If there are other owners**: Remove the user from the organization. See "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)."

You cannot delete **your own user account**. If you need to delete your own user account, ask another site administrator to delete your account for you.

If you have enabled SCIM provisioning on your instance, you cannot delete **users who have been provisioned by SCIM**.

## Should I delete or suspend a user account?

{% data variables.product.prodname_dotcom %} recommends suspending users where possible, rather than deleting their accounts. Suspending user accounts on {% data variables.product.product_name %} preserves the history of resources owned by the user account, such as repositories and pull requests, and releases the licensed seat previously consumed by the user. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."

As an alternative to deleting or suspending a user account, to stop a user's repositories being permanently removed from your enterprise you can place a legal hold on the user account. See "[Placing a legal hold on a user or organization](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)."

## Deleting a user from the site admin dashboard

Before deleting a user account, you should consider if a backup or copy of the repositories, private forks, wikis, issues, and pull requests owned by the user account is required. See "[AUTOTITLE](/admin/backing-up-and-restoring-your-instance/configuring-backups-on-your-instance)" and "[AUTOTITLE](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
1. Under "Delete account," in the "Danger Zone" section, click **Delete this account**.
1. In the "Delete account" dialog box, under "Make sure you want to do this", review the changes. To confirm, enter the username of the account to be deleted.
1. Click **Delete this account**.

## Further reading

* "[AUTOTITLE](/rest/enterprise-admin/users#delete-a-user)"
