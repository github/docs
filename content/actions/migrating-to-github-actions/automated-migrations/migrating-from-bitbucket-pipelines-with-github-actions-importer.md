---
title: Migrating from Bitbucket Pipelines with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your Bitbucket pipelines to {% data variables.product.prodname_actions %}.'
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
shortTitle: Bitbucket Pipelines migration
---

[Legal notice](#legal-notice)

## About migrating from Bitbucket Pipelines with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate Bitbucket Pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations when migrating from Bitbucket Pipelines to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}.

- Images in a private AWS ECR are not supported.
- The Bitbucket Pipelines option `size` is not supported. {% ifversion fpt or ghec %}If additional runner resources are required in {% data variables.product.prodname_actions %}, consider using {% data variables.actions.hosted_runner %}s. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners)."{% endif %}
- Metrics detailing the queue time of jobs is not supported by the `forecast` command.
- Bitbucket [after-scripts](https://support.atlassian.com/bitbucket-cloud/docs/step-options/#After-script) are supported using {% data variables.product.prodname_actions %} `always()` in combination with checking the `steps.<step_id>.conclusion` of the previous step. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#steps-context)."

  The following is an example of using the `always()` with `steps.<step_id>.conclusion`.

  ```yaml
    - name: After Script 1
      run: |-
        echo "I'm after the script ran!"
        echo "We should be grouped!"
      id: after-script-1
      if: "{% raw %}${{ always() }}{% endraw %}"
    - name: After Script 2
      run: |-
        echo "this is really the end"
        echo "goodbye, for now!"
      id: after-script-2
      if: "{% raw %}${{ steps.after-script-1.conclusion == 'success' && always() }}{% endraw %}"
  ```

### Manual tasks

Certain Bitbucket Pipelines constructs must be migrated manually. These include:

- Secured repository, workspace, and deployment variables
- SSH keys

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with Bitbucket Pipelines and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. Create a Workspace Access Token for Bitbucket Pipelines. For more information, see [Workspace Access Token permissions](https://support.atlassian.com/bitbucket-cloud/docs/workspace-access-token-permissions/) in the Bitbucket documentation. Your token must have the `read` scope for pipelines, projects, and repositories.

1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   - For "Which CI providers are you configuring?", use the arrow keys to select `Bitbucket`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   - For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   - For "Base url of the GitHub instance", {% ifversion ghes or ghae %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   - For "{% data variables.product.pat_generic_caps %} for Bitbucket", enter the Workspace Access Token that you created earlier, and press <kbd>Enter</kbd>.
   - For "Base url of the Bitbucket instance", enter the URL for your Bitbucket instance, and press <kbd>Enter</kbd>.

   An example of the `configure` command is shown below:

   ```shell
   $ gh actions-importer configure
   ✔ Which CI providers are you configuring?: Bitbucket
   Enter the following values (leave empty to omit):
   ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
   ✔ Base url of the GitHub instance: https://github.com
   ✔ {% data variables.product.pat_generic_caps %} for Bitbucket: ********************
   ✔ Base url of the Bitbucket instance: https://bitbucket.example.com
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

## Perform an audit of the Bitbucket instance

You can use the audit command to get a high-level view of pipelines in a Bitbucket instance.

The audit command performs the following steps.
1. Fetches all of the pipelines for a workspace.
1. Converts pipeline to its equivalent GitHub Actions workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Running the audit command

To perform an audit run the following command in your terminal, replacing `:workspace` with the name of the Bitbucket workspace to audit.

```bash
gh actions-importer audit bitbucket --workspace :workspace--output-dir tmp/audit
```

Optionally, a `--project-key` option can be provided to the audit command to limit the results to only pipelines associated with a project.

In the below example command `:project_key` should be replaced with the key of the project that should be audited. Project keys can be found in Bitbucket on the workspace projects page.

```bash
gh actions-importer audit bitbucket --workspace :workspace --project-key :project_key --output-dir tmp/audit
```

### Inspecting the audit results

{% data reusables.actions.gai-inspect-audit %}

## Forecasting usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in your Bitbucket instance.

### Running the forecast command

To perform a forecast of potential GitHub Actions usage, run the following command in your terminal, replacing `:workspace` with the name of the Bitbucket workspace to forecast. By default, GitHub Actions Importer includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast bitbucket --workspace :workspace --output-dir tmp/forecast_reports
```

### Forecasting a project

To limit the forecast to a project, you can use the `--project-key` option. Replace the value for the `:project_key` with the project key for the project to forecast.

```shell
gh actions-importer forecast bitbucket --workspace :workspace --project-key :project_key --output-dir tmp/forecast_reports
```

### Inspecting the forecast report

The `forecast_report.md` file in the specified output directory contains the results of the forecast.

Listed below are some key terms that can appear in the forecast report:

- The **job count** is the total number of completed jobs.
- The **pipeline count** is the number of unique pipelines used.
- **Execution time** describes the amount of time a runner spent on a job. This metric can be used to help plan for the cost of {% data variables.product.prodname_dotcom %}-hosted runners.
  - This metric is correlated to how much you should expect to spend in {% data variables.product.prodname_actions %}. This will vary depending on the hardware used for these minutes. You can use the [{% data variables.product.prodname_actions %} pricing calculator](https://github.com/pricing/calculator) to estimate the costs.
- **Concurrent jobs** metrics describe the amount of jobs running at any given time.

## Performing a dry-run migration

You can use the dry-run command to convert a Bitbucket pipeline to an equivalent {% data variables.product.prodname_actions %} workflow(s). A dry-run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

### Running the dry-run command

To perform a dry run of migrating a Bitbucket pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `:workspace` with the name of the workspace and `:repo` with the name of the repository in Bitbucket.

```bash
gh actions-importer dry-run bitbucket --workspace :workspace --repository :repo --output-dir tmp/dry-run
```

### Inspecting the converted workflows

You can view the logs of the dry run and the converted workflow files in the specified output directory.

{% data reusables.actions.gai-custom-transformers-rec %}

## Performing a production migration

You can use the migrate command to convert a Bitbucket pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow(s).

### Running the migrate command

To migrate a Bitbucket pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the following values.

- Replace `target-url` value with the URL for your {% data variables.product.company_short %} repository.
- Replace `:repo` with the name of the repository in Bitbucket.
- Replace `:workspace` with the name of the workspace.

```bash
gh actions-importer migrate bitbucket --workspace :workspace --repository :repo --target-url https://github.com/:owner/:repo --output-dir tmp/dry-run
```

The command's output includes the URL of the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```bash
gh actions-importer migrate bitbucket --workspace actions-importer --repository custom-trigger --target-url https://github.com/valet-dev-testing/demo-private --output-dir tmp/bitbucket
[2023-07-18 09:56:06] Logs: 'tmp/bitbucket/log/valet-20230718-165606.log'
[2023-07-18 09:56:24] Pull request: 'https://github.com/valet-dev-testing/demo-private/pull/55'
```

{% data reusables.actions.gai-inspect-pull-request %}

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from Bitbucket Pipelines.

### Using environment variables

{% data reusables.actions.gai-config-environment-variables %}

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your Bitbucket instance.

- `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a transformed workflow (requires `repo` and `workflow` scopes).
- `GITHUB_INSTANCE_URL`: The url to the target GitHub instance. (e.g. `https://github.com`)
- `BITBUCKET_ACCESS_TOKEN`: The workspace access token with read scopes for pipeline, project, and repository.

These environment variables can be specified in a `.env.local` file that will be loaded by {% data variables.product.prodname_actions_importer %} at run time. The distribution archive contains a `.env.local.template` file that can be used to create these files.

### Optional arguments

{% data reusables.actions.gai-optional-arguments-intro %}

#### `--source-file-path`

You can use the `--source-file-path` argument with the  `dry-run` or `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from the Bitbucket instance. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead.

For example:

```bash
gh actions-importer dry-run bitbucket --workspace :workspace --repository :repo --output-dir tmp/dry-run --source-file-path path/to/my/pipeline/file.yml
```

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from the Bitbucket instance. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file to perform an audit.

```bash
gh actions-importer audit bitbucket --workspace :workspace --output-dir tmp/audit --config-file-path "path/to/my/bitbucket/config.yml"
```

To audit a Bitbucket instance using a config file, the config file must be in the following format, and each `repository_slug` must be unique:

```yaml
source_files:
  - repository_slug: repo_name
    path: path/to/one/source/file.yml
  - repository_slug: another_repo_name
    path: path/to/another/source/file.yml
```

## Supported syntax for Bitbucket Pipelines

The following table shows the type of properties that {% data variables.product.prodname_actions_importer %} is currently able to convert.

| Bitbucket                 | GitHub Actions                                  |  Status      |
| :-------------------      | :-------------------------------------------    | -----------: |
| `after-script`            | `jobs.<job_id>.steps[*]`                        | Supported    |
| `artifacts`               | `actions/upload-artifact` & `download-artifact` | Supported    |
| `caches`                  | `actions/cache`                                 | Supported    |
| `clone`                   | `actions/checkout`                              | Supported    |
| `condition`               | `job.<job_id>.steps[*].run`                     | Supported    |
| `deployment`              | `jobs.<job_id>.environmen`                      | Supported    |
| `image`                   | `jobs.<job_id>.container`                       | Supported    |
| `max-time`                | `jobs.<job_id>.steps[*].timeout-minutes`        | Supported    |
| `options.docker`          | None                                            | Supported    |
| `options.max-time`        | `jobs.<job_id>.steps[*].timeout-minutes`        | Supported    |
| `parallel`                | `jobs.<job_id>`                                 | Supported    |
| `pipelines.branches`      | `on.push`                                       | Supported    |
| `pipelines.custom`        | `on.workflow_dispatch`                          | Supported    |
| `pipelines.default`       | `on.push`                                       | Supported    |
| `pipelines.pull-requests` | `on.pull_requests`                              | Supported    |
| `pipelines.tags`          | `on.tags`                                       | Supported    |
| `runs-on`                 | `jobs.<job_id>.runs-on`                         | Supported    |
| `script`                  | `job.<job_id>.steps[*].run`                     | Supported    |
| `services`                | `jobs.<job_id>.service`                         | Supported    |
| `stage`                   | `jobs.<job_id>`                                 | Supported    |
| `step`                    | `jobs.<job_id>.steps[*]`                        | Supported    |
| `trigger`                 | `on.workflow_dispatch`                          | Supported    |
| `fail-fast`               | None                                            | Unsupported  |
| `oidc`                    | None                                            | Unsupported  |
| `options.size`            | None                                            | Unsupported  |
| `size`                    | None                                            | Unsupported  |

### Environment variable mapping

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default Bitbucket environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| Bitbucket                                | GitHub Actions                                                                 |
| :-------------------------------------   | :------------------------------------------------------                        |
|  `CI`                                    | {% raw %}`true`{% endraw %}                                                    |
|  `BITBUCKET_BUILD_NUMBER`                | {% raw %}`${{ github.run_number }}`{% endraw %}                                |
|  `BITBUCKET_CLONE_DIR`                   | {% raw %}`${{ github.workspace  }}`{% endraw %}                                |
|  `BITBUCKET_COMMIT`                      | {% raw %}`${{ github.sha }}`{% endraw %}                                       |
|  `BITBUCKET_WORKSPACE`                   | {% raw %}`${{ github.repository_owner }}`{% endraw %}                          |
|  `BITBUCKET_REPO_SLUG`                   | {% raw %}`${{ github.repository }}`{% endraw %}                                |
|  `BITBUCKET_REPO_UUID`                   | {% raw %}`${{ github.repository_id }}`{% endraw %}                             |
|  `BITBUCKET_REPO_FULL_NAME`              | {% raw %}`${{ github.repository_owner }}`{% endraw %}/{% raw %}`${{ github.repository }}`{% endraw %} |
|  `BITBUCKET_BRANCH`                      | {% raw %}`${{ github.ref }}`{% endraw %}                                       |
|  `BITBUCKET_TAG`                         | {% raw %}`${{ github.ref }}`{% endraw %}                                       |
|  `BITBUCKET_PR_ID`                       | {% raw %}`${{ github.event.pull_request.number }}`{% endraw %}                 |
|  `BITBUCKET_PR_DESTINATION_BRANCH`       | {% raw %}`${{ github.event.pull_request.base.ref }}`{% endraw %}               |
|  `BITBUCKET_GIT_HTTP_ORIGIN`             | {% raw %}`${{ github.event.repository.clone_url }}`{% endraw %}                |
|  `BITBUCKET_GIT_SSH_ORIGIN`              | {% raw %}`${{ github.event.repository.ssh_url }}`{% endraw %}                  |
|  `BITBUCKET_EXIT_CODE`                   | {% raw %}`${{ job.status }}`{% endraw %}                                       |
|  `BITBUCKET_STEP_UUID`                   | {% raw %}`${{ job.github_job }}`{% endraw %}                                   |
|  `BITBUCKET_PIPELINE_UUID`               | {% raw %}`${{ github.workflow }}`{% endraw %}                                  |
|  `BITBUCKET_PROJECT_KEY`                 | {% raw %}`${{ github.repository_owner }}`{% endraw %}                          |
|  `BITBUCKET_PROJECT_UUID`                | {% raw %}`${{ github.repository_owner }}`{% endraw %}                          |
|  `BITBUCKET_STEP_TRIGGERER_UUID`         | {% raw %}`${{ github.actor_id }}`{% endraw %}                                  |
|  `BITBUCKET_SSH_KEY_FILE`                | {% raw %}`${{ github.workspace }}/.ssh/id_rsa`{% endraw %}                     |
|  `BITBUCKET_STEP_OIDC_TOKEN`             | No Mapping                                           |
|  `BITBUCKET_DEPLOYMENT_ENVIRONMENT`      | No Mapping                                           |
|  `BITBUCKET_DEPLOYMENT_ENVIRONMENT_UUID` | No Mapping                                           |
|  `BITBUCKET_BOOKMARK`                    | No Mapping                                           |
|  `BITBUCKET_PARALLEL_STEP`               | No Mapping                                           |
|  `BITBUCKET_PARALLEL_STEP_COUNT`         | No Mapping                                           |

### System Variables

System variables used in tasks are transformed to the equivalent bash shell variable and are assumed to be available. For example, `${system.<variable.name>}` will be transformed to `$variable_name`. We recommend you verify this to ensure proper operation of the workflow.

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
