---
title: About organizations
intro: Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once. Owners and administrators can manage member access to the organization's data and projects with sophisticated security and administrative features.
redirect_from:
  - /articles/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### Organizations and enterprise accounts

Enterprise accounts allow owners to centrally manage policy and billing for multiple {% data variables.product.prodname_dotcom_the_website %} organizations.

For organizations that belong to an enterprise account, billing is managed at the enterprise account level, and billing settings are not available at the organization level. Enterprise owners can set policy for all organizations in the enterprise account or allow organization owners to set the policy at the organization level. Organization owners cannot change settings enforced for your organization at the enterprise account level. If you have questions about a policy or setting for your organization, contact the owner of your enterprise account.

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %} For more information, see "[Maintaining ownership continuity for your organization](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)."

### Terms of service and data protection for organizations

An entity, such as a company, non-profit, or group, can agree to the Standard Terms of Service or the Corporate Terms of Service for their organization. For more information, see "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."

{% data reusables.organizations.enter-data-protection-agreement %} For more information, see "[Entering a data protection agreement with {% data variables.product.prodname_dotcom %} for GDPR compliance](/articles/entering-a-data-protection-agreement-with-github-for-gdpr-compliance)."
{% endif %}
