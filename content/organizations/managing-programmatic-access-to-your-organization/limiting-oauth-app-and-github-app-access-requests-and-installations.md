---
title: Limiting OAuth app and GitHub App access requests and installations
intro: 'As an organization owner, you can control which users can request organization access for apps{% ifversion fpt or ghec or ghes > 3.19 %}, and whether repository admins can install {% data variables.product.prodname_github_apps %}{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: Organization owners can limit who can make app access requests to the organization{% ifversion fpt or ghec or ghes > 3.19 %} and who can install apps{% endif %}.
topics:
  - Organizations
  - GitHub Apps
  - OAuth apps
shortTitle: Limit app requests and installations
redirect_from:
  - /organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests
  - /organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests
---

## About app access requests

When app access requests are enabled, members and outside collaborators can request organization access for {% data variables.product.prodname_github_apps %}{% ifversion fpt or ghec %} and {% data variables.product.prodname_oauth_apps %}{% endif %} which have not yet been approved by your organization. For {% data variables.product.prodname_github_apps %} this is a request for installation, which grants the app access to your organization directly.{% ifversion fpt or ghec %} For {% data variables.product.prodname_oauth_apps %} this is a request to allow the app through the [AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions), which allows the app to access your organization after it's signed in a user.{% endif %}

You can control if {% ifversion fpt or ghec or ghes > 3.20 %}members or {% endif %}outside collaborators are able to request unapproved apps for your organization. Users can still consent to apps for use in their personal accounts, and use them with your organization if you've approved those apps for use.

By default, app access requests are enabled. If your organization has a large number of {% ifversion fpt or ghec or ghes > 3.20 %}members or {% endif %}outside collaborators, you may want to disable app access requests to reduce the number of requests you have to review.

## Enabling or disabling app access requests

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Under "{% ifversion fpt or ghec or ghes > 3.20 %}App{% else %}Integration{% endif %} access requests" select which users should be allowed to request apps and click **Save**.

{% ifversion fpt or ghec or ghes > 3.20 %}Blocking app access requests from organization members is in public preview.{% endif %}

{% ifversion fpt or ghec or ghes > 3.19 %}

## About {% data variables.product.prodname_github_app %} installation restrictions

By default, repository admins can install {% data variables.product.prodname_github_apps %} on repositories within your organization if the app does not request organization permissions or the "repository administration" permission. As an organization owner, you can restrict {% data variables.product.prodname_github_app %} installations to only organization owners. When this restriction is enabled:

* Repository admins, including outside collaborators with repository admin access, cannot install {% data variables.product.prodname_github_apps %} on their repositories.
* Repository admins must use the request flow to ask organization owners to install apps on their repositories.
* Repository admins cannot add their repositories to existing {% data variables.product.prodname_github_app %} installations in the organization.

This installation restriction applies to {% data variables.product.prodname_github_apps %} only. {% data variables.product.prodname_oauth_apps %} require organization approval by default and cannot be approved on a per-repository basis.

> [!NOTE]
> If you have also disabled app access requests, users with repository admin access will be blocked from both installing apps and requesting installations.

## Restricting {% data variables.product.prodname_github_app %} installation to organization owners

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. Under "{% data variables.product.prodname_github_apps %}", deselect **Allow repository admins to install {% data variables.product.prodname_github_apps %} for their repositories** and click **Save**.

{% endif %}
