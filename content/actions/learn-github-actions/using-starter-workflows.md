---
title: Using starter workflows
shortTitle: Use starter workflows
intro: '{% data variables.product.product_name %} provides starter workflows for a variety of languages and tooling.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/using-workflows/using-starter-workflows
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
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About starter workflows

Starter workflows are templates that help you to create your own {% data variables.product.prodname_actions %} workflows for a repository. They offer an alternative to starting from a blank workflow file and are useful because some of the work will already have been done for you.

{% data variables.product.product_name %} offers starter workflows for a variety of languages and tooling. When you set up workflows in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends workflows based on the language and framework in your repository. For example, if you use Node.js, {% data variables.product.product_name %} will suggest a starter workflow file that installs your Node.js packages and runs your tests.{% ifversion actions-starter-template-ui %} You can search and filter to find relevant starter workflows.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

You can also create your own starter workflow to share with your organization. These starter workflows will appear alongside the {% data variables.product.product_name %}-provided starter workflows. Anyone with write access to the organization's `github` repository can set up a starter workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization)."

## Choosing and using a starter workflow

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "{% ifversion actions-starter-template-ui %}Choose a workflow{% else %}Choose a workflow template{% endif %}" page shows a selection of recommended starter workflows. Find the starter workflow that you want to use, then click {% ifversion actions-starter-template-ui %}**Configure**{% else %}**Set up this workflow**{% endif %}.{% ifversion actions-starter-template-ui %} To help you find the starter workflow that you want, you can search for keywords or filter by category.{% endif %}
1. If the starter workflow contains comments detailing additional setup steps, follow these steps.

   There are guides to accompany many of the starter workflows for building and testing projects. For more information, see "[AUTOTITLE](/actions/automating-builds-and-tests)."

1. Some starter workflows use secrets. For example, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the starter workflow uses a secret, store the value described in the secret name as a secret in your repository. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
1. Optionally, make additional changes. For example, you might want to change the value of `on` to change when the workflow runs.
1. Click **Start commit**.
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## Further reading

- "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)"
- "[AUTOTITLE](/actions/managing-workflow-runs)"
- "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
{% ifversion fpt or ghec %}
- "[AUTOTITLE](/billing/managing-billing-for-github-actions)"
{% endif %}
