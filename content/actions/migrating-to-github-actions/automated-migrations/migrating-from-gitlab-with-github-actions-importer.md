---
title: Migrating from GitLab with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your GitLab pipelines to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Migration
  - CI
  - CD
shortTitle: GitLab migration
---

[Legal notice](#legal-notice)

## About migrating from GitLab with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate GitLab pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

- A GitLab account or organization with pipelines and jobs that you want to convert to {% data variables.product.prodname_actions %} workflows.
- Access to create a GitLab {% data variables.product.pat_generic %} for your account or organization.
{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations on migrating processes automatically from GitLab pipelines to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}.

- Automatic caching in between jobs of different workflows is not supported.
- The `audit` command is only supported when using an organization account. However, the `dry-run` and `migrate` commands can be used with an organization or user account.

#### Manual tasks

Certain GitLab constructs must be migrated manually. These include:

- Masked project or group variable values
- Artifact reports

For more information on manual migrations, see "[AUTOTITLE](/actions/migrating-to-github-actions/manually-migrating-to-github-actions/migrating-from-gitlab-cicd-to-github-actions)."

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with GitLab and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. Create a GitLab {% data variables.product.pat_generic %}. For more information, see [{% data variables.product.pat_generic_caps_plural %}](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token) in the GitLab documentation.

   Your token must have the `read_api` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   - For "Which CI providers are you configuring?", use the arrow keys to select `GitLab`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   - For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   - For "Base url of the GitHub instance", {% ifversion ghes or ghae %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   - For "Private token for GitLab", enter the value for the GitLab {% data variables.product.pat_generic %} that you created earlier, and press <kbd>Enter</kbd>.
   - For "Base url of the GitLab instance", enter the URL of your GitLab instance, and press <kbd>Enter</kbd>.

   An example of the output of the `configure` command is shown below.

   ```shell
   $ gh actions-importer configure
   ✔ Which CI providers are you configuring?: GitLab
   Enter the following values (leave empty to omit):
   ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
   ✔ Base url of the GitHub instance: https://github.com
   ✔ Private token for GitLab: ***************
   ✔ Base url of the GitLab instance: http://localhost
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

## Perform an audit of GitLab

You can use the `audit` command to get a high-level view of all pipelines in a GitLab server.

The `audit` command performs the following steps:

1. Fetches all of the projects defined in a GitLab server.
1. Converts each pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Prerequisites for the audit command

In order to use the `audit` command, you must have a {% data variables.product.pat_generic %} configured with a GitLab organization account.

### Running the audit command

To perform an audit of a GitLab server, run the following command in your terminal, replacing `my-gitlab-namespace` with the namespace or group you are auditing:

```shell
gh actions-importer audit gitlab --output-dir tmp/audit --namespace my-gitlab-namespace
```

### Inspecting the audit results

{% data reusables.actions.gai-inspect-audit %}

## Forecast potential build runner usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in your GitLab server.

### Running the forecast command

To perform a forecast of potential {% data variables.product.prodname_actions %} usage, run the following command in your terminal, replacing `my-gitlab-namespace` with the namespace or group you are forecasting. By default, {% data variables.product.prodname_actions_importer %} includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast gitlab --output-dir tmp/forecast --namespace my-gitlab-namespace
```

### Forecasting an entire namespace

To forecast an entire namespace and all of its subgroups, you must specify each subgroup in the `--namespace` argument or `NAMESPACE` environment variable.

For example:

```shell
gh actions-importer forecast gitlab --namespace my-gitlab-namespace my-gitlab-namespace/subgroup-one my-gitlab-namespace/subgroup-two ...
```

### Inspecting the forecast report

The `forecast_report.md` file in the specified output directory contains the results of the forecast.

Listed below are some key terms that can appear in the forecast report:

- The **job count** is the total number of completed jobs.
- The **pipeline count** is the number of unique pipelines used.
- **Execution time** describes the amount of time a runner spent on a job. This metric can be used to help plan for the cost of {% data variables.product.prodname_dotcom %}-hosted runners.
  - This metric is correlated to how much you should expect to spend in {% data variables.product.prodname_actions %}. This will vary depending on the hardware used for these minutes. You can use the [{% data variables.product.prodname_actions %} pricing calculator](https://github.com/pricing/calculator) to estimate the costs.
- **Queue time** metrics describe the amount of time a job spent waiting for a runner to be available to execute it.
- **Concurrent jobs** metrics describe the amount of jobs running at any given time. This metric can be used to define the number of runners you should configure.

Additionally, these metrics are defined for each queue of runners in GitLab. This is especially useful if there is a mix of hosted or self-hosted runners, or high or low spec machines, so you can see metrics specific to different types of runners.

## Perform a dry-run migration of a GitLab pipeline

You can use the `dry-run` command to convert a GitLab pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.

### Running the dry-run command

You can use the `dry-run` command to convert a GitLab pipeline to an equivalent {% data variables.product.prodname_actions %} workflow. A dry-run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

To perform a dry run of migrating your GitLab pipelines to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `my-gitlab-project` with the URL of your GitLab project, and `my-gitlab-namespace` with the namespace or group you are performing a dry run for.

```shell
gh actions-importer dry-run gitlab --output-dir tmp/dry-run --namespace my-gitlab-namespace --project my-gitlab-project
```

### Inspecting the converted workflows

You can view the logs of the dry run and the converted workflow files in the specified output directory.

{% data reusables.actions.gai-custom-transformers-rec %}

## Perform a production migration of a GitLab pipeline

You can use the `migrate` command to convert a GitLab pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow.

### Running the migrate command

To migrate a GitLab pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the following values:

- `target-url` value with the URL for your {% data variables.product.product_name %} repository
- `my-gitlab-project` with the URL for your GitLab project
- `my-gitlab-namespace` with the namespace or group you are migrating

```shell
gh actions-importer migrate gitlab --target-url https://github.com/:owner/:repo --output-dir tmp/migrate --namespace my-gitlab-namespace --project my-gitlab-project
```

The command's output includes the URL to the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```shell
$ gh actions-importer migrate gitlab --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --namespace octo-org --project monas-project
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

{% data reusables.actions.gai-inspect-pull-request %}

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from GitLab.

### Using environment variables

{% data reusables.actions.gai-config-environment-variables %}

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your GitLab instance:

- `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a converted workflow (requires the `workflow` scope).
- `GITHUB_INSTANCE_URL`: The URL to the target {% data variables.product.prodname_dotcom %} instance (for example, `https://github.com`).
- `GITLAB_ACCESS_TOKEN`: The GitLab {% data variables.product.pat_generic %} used to view GitLab resources.
- `GITLAB_INSTANCE_URL`: The URL of the GitLab instance.
- `NAMESPACE`: The namespaces or groups that contain the GitLab pipelines.

These environment variables can be specified in a `.env.local` file that is loaded by {% data variables.product.prodname_actions_importer %} when it is run.

### Using optional arguments

{% data reusables.actions.gai-optional-arguments-intro %}

#### `--source-file-path`

You can use the `--source-file-path` argument with the `forecast`, `dry-run`, or `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead.

For example:

```shell
gh actions-importer dry-run gitlab --output-dir output/ --namespace my-gitlab-namespace --project my-gitlab-project --source-file-path path/to/.gitlab-ci.yml
```

If you would like to supply multiple source files when running the `forecast` subcommand, you can use pattern matching in the file path value. The following example supplies {% data variables.product.prodname_actions_importer %} with any source files that match the `./tmp/previous_forecast/jobs/*.json` file path.

```shell
gh actions-importer forecast gitlab --output-dir output/ --namespace my-gitlab-namespace --project my-gitlab-project --source-file-path ./tmp/previous_forecast/jobs/*.json
```

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

The `--config-file-path` argument can also be used to specify which repository a converted reusable workflow should be migrated to.

##### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file to perform an audit.

```shell
gh actions-importer audit gitlab --output-dir path/to/output/ --namespace my-gitlab-namespace --config-file-path path/to/gitlab/config.yml
```

To audit a GitLab instance using a configuration file, the file must be in the following format, and each `repository_slug` value must be unique:

```yaml
source_files:
  - repository_slug: namespace/project-name
    path: path/to/.gitlab-ci.yml
  - repository_slug: namespace/some-other-project-name
    path: path/to/.gitlab-ci.yml
```

##### Dry run example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file as the source file to perform a dry run.

The pipeline is selected by matching the `repository_slug` in the configuration file to the value of the `--namespace` and `--project` options. The `path` is then used to pull the specified source file.

```shell
gh actions-importer dry-run gitlab --namespace my-gitlab-namespace --project my-gitlab-project-name --output-dir ./output/ --config-file-path ./path/to/gitlab/config.yml
```

##### Specify the repository of converted reusable workflows

{% data variables.product.prodname_actions_importer %} uses the YAML file provided to the `--config-file-path` argument to determine the repository that converted reusable workflows are migrated to.

To begin, you should run an audit without the `--config-file-path` argument:

```shell
gh actions-importer audit gitlab --output-dir ./output/
```

The output of this command will contain a file named `config.yml` that contains a list of all the composite actions that were converted by {% data variables.product.prodname_actions_importer %}. For example, the `config.yml` file may have the following contents:

```yaml
reusable_workflows:
  - name: my-reusable-workflow.yml
    target_url: https://github.com/octo-org/octo-repo
    ref: main
```

You can use this file to specify which repository and ref a reusable workflow or composite action should be added to. You can then use the `--config-file-path` argument to provide the `config.yml` file to {% data variables.product.prodname_actions_importer %}. For example, you can use this file when running a `migrate` command to open a pull request for each unique repository defined in the config file:

```shell
gh actions-importer migrate gitlab --project my-project-name --output-dir output/ --config-file-path config.yml --target-url https://github.com/my-org/my-repo
```

### Supported syntax for GitLab pipelines

The following table shows the type of properties {% data variables.product.prodname_actions_importer %} is currently able to convert. For more details about how GitLab pipeline syntax aligns with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/migrating-to-github-actions/manually-migrating-to-github-actions/migrating-from-gitlab-cicd-to-github-actions)".

| GitLab Pipelines                        | GitHub Actions                  | Status                      |
| :-------------------------------------- | :------------------------------ | :-------------------------- |
| `after_script`                          | `jobs.<job_id>.steps`           |                   Supported |
| `auto_cancel_pending_pipelines`         | `concurrency`                   |                   Supported |
| `before_script`                         | `jobs.<job_id>.steps`           |                   Supported |
| `build_timeout` or `timeout`            | `jobs.<job_id>.timeout-minutes` |                   Supported |
| `default`                               |  Not applicable                 |                   Supported |
| `image`                                 | `jobs.<job_id>.container`       |                   Supported |
| `job`                                   | `jobs.<job_id>`                 |                   Supported |
| `needs`                                 | `jobs.<job_id>.needs`           |                   Supported |
| `only_allow_merge_if_pipeline_succeeds` | `on.pull_request`               |                   Supported |
| `resource_group`                        | `jobs.<job_id>.concurrency`     |                   Supported |
| `schedule`                              | `on.schedule`                   |                   Supported |
| `script`                                | `jobs.<job_id>.steps`           |                   Supported |
| `stages`                                | `jobs`                          |                   Supported |
| `tags`                                  | `jobs.<job_id>.runs-on`         |                   Supported |
| `variables`                             | `env`, `jobs.<job_id>.env`      |                   Supported |
| Run pipelines for new commits           | `on.push`                       |                   Supported |
| Run pipelines manually                  | `on.workflow_dispatch`          |                   Supported |
| `environment`                           | `jobs.<job_id>.environment`     |         Partially supported |
| `include`                               | Files referenced in an `include` statement are merged into a single job graph before being transformed. |         Partially supported |
| `only` or `except`                      | `jobs.<job_id>.if`              |         Partially supported |
| `parallel`                              | `jobs.<job_id>.strategy`        |         Partially supported |
| `rules`                                 | `jobs.<job_id>.if`              |         Partially supported |
| `services`                              | `jobs.<job_id>.services`        |         Partially supported |
| `workflow`                              | `if`                            |         Partially supported |

For information about supported GitLab constructs, see the [`github/gh-actions-importer` repository](https://github.com/github/gh-actions-importer/blob/main/docs/gitlab/index.md).

### Environment variables syntax

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default GitLab environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| GitLab                                     | GitHub Actions                                                                        |
| :-------------------------------------------- | :------------------------------------------------------------------------------------ |
| `CI_API_V4_URL`                               | {% raw %}`${{ github.api_url }}`{% endraw %}                                                               |
| `CI_BUILDS_DIR`                               | {% raw %}`${{ github.workspace }}`{% endraw %}                                                        |
| `CI_COMMIT_BRANCH`                            | {% raw %}`${{ github.ref }}`{% endraw %}                                                                |
| `CI_COMMIT_REF_NAME`                          | {% raw %}`${{ github.ref }}`{% endraw %}                                                                  |
| `CI_COMMIT_REF_SLUG`                          | {% raw %}`${{ github.ref }}`{% endraw %}                                                                  |
| `CI_COMMIT_SHA`                               | {% raw %}`${{ github.sha }}`{% endraw %}                                                                 |
| `CI_COMMIT_SHORT_SHA`                         | {% raw %}`${{ github.sha }}`{% endraw %}                                                                 |
| `CI_COMMIT_TAG`                               | {% raw %}`${{ github.ref }}`{% endraw %}                                                                 |
| `CI_JOB_ID`                                   | {% raw %}`${{ github.job }}`{% endraw %}                                                                 |
| `CI_JOB_MANUAL`                               | {% raw %}`${{ github.event_name == 'workflow_dispatch' }}`{% endraw %}                                   |
| `CI_JOB_NAME`                                 | {% raw %}`${{ github.job }}`{% endraw %}                                                                 |
| `CI_JOB_STATUS`                               | {% raw %}`${{ job.status }}`{% endraw %}                                                                   |
| `CI_JOB_URL`                                  | {% raw %}`${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}`{% endraw %} |
| `CI_JOB_TOKEN`                                | {% raw %}`${{ github.token }}`{% endraw %}                                                                 |
| `CI_NODE_INDEX`                               | {% raw %}`${{ strategy.job-index }}`{% endraw %}                                                           |
| `CI_NODE_TOTAL`                               | {% raw %}`${{ strategy.job-total }}`{% endraw %}                                                           |
| `CI_PIPELINE_ID`                              | {% raw %}`${{ github.repository}}/${{ github.workflow }}`{% endraw %}                                      |
| `CI_PIPELINE_IID`                             | {% raw %}`${{ github.workflow }}`{% endraw %}                                                              |
| `CI_PIPELINE_SOURCE`                          | {% raw %}`${{ github.event_name }}`{% endraw %}                                                            |
| `CI_PIPELINE_TRIGGERED`                       | {% raw %}`${{ github.actions }}`{% endraw %}                                                               |
| `CI_PIPELINE_URL`                             | {% raw %}`${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}`{% endraw %} |
| `CI_PROJECT_DIR`                              | {% raw %}`${{ github.workspace }}`{% endraw %}                                                             |
| `CI_PROJECT_ID`                               | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| `CI_PROJECT_NAME`                             | {% raw %}`${{ github.event.repository.name }}`{% endraw %}                                                 |
| `CI_PROJECT_NAMESPACE`                        | {% raw %}`${{ github.repository_owner }}`{% endraw %}                                                      |
| `CI_PROJECT_PATH_SLUG`                        | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| `CI_PROJECT_PATH`                             | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| `CI_PROJECT_ROOT_NAMESPACE`                   | {% raw %}`${{ github.repository_owner }}`{% endraw %}                                                      |
| `CI_PROJECT_TITLE`                            | {% raw %}`${{ github.event.repository.full_name }}`{% endraw %}                                            |
| `CI_PROJECT_URL`                              | {% raw %}`${{ github.server_url }}/${{ github.repository }}`{% endraw %}                                   |
| `CI_REPOSITORY_URL`                           | {% raw %}`${{ github.event.repository.clone_url }}`{% endraw %}                                            |
| `CI_RUNNER_EXECUTABLE_ARCH`                   | {% raw %}`${{ runner.os }}`{% endraw %}                                                                    |
| `CI_SERVER_HOST`                              | {% raw %}`${{ github.server_url }}`{% endraw %}                                                            |
| `CI_SERVER_URL`                               | {% raw %}`${{ github.server_url }}`{% endraw %}                                                            |
| `CI_SERVER`                                   | {% raw %}`${{ github.actions }}`{% endraw %}                                                               |
| `GITLAB_CI`                                   | {% raw %}`${{ github.actions }}`{% endraw %}                                                               |
| `GITLAB_USER_EMAIL`                           | {% raw %}`${{ github.actor }}`{% endraw %}                                                                 |
| `GITLAB_USER_ID`                              | {% raw %}`${{ github.actor }}`{% endraw %}                                                                 |
| `GITLAB_USER_LOGIN`                           | {% raw %}`${{ github.actor }}`{% endraw %}                                                                 |
| `GITLAB_USER_NAME`                            | {% raw %}`${{ github.actor }}`{% endraw %}                                                                 |
| `TRIGGER_PAYLOAD`                             | {% raw %}`${{ github.event_path }}`{% endraw %}                                                            |
| `CI_MERGE_REQUEST_ASSIGNEES`                  | {% raw %}`${{ github.event.pull_request.assignees }}`{% endraw %}                                          |
| `CI_MERGE_REQUEST_ID`                         | {% raw %}`${{ github.event.pull_request.number }}`{% endraw %}                                             |
| `CI_MERGE_REQUEST_IID`                        | {% raw %}`${{ github.event.pull_request.number }}`{% endraw %}                                             |
| `CI_MERGE_REQUEST_LABELS`                     | {% raw %}`${{ github.event.pull_request.labels }}`{% endraw %}                                             |
| `CI_MERGE_REQUEST_MILESTONE`                  | {% raw %}`${{ github.event.pull_request.milestone }}`{% endraw %}                                          |
| `CI_MERGE_REQUEST_PROJECT_ID`                 | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| `CI_MERGE_REQUEST_PROJECT_PATH`               | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| `CI_MERGE_REQUEST_PROJECT_URL`                | {% raw %}`${{ github.server_url }}/${{ github.repository }}`{% endraw %}                                   |
| `CI_MERGE_REQUEST_REF_PATH`                   | {% raw %}`${{ github.ref }}`{% endraw %}                                                                   |
| `CI_MERGE_REQUEST_SOURCE_BRANCH_NAME`         | {% raw %}`${{ github.event.pull_request.head.ref }}`{% endraw %}                                           |
| `CI_MERGE_REQUEST_SOURCE_BRANCH_SHA`          | {% raw %}`${{ github.event.pull_request.head.sha}}`{% endraw %}                                            |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_ID`          | {% raw %}`${{ github.event.pull_request.head.repo.full_name }}`{% endraw %}                                |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_PATH`        | {% raw %}`${{ github.event.pull_request.head.repo.full_name }}`{% endraw %}                                |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_URL`         | {% raw %}`${{ github.event.pull_request.head.repo.url }}`{% endraw %}                                      |
| `CI_MERGE_REQUEST_TARGET_BRANCH_NAME`         | {% raw %}`${{ github.event.pull_request.base.ref }}`{% endraw %}                                           |
| `CI_MERGE_REQUEST_TARGET_BRANCH_SHA`          | {% raw %}`${{ github.event.pull_request.base.sha }}`{% endraw %}                                           |
| `CI_MERGE_REQUEST_TITLE`                      | {% raw %}`${{ github.event.pull_request.title }}`{% endraw %}                                              |
| `CI_EXTERNAL_PULL_REQUEST_IID`                | {% raw %}`${{ github.event.pull_request.number }}`{% endraw %}                                             |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_REPOSITORY`  | {% raw %}`${{ github.event.pull_request.head.repo.full_name }}`{% endraw %}                                |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_REPOSITORY`  | {% raw %}`${{ github.event.pull_request.base.repo.full_name }}`{% endraw %}                                |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_BRANCH_NAME` | {% raw %}`${{ github.event.pull_request.head.ref }}`{% endraw %}                                           |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_BRANCH_SHA`  | {% raw %}`${{ github.event.pull_request.head.sha }}`{% endraw %}                                           |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_BRANCH_NAME` | {% raw %}`${{ github.event.pull_request.base.ref }}`{% endraw %}                                           |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_BRANCH_SHA`  | {% raw %}`${{ github.event.pull_request.base.sha }}`{% endraw %}                                           |

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
