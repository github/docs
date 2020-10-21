---
title: リファレンス
intro: 'Reference documentation for creating workflows, using GitHub-hosted runners, and authentication.'
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### ワークフロー構文

The workflow file is written in YAML. In the YAML workflow file, you can use expression syntax to evaluate contextual information, literals, operators, and functions. Contextual information includes workflow, environment variables, secrets, and the events that triggered the workflow. When you use [`run`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) in a workflow step to run shell commands, you can use specific workflow command syntax to set environment variables, set output parameters for subsequent steps, and set error or debug messages.

{% link_in_list /workflow-syntax-for-github-actions %}
{% link_in_list /context-and-expression-syntax-for-github-actions %}
{% link_in_list /workflow-commands-for-github-actions %}

### イベント

You can configure workflows to run when specific GitHub events occur, at a scheduled time, manually, or when events outside of GitHub occur.

{% link_in_list /events-that-trigger-workflows %}

### Authentication and secrets

{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_actions %}の代理で認証を受けるために利用できるトークンを提供します。 You can also store sensitive information as a secret in your organization or repository. {% data variables.product.prodname_dotcom %} encrypts all secrets.

{% link_in_list /authentication-in-a-workflow %}
{% link_in_list /encrypted-secrets %}

### {% data variables.product.prodname_dotcom %}ホストランナー

GitHub offers hosted virtual machines to run workflows. The virtual machine contains an environment with tools, packages, and environment variables for GitHub Actions to use.

{% link_in_list /environment-variables %}
{% link_in_list /specifications-for-github-hosted-runners %}

{% if currentVersion == "free-pro-team@latest" %}
### 管理

When you run workflows on {% data variables.product.prodname_dotcom %}-hosted runners, there are usage limits and potential usage charges. You can also disable or restrict the usage of {% data variables.product.prodname_actions %} in a repository and organization.

{% link_in_list /usage-limits-billing-and-administration %}

{% endif %}
