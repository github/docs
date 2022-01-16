---
title: Using workflow templates
shortTitle: Using templates
intro: '{% data variables.product.product_name %} provides workflow templates for a variety of languages and tooling.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Workflow-Vorlagen

{% data variables.product.product_name %} offers workflow templates for a variety of languages and tooling. When you set up workflows in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends workflows based on the language and framework in your repository. Wenn Sie beispielsweise [Node.js](https://nodejs.org/en/)verwenden, schlägt {% data variables.product.product_name %} eine Vorlagendatei vor, die Ihre Node.js-Pakete installiert und Ihre Tests ausführt.

You can also create your own workflow templates to share with your organization. For more information, see "[Creating workflow templates](/actions/learn-github-actions/creating-workflow-templates)."

## Using workflow templates

Anyone with write permission to a repository can set up {% data variables.product.prodname_actions %} workflows for CI/CD or other automation.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. If you already have a workflow in your repository, click **New workflow**.
1. Find the template that you want to use, then click **Set up this workflow**.
1. If the workflow template contains comments detailing additional setup steps, follow these steps.
1. Some workflow templates use secrets. For example, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. If the workflow template uses a secret, store the value described in the secret name as a secret in your repository. For more information, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."
1. Optionally, make additional changes. For example, you might want to change the value of `on` to change when the workflow runs.
1. Klicke auf **Start commit** (Commit starten).
1. Write a commit message and decide whether to commit directly to the default branch or to open a pull request.

## Weiterführende Informationen

- „[Informationen zur kontinuierlichen Integration](/articles/about-continuous-integration)“
- "[Managing workflow runs](/actions/managing-workflow-runs)"
- "[About monitoring and troubleshooting](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt %}
- "[ Abrechnung für {% data variables.product.prodname_actions %} verwalten](/billing/managing-billing-for-github-actions)"
{% endif %}
