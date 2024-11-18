---
title: Using workflow templates
shortTitle: Use workflow templates
intro: '{% data variables.product.product_name %} provides workflow templates for a variety of languages and tooling.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/using-workflows/using-starter-workflows
  - /actions/learn-github-actions/using-starter-workflows
  - /actions/writing-workflows/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About workflow templates

Workflow templates are templates that help you to create your own {% data variables.product.prodname_actions %} workflows for a repository. They offer an alternative to starting from a blank workflow file and are useful because some of the work will already have been done for you.

{% data variables.product.product_name %} offers workflow templates for a variety of languages and tooling. When you set up workflows in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends workflows based on the language and framework in your repository. For example, if you use Node.js, {% data variables.product.product_name %} will suggest a workflow template file that installs your Node.js packages and runs your tests. You can search and filter to find relevant workflow templates.

{% data reusables.actions.workflow-templates-categories %}

{% data reusables.actions.workflow-templates-repo-link %}

You can also create your own workflow template to share with your organization. These workflow templates will appear alongside the {% data variables.product.product_name %}-provided workflow templates. Anyone with write access to the organization's `github` repository can set up a workflow template. For more information, see "[AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Choosing and using a workflow template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Find the workflow template that you want to use, then click **Configure**. To help you find the workflow template that you want, you can search for keywords or filter by category.
1. If the workflow template contains comments detailing additional setup steps, follow these steps.

   There are guides to accompany many of the workflow templates for building and testing projects. For more information, see "[AUTOTITLE](/actions/automating-builds-and-tests)."

1. Some workflow templates use secrets. For example, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the workflow template uses a secret, store the value described in the secret name as a secret in your repository. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
1. Optionally, make additional changes. For example, you might want to change the value of `on` to change when the workflow runs.
1. Click **Start commit**.
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## Further reading

* "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)"
* "[AUTOTITLE](/actions/managing-workflow-runs)"
* "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
{% ifversion fpt or ghec %}
* "[AUTOTITLE](/billing/managing-billing-for-github-actions)"
{% endif %}
