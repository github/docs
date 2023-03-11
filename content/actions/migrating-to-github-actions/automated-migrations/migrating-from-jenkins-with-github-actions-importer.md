---
title: Migrating from Jenkins with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your Jenkins pipelines to {% data variables.product.prodname_actions %}.'
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
shortTitle: Jenkins migration
---

[Legal notice](#legal-notice)

## About migrating from Jenkins with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate Jenkins pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

- A Jenkins account or organization with pipelines and jobs that you want to convert to {% data variables.product.prodname_actions %} workflows.
- Access to create a Jenkins personal API token for your account or organization.
{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations when migrating from Jenkins to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}. For example, you must migrate the following constructs manually:

- Mandatory build tools
- Scripted pipelines
- Secrets
- Self-hosted runners
- Unknown plugins

For more information on manual migrations, see "[AUTOTITLE](/actions/migrating-to-github-actions/manual-migrations/migrating-from-jenkins-to-github-actions)."

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with Jenkins and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
2. Create a Jenkins API token. For more information, see [Authenticating scripted clients](https://www.jenkins.io/doc/book/system-administration/authenticating-scripted-clients/) in the Jenkins documentation.

   After creating the token, copy it and save it in a safe location for later use.
3. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   - For "Which CI providers are you configuring?", use the arrow keys to select `Jenkins`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   - For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   - For "Base url of the GitHub instance", {% ifversion ghes or ghae %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   - For "{% data variables.product.pat_generic_caps %} for Jenkins", enter the value for the Jenkins personal API token that you created earlier, and press <kbd>Enter</kbd>.
   - For "Username of Jenkins user", enter your Jenkins username and press <kbd>Enter</kbd>.
   - For "Base url of the Jenkins instance", enter the URL of your Jenkins instance, and press <kbd>Enter</kbd>.

   An example of the `configure` command is shown below:

   ```shell
   $ gh actions-importer configure
  ✔ Which CI providers are you configuring?: Jenkins
  Enter the following values (leave empty to omit):
  ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
  ✔ Base url of the GitHub instance: https://github.com
  ✔ {% data variables.product.pat_generic_caps %} for Jenkins: *************** 
  ✔ Username of Jenkins user: admin
  ✔ Base url of the Jenkins instance: https://localhost
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

## Perform an audit of Jenkins

You can use the `audit` command to get a high-level view of all pipelines in a Jenkins server.

The `audit` command performs the following steps:

1. Fetches all of the projects defined in a Jenkins server.
1. Converts each pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Running the audit command

To perform an audit of a Jenkins server, run the following command in your terminal:

```shell
gh actions-importer audit jenkins --output-dir tmp/audit
```

### Inspecting the audit results

The files in the specified output directory contain the results of the audit. See the `audit_summary.md` file for a summary of the audit results.

The audit summary has the following sections.

#### Pipelines

The "Pipelines" section contains high level statistics regarding the conversion rate done by {% data variables.product.prodname_actions_importer %}.

Listed below are some key terms that can appear in the "Pipelines" section:

- **Successful** pipelines had 100% of the pipeline constructs and individual items converted automatically to their {% data variables.product.prodname_actions %} equivalent.
- **Partially successful** pipelines had all of the pipeline constructs converted, however, there were some individual items that were not converted automatically to their {% data variables.product.prodname_actions %} equivalent.
- **Unsupported** pipelines are definition types that are not supported by {% data variables.product.prodname_actions_importer %}.
- **Failed** pipelines encountered a fatal error when being converted. This can occur for one of three reasons:
  - The pipeline was misconfigured and not valid in Jenkins.
  - {% data variables.product.prodname_actions_importer %} encountered an internal error when converting it.
  - There was an unsuccessful network response that caused the pipeline to be inaccessible, which is often due to invalid credentials.

#### Build steps

The "Build steps" section contains an overview of individual build steps that are used across all pipelines, and how many were automatically converted by {% data variables.product.prodname_actions_importer %}.

Listed below are some key terms that can appear in the "Build steps" section:

- A **known** build step is a step that was automatically converted to an equivalent action.
- An **unknown** build step is a step that was not automatically converted to an equivalent action.
- An **unsupported** build step is a step that is either:
  - Fundamentally not supported by {% data variables.product.prodname_actions %}.
  - Configured in a way that is incompatible with {% data variables.product.prodname_actions %}.
- An **action** is a list of the actions that were used in the converted workflows. This can be important for:
  - If you use {% data variables.product.prodname_ghe_server %}, gathering the list of actions to sync to your instance.
  - Defining an organization-level allowlist of actions that are used. This list of actions is a comprehensive list of actions that your security or compliance teams may need to review.

#### Manual tasks

The "Manual tasks" section contains an overview of tasks that {% data variables.product.prodname_actions_importer %} is not able to complete automatically, and that you must complete manually.

Listed below are some key terms that can appear in the "Manual tasks" section:

- A **secret** is a repository or organization-level secret that is used in the converted pipelines. These secrets must be created manually in {% data variables.product.prodname_actions %} for these pipelines to function properly. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets)."
- A **self-hosted runner** refers to a label of a runner that is referenced in a converted pipeline that is not a {% data variables.product.prodname_dotcom %}-hosted runner. You will need to manually define these runners for these pipelines to function properly.

#### Files

The final section of the audit report provides a manifest of all of the files that were written to disk during the audit.

Each pipeline file has a variety of files in the audit, including:

- The original pipeline as it was defined in Jenkins.
- Any network responses used to convert the pipeline.
- The converted workflow file.
- Stack traces that can used to troubleshoot a failed pipeline conversion.

Additionally, the `workflow_usage.csv` file contains a comma-separated list of all actions, secrets, and runners that are used by each successfully converted pipeline. This can be useful for determining which workflows use which actions, secrets, or runners, and for performing security reviews.

## Forecast potential build runner usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in your Jenkins server.

### Prerequisites for running the forecast command

In order to run the `forecast` command against a Jenkins instance, you must install the [`paginated-builds` plugin](https://plugins.jenkins.io/paginated-builds) on your Jenkins server. This plugin allows {% data variables.product.prodname_actions_importer %} to efficiently retrieve historical build data for jobs that have a large number of builds. Because Jenkins does not provide a method to retrieve paginated build data, using this plugin prevents timeouts from the Jenkins server that can occur when fetching a large amount of historical data. The `paginated-builds` plugin is open source, and exposes a REST API endpoint to fetch build data in pages, rather than all at once.

To install the `paginated-builds` plugin:

1. On your Jenkins instance, navigate to `https://<your-jenkins-instance>/pluginManager/available`.
1. Search for the `paginated-builds` plugin.
1. Check the box on the left and select **Install without restart**.

### Running the forecast command

To perform a forecast of potential {% data variables.product.prodname_actions %}, run the following command in your terminal. By default, {% data variables.product.prodname_actions_importer %} includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast jenkins --output-dir tmp/forecast 
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

Additionally, these metrics are defined for each queue of runners in Jenkins. This is especially useful if there is a mix of hosted or self-hosted runners, or high or low spec machines, so you can see metrics specific to different types of runners.

## Perform a dry-run migration of a Jenkins pipeline

You can use the `dry-run` command to convert a Jenkins pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.

### Running the dry-run command

You can use the `dry-run` command to convert a Jenkins pipeline to an equivalent {% data variables.product.prodname_actions %} workflow. A dry-run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

To perform a dry run of migrating your Jenkins pipelines to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `my-jenkins-project` with the URL of your Jenkins job.

```shell
gh actions-importer dry-run jenkins --source-url my-jenkins-project --output-dir tmp/dry-run
```

### Inspecting the converted workflows

You can view the logs of the dry run and the converted workflow files in the specified output directory.

If any portion of your pipeline was not successfully converted, it displays as a comment in the same location the Jenkins pipeline used it. For anything that {% data variables.product.prodname_actions_importer %} was not able to convert automatically, such as unknown build steps or a partially successful pipeline, you might want to create custom transformers to further customize the conversion process. For more information, see "[AUTOTITLE](/actions/migrating-to-github-actions/automated-migrations/extending-github-actions-importer-with-custom-transformers)."

## Perform a production migration of a Jenkins pipeline

You can use the `migrate` command to convert a Jenkins pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow.

### Running the migrate command

To migrate a Jenkins pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the `target-url` value with the URL for your {% data variables.product.product_name %} repository, and `my-jenkins-project` with the URL for your Jenkins job.

```
gh actions-importer migrate jenkins --target-url https://github.com/:owner/:repo --output-dir tmp/migrate --source-url my-jenkins-project
```

The command's output includes the URL to the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```
$ gh actions-importer migrate jenkins --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --source-url http://localhost:8080/job/monas_dev_work/job/monas_freestyle
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

### Inspecting the pull request

The output from a successful run of the `migrate` command contains a link to the new pull request that adds converted workflows to your repository. 

Some important elements of the pull request include:

- In the pull request description, a section called **Manual steps**, which lists steps that you must manually complete before you can finish migrating your pipelines to {% data variables.product.prodname_actions %}. For example, this section may direct you to set up any secrets used in your workflows. 
- The converted workflows file. Select the **Files changed** tab in the pull request to view the workflow file that will be added to your {% data variables.product.product_name %} repository.

When you are finished inspecting the pull request, you can merge it to add the workflow to your {% data variables.product.product_name %} repository. 

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from Jenkins.

### Using environment variables

We recommend maintaining the inputs to {% data variables.product.prodname_actions_importer %} with environment variables. You can set these variables by following the configuration process using the `configure` command. For more information, see the "[Configure credentials for {% data variables.product.prodname_actions_importer %}](#configure-credentials-for-github-actions-importer)" section.

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your Jenkins instance:

- `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a converted workflow (requires `repo` and `workflow` scopes).
- `GITHUB_INSTANCE_URL`: The URL to the target {% data variables.product.prodname_dotcom %} instance (for example, `https://github.com`).
- `JENKINS_ACCESS_TOKEN`: The Jenkins API token used to view Jenkins resources.

  {% note %}

  **Note**: This token requires access to all jobs that you want to migrate or audit. In cases where a folder or job does not inherit access control lists from their parent, you must grant explicit permissions or full admin privileges.

  {% endnote %}

- `JENKINS_USERNAME`: The username of the user account that created the Jenkins API token.
- `JENKINS_INSTANCE_URL`: The URL of the Jenkins instance.
- `JENKINSFILE_ACCESS_TOKEN` (Optional) The API token used to retrieve the contents of a `Jenkinsfile` stored in the build repository. This requires the `repo` scope.  If this is not provided, the `GITHUB_ACCESS_TOKEN` will be used instead.

These environment variables can be specified in a `.env.local` file that is loaded by {% data variables.product.prodname_actions_importer %} when it is run.

### Using optional arguments

There are optional arguments you can use with the {% data variables.product.prodname_actions_importer %} subcommands to customize your migration.

#### `--source-file-path`

You can use the `--source-file-path` argument with the `forecast`, `dry-run`, or `migration` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead. You can use this option for Jenkinsfile and multibranch pipelines.

If you would like to supply multiple source files when running the `forecast` subcommand, you can use pattern matching in the file path value. For example, `gh forecast --source-file-path ./tmp/previous_forecast/jobs/*.json` supplies {% data variables.product.prodname_actions_importer %} with any source files that match the `./tmp/previous_forecast/jobs/*.json` file path.

##### Jenkinsfile pipeline example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified Jenkinsfile as the source file to perform a dry run.

```bash
gh actions-importer dry-run jenkins --output-dir path/to/output/ --source-file-path path/to/Jenkinsfile --source-url :url_to_jenkins_job
```

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

When you use the `--config-file-path` option with the `dry-run` or `migrate` subcommands, {% data variables.product.prodname_actions_importer %} matches the repository slug to the job represented by the `--source-url` option to select the pipeline. It uses the `config-file-path` to pull the specified source file.

##### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file to perform an audit.

```bash
gh actions-importer audit jenkins --output-dir path/to/output/ --config-file-path path/to/jenkins/config.yml
```

To audit a Jenkins instance using a config file, the config file must be in the following format, and each `repository_slug` value must be unique:

```yaml
source_files:
  - repository_slug: pipeline-name
    path: path/to/Jenkinsfile
  - repository_slug: multi-branch-pipeline-name
    branches:
      - branch: main
        path: path/to/Jenkinsfile
      - branch: node
        path: path/to/Jenkinsfile
```

### Supported syntax for Jenkins pipelines

The following table shows the type of properties {% data variables.product.prodname_actions_importer %} is currently able to convert. For more details about how Jenkins pipeline syntax aligns with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/migrating-to-github-actions/manual-migrations/migrating-from-jenkins-to-github-actions)".

| Jenkins Designer Pipeline | Jenkinsfile | GitHub Actions                     |              Status |
| :------------------------ | :---------- | :--------------------------------- | :------------------ |
| general                   | agent       | `runners`                          | Partially supported |
|                           |             | `self hosted runners`              | Partially supported |
| build                     | stages      | `jobs`                             | Partially supported |
|                           | stage       | `jobs.<job_id>`                    |           Supported |
| docker template           | docker      | `jobs.<job_id>.container`          |           Supported |
|                           |             | `jobs.<job_id>.name`               |           Supported |
|                           | steps       | `jobs.<job_id>.steps`              | Partially supported |
|                           | options     | `jobs.<job_id>.strategy`           |         Unsupported |
|                           |             | `jobs.<job_id>.strategy.fail-fast` |         Unsupported |
|                           | matrix      | `jobs.<job_id>.strategy.matrix`    |         Unsupported |
|                           |             | `jobs.<job_id>.timeout-minutes`    |         Unsupported |
|                           | when        | `jobs.<job_id>.if`                 |         Unsupported |
|                           | parameters  | `inputs`                           |         Unsupported |
|                           |             | `output`                           |         Unsupported |
|                           | inputs      | `inputs`                           |         Unsupported |
| build environment         | environment | `env`                              | Partially supported |
|                           |             | `jobs.<job_id>.env`                |         Unsupported |
|                           |             | `jobs.<job_id>.steps.env`          |         Unsupported |
|                           |             | `jobs.<job_id>.timeout-minutes`    | Partially supported |
| build triggers            | triggers    | `on`                               | Partially supported |
|                           |             | `on.<event_name>.types`            | Partially supported |
|                           |             | `on.<push>.<branches>`             |           Supported |
|                           |             | `on.<push>.<tags>`                 |           Supported |
|                           |             | `on.<push>.paths`                  |           Supported |
|                           |             | `on.<pull_request>.<branches>`     |           Supported |
|                           |             | `on.<pull_request>.<tags>`         |         Unsupported |
|                           |             | `on.<pull_request>.paths`          |           Supported |
|                           |             | `on.schedule`                      | Partially supported |
|                           |             | `on.workflow_run`                  |           Supported |

For information about supported Jenkins plugins, see the [`github/gh-actions-importer` repository](https://github.com/github/gh-actions-importer/blob/main/docs/jenkins/index.md).

### Environment variables syntax

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default Jenkins environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| Jenkins           | GitHub Actions                                                                        |
| :---------------- | :------------------------------------------------------------------------------------ |
| `${BUILD_ID}`     | `{% raw %}${{ github.run_id }}{% endraw %}`                                                                |
| `${BUILD_NUMBER}` | `{% raw %}${{ github.run_id }}{% endraw %}`                                                                |
| `${BUILD_TAG}`    | `{% raw %}${{ github.workflow }}-${{ github.run_id }}{% endraw %}`                                         |
| `${BUILD_URL}`    | `{% raw %}${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}{% endraw %}` |
| `${JENKINS_URL}`  | `{% raw %}${{ github.server_url }}{% endraw %}`                                                            |
| `${JOB_NAME}`     | `{% raw %}${{ github.workflow }}{% endraw %}`                                                              |
| `${WORKSPACE}`    | `{% raw %}${{ github.workspace }}{% endraw %}`                                                             |

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
