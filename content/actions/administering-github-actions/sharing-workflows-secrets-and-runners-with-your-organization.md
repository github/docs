---
title: 'Sharing workflows, secrets, and runners with your organization'
shortTitle: Share workflows with your organization
intro: 'Learn how you can use organization features to collaborate with your team, by sharing workflow templates, secrets, variables, and self-hosted runners.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
  - /actions/using-workflows/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

If you need to share workflows and other {% data variables.product.prodname_actions %} features with your team, then consider collaborating within a {% data variables.product.prodname_dotcom %} organization. An organization allows you to centrally store and manage secrets, artifacts, and self-hosted runners. You can also create workflow templates in the `.github` repository and share them with other users in your organization.

## Sharing {% ifversion internal-actions %}actions and {% endif %}workflows

{% ifversion internal-actions %}
You can share both individual actions and entire workflows with your organization, with or without publishing the actions or workflows publicly. You can reuse actions and workflows exactly by referencing them in your workflow file, and you can create workflow templates.
{% else %}
Your organization can share workflows by reusing the workflows exactly or by creating workflow templates
{% endif %}

{% ifversion internal-actions %}

### Sharing actions with your enterprise

{% data reusables.actions.internal-actions-summary %}
{% endif %}

### Reusing workflows

{% data reusables.actions.reusable-workflows %}

### Using workflow templates

{% data reusables.actions.workflow-organization-templates %} For more information, see "[AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Sharing secrets and variables within an organization

You can centrally manage your secrets and variables within an organization, and then make them available to selected repositories. This also means that you can update a secret or variable in one location, and have the change apply to all repository workflows that use it.

When creating a secret or variable in an organization, you can use a policy to limit which repositories can access it. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.actions.permissions-statement-secrets-and-variables-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
1. Click the **Secrets** or **Variables** tab, and create the secret or variable with your desired values and options.

   For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-an-organization)" or "[AUTOTITLE](/actions/learn-github-actions/variables#creating-configuration-variables-for-an-organization)."

## Share self-hosted runners within an organization

Organization owners can add their self-hosted runners to groups, and then create policies that control which repositories can access the group.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups)."

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization)."
