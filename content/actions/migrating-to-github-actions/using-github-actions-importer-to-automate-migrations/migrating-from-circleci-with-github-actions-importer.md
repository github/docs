---
title: Migrating from CircleCI with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your CircleCI pipelines to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Migration
  - CI
  - CD
shortTitle: CircleCI migration
redirect_from:
  - /actions/migrating-to-github-actions/automated-migrations/migrating-from-circleci-with-github-actions-importer
---

[Legal notice](#legal-notice)

## About migrating from CircleCI with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate CircleCI pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

* A CircleCI account or organization with projects and pipelines that you want to convert to {% data variables.product.prodname_actions %} workflows.
* Access to create a CircleCI personal API token for your account or organization.
{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations when migrating from CircleCI to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}:

* Automatic caching in between jobs of different workflows is not supported.
* The `audit` command is only supported when using an organization account. However, the `dry-run` and `migrate` commands can be used with an organization or user account.

#### Manual tasks

Certain CircleCI constructs must be migrated manually. These include:

* Contexts
* Project-level environment variables
* Unknown job properties
* Unknown orbs

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with CircleCI and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. Create a CircleCI personal API token. For more information, see [Managing API Tokens](https://circleci.com/docs/managing-api-tokens/#creating-a-personal-api-token) in the CircleCI documentation.

   After creating the token, copy it and save it in a safe location for later use.
1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   * For "Which CI providers are you configuring?", use the arrow keys to select `CircleCI`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   * For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the GitHub instance", {% ifversion ghes %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   * For "{% data variables.product.pat_generic_caps %} for CircleCI", enter the value for the CircleCI personal API token that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the CircleCI instance", press <kbd>Enter</kbd> to accept the default value (`https://circleci.com`).
   * For "CircleCI organization name", enter the name for your CircleCI organization, and press <kbd>Enter</kbd>.

   An example of the `configure` command is shown below:

   ```shell
   $ gh actions-importer configure
   ✔ Which CI providers are you configuring?: CircleCI
   Enter the following values (leave empty to omit):
   ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
   ✔ Base url of the GitHub instance: https://github.com
   ✔ {% data variables.product.pat_generic_caps %} for CircleCI: ********************
   ✔ Base url of the CircleCI instance: https://circleci.com
   ✔ CircleCI organization name: mycircleciorganization
   Environment variables successfully updated.
   ```

1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `update` CLI command to connect to {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} and ensure that the container image is updated to the latest version:

   ```shell
   gh actions-importer update
   ```

   The output of the command should be similar to below:

   ```shell
   Updating ghcr.io/actions-importer/cli:latest...
   ghcr.io/actions-importer/cli:latest up-to-date
   ```

## Perform an audit of CircleCI

You can use the `audit` command to get a high-level view of all projects in a CircleCI organization.

The `audit` command performs the following steps:

1. Fetches all of the projects defined in a CircleCI organization.
1. Converts each pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Running the audit command

To perform an audit of a CircleCI organization, run the following command in your terminal:

```shell
gh actions-importer audit circle-ci --output-dir tmp/audit
```

### Inspecting the audit results

{% data reusables.actions.gai-inspect-audit %}

## Forecast potential {% data variables.product.prodname_actions %} usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in CircleCI.

### Running the forecast command

To perform a forecast of potential {% data variables.product.prodname_actions %} usage, run the following command in your terminal. By default, {% data variables.product.prodname_actions_importer %} includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast circle-ci --output-dir tmp/forecast_reports
```

### Inspecting the forecast report

The `forecast_report.md` file in the specified output directory contains the results of the forecast.

Listed below are some key terms that can appear in the forecast report:

* The **job count** is the total number of completed jobs.
* The **pipeline count** is the number of unique pipelines used.
* **Execution time** describes the amount of time a runner spent on a job. This metric can be used to help plan for the cost of {% data variables.product.prodname_dotcom %}-hosted runners.

  This metric is correlated to how much you should expect to spend in {% data variables.product.prodname_actions %}. This will vary depending on the hardware used for these minutes. You can use the [{% data variables.product.prodname_actions %} pricing calculator](https://github.com/pricing/calculator) to estimate the costs.
* **Queue time** metrics describe the amount of time a job spent waiting for a runner to be available to execute it.
* **Concurrent jobs** metrics describe the amount of jobs running at any given time. This metric can be used to define the number of runners you should configure.

Additionally, these metrics are defined for each queue of runners in CircleCI. This is especially useful if there is a mix of hosted or self-hosted runners, or high or low spec machines, so you can see metrics specific to different types of runners.

## Perform a dry-run migration of a CircleCI pipeline

You can use the `dry-run` command to convert a CircleCI pipeline to an equivalent {% data variables.product.prodname_actions %} workflow. A dry-run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

To perform a dry run of migrating your CircleCI project to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `my-circle-ci-project` with the name of your CircleCI project.

```shell
gh actions-importer dry-run circle-ci --output-dir tmp/dry-run --circle-ci-project my-circle-ci-project
```

You can view the logs of the dry run and the converted workflow files in the specified output directory.

{% data reusables.actions.gai-custom-transformers-rec %}

## Perform a production migration of a CircleCI pipeline

You can use the `migrate` command to convert a CircleCI pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow.

### Running the migrate command

To migrate a CircleCI pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the `target-url` value with the URL for your {% data variables.product.prodname_dotcom %} repository, and `my-circle-ci-project` with the name of your CircleCI project.

```shell
gh actions-importer migrate circle-ci --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --circle-ci-project my-circle-ci-project
```

The command's output includes the URL to the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```shell
$ gh actions-importer migrate circle-ci --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --circle-ci-project my-circle-ci-project
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

{% data reusables.actions.gai-inspect-pull-request %}

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from CircleCI.

### Using environment variables

{% data reusables.actions.gai-config-environment-variables %}

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your CircleCI instance:

* `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a converted workflow (requires `repo` and `workflow` scopes).
* `GITHUB_INSTANCE_URL`: The URL to the target {% data variables.product.prodname_dotcom %} instance (for example, `https://github.com`).
* `CIRCLE_CI_ACCESS_TOKEN`: The CircleCI personal API token used to authenticate with your CircleCI instance.
* `CIRCLE_CI_INSTANCE_URL`: The URL to the CircleCI instance (for example, `https://circleci.com`). If the variable is left unset, `https://circleci.com` is used as the default value.
* `CIRCLE_CI_ORGANIZATION`: The organization name of your CircleCI instance.
* `CIRCLE_CI_PROVIDER`: The location where your pipeline's source file is stored (such as `github`). Currently, only {% data variables.product.prodname_dotcom %} is supported.
* `CIRCLE_CI_SOURCE_GITHUB_ACCESS_TOKEN` (Optional): The {% data variables.product.pat_v1 %} used to authenticate with your source {% data variables.product.prodname_dotcom %} instance (requires `repo` scope). If not provided, the value of `GITHUB_ACCESS_TOKEN` is used instead.
* `CIRCLE_CI_SOURCE_GITHUB_INSTANCE_URL` (Optional): The URL to the source {% data variables.product.prodname_dotcom %} instance. If not provided, the value of `GITHUB_INSTANCE_URL` is used instead.

These environment variables can be specified in a `.env.local` file that is loaded by {% data variables.product.prodname_actions_importer %} when it is run.

### Optional arguments

{% data reusables.actions.gai-optional-arguments-intro %}

#### `--source-file-path`

You can use the `--source-file-path` argument with the `forecast`, `dry-run`, or `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead.

For example:

```shell
gh actions-importer dry-run circle-ci --output-dir ./output/ --source-file-path ./path/to/.circleci/config.yml
```

If you would like to supply multiple source files when running the `forecast` subcommand, you can use pattern matching in the file path value. For example, `gh forecast --source-file-path ./tmp/previous_forecast/jobs/*.json` supplies {% data variables.product.prodname_actions_importer %} with any source files that match the `./tmp/previous_forecast/jobs/*.json` file path.

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

The `--config-file-path` argument can also be used to specify which repository a converted composite action should be migrated to.

##### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file to perform an audit.

```bash
gh actions-importer audit circle-ci --output-dir ./output/ --config-file-path ./path/to/circle-ci/config.yml
```

To audit a CircleCI instance using a config file, the config file must be in the following format, and each `repository_slug` must be unique:

```yaml
source_files:
  - repository_slug: circle-org-name/circle-project-name
    path: path/to/.circleci/config.yml
  - repository_slug: circle-org-name/some-other-circle-project-name
    path: path/to/.circleci/config.yml
```

##### Dry run example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file as the source file to perform a dry run.

The pipeline is selected by matching the `repository_slug` in the config file to the value of the `--circle-ci-organization` and `--circle-ci-project` options. The `path` is then used to pull the specified source file.

```bash
gh actions-importer dry-run circle-ci --circle-ci-project circle-org-name/circle-project-name --output-dir ./output/ --config-file-path ./path/to/circle-ci/config.yml
```

##### Specify the repository of converted composite actions

{% data variables.product.prodname_actions_importer %} uses the YAML file provided to the `--config-file-path` argument to determine the repository that converted composite actions are migrated to.

To begin, you should run an audit without the `--config-file-path` argument:

```bash
gh actions-importer audit circle-ci --output-dir ./output/
```

The output of this command will contain a file named `config.yml` that contains a list of all the composite actions that were converted by {% data variables.product.prodname_actions_importer %}. For example, the `config.yml` file may have the following contents:

```yaml
composite_actions:
  - name: my-composite-action.yml
    target_url: https://github.com/octo-org/octo-repo
    ref: main
```

You can use this file to specify which repository and ref a reusable workflow or composite action should be added to. You can then use the `--config-file-path` argument to provide the `config.yml` file to {% data variables.product.prodname_actions_importer %}. For example, you can use this file when running a `migrate` command to open a pull request for each unique repository defined in the config file:

```bash
gh actions-importer migrate circle-ci --circle-ci-project my-project-name --output-dir output/ --config-file-path config.yml --target-url https://github.com/my-org/my-repo
```

#### `--include-from`

You can use the `--include-from` argument with the `audit` subcommand.

The `--include-from` argument specifies a file that contains a line-delimited list of repositories to include in the audit of a CircleCI organization. Any repositories that are not included in the file are excluded from the audit.

For example:

```bash
gh actions-importer audit circle-ci --output-dir ./output/ --include-from repositories.txt
```

The file supplied for this parameter must be a line-delimited list of repositories, for example:

```text
repository_one
repository_two
repository_three
```

### Supported syntax for CircleCI pipelines

The following table shows the type of properties that {% data variables.product.prodname_actions_importer %} is currently able to convert.

| CircleCI Pipelines  | GitHub Actions                     |              Status |
| :------------------ | :--------------------------------- | :------------------ |
| cron triggers       | <ul><li>`on.schedule`</li></ul>    |           Supported |
| environment         | <ul><li>`env`</li><li>`jobs.<job_id>.env`</li><li>`jobs.<job_id>.steps.env`</li></ul>          |           Supported |
| executors           | <ul><li>`runs-on`</li></ul>                          |           Supported |
| jobs                | <ul><li>`jobs`</li></ul>                             |           Supported |
| job                 | <ul><li>`jobs.<job_id>`</li><li>`jobs.<job_id>.name`</li></ul> |           Supported |
| matrix              | <ul><li>`jobs.<job_id>.strategy`</li><li>`jobs.<job_id>.strategy.matrix`</li></ul>    |           Supported |
| parameters          | <ul><li>`env`</li><li>`workflow-dispatch.inputs`</li></ul>  |           Supported |
| steps               | <ul><li>`jobs.<job_id>.steps`</li></ul>              |           Supported |
| when, unless        | <ul><li>`jobs.<job_id>.if`</li></ul>                 |           Supported |
| triggers            | <ul><li>`on`</li></ul>                               |           Supported |
| executors           | <ul><li>`container`</li><li>`services`</li></ul>     | Partially Supported |
| orbs                | <ul><li>`actions`</li></ul>                          | Partially Supported |
| executors           | <ul><li>`self hosted runners`</li></ul>              |         Unsupported |
| setup               | Not applicable                                       |         Unsupported |
| version             | Not applicable                                       |         Unsupported |

For more information about supported CircleCI concept and orb mappings, see the [`github/gh-actions-importer` repository](https://github.com/github/gh-actions-importer/blob/main/docs/circle_ci/index.md).

### Environment variable mapping

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default CircleCI environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| CircleCI                              | GitHub Actions                                 |
| :------------------------------------ | :--------------------------------------------- |
| `CI`                                  | {% raw %}`$CI`{% endraw %}                                       |
| `CIRCLE_BRANCH`                       | {% raw %}`${{ github.ref }}`{% endraw %}                         |
| `CIRCLE_JOB`                          | {% raw %}`${{ github.job }}`{% endraw %}                         |
| `CIRCLE_PR_NUMBER`                    | {% raw %}`${{ github.event.number }}`{% endraw %}                |
| `CIRCLE_PR_REPONAME`                  | {% raw %}`${{ github.repository }}`{% endraw %}                  |
| `CIRCLE_PROJECT_REPONAME`             | {% raw %}`${{ github.repository }}`{% endraw %}                  |
| `CIRCLE_SHA1`                         | {% raw %}`${{ github.sha }}`{% endraw %}                         |
| `CIRCLE_TAG`                          | {% raw %}`${{ github.ref }}`{% endraw %}                         |
| `CIRCLE_USERNAME`                     | {% raw %}`${{ github.actor }}`{% endraw %}                        |
| `CIRCLE_WORKFLOW_ID`                  | {% raw %}`${{ github.run_number }}`{% endraw %}                  |
| `CIRCLE_WORKING_DIRECTORY`            | {% raw %}`${{ github.workspace }}`{% endraw %}                   |
| `<< pipeline.id >>`                   | {% raw %}`${{ github.workflow }}`{% endraw %}                    |
| `<< pipeline.number >>`               | {% raw %}`${{ github.run_number }}`{% endraw %}                  |
| `<< pipeline.project.git_url >>`      | `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY`                          |
| `<< pipeline.project.type >>`         | `github`                                                         |
| `<< pipeline.git.tag >>`              | {% raw %}`${{ github.ref }}`{% endraw %}                         |
| `<< pipeline.git.branch >>`           | {% raw %}`${{ github.ref }}`{% endraw %}                         |
| `<< pipeline.git.revision >>`         | {% raw %}`${{ github.event.pull_request.head.sha }}`{% endraw %} |
| `<< pipeline.git.base_revision >>`    | {% raw %}`${{ github.event.pull_request.base.sha }}`{% endraw %} |

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
