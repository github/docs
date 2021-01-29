---
title: About continuous integration
intro: 'You can create custom continuous integration (CI) and continuous deployment (CD) workflows directly in your {% data variables.product.prodname_dotcom %} repository with {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
topics:
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About continuous integration

Continuous integration (CI) is a software practice that requires frequently committing code to a shared repository. Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error. Frequent code updates also make it easier to merge changes from different members of a software development team. This is great for developers, who can spend more time writing code and less time debugging errors or resolving merge conflicts.

When you commit code to your repository, you can continuously build and test the code to make sure that the commit doesn't introduce errors. Your tests can include code linters (which check style formatting), security checks, code coverage, functional tests, and other custom checks.

Building and testing your code requires a server. You can build and test updates locally before pushing code to a repository, or you can use a CI server that checks for new code commits in a repository.

### About continuous integration using {% data variables.product.prodname_actions %}

CI using {% data variables.product.prodname_actions %} offers workflows that can build the code in your repository and run your tests. Workflows can run on {% data variables.product.prodname_dotcom %}-hosted virtual machines, or on machines that you host yourself. For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)" and "[About self-hosted runners](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

You can configure your CI workflow to run when a {% data variables.product.product_name %} event occurs (for example, when new code is pushed to your repository), on a set schedule, or when an external event occurs using the repository dispatch webhook.

{% data variables.product.product_name %} runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error. When all CI tests in a workflow pass, the changes you pushed are ready to be reviewed by a team member or merged. When a test fails, one of your changes may have caused the failure.

When you set up CI in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends CI workflows based on the language and framework in your repository. For example, if you use [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} will suggest a template file that installs your Node.js packages and runs your tests. You can use the CI workflow template suggested by {% data variables.product.product_name %}, customize the suggested template, or create your own custom workflow file to run your CI tests.

![Screenshot of suggested continuous integration templates](/assets/images/help/repository/ci-with-actions-template-picker.png)

In addition to helping you set up CI workflows for your project, you can use {% data variables.product.prodname_actions %} to create workflows across the full software development life cycle. For example, you can use actions to deploy, package, or release your project. For more information, see "[About {% data variables.product.prodname_actions %}](/articles/about-github-actions)."

For a definition of common terms, see "[Core concepts for {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)."

### Supported languages

{% data variables.product.product_name %} offers CI workflow templates for a variety of languages and frameworks.

Browse the complete list of CI workflow templates offered by {% data variables.product.product_name %} in the {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` repository on {% data variables.product.product_location %}{% endif %}.

### Notifications for workflow runs

{% data reusables.repositories.workflow-notifications %}

### Status badges for workflow runs

{% data reusables.repositories.actions-workflow-status-badge-into %}

For more information, see "[Configuring a workflow](/articles/configuring-a-workflow)."

### Further reading

- "[Setting up continuous integration using {% data variables.product.prodname_actions %}](/articles/setting-up-continuous-integration-using-github-actions)"
{% if currentVersion == "free-pro-team@latest" %}
- "[Managing billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
