---
title: Using workflow templates
shortTitle: Use workflow templates
intro: '{% data variables.product.github %} provides workflow templates for a variety of languages and tooling.'
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
  - /actions/writing-workflows/using-workflow-templates
  - /actions/how-tos/writing-workflows/using-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Write workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Choosing and using a workflow template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Find the workflow template that you want to use, then click **Configure**. To help you find the workflow template that you want, you can search for keywords or filter by category.
1. If the workflow template contains comments detailing additional setup steps, follow these steps.

   There are guides to accompany many of the workflow templates for building and testing projects. For more information, see [AUTOTITLE](/actions/tutorials/build-and-test-code).

1. Some workflow templates use secrets. For example, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the workflow template uses a secret, store the value described in the secret name as a secret in your repository. For more information, see [AUTOTITLE](/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).
1. Optionally, make additional changes. For example, you might want to change the value of `on` when the workflow runs.
1. Click **Start commit**.
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## Further reading

* [AUTOTITLE](/actions/get-started/continuous-integration)
* [AUTOTITLE](/actions/how-tos/manage-workflow-runs)
* [AUTOTITLE](/actions/how-tos/monitor-workflows)
{% ifversion fpt or ghec %}
* [AUTOTITLE](/billing/concepts/product-billing/github-actions)
{% endif %}
