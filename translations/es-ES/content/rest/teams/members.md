---
title: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

This API is only available to authenticated members of the team's organization. OAuth access tokens require the `read:org` [scope](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

{% ifversion fpt or ghes or ghec %}
{% note %}

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Synchronizing teams between your identity provider and GitHub</a>."

{% endnote %}

{% endif %}