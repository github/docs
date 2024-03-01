---
title: About programmatic access in your organization
intro: 'As an organization owner, you can control access to your organization by {% ifversion pat-v2%}{% data variables.product.pat_generic %}s, {% data variables.product.prodname_github_apps %}, and {% data variables.product.prodname_oauth_apps %}{% else %} {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}{% endif %}.'
permissions: Organization owners can control programmatic access in their organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth apps
  - API
shortTitle: About programmatic access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About programmatic access

{% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, and {% data variables.product.pat_generic %}s can be used to make API requests that read or write resources owned by an organization. As an organization owner, you can control access to your organization by {% data variables.product.prodname_github_apps %}{% ifversion fpt or ghec %}, {% data variables.product.prodname_oauth_apps %},{% endif %} and {% data variables.product.pat_generic %}s.

## {% data variables.product.prodname_github_apps %}

Organization owners can install {% data variables.product.prodname_github_apps %} on their organization. Repository admins can also install a {% data variables.product.prodname_github_app %} on the organization if the app does not request organization resources and if they only grant the app access to repositories where they are an admin. Organization members can submit a request for their organization owner to install a {% data variables.product.prodname_github_app %} on the organization. For more information, see {% ifversion fpt or ghec%}"[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-organization)."{% else %}"[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps)."{% endif %}

{% ifversion limit-app-access-requests %}Organization owners can prevent outside collaborators from requesting {% data variables.product.prodname_github_apps %} or from installing a {% data variables.product.prodname_github_app %} even if the collaborator is a repository admin. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests)."{% endif %}

Organization owners can review the {% data variables.product.prodname_github_apps %} that are installed on their organization and modify the repositories that each app can access. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-github-apps-installed-in-your-organization)."

To help maintain {% data variables.product.prodname_github_apps %} owned by their organization, organization owners can designate other users in their organization as {% data variables.product.prodname_github_app %} managers. {% data variables.product.prodname_github_app %} managers can manage the settings of some or all of the {% data variables.product.prodname_github_apps %} that are owned by the organization. The {% data variables.product.prodname_github_app %} manager role does not grant users permission to install {% data variables.product.prodname_github_apps %} on an organization. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization)."

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %}

Organization managers can restrict {% data variables.product.prodname_oauth_apps %} from accessing organization resources. When these restrictions are enabled, organization members and outside collaborators can still request approval for individual {% data variables.product.prodname_oauth_apps %}. For more information, see "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)."

{% endif %}

## {% data variables.product.pat_generic_caps %}s

{% ifversion pat-v2%}

Organization owners can prevent {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %} from accessing resources owned by the organization. Organization owners can also require approval for each {% data variables.product.pat_v2 %} that can access the organization. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."

Organization owners can view all {% data variables.product.pat_v2 %}s that can access resources owned by the organization. Organization owners can also revoke access by {% data variables.product.pat_v2 %}s. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)."

{% endif %}

{% ifversion ghec %}

If their organization uses SAML, organization owners can see each {% data variables.product.pat_generic %} that a member of their organization authorized. For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-authorized-credentials)."

{% endif %}

{% ifversion ghes %}

Site administrators can use the REST API to manage {% data variables.product.pat_generic %}s in their enterprise. For more information, see "[AUTOTITLE](/rest/enterprise-admin/users)."

{% endif %}
