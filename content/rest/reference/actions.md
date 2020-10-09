---
title: Actions
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /v3/actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

The {% data variables.product.prodname_actions %} API enables you to manage {% data variables.product.prodname_actions %} using the REST API. {% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %}s require the permissions mentioned in each endpoint. For more information, see "[{% data variables.product.prodname_actions %} Documentation](/actions)."

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Artifacts

The Artifacts API allows you to download, delete, and retrieve information about workflow artifacts. {% data reusables.actions.about-artifacts %} For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'artifacts' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Permissions

The Permissions API allows you to set permissions for what organizations and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions are allowed to run. For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."

You can also set permissions for an enterprise. For more information, see the "[{% data variables.product.prodname_dotcom %} Enterprise administration](/rest/reference/enterprise-admin#github-actions)" REST API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'permissions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secrets

The Secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %}s must have the `secrets` permission to use this API. Authenticated users must have collaborator access to a repository to create, update, or read secrets.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Self-hosted runners

The Self-hosted Runners API allows you to register, view, and delete self-hosted runners. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %}s must have the `administration` permission for repositories or the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to the repository or organization to use this API.

You can manage self-hosted runners for an enterprise. For more information, see the "[{% data variables.product.prodname_dotcom %} Enterprise administration](/rest/reference/enterprise-admin#github-actions)" REST API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runners' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Self-hosted runner groups

The Self-hosted Runners Groups API allows you manage groups of self-hosted runners. For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %}s must have the `administration` permission for repositories or the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to the repository or organization to use this API.

You can manage self-hosted runner groups for an enterprise. For more information, see the "[{% data variables.product.prodname_dotcom %} Enterprise administration](/rest/reference/enterprise-admin##github-actions)" REST API.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runner-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Workflows

The Workflows API allows you to view workflows for a repository. {% data reusables.actions.about-workflows %} For more information, see "[Automating your workflow with GitHub Actions](/actions/automating-your-workflow-with-github-actions)."

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflows' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Workflow jobs

The Workflow Jobs API allows you to view logs and workflow jobs. {% data reusables.actions.about-workflow-jobs %} For more information, see "[Workflow syntax for GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-jobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Workflow runs

The Workflow Runs API allows you to view, re-run, cancel, and view logs for workflow runs. {% data reusables.actions.about-workflow-runs %} For more information, see "[Managing a workflow run](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)."

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-runs' %}{% include rest_operation %}{% endif %}
{% endfor %}
