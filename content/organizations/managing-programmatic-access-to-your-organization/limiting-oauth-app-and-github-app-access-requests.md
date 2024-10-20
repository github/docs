---
title: Limiting OAuth app and GitHub App access requests
intro: 'As an organization owner, you can choose whether to allow outside collaborators to request organization access for {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth apps
shortTitle: Limit app access requests
redirect_from:
  - /organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests
---

## About integration access requests

When integration access requests are enabled, outside collaborators can request organization access for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} which have not yet been approved by your organization. If you disable integration access requests, only organization members will be able to request organization access for unapproved {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. Outside collaborators will still be able to consent to pre-approved {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} accessing the same resources the requesting outside collaborator has access to.

By default, integration access requests are enabled. If your organization has a large number of outside collaborators, you may want to disable integration access requests, to reduce the number of requests you have to review.

## Enabling or disabling integration access requests

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Under "Integration access requests" select or deselect **Allow integration requests from outside collaborators** and click **Save**.
