---
title: Deleting an organization account
intro: 'You can delete your organization account at any time.'
permissions: Organization owners can delete an organization.
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
---

## About deletion of your organization account

{% ifversion fpt or ghec %}

> [!TIP]
> If you want to cancel your paid subscription, you can [downgrade your organization to {% data variables.product.prodname_free_team %}](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan) instead of deleting the organization and its content.

{% endif %}
Deleting your organization account permanently removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. **This action is irreversible.**

{% ifversion fpt or ghec %}Billing for the organization will end. {% ifversion ghec %}If the organization is part of an enterprise account, billing will stop through the enterprise agreement.{% endif %} **Upon deletion, the organization name will not be available to use for another organization or user account for 90 days.** After the 90 days pass, the organization name will automatically become available for use on a new user or organization account.

> [!TIP]
> If you would like to make your organization name available for reuse immediately, rename your organization instead of deleting it. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/renaming-an-organization).

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.accounts.delete-account-repo-namespace-retirement %}

{% endif %}

{% data reusables.package_registry.delete-account-namespace-retirement %}

You can also archive an organization, instead of deleting it. Archiving an organization will make it read-only. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/archiving-an-organization).

## Backing up your organization content

{% ifversion not ghes %} After you delete an organization, {% data variables.product.company_short %} **cannot restore your content**. Therefore, before{% else %}Before{% endif %} you delete your organization, make sure you have a copy of all repositories, wikis, issues, and projects from the account. See [AUTOTITLE](/repositories/archiving-a-github-repository/backing-up-a-repository).

{% ifversion ghes %}

> [!NOTE]
> If necessary, a site administrator for {% data variables.location.product_location %} may be able to partially restore a deleted organization. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/restoring-a-deleted-organization).

{% endif %}

## Deleting your organization account

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Danger zone" section, click **Delete this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Cancel plan and delete the organization**.
