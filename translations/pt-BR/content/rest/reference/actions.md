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

## Artefatos

The Artifacts API allows you to download, delete, and retrieve information about workflow artifacts. {% data reusables.actions.about-artifacts %} Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'artifacts' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secrets

The Secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %}s must have the `secrets` permission to use this API. Authenticated users must have collaborator access to a repository to create, update, or read secrets.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Executores auto-hospedados

The Self-hosted Runners API allows you to register, view, and delete self-hosted runners. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, consulte "[Hospedando seus próprios executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} deve ter a permissão de `administração` para repositórios ou a permissão `organization_self_hosted_runners` para organizações. Usuários autenticados devem ter acesso de administrador ao repositório ou à organização para usar essa API.

Você pode gerenciar runners auto-hospedados para uma empresa. Para obter mais informações, consulte a "[{% data variables.product.prodname_dotcom %} administração do Enterprise](/rest/reference/enterprise-admin#actions)" API REST.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runners' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Grupos de runner auto-hospedados

A API dos Grupos de Runners auto-hospedados permite que você gerencie grupos de runners auto-hospedados. Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} deve ter a permissão de `administração` para repositórios ou a permissão `organization_self_hosted_runners` para organizações. Usuários autenticados devem ter acesso de administrador ao repositório ou à organização para usar essa API.

Você pode gerenciar grupos de runners auto-hospedados para uma empresa. Para obter mais informações, consulte a "[{% data variables.product.prodname_dotcom %} administração do Enterprise](/rest/reference/enterprise-admin#actions)" API REST.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runner-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Fluxos de trabalho

A API de fluxos de trabalho permite que você veja fluxos de trabalho para um repositório. {% data reusables.actions.about-workflows %} Para obter mais informações, consulte "[Automatizando seu fluxo de trabalho com o GitHub Actions](/actions/automating-your-workflow-with-github-actions)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflows' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Trabalhos de fluxo de trabalho

A API de Trabalhos de Fluxo de Trabalho permite que você visualize logs e trabalhos de fluxo de trabalho. {% data reusables.actions.about-workflow-jobs %} Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-jobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Execução de fluxo de trabalho

A API de execução de fluxo de trabalho permite que você visualize, execute novamente, cancele e visualize os logs para executar o fluxo de trabalho. {% data reusables.actions.about-workflow-runs %} Para obter mais informações, consulte "[Gerenciando uma execução de fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-runs' %}{% include rest_operation %}{% endif %}
{% endfor %}
