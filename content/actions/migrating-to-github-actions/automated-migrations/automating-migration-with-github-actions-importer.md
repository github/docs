---
title: Automating migration with GitHub Actions Importer
intro: 'Use {% data variables.product.prodname_actions_importer %} to plan and automate your migration to {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/migrating-to-github-actions/automating-migration-with-github-actions-importer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

[Legal notice](#legal-notice)

## About {% data variables.product.prodname_actions_importer %}

You can use {% data variables.product.prodname_actions_importer %} to plan and automatically migrate your CI/CD supported pipelines to {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions_importer %} is distributed as a Docker container, and uses a [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) extension to interact with the container.

Any workflow that is converted by the {% data variables.product.prodname_actions_importer %} should be inspected for correctness before using it as a production workload. The goal is to achieve an 80% conversion rate for every workflow, however, the actual conversion rate will depend on the makeup of each individual pipeline that is converted.

## Supported CI platforms

You can use {% data variables.product.prodname_actions_importer %} to migrate from the following platforms:

- Azure DevOps
- Bamboo
- Bitbucket Pipelines
- CircleCI
- GitLab
- Jenkins
- Travis CI

## Prerequisites

{% data variables.product.prodname_actions_importer %} has the following requirements:

{% data reusables.actions.actions-importer-prerequisites %}

### Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

### Updating the {% data variables.product.prodname_actions_importer %} CLI

To ensure you're running the latest version of {% data variables.product.prodname_actions_importer %}, you should regularly run the `update` command:

```bash
gh actions-importer update
```

### Authenticating at the command line

You must configure credentials that allow {% data variables.product.prodname_actions_importer %} to communicate with {% data variables.product.prodname_dotcom %} and your current CI server. You can configure these credentials using environment variables or a `.env.local` file. The environment variables can be configured in an interactive prompt, by running the following command:

```bash
gh actions-importer configure
```

## Using the {% data variables.product.prodname_actions_importer %} CLI

Use the subcommands of `gh actions-importer` to begin your migration to {% data variables.product.prodname_actions %}, including `audit`, `forecast`, `dry-run`, and `migrate`.

### Auditing your existing CI pipelines

The `audit` subcommand can be used to plan your CI/CD migration by analyzing your current CI/CD footprint. This analysis can be used to plan a timeline for migrating to {% data variables.product.prodname_actions %}.

To run an audit, use the following command to determine your available options:

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  bamboo        An audit will output a list of data used in a Bamboo instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

### Forecasting usage

The `forecast` subcommand reviews historical pipeline usage to create a forecast of {% data variables.product.prodname_actions %} usage.

To run a forecast, use the following command to determine your available options:

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  bamboo        Forecasts GitHub Actions usage from historical Bamboo pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

### Testing the migration process

The `dry-run` subcommand can be used to convert a pipeline to its {% data variables.product.prodname_actions %} equivalent, and then write the workflow to your local filesystem.

To perform a dry run, use the following command to determine your available options:

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  bamboo        Convert a Bamboo pipeline to GitHub Actions workflows and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

### Migrating a pipeline to {% data variables.product.prodname_actions %}

The `migrate` subcommand can be used to convert a pipeline to its GitHub Actions equivalent and then create a pull request with the contents.

To run a migration, use the following command to determine your available options:

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  bamboo        Convert a Bamboo pipeline to GitHub Actions workflows and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

## Performing self-serve migrations using IssueOps

You can use {% data variables.product.prodname_actions %} and {% data variables.product.prodname_github_issues %} to run CLI commands for {% data variables.product.prodname_actions_importer %}. This allows you to migrate your CI/CD workflows without installing software on your local machine. This approach is especially useful for organizations that want to enable self-service migrations to {% data variables.product.prodname_actions %}. Once IssueOps is configured, users can open an issue with the relevant template to migrate pipelines to {% data variables.product.prodname_actions %}.

For more information about setting up self-serve migrations with IssueOps, see the [`actions/importer-issue-ops`](https://github.com/actions/importer-issue-ops) template repository.

## Using the {% data variables.product.prodname_actions_importer %} labs repository

The {% data variables.product.prodname_actions_importer %} labs repository contains platform-specific learning paths that teach you how to use {% data variables.product.prodname_actions_importer %} and how to approach migrations to {% data variables.product.prodname_actions %}. You can use this repository to learn how to use {% data variables.product.prodname_actions_importer %} to help plan, forecast, and automate your migration to {% data variables.product.prodname_actions %}.

To learn more, see the [GitHub Actions Importer labs repository](https://github.com/actions/importer-labs/tree/main#readme).

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
