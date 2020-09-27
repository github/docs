---
title: About GitHub Actions
intro: '{{ site.data.variables.product.prodname_actions }} enables you to create custom software development life cycle (SDLC) workflows directly in your {{ site.data.variables.product.prodname_dotcom }} repository.'
product: '{{ site.data.reusables.gated-features.actions }}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### About {{ site.data.variables.product.prodname_actions }}

{{ site.data.reusables.repositories.about-github-actions }} Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on {{ site.data.variables.product.prodname_dotcom }}.

{{ site.data.reusables.repositories.actions-ci-cd }} {{ site.data.variables.product.prodname_actions }} powers {{ site.data.variables.product.prodname_dotcom }}'s built-in continuous integration service. For more information, see "[About continuous integration](/articles/about-continuous-integration)."

Workflows run in Linux, macOS, Windows, and containers on {{ site.data.variables.product.prodname_dotcom }}-hosted machines, called 'runners'. Alternatively, you can also host your own runners to run workflows on machines you own or manage. For more information see, "[About self-hosted runners](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

You can create workflows using actions defined in your repository, open source actions in a public repository on {{ site.data.variables.product.prodname_dotcom }}, or a published Docker container image. Workflows in forked repositories don't run by default.

You can discover actions to use in your workflow on {{ site.data.variables.product.prodname_dotcom }} and build actions to share with the {{ site.data.variables.product.prodname_dotcom }} community. For more information on creating a custom action, see "[Creating actions](/actions/creating-actions)."

You can create a workflow file configured to run on specific events. For more information, see "[Configuring a workflow](/articles/configuring-a-workflow)" and "[Workflow syntax for {{ site.data.variables.product.prodname_actions }}](/articles/workflow-syntax-for-github-actions)".

For a definition of common terms, see "[Core concepts for {{ site.data.variables.product.prodname_actions }}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)."

### Discovering actions in the {{ site.data.variables.product.prodname_dotcom }} community

{{ site.data.variables.product.prodname_marketplace }} is a central location for you to find, share, and use actions built by the {{ site.data.variables.product.prodname_dotcom }} community. For more information, see "[Using actions from {{ site.data.variables.product.prodname_marketplace }} in your workflow](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)."

You can also customize your project with open source actions shared in public repositories on {{ site.data.variables.product.prodname_dotcom }} and use actions built by {{ site.data.variables.product.prodname_dotcom }} in the [actions](https://github.com/actions) organization.

### Disabling or limiting {{ site.data.variables.product.prodname_actions }} for your repository or organization

{{ site.data.reusables.github-actions.disabling-github-actions }}

For more information, see "[Disabling or limiting {{ site.data.variables.product.prodname_actions }} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)" or "[Disabling or limiting {{ site.data.variables.product.prodname_actions }} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)."

### Notifications for workflow runs

{{ site.data.reusables.repositories.workflow-notifications }}

### Usage limits

{{ site.data.reusables.github-actions.github-actions-usage-limits }}

{% if currentVersion == "free-pro-team@latest" %}

### Usage policy

In addition to the usage limits, you must ensure that you use {{ site.data.variables.product.prodname_actions }} within the [GitHub Terms of Service](/articles/github-terms-of-service/). For more information on {{ site.data.variables.product.prodname_actions }}-specific terms, see the [GitHub Additional Product Terms](/github/site-policy/github-additional-product-terms#a-actions-usage).

### About billing for {{ site.data.variables.product.prodname_actions }}

{{ site.data.reusables.github-actions.actions-billing }} For more information, see "[About billing for {{ site.data.variables.product.prodname_actions }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

### Contacting support

{{ site.data.reusables.github-actions.contacting-support }}

{% endif %}

### 더 읽을거리

- "[Managing a workflow run](/articles/managing-a-workflow-run)"
- "[Events that trigger workflows](/articles/events-that-trigger-workflows)"
- "[Virtual environments for {{ site.data.variables.product.prodname_dotcom }}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
{% if currentVersion == "free-pro-team@latest" %}- "[Managing billing for {{ site.data.variables.product.prodname_actions }}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"{% endif %}
