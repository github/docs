---
title: Variables
intro: 'Learn about variables in {% data variables.product.prodname_actions %} workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
---

## About

Variables provide a way to store and reuse non-sensitive configuration information. You can store any configuration data such as compiler flags, usernames, or server names as variables. Variables are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify variables.

You can set your own custom variables or use the default environment variables that {% data variables.product.prodname_dotcom %} sets automatically.

You can set a custom variable in two ways.

* To define an environment variable for use in a single workflow, you can use the `env` key in the workflow file. For more information, see [Defining environment variables for a single workflow](/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#defining-environment-variables-for-a-single-workflow).
* To define a configuration variable across multiple workflows, you can define it at the organization, repository, or environment level. When creating a variable in an organization, you can use a policy to limit access by repository. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories. For more information, see [Defining configuration variables for multiple workflows](/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#defining-configuration-variables-for-multiple-workflows).

> [!WARNING]
> By default, variables render unmasked in your build outputs. If you need greater security for sensitive information, such as passwords, use secrets instead. For more information, see [AUTOTITLE](/actions/security-for-github-actions/security-guides/about-secrets).

For reference documentation, see [AUTOTITLE](/actions/reference/variables-reference).
