---
title: Using starter workflows
intro: '{% data variables.product.product_name %} provides starter workflows for a variety of languages and tooling.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About starter workflows

{% data variables.product.product_name %} offers starter workflows for a variety of languages and tooling. When you set up workflows in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends workflows based on the language and framework in your repository. For example, if you use [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} will suggest a starter workflow file that installs your Node.js packages and runs your tests.{% ifversion actions-starter-template-ui %} You can search and filter to find relevant starter workflows.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

You can also create your own starter workflow to share with your organization. These starter workflows will appear alongside the {% data variables.product.product_name %}-provided starter workflows. For more information, see "[Creating starter workflows for your organization](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)."

## Using starter workflows

Anyone with write permission to a repository can set up {% data variables.product.prodname_actions %} starter workflows for CI/CD or other automation.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If you already have a workflow in your repository, click **New workflow**.
1. The "{% ifversion actions-starter-template-ui %}Choose a workflow{% else %}Choose a workflow template{% endif %}" page shows a selection of recommended starter workflows. Find the starter workflow that you want to use, then click {% ifversion actions-starter-template-ui %}**Configure**{% else %}**Set up this workflow**{% endif %}.{% ifversion actions-starter-template-ui %} To help you find the starter workflow that you want, you can search for keywords or filter by category.{% endif %}

   {% ifversion actions-starter-template-ui %}![Configure this workflow](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Set up this workflow](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. If the starter workflow contains comments detailing additional setup steps, follow these steps. Many of the starter workflow have corresponding guides. For more information, see the [{% data variables.product.prodname_actions %} guides](/actions/guides).
1. Some starter workflows use secrets. For example, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the starter workflow uses a secret, store the value described in the secret name as a secret in your repository. 詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
1. Optionally, make additional changes. For example, you might want to change the value of `on` to change when the workflow runs.
1. [**Start commit**] をクリックします。
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## 参考リンク

- [継続的インテグレーションについて](/articles/about-continuous-integration)
- "[Managing workflow runs](/actions/managing-workflow-runs)"
- "[About monitoring and troubleshooting](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」
{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_actions %} の支払いを管理する](/billing/managing-billing-for-github-actions)」
{% endif %}
