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
{% tip %}

**Tip**: If you want to cancel your paid subscription, you can [downgrade your organization to {% data variables.product.prodname_free_team %}](/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan) instead of deleting the organization and its content.

{% endtip %}

{% endif %}
Deleting your organization account removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. {% ifversion fpt or ghec %}Your billing will end and, after 90 days, the organization name becomes available for use on a new user or organization account.

{% tip %}

**Tip**: If you rename an organization, you can create a new organization with the same name immediately. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/renaming-an-organization)."

{% endtip %}

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.accounts.delete-account-repo-namespace-retirement %}

{% endif %}

{% data reusables.package_registry.delete-account-namespace-retirement %}

{% ifversion archive-organizations %}
You can also archive an organization, instead of deleting it. Archiving an organization will make it read-only. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/archiving-an-organization)."
{% endif %}

## Backing up your organization content

{% ifversion not ghes %} After you delete an organization, {% data variables.product.company_short %} **cannot restore your content**. Therefore, before{% else %}Before{% endif %} you delete your organization, make sure you have a copy of all repositories, wikis, issues, and projects from the account.

{% ifversion ghes %}
{% note %}

**Note:** If necessary, a site administrator for {% data variables.location.product_location %} may be able to partially restore a deleted organization. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)."

{% endnote %}
{% endif %}

## Deleting your organization account

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Danger zone" section, click **Delete this organization**.
1. Read the warning. If you want to proceed, type the organization's name, then click **Cancel plan and delete the organization**.
