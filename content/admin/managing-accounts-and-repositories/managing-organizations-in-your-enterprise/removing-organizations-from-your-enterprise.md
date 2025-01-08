---
title: Removing organizations from your enterprise
intro: 'Learn how to remove an organization that should no longer be a part of your enterprise.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Remove organizations
redirect_from:
  - /admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise
---

You can remove an organization that is owned by your enterprise account, so the organization stands alone.

## What happens when an organization is removed?

When you remove an organization from your enterprise:

* Billing, identity management, 2FA requirements, and other policies for the organization will no longer be governed by your enterprise.
* The organization will be downgraded to the free plan.
* The organization will be governed by our standard Terms of Service.
* Any internal repositories within the organization will be converted to private repositories.

As part of the downgrade to the free plan:

* Protected branch and ruleset configurations will be retained in your settings, but will no longer be applied in private repositories.
* Existing pull request drafts will remain in draft status. New drafts cannot be created.
* CODEOWNERS files will no longer be applied in private repositories.
* Private {% data variables.product.prodname_pages %} sites will no longer be available.
* Wikis will be retained, but won't be visible unless the organization is upgraded to {% data variables.product.prodname_team %}.
* Secrets will be retained, but will not be accessible in private repositories unless the organization is upgraded to {% data variables.product.prodname_team %}.

## Removing an organization from your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the left sidebar, click **Organizations**.
1. In the search bar, begin typing the organization's name until the organization appears in the search results.
1. To the right of the organization's name, select the {% octicon "gear" aria-label="Organization settings" %} dropdown menu and click **Remove organization**.

   ![Screenshot of a list of organizations in search results. To the right of the organization name, the dropdown menu labeled with a gear icon is expanded, and the "Remove organization" option is highlighted with an orange outline.](/assets/images/help/enterprises/remove-organization.png)
1. Review the warnings, then click **Remove organization**.

## Further reading

* [AUTOTITLE](/admin/overview/about-enterprise-accounts)
