---
title: External groups
intro: Use the REST API to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About external groups

To use these endpoints, the authenticated user must be a team maintainer or an owner of the organization associated with the team.

{% ifversion ghec %}
{% note %}

**Notes:** 

- These endpoints are only available for organizations that are part of an enterprise using {% data variables.product.prodname_emus %}. For more information, see "[About Enterprise Managed Users](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
- If your organization uses team synchronization, you can use the API to manage team synchronization. For more information, see "[Team synchronization](/rest/teams/team-sync)."

{% endnote %}
{% endif %}
