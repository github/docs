---
title: Exporting member information for your organization
intro: 'You can export information about members in your organization, directly from the user interface.'
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.3'
  ghae: issue-5146
topics:
  - Organizations
  - Teams
shortTitle: Export member information
---

You can export information about members in your organization. This is useful if you want to perform an audit of users within the organization. The exported information includes username and display name details, and whether the membership is public or private.

You can get member information directly from the {% data variables.product.product_name %} user interface, or using APIs. This article explains how to obtain member information from within {% data variables.product.product_name %}.

For more information about the APIs, see our [GraphQL API](/graphql/reference/objects#user) and [REST API](/rest/reference/users) documentation about users.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people-export %}
