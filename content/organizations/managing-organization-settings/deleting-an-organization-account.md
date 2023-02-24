---
title: Deleting an organization account
intro: 'You can delete your organization account on {% data variables.location.product_location %} at any time.'
permissions: Organization owners can delete an organization.
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
---

## About deletion of your organization account
{% ifversion fpt or ghec %}
{% tip %}

**Tip**: If you want to cancel your paid subscription, you can [downgrade your organization to {% data variables.product.prodname_free_team %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription) instead of deleting the organization and its content.

{% endtip %}

{% endif %}
Deleting your organization account removes all repositories, forks of private repositories, wikis, issues, pull requests, and project or organization pages. {% ifversion fpt or ghec %}Your billing will end and, after 90 days, the organization name becomes available for use on a new user or organization account.{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.accounts.delete-account-repo-namespace-retirement %}

{% endif %}

{% data reusables.package_registry.delete-account-namespace-retirement %}

## Backing up your organization content

{% ifversion not ghes %} After you delete an organization, {% data variables.product.company_short %} **cannot restore your content**. Therefore, before{% else %}Before{% endif %} you delete your organization, make sure you have a copy of all repositories, wikis, issues, and project boards from the account.

{% ifversion ghes %}
{% note %}

**Note:** If necessary, a site administrator for {% data variables.location.product_location %} may be able to partially restore a deleted organization. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)."

{% endnote %}
{% endif %}

## Deleting your organization account

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Near the bottom of the organization's settings page, click **Delete this Organization**.
   ![Delete this organization button](/assets/images/help/settings/settings-organization-delete.png)
