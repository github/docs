---
title: Accessing user-owned repositories in your enterprise
intro: "You can temporarily access a repository owned by a user within your enterprise."
permissions: Enterprise owners can temporarily access user-owned repositories.
versions:
  feature: 'emu-owned-repos'
type: how_to
topics:
  - Enterprise
  - Repositories
shortTitle: Access user-owned repos
redirect_from:
  - /admin/user-management/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise
---

{% note %}

**Note:** Temporarily accessing user-owned repositories is currently in beta for {% data variables.product.prodname_emus %} and subject to change.

{% endnote %}

## About temporary access to user-owned repositories

If your enterprise uses {% data variables.product.prodname_emus %}, and you've allowed users to create repositories owned by their user accounts, you can temporarily access any user-owned repository within your enterprise.

When you temporarily access a repository, you get admin access to the repository for two hours. You can take all the same actions as the repository owner, including editing the repository, changing the repository's settings, transferring the repository, and deleting the repository.

The repository owner will receive an email informing them that you have enabled temporary access to the repository, and a `repo.temporary_access_granted` event will be added to the audit log for your enterprise and the user's security log.

## Temporarily accessing a repository

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
{% data reusables.enterprise.view-user-namespace-repos %}
1. To the right of the repository you want to access, select the {% octicon "kebab-horizontal" aria-label="Access repository" %} dropdown menu, then click **Enable temporary access**.

   ![Screenshot of the list of user namespace repositories. To the right of a repository, a kebab icon is outlined in dark orange.](/assets/images/help/business-accounts/user-namespace-repo-kebab.png)
1. Read the warnings, then click **Yes, enable temporary access**.
