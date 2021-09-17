---
title: Reference
intro: 'Reference documentation for creating workflows, using GitHub-hosted runners, and authentication.'
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
children:
  - /workflow-syntax-for-github-actions
  - /context-and-expression-syntax-for-github-actions
  - /workflow-commands-for-github-actions
  - /events-that-trigger-workflows
  - /authentication-in-a-workflow
  - /encrypted-secrets
  - /environments
  - /environment-variables
  - /usage-limits-billing-and-administration
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
### Workflow syntax
The workflow file is written in YAML. In the YAML workflow file, you can use expression syntax to evaluate contextual information, literals, operators, and functions. Contextual information includes workflow, environment variables, secrets, and the events that triggered the workflow. When you use [`run`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) in a workflow step to run shell commands, you can use specific workflow command syntax to set environment variables, set output parameters for subsequent steps, and set error or debug messages.
### 이벤트

You can configure workflows to run when specific GitHub events occur, at a scheduled time, manually, or when events outside of GitHub occur.

### Authentication and secrets

{% data variables.product.prodname_dotcom %} provides a token that you can use to authenticate on behalf of {% data variables.product.prodname_actions %}. You can also store sensitive information as a secret in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}, repository, or environments{% else %} or repository{% endif %}. {% data variables.product.prodname_dotcom %} encrypts all secrets.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Environments
Workflow jobs can reference environments that have protection rules or environment-specific secrets.
{% endif %}
### 환경 변수
{% data variables.product.prodname_dotcom %} sets default environment variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom environment variables in your workflow file.
{% if currentVersion == "free-pro-team@latest" %}
### Administration
When you run workflows on
{% data variables.product.prodname_dotcom %}-hosted runners, there are usage limits and potential usage charges. You can also disable or restrict the usage of {% data variables.product.prodname_actions %} in a repository and organization.
{% endif %}
