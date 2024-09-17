---
title: About continuous integration with GitHub Actions
intro: 'You can create custom continuous integration (CI) workflows directly in your {% data variables.product.prodname_dotcom %} repository with {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
  - /actions/automating-builds-and-tests/about-continuous-integration
  - /actions/about-github-actions/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About continuous integration

Continuous integration (CI) is a software practice that requires frequently committing code to a shared repository. Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error. Frequent code updates also make it easier to merge changes from different members of a software development team. This is great for developers, who can spend more time writing code and less time debugging errors or resolving merge conflicts.

When you commit code to your repository, you can continuously build and test the code to make sure that the commit doesn't introduce errors. Your tests can include code linters (which check style formatting), security checks, code coverage, functional tests, and other custom checks.

Building and testing your code requires a server. You can build and test updates locally before pushing code to a repository, or you can use a CI server that checks for new code commits in a repository.

## About continuous integration using {% data variables.product.prodname_actions %}

 CI using {% data variables.product.prodname_actions %} offers workflows that can build the code in your repository and run your tests. Workflows can run on {% data variables.product.prodname_dotcom %}-hosted virtual machines, or on machines that you host yourself. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."

You can configure your CI workflow to run when a {% data variables.product.prodname_dotcom %} event occurs (for example, when new code is pushed to your repository), on a set schedule, or when an external event occurs using the repository dispatch webhook.

{% data variables.product.product_name %} runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error. When all CI tests in a workflow pass, the changes you pushed are ready to be reviewed by a team member or merged. When a test fails, one of your changes may have caused the failure.

When you set up CI in your repository, {% data variables.product.product_name %} analyzes the code in your repository and recommends CI workflows based on the language and framework in your repository. For example, if you use [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} will suggest a workflow template that installs your Node.js packages and runs your tests. You can use the CI workflow template suggested by {% data variables.product.product_name %}, customize the suggested workflow template, or create your own custom workflow file to run your CI tests.

In addition to helping you set up CI workflows for your project, you can use {% data variables.product.prodname_actions %} to create workflows across the full software development life cycle. For example, you can use actions to deploy, package, or release your project. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

For a definition of common terms, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)."

## Workflow templates

{% data variables.product.product_name %} offers CI workflow templates for a variety of languages and frameworks.

Browse the complete list of CI workflow templates offered by {% data variables.product.company_short %} in the {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` repository on {% data variables.location.product_location %}{% endif %}.

## Further reading

* "[AUTOTITLE](/actions/use-cases-and-examples/building-and-testing)"{% ifversion fpt or ghec %}
* "[AUTOTITLE](/billing/managing-billing-for-github-actions)"{% endif %}
