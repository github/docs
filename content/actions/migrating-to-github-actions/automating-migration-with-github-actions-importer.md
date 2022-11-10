---
title: Automating migration with GitHub Actions Importer
intro: 'Use {% data variables.product.prodname_actions_importer %} to plan and automate your migration to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: Automate migration with {% data variables.product.prodname_actions_importer %}
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

[Legal notice](#legal-notice)

{% note %}

**Note**: {% data variables.product.prodname_actions_importer %} is currently available as a public preview. Visit the [sign up page](https://github.com/features/actions-importer/signup) to request access to the preview. Once you are granted access you'll be able to use the `gh-actions-importer` CLI extension

{% endnote %}

## About {% data variables.product.prodname_actions_importer %}

You can use {% data variables.product.prodname_actions_importer %} to plan and automatically migrate your CI/CD pipelines to {% data variables.product.prodname_actions %} from Azure DevOps, CircleCI, GitLab, Jenkins, and Travis CI.

{% data variables.product.prodname_actions_importer %} is distributed as a Docker container, and uses a [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) extension to interact with the container.

Any workflow that is converted by the {% data variables.product.prodname_actions_importer %} should be inspected for correctness before using it as a production workload. The goal is to achieve an 80% conversion rate for every workflow, however, the actual conversion rate will depend on the makeup of each individual pipeline that is converted.

## Supported CI platforms

You can use {% data variables.product.prodname_actions_importer %} to migrate from the following platforms:

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Once you are granted access to the preview, you will be able to access further reference documentation for each of the supported platforms.

## Prerequisites

{% data variables.product.prodname_actions_importer %} has the following requirements:

- You must have been granted access to the public preview for the {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Use a {% data variables.product.pat_generic %} with the `read:packages` scope enabled.
{%- else %}
- You must have credentials to authenticate to the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}. For more information, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)."
{% endif %}
- An environment where you can run Linux-based containers, and can install the necessary tools.
  - Docker is [installed](https://docs.docker.com/get-docker/) and running.
  - [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) is installed.

  {% note %}

  **Note**: The {% data variables.product.prodname_actions_importer %} container and CLI do not need to be installed on the same server as your CI platform.

  {% endnote %}

### Installing the {% data variables.product.prodname_actions_importer %} CLI extension

1. Install the {% data variables.product.prodname_actions_importer %} CLI extension:

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Verify that the extension is installed:

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Updating the {% data variables.product.prodname_actions_importer %} CLI

To ensure you're running the latest version of {% data variables.product.prodname_actions_importer %}, you should regularly run the `update` command:

```bash
$ gh actions-importer update
```

You must be authenticated with the {% data variables.product.prodname_container_registry %} for this command to be successful. Alternatively, you can provide credentials using the `--username` and `--password-stdin` parameters:

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Authenticating at the command line

You must configure credentials that allow {% data variables.product.prodname_actions_importer %} to communicate with {% data variables.product.prodname_dotcom %} and your current CI server. You can configure these credentials using environment variables or a `.env.local` file. The environment variables can be configured in an interactive prompt, by running the following command:

```bash
$ gh actions-importer configure
```

Once you are granted access to the preview, you will be able to access further reference documentation about using environment variables.

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
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Once you are granted access to the preview, you will be able to access further reference documentation about running an audit.

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
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Once you are granted access to the preview, you will be able to access further reference documentation about running a forecast.

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
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Once you are granted access to the preview, you will be able to access further reference documentation about performing a dry run.

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
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Once you are granted access to the preview, you will be able to access further reference documentation about running a migration.

## Legal notice

Portions have been adapted from https://github.com/github/gh-actions-importer/ under the MIT license:

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
