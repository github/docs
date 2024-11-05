---
title: Migrating from Azure DevOps with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your Azure DevOps pipelines to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Migration
  - CI
  - CD
shortTitle: Azure DevOps migration
redirect_from:
  - /actions/migrating-to-github-actions/automated-migrations/migrating-from-azure-devops-with-github-actions-importer
---

[Legal notice](#legal-notice)

## About migrating from Azure DevOps with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate Azure DevOps pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

* An Azure DevOps account or organization with projects and pipelines that you want to convert to {% data variables.product.prodname_actions %} workflows.
* Access to create an Azure DevOps {% data variables.product.pat_generic %} for your account or organization.
{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations when migrating from Azure DevOps to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}:

* {% data variables.product.prodname_actions_importer %} requires version 5.0 of the Azure DevOps API, available in either Azure DevOps Services or Azure DevOps Server 2019. Older versions of Azure DevOps Server are not compatible.
* Tasks that are implicitly added to an Azure DevOps pipeline, such as checking out source code, may be added to a {% data variables.product.prodname_actions_importer %} audit as a GUID name. To find the friendly task name for a GUID, you can use the following URL: `https://dev.azure.com/:organization/_apis/distributedtask/tasks/:guid`.

#### Manual tasks

Certain Azure DevOps constructs must be migrated manually from Azure DevOps into {% data variables.product.prodname_actions %} configurations. These include:
* Organization, repository, and environment secrets
* Service connections such as OIDC Connect, {% data variables.product.prodname_github_apps %}, and {% data variables.product.pat_generic_plural %}
* Unknown tasks
* Self-hosted agents
* Environments
* Pre-deployment approvals

For more information on manual migrations, see "[AUTOTITLE](/actions/migrating-to-github-actions/manually-migrating-to-github-actions/migrating-from-azure-pipelines-to-github-actions)."

#### Unsupported tasks

{% data variables.product.prodname_actions_importer %} does not support migrating the following tasks:

* Pre-deployment gates
* Post-deployment gates
* Post-deployment approvals
* Some resource triggers

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with Azure DevOps and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. Create an Azure DevOps {% data variables.product.pat_generic %}. For more information, see [Use {% data variables.product.pat_generic_plural %}](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat) in the Azure DevOps documentation. The token must have the following scopes:

   * Agents Pool: `Read`
   * Build: `Read`
   * Code: `Read`
   * Release: `Read`
   * Service Connections: `Read`
   * Task Groups: `Read`
   * Variable Groups: `Read`

   After creating the token, copy it and save it in a safe location for later use.
1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   * For "Which CI providers are you configuring?", use the arrow keys to select `Azure DevOps`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   * For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the GitHub instance", {% ifversion ghes %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   * For "{% data variables.product.pat_generic_caps %} for Azure DevOps", enter the value for the Azure DevOps {% data variables.product.pat_generic %} that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the Azure DevOps instance", press <kbd>Enter</kbd> to accept the default value (`https://dev.azure.com`).
   * For "Azure DevOps organization name", enter the name for your Azure DevOps organization, and press <kbd>Enter</kbd>.
   * For "Azure DevOps project name", enter the name for your Azure DevOps project, and press <kbd>Enter</kbd>.

   An example of the `configure` command is shown below:

   ```shell
   $ gh actions-importer configure
   ✔ Which CI providers are you configuring?: Azure DevOps
   Enter the following values (leave empty to omit):
   ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
   ✔ Base url of the GitHub instance: https://github.com
   ✔ {% data variables.product.pat_generic_caps %} for Azure DevOps: ***************
   ✔ Base url of the Azure DevOps instance: https://dev.azure.com
   ✔ Azure DevOps organization name: :organization
   ✔ Azure DevOps project name: :project
   Environment variables successfully updated.
   ```

1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `update` CLI command to connect to the {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} and ensure that the container image is updated to the latest version:

   ```shell
   gh actions-importer update
   ```

   The output of the command should be similar to below:

   ```shell
   Updating ghcr.io/actions-importer/cli:latest...
   ghcr.io/actions-importer/cli:latest up-to-date
   ```

## Perform an audit of Azure DevOps

You can use the `audit` command to get a high-level view of all projects in an Azure DevOps organization.

The `audit` command performs the following steps:

1. Fetches all of the projects defined in an Azure DevOps organization.
1. Converts each pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Running the audit command

To perform an audit of an Azure DevOps organization, run the following command in your terminal:

```shell
gh actions-importer audit azure-devops --output-dir tmp/audit
```

### Inspecting the audit results

{% data reusables.actions.gai-inspect-audit %}

## Forecast potential {% data variables.product.prodname_actions %} usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in Azure DevOps.

### Running the forecast command

To perform a forecast of potential {% data variables.product.prodname_actions %} usage, run the following command in your terminal. By default, {% data variables.product.prodname_actions_importer %} includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast azure-devops --output-dir tmp/forecast_reports
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

Additionally, these metrics are defined for each queue of runners in Azure DevOps. This is especially useful if there is a mix of hosted or self-hosted runners, or high or low spec machines, so you can see metrics specific to different types of runners.

## Perform a dry-run migration

You can use the `dry-run` command to convert an Azure DevOps pipeline to an equivalent {% data variables.product.prodname_actions %} workflow. A dry run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

{% data reusables.actions.gai-custom-transformers-rec %}

### Running the dry-run command for a build pipeline

To perform a dry run of migrating your Azure DevOps build pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `pipeline_id` with the ID of the pipeline you are converting.

```shell
gh actions-importer dry-run azure-devops pipeline --pipeline-id :pipeline_id --output-dir tmp/dry-run
```

You can view the logs of the dry run and the converted workflow files in the specified output directory.

### Running the dry-run command for a release pipeline

To perform a dry run of migrating your Azure DevOps release pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `pipeline_id` with the ID of the pipeline you are converting.

```shell
gh actions-importer dry-run azure-devops release --pipeline-id :pipeline_id --output-dir tmp/dry-run
```

You can view the logs of the dry run and the converted workflow files in the specified output directory.

## Perform a production migration

You can use the `migrate` command to convert an Azure DevOps pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow.

### Running the migrate command for a build pipeline

To migrate an Azure DevOps build pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the `target-url` value with the URL for your {% data variables.product.prodname_dotcom %} repository, and `pipeline_id` with the ID of the pipeline you are converting.

```shell
gh actions-importer migrate azure-devops pipeline --pipeline-id :pipeline_id --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate
```

The command's output includes the URL of the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```shell
$ gh actions-importer migrate azure-devops pipeline --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --azure-devops-project my-azure-devops-project
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

### Running the migrate command for a release pipeline

To migrate an Azure DevOps release pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the `target-url` value with the URL for your {% data variables.product.prodname_dotcom %} repository, and `pipeline_id` with the ID of the pipeline you are converting.

```shell
gh actions-importer migrate azure-devops release --pipeline-id :pipeline_id --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate
```

The command's output includes the URL of the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```shell
$ gh actions-importer migrate azure-devops release --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --azure-devops-project my-azure-devops-project
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

{% data reusables.actions.gai-inspect-pull-request %}

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from Azure DevOps.

### Configuration environment variables

{% data reusables.actions.gai-config-environment-variables %}

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your Azure DevOps instance:

* `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a converted workflow (requires the `workflow` scope).
* `GITHUB_INSTANCE_URL`: The URL to the target {% data variables.product.prodname_dotcom %} instance (for example, `https://github.com`).
* `AZURE_DEVOPS_ACCESS_TOKEN`: The {% data variables.product.pat_generic %} used to authenticate with your Azure DevOps instance. This token requires the following scopes:
  * Build: `Read`
  * Agent Pools: `Read`
  * Code: `Read`
  * Release: `Read`
  * Service Connections: `Read`
  * Task Groups: `Read`
  * Variable Groups: `Read`
* `AZURE_DEVOPS_PROJECT`: The project name or GUID to use when migrating a pipeline. If you'd like to perform an audit on all projects, this is optional.
* `AZURE_DEVOPS_ORGANIZATION`: The organization name of your Azure DevOps instance.
* `AZURE_DEVOPS_INSTANCE_URL`: The URL to the Azure DevOps instance, such as `https://dev.azure.com`.

These environment variables can be specified in a `.env.local` file that is loaded by {% data variables.product.prodname_actions_importer %} when it is run.

### Optional arguments

{% data reusables.actions.gai-optional-arguments-intro %}

#### `--source-file-path`

You can use the `--source-file-path` argument with the `forecast`, `dry-run`, or `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead.

For example:

```shell
gh actions-importer dry-run azure-devops pipeline --output-dir ./output/ --source-file-path ./path/to/azure_devops/pipeline.yml
```

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

The `--config-file-path` argument can also be used to specify which repository a converted reusable workflow or composite action should be migrated to.

##### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file as the source file to perform an audit.

```shell
gh actions-importer audit azure-devops pipeline --output-dir ./output/ --config-file-path ./path/to/azure_devops/config.yml
```

To audit an Azure DevOps instance using a configuration file, the configuration file must be in the following format and each `repository_slug` must be unique:

```yaml
source_files:
  - repository_slug: azdo-project/1
    path: file.yml
  - repository_slug: azdo-project/2
    paths: path.yml
```

You can generate the `repository_slug` for a pipeline by combining the Azure DevOps organization name, project name, and the pipeline ID. For example, `my-organization-name/my-project-name/42`.

##### Dry run example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file as the source file to perform a dry run.

The pipeline is selected by matching the `repository_slug` in the configuration file to the value of the `--azure-devops-organization` and `--azure-devops-project` option. The `path` is then used to pull the specified source file.

```shell
gh actions-importer dry-run azure-devops pipeline --output-dir ./output/ --config-file-path ./path/to/azure_devops/config.yml
```

##### Specify the repository of converted reusable workflows and composite actions

{% data variables.product.prodname_actions_importer %} uses the YAML file provided to the `--config-file-path` argument to determine the repository that converted reusable workflows and composite actions are migrated to.

To begin, you should run an audit without the `--config-file-path` argument:

```shell
gh actions-importer audit azure-devops --output-dir ./output/
```

The output of this command will contain a file named `config.yml` that contains a list of all the reusable workflows and composite actions that were converted by {% data variables.product.prodname_actions_importer %}. For example, the `config.yml` file may have the following contents:

```yaml
reusable_workflows:
  - name: my-reusable-workflow.yml
    target_url: https://github.com/octo-org/octo-repo
    ref: main

composite_actions:
  - name: my-composite-action.yml
    target_url: https://github.com/octo-org/octo-repo
    ref: main
```

You can use this file to specify which repository and ref a reusable workflow or composite action should be added to. You can then use the `--config-file-path` argument to provide the `config.yml` file to {% data variables.product.prodname_actions_importer %}. For example, you can use this file when running a `migrate` command to open a pull request for each unique repository defined in the config file:

```shell
gh actions-importer migrate azure-devops pipeline  --config-file-path config.yml --target-url https://github.com/my-org/my-repo
```

### Supported syntax for Azure DevOps pipelines

The following table shows the type of properties that {% data variables.product.prodname_actions_importer %} is currently able to convert.

| Azure Pipelines       | {% data variables.product.prodname_actions %}                        |              Status |
| :-------------------- | :------------------------------------ | :------------------ |
| condition             | <ul><li>`jobs.<job_id>.if`</li><li>`jobs.<job_id>.steps[*].if`</li></ul> |           Supported |
| container             | <ul><li>`jobs.<job_id>.container`</li><li>`jobs.<job_id>.name`</li></ul>                  |           Supported |
| continuousIntegration | <ul><li>`on.<push>.<branches>`</li><li>`on.<push>.<tags>`</li><li>`on.<push>.paths`</li></ul> |           Supported |
| job                   | <ul><li>`jobs.<job_id>`</li></ul> |           Supported |
| pullRequest           | <ul><li>`on.<pull_request>.<branches>`</li><li>`on.<pull_request>.paths`</li></ul> |           Supported |
| stage                 | <ul><li>`jobs`</li></ul> |           Supported |
| steps                 | <ul><li>`jobs.<job_id>.steps`</li></ul> |           Supported |
| strategy              | <ul><li>`jobs.<job_id>.strategy.fail-fast`</li><li>`jobs.<job_id>.strategy.max-parallel`</li><li>`jobs.<job_id>.strategy.matrix`</li></ul>       |           Supported |
| timeoutInMinutes      | <ul><li>`jobs.<job_id>.timeout-minutes`</li></ul> |           Supported |
| variables             | <ul><li>`env`</li><li>`jobs.<job_id>.env`</li><li>`jobs.<job_id>.steps.env`</li></ul> |           Supported |
| manual deployment     | <ul><li>`jobs.<job_id>.environment`</li></ul> | Partially supported |
| pool                  | <ul><li>`runners`</li><li>`self hosted runners`</li></ul> | Partially supported |
| services              | <ul><li>`jobs.<job_id>.services`</li></ul> | Partially supported |
| strategy              | <ul><li>`jobs.<job_id>.strategy`</li></ul> | Partially supported |
| triggers              | <ul><li>`on`</li></ul>                        | Partially supported |
| pullRequest           | <ul><li>`on.<pull_request>.<tags>`</li></ul>  |         Unsupported |
| schedules             | <ul><li>`on.schedule`</li><li>`on.workflow_run`</li></ul> |         Unsupported |
| triggers              | <ul><li>`on.<event_name>.types`</li></ul>     |         Unsupported |

For more information about supported Azure DevOps tasks, see the [`github/gh-actions-importer` repository](https://github.com/github/gh-actions-importer/blob/main/docs/azure_devops/index.md).

### Environment variable mapping

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default Azure DevOps environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| Azure Pipelines                             | {% data variables.product.prodname_actions %}                                      |
| :------------------------------------------ | :-------------------------------------------------- |
| {% raw %}`$(Agent.BuildDirectory)`{% endraw %}                   | {% raw %}`${{ runner.workspace }}`{% endraw %}                           |
| {% raw %}`$(Agent.HomeDirectory)`{% endraw %}                    | {% raw %}`${{ env.HOME }}`{% endraw %}                                   |
| {% raw %}`$(Agent.JobName)`{% endraw %}                          | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(Agent.OS)`{% endraw %}                               | {% raw %}`${{ runner.os }}`{% endraw %}                                  |
| {% raw %}`$(Agent.ReleaseDirectory)`{% endraw %}                 | {% raw %}`${{ github.workspace}}`{% endraw %}                            |
| {% raw %}`$(Agent.RootDirectory)`{% endraw %}                    | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(Agent.ToolsDirectory)`{% endraw %}                   | {% raw %}`${{ runner.tool_cache }}`{% endraw %}                          |
| {% raw %}`$(Agent.WorkFolder)`{% endraw %}                       | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(Build.ArtifactStagingDirectory)`{% endraw %}         | {% raw %}`${{ runner.temp }}`{% endraw %}                                |
| {% raw %}`$(Build.BinariesDirectory)`{% endraw %}                | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(Build.BuildId)`{% endraw %}                          | {% raw %}`${{ github.run_id }}`{% endraw %}                              |
| {% raw %}`$(Build.BuildNumber)`{% endraw %}                      | {% raw %}`${{ github.run_number }}`{% endraw %}                          |
| {% raw %}`$(Build.DefinitionId)`{% endraw %}                     | {% raw %}`${{ github.workflow }}`{% endraw %}                            |
| {% raw %}`$(Build.DefinitionName)`{% endraw %}                   | {% raw %}`${{ github.workflow }}`{% endraw %}                            |
| {% raw %}`$(Build.PullRequest.TargetBranch)`{% endraw %}         | {% raw %}`${{ github.base_ref }}`{% endraw %}                            |
| {% raw %}`$(Build.PullRequest.TargetBranch.Name)`{% endraw %}    | {% raw %}`${{ github.base_ref }}`{% endraw %}                            |
| {% raw %}`$(Build.QueuedBy)`{% endraw %}                         | {% raw %}`${{ github.actor }}`{% endraw %}                               |
| {% raw %}`$(Build.Reason)`{% endraw %}                           | {% raw %}`${{ github.event_name }}`{% endraw %}                          |
| {% raw %}`$(Build.Repository.LocalPath)`{% endraw %}             | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(Build.Repository.Name)`{% endraw %}                  | {% raw %}`${{ github.repository }}`{% endraw %}                          |
| {% raw %}`$(Build.Repository.Provider)`{% endraw %}              | {% raw %}`GitHub`{% endraw %}                                            |
| {% raw %}`$(Build.Repository.Uri)`{% endraw %}                   | {% raw %}`${{ github.server.url }}/${{ github.repository }}`{% endraw %} |
| {% raw %}`$(Build.RequestedFor)`{% endraw %}                     | {% raw %}`${{ github.actor }}`{% endraw %}                               |
| {% raw %}`$(Build.SourceBranch)`{% endraw %}                     | {% raw %}`${{ github.ref }}`{% endraw %}                                 |
| {% raw %}`$(Build.SourceBranchName)`{% endraw %}                 | {% raw %}`${{ github.ref }}`{% endraw %}                                 |
| {% raw %}`$(Build.SourceVersion)`{% endraw %}                    | {% raw %}`${{ github.sha }}`{% endraw %}                                 |
| {% raw %}`$(Build.SourcesDirectory)`{% endraw %}                 | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(Build.StagingDirectory)`{% endraw %}                 | {% raw %}`${{ runner.temp }}`{% endraw %}                                |
| {% raw %}`$(Pipeline.Workspace)`{% endraw %}                     | {% raw %}`${{ runner.workspace }}`{% endraw %}                           |
| {% raw %}`$(Release.DefinitionEnvironmentId)`{% endraw %}        | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(Release.DefinitionId)`{% endraw %}                   | {% raw %}`${{ github.workflow }}`{% endraw %}                            |
| {% raw %}`$(Release.DefinitionName)`{% endraw %}                 | {% raw %}`${{ github.workflow }}`{% endraw %}                            |
| {% raw %}`$(Release.Deployment.RequestedFor)`{% endraw %}        | {% raw %}`${{ github.actor }}`{% endraw %}                               |
| {% raw %}`$(Release.DeploymentID)`{% endraw %}                   | {% raw %}`${{ github.run_id }}`{% endraw %}                              |
| {% raw %}`$(Release.EnvironmentId)`{% endraw %}                 | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(Release.EnvironmentName)`{% endraw %}                | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(Release.Reason)`{% endraw %}                        | {% raw %}`${{ github.event_name }}`{% endraw %}                          |
| {% raw %}`$(Release.RequestedFor)`{% endraw %}                  | {% raw %}`${{ github.actor }}`{% endraw %}                               |
| {% raw %}`$(System.ArtifactsDirectory)`{% endraw %}              | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(System.DefaultWorkingDirectory)`{% endraw %}         | {% raw %}`${{ github.workspace }}`{% endraw %}                           |
| {% raw %}`$(System.HostType)`{% endraw %}                        | {% raw %}`build`{% endraw %}                                             |
| {% raw %}`$(System.JobId)`{% endraw %}                           | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(System.JobName)`{% endraw %}                         | {% raw %}`${{ github.job }}`{% endraw %}                                 |
| {% raw %}`$(System.PullRequest.PullRequestId)`{% endraw %}       | {% raw %}`${{ github.event.number }}`{% endraw %}                        |
| {% raw %}`$(System.PullRequest.PullRequestNumber)`{% endraw %}   | {% raw %}`${{ github.event.number }}`{% endraw %}                        |
| {% raw %}`$(System.PullRequest.SourceBranch)`{% endraw %}        | {% raw %}`${{ github.ref }}`{% endraw %}                                 |
| {% raw %}`$(System.PullRequest.SourceRepositoryUri)`{% endraw %} | {% raw %}`${{ github.server.url }}/${{ github.repository }}`{% endraw %} |
| {% raw %}`$(System.PullRequest.TargetBranch)`{% endraw %}        | {% raw %}`${{ github.event.base.ref }}`{% endraw %}                      |
| {% raw %}`$(System.PullRequest.TargetBranchName)`{% endraw %}    | {% raw %}`${{ github.event.base.ref }}`{% endraw %}                      |
| {% raw %}`$(System.StageAttempt)`{% endraw %}                    | {% raw %}`${{ github.run_number }}`{% endraw %}                          |
| {% raw %}`$(System.TeamFoundationCollectionUri)`{% endraw %}     | {% raw %}`${{ github.server.url }}/${{ github.repository }}`{% endraw %} |
| {% raw %}`$(System.WorkFolder)`{% endraw %}                      | {% raw %}`${{ github.workspace }}`{% endraw %}                           |

### Templates

You can transform Azure DevOps templates with {% data variables.product.prodname_actions_importer %}.

#### Limitations

{% data variables.product.prodname_actions_importer %} is able to transform Azure DevOps templates with some limitations.

* Azure DevOps templates used under the `stages`, `deployments`, and `jobs` keys are converted into reusable workflows in {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."
* Azure DevOps templates used under the `steps` key are converted into composite actions. For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-composite-action)."
* If you currently have job templates that reference other job templates, {% data variables.product.prodname_actions_importer %} converts the templates into reusable workflows. Because reusable workflows cannot reference other reusable workflows, this is invalid syntax in {% data variables.product.prodname_actions %}. You must manually correct nested reusable workflows.
* If a template references an external Azure DevOps organization or {% data variables.product.prodname_dotcom %} repository, you must use the `--credentials-file` option to provide credentials to access this template. For more information, see "[AUTOTITLE](/actions/migrating-to-github-actions/automated-migrations/supplemental-arguments-and-settings#using-a-credentials-file-for-authentication)."
* You can dynamically generate YAML using `each` expressions with the following caveats:
  * Nested `each` blocks are not supported and cause the parent `each` block to be unsupported.
  * `each` and contained `if` conditions are evaluated at transformation time, because {% data variables.product.prodname_actions %} does not support this style of insertion.
  * `elseif` blocks are unsupported. If this functionality is required, you must manually correct them.
  * Nested `if` blocks are supported, but `if/elseif/else` blocks nested under an `if` condition are not.
  * `if` blocks that use predefined Azure DevOps variables are not supported.

#### Supported templates

{% data variables.product.prodname_actions_importer %} supports the templates listed in the table below.

| Azure Pipelines               | {% data variables.product.prodname_actions %}                        |              Status |
| :---------------------------- | :------------------------------------ | ------------------: |
| Extending from a template     | `Reusable workflow`                   |           Supported |
| Job templates                 | `Reusable workflow`                   |           Supported |
| Stage templates               | `Reusable workflow`                   |           Supported |
| Step templates                | `Composite action`                    |           Supported |
| Task groups in classic editor | Varies                                |           Supported |
| Templates in a different Azure DevOps organization, project, or repository    | Varies                              |           Supported |
| Templates in a {% data variables.product.prodname_dotcom %} repository | Varies                              |           Supported |
| Variable templates            | `env`                                 |           Supported |
| Conditional insertion         | `if` conditions on job/steps          | Partially supported |
| Iterative insertion           | Not applicable                        | Partially supported |
| Templates with parameters     | Varies                                | Partially supported |

#### Template file path names

{% data variables.product.prodname_actions_importer %} can extract templates with relative or dynamic file paths with variable, parameter, and iterative expressions in the file name. However, there must be a default value set.

##### Variable file path name example

```yaml
# File: azure-pipelines.yml
variables:
- template: 'templates/vars.yml'

steps:
- template: "./templates/${{ variables.one }}"
```

```yaml
# File: templates/vars.yml
variables:
  one: 'simple_step.yml'
```

##### Parameter file path name example

```yaml
parameters:
- name: template
  type: string
  default: simple_step.yml

steps:
- template: "./templates/{% raw %}${{ parameters.template }}{% endraw %}"
```

##### Iterative file path name example

```yaml
parameters:
- name: steps
  type: object
  default:
  - build_step
  - release_step
steps:
- {% raw %}${{ each step in parameters.steps }}{% endraw %}:
    - template: "${{ step }}-variables.yml"
```

#### Template parameters

{% data variables.product.prodname_actions_importer %} supports the parameters listed in the table below.

| Azure Pipelines       | {% data variables.product.prodname_actions %}                              |              Status   |
| :-------------------- | :-----------------------------------------  | :-------------------  |
| string                | `inputs.string`                             |           Supported   |
| number                | `inputs.number`                             |           Supported   |
| boolean               | `inputs.boolean`                            |           Supported   |
| object                | `inputs.string` with `fromJSON` expression  | Partially supported   |
| step                  | `step`                                      | Partially supported  |
| stepList              | `step`                                      | Partially supported  |
| job                   | `job`                                       | Partially supported |
| jobList               | `job`                                       | Partially supported |
| deployment            | `job`                                       | Partially supported |
| deploymentList        | `job`                                       | Partially supported |
| stage                 | `job`                                       | Partially supported |
| stageList             | `job`                                       | Partially supported |

{% note %}

**Note:** A template used under the `step` key with this parameter type is only serialized as a composite action if the steps are used at the beginning or end of the template steps. A template used under the `stage`, `deployment`, and `job` keys with this parameter type are not transformed into a reusable workflow, and instead are serialized as a standalone workflow.

{% endnote %}

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
