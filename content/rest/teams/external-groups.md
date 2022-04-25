---
title: External Groups
intro: 'The external groups API allows you to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

To use this API, the authenticated user must be a team maintainer or an owner of the organization associated with the team.

{% ifversion ghec %}
{% note %}

**Notes:** 

- The external groups API is only available for organizations that are part of a enterprise using {% data variables.product.prodname_emus %}. For more information, see "[About Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- If your organization uses team synchronization, you can use the Team Synchronization API. For more information, see "[Team synchronization API](#team-synchronization)."

{% endnote %}
{% endif %}