---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: Share workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing starter workflows, secrets, and self-hosted runners.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create starter workflows in the `.github` repository and share them with other users in your organization.

## Sharing {% ifversion internal-actions %}actions and {% endif %}workflows

{% ifversion internal-actions %}
You can share both individual actions and entire workflows with your organization, with or without publishing the actions or workflows publicly. You can reuse actions and workflows exactly by referencing them in your workflow file, and you can create starter workflows that provide templates for new workflows.
{% else %}
Your organization can share workflows by reusing the workflows exactly or by creating starter workflows that provide templates for new workflows.
{% endif %}

{% ifversion internal-actions %}
### Sharing actions with your enterprise

{% data reusables.actions.internal-actions-summary %}
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
### Reusing workflows

{% data reusables.actions.reusable-workflows %}
{% endif %}

### Using starter workflows

{% data reusables.actions.workflow-organization-templates %} For more information, see "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Sharing secrets within an organization

You can centrally manage your secrets within an organization, and then make them available to selected repositories. This also means that you can update a secret in one location, and have the change apply to all repository workflows that use the secret.

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. Click **New secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

## Share self-hosted runners within an organization

Organization admins can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."


## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[Creating starter workflows for your organization](/actions/using-workflows/creating-starter-workflows-for-your-organization)."
