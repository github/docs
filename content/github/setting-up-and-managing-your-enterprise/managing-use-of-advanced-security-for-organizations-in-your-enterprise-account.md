---
title: Managing use of Advanced Security for organizations in your enterprise account
intro: 'You can review and manage the use of {% data variables.product.prodname_GH_advanced_security %} for organizations owned by an enterprise account.'
shortTitle: Managing use of Advanced Security
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can manage access to {% data variables.product.prodname_GH_advanced_security %} for organizations and repositories in an enterprise account.
versions:
  free-pro-team: '*'
---

### About {% data variables.product.prodname_GH_advanced_security %} for enterprise accounts

{% data variables.product.prodname_dotcom %} makes additional security features available to private repositories owned by enterprise accounts with a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.advanced-security.license-overview %}

You can see a summary of your current license usage for each organization on the billing page for the enterprise account (see below).

### About committer numbers for enterprise accounts

The {% data variables.product.prodname_GH_advanced_security %} summary for an enterprise account reports two numbers of committers for each organization:

- **Committers** is the number of committers who contributed to at least one private repository in the organization and who use a seat in your enterprise license. That is, they are an organization member, external collaborator to a repository, or have a pending invitation to join your enterprise account.
- **Unique to this organization** is the number of committers who contributed only to repositories in that organization. This number shows how many license seats you can free up by disabling {% data variables.product.prodname_GH_advanced_security %} for that organization.

{% data reusables.advanced-security.enable-disable-committer-info %}

### Managing the use of {% data variables.product.prodname_GH_advanced_security %} for an enterprise account

If you have a license for {% data variables.product.prodname_GH_advanced_security %}, the enterprise billing page includes a "{% data variables.product.prodname_GH_advanced_security %}" section that lists the organizations that use the feature.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. In the "{% data variables.product.prodname_GH_advanced_security %}" section you can see the number of committers and unique committers for each organization.
  ![{% data variables.product.prodname_GH_advanced_security %} in enterprise billing settings](/assets/images/help/enterprises/ghas-orgs-list.png)
1. If you are an organization owner, you can click the name to display the billings and plans for the organization.
  ![Owned organization in {% data variables.product.prodname_GH_advanced_security %} section of enterprise billing settings](/assets/images/help/enterprises/ghas-orgs-list-click-org.png)

For detailed information of which repositories in an organization use {% data variables.product.prodname_GH_advanced_security %}, view the "Security & analysis" page for an organization.

For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."
