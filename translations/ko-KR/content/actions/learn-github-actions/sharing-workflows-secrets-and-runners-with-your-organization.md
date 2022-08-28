---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: Sharing workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing workflow templates, secrets, and self-hosted runners.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create workflow templates in the `.github` repository and share them with other users in your organization.

## Using workflow templates

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."

{% data reusables.actions.reusable-workflows %}

## Sharing secrets within an organization

You can centrally manage your secrets within an organization, and then make them available to selected repositories. This also means that you can update a secret in one location, and have the change apply to all repository workflows that use the secret.

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

## Share self-hosted runners within an organization

Organization admins can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."


## 다음 단계

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."
