---
title: Best practices for organizations
shortTitle: Best practices
intro: 'Learn {% data variables.product.prodname_dotcom %}-recommended practices for your organization.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## Assign multiple owners

{% data reusables.organizations.org-ownership-recommendation %} For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)."

## Use teams

We recommend using teams to facilitate collaboration in your organization. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

{% ifversion ghec %}
We highly recommend managing team membership through your identity provider (IdP). For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

{% data reusables.enterprise-accounts.emu-scim-note %}
{% endif %}

We recommend keeping teams visible whenever possible and reserving secret teams for sensitive situations. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/changing-team-visibility)."

{% ifversion ghec or ghes or ghae %}

## Use security overview

{% data reusables.security-overview.about-security-overview %} For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview)."
{% endif %}
