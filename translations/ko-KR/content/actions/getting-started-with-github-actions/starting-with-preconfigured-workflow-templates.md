---
title: Starting with preconfigured workflow templates
intro: '{% data variables.product.prodname_dotcom %} provides preconfigured workflow templates to automate your workflow or create a CI workflow for specific languages and frameworks.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About workflow templates

{% data variables.product.product_name %} analyzes your code and shows you the CI templates that are the best fit for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use workflow templates as a starting place to build your custom workflow or use them as-is.

You can browse the full list of CI templates in the {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/master/ci) repository{% else %} `actions/starter-workflows` repository on {% data variables.product.product_location %}{% endif %}. You can also find templates for automating your workflow. For more information, see {% if currentVersion == "free-pro-team@latest" %}[automation templates](https://github.com/actions/starter-workflows/tree/master/automation){% else %}the `automation` directory{% endif %} in the `actions/starter-workflows` repository.

### Adding your first workflow template

If you haven't already added a workflow to your repository, you'll see a list of workflow templates to choose from.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-set-up-workflow-template %}

### Adding additional workflow templates

If you already have a workflow and would like to add a new template workflow, you can navigate to the workflow templates.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-new-workflow %}
{% data reusables.repositories.actions-set-up-workflow-template %}
