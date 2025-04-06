---
title: Migrating from Travis CI with GitHub Actions Importer
intro: 'Learn how to use {% data variables.product.prodname_actions_importer %} to automate the migration of your Travis CI pipelines to {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Migration
  - CI
  - CD
shortTitle: Travis CI migration
redirect_from:
  - /actions/migrating-to-github-actions/automated-migrations/migrating-from-travis-ci-with-github-actions-importer
---

[Legal notice](#legal-notice)

## About migrating from Travis CI with GitHub Actions Importer

The instructions below will guide you through configuring your environment to use {% data variables.product.prodname_actions_importer %} to migrate Travis CI pipelines to {% data variables.product.prodname_actions %}.

### Prerequisites

* A Travis CI account or organization with pipelines and jobs that you want to convert to {% data variables.product.prodname_actions %} workflows.
* Access to create a Travis CI API access token for your account or organization.
{% data reusables.actions.actions-importer-prerequisites %}

### Limitations

There are some limitations when migrating from Travis CI pipelines to {% data variables.product.prodname_actions %} with {% data variables.product.prodname_actions_importer %}.

#### Manual tasks

Certain Travis CI constructs must be migrated manually. These include:

* Secrets
* Unknown job properties

For more information on manual migrations, see "[AUTOTITLE](/actions/migrating-to-github-actions/manually-migrating-to-github-actions/migrating-from-travis-ci-to-github-actions)."

#### Travis CI project languages

{% data variables.product.prodname_actions_importer %} transforms Travis CI project languages by adding a set of preconfigured build tools and a default build script to the transformed workflow. If no language is explicitly declared, {% data variables.product.prodname_actions_importer %} assumes a project language is Ruby.

For a list of the project languages supported by {% data variables.product.prodname_actions_importer %}, see "[Supported project languages](#supported-project-languages)."

## Installing the {% data variables.product.prodname_actions_importer %} CLI extension

{% data reusables.actions.installing-actions-importer %}

## Configuring credentials

The `configure` CLI command is used to set required credentials and options for {% data variables.product.prodname_actions_importer %} when working with Travis CI and {% data variables.product.prodname_dotcom %}.

1. Create a {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)."

   Your token must have the `workflow` scope.

   After creating the token, copy it and save it in a safe location for later use.
1. Create a Travis CI API access token. For more information, see [Get your Travis CI API token](https://docs.travis-ci.com/user/migrate/travis-migrate-to-apps-gem-guide/#4-get-your-travis-ci-api-token) in the Travis CI documentation.

   After creating the token, copy it and save it in a safe location for later use.
1. In your terminal, run the {% data variables.product.prodname_actions_importer %} `configure` CLI command:

   ```shell
   gh actions-importer configure
   ```

   The `configure` command will prompt you for the following information:

   * For "Which CI providers are you configuring?", use the arrow keys to select `Travis CI`, press <kbd>Space</kbd> to select it, then press <kbd>Enter</kbd>.
   * For "{% data variables.product.pat_generic_caps %} for GitHub", enter the value of the {% data variables.product.pat_v1 %} that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the GitHub instance", {% ifversion ghes %}enter the URL for your {% data variables.product.product_name %} instance, and press <kbd>Enter</kbd>.{% else %}press <kbd>Enter</kbd> to accept the default value (`https://github.com`).{% endif %}
   * For "{% data variables.product.pat_generic_caps %} for Travis CI", enter the value for the Travis CI API access token that you created earlier, and press <kbd>Enter</kbd>.
   * For "Base url of the Travis CI instance", enter the URL of your Travis CI instance, and press <kbd>Enter</kbd>.
   * For "Travis CI organization name", enter the name of your Travis CI organization, and press <kbd>Enter</kbd>.

   An example of the output of the `configure` command is shown below.

   ```shell
   $ gh actions-importer configure
   ✔ Which CI providers are you configuring?: Travis CI
   Enter the following values (leave empty to omit):
   ✔ {% data variables.product.pat_generic_caps %} for GitHub: ***************
   ✔ Base url of the GitHub instance: https://github.com
   ✔ {% data variables.product.pat_generic_caps %} for Travis CI: ***************
   ✔ Base url of the Travis CI instance: https://travis-ci.com
   ✔ Travis CI organization name: actions-importer-labs
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

## Perform an audit of Travis CI

You can use the `audit` command to get a high-level view of all pipelines in a Travis CI server.

The `audit` command performs the following steps:

1. Fetches all of the projects defined in a Travis CI server.
1. Converts each pipeline to its equivalent {% data variables.product.prodname_actions %} workflow.
1. Generates a report that summarizes how complete and complex of a migration is possible with {% data variables.product.prodname_actions_importer %}.

### Running the audit command

To perform an audit of a Travis CI server, run the following command in your terminal:

```shell
gh actions-importer audit travis-ci --output-dir tmp/audit
```

### Inspecting the audit results

{% data reusables.actions.gai-inspect-audit %}

## Forecast potential build runner usage

You can use the `forecast` command to forecast potential {% data variables.product.prodname_actions %} usage by computing metrics from completed pipeline runs in your Travis CI server.

### Running the forecast command

To perform a forecast of potential {% data variables.product.prodname_actions %} usage, run the following command in your terminal. By default, {% data variables.product.prodname_actions_importer %} includes the previous seven days in the forecast report.

```shell
gh actions-importer forecast travis-ci --output-dir tmp/forecast
```

### Inspecting the forecast report

The `forecast_report.md` file in the specified output directory contains the results of the forecast.

Listed below are some key terms that can appear in the forecast report:

* The **job count** is the total number of completed jobs.
* The **pipeline count** is the number of unique pipelines used.
* **Execution time** describes the amount of time a runner spent on a job. This metric can be used to help plan for the cost of {% data variables.product.prodname_dotcom %}-hosted runners.
  * This metric is correlated to how much you should expect to spend in {% data variables.product.prodname_actions %}. This will vary depending on the hardware used for these minutes. You can use the [{% data variables.product.prodname_actions %} pricing calculator](https://github.com/pricing/calculator) to estimate the costs.
* **Queue time** metrics describe the amount of time a job spent waiting for a runner to be available to execute it.
* **Concurrent jobs** metrics describe the amount of jobs running at any given time. This metric can be used to define the number of runners you should configure.

Additionally, these metrics are defined for each queue of runners in Travis CI. This is especially useful if there is a mix of hosted or self-hosted runners, or high or low spec machines, so you can see metrics specific to different types of runners.

## Perform a dry-run migration of a Travis CI pipeline

You can use the `dry-run` command to convert a Travis CI pipeline to an equivalent {% data variables.product.prodname_actions %} workflow. A dry-run creates the output files in a specified directory, but does not open a pull request to migrate the pipeline.

To perform a dry run of migrating your Travis CI pipelines to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing `my-travis-ci-repository` with the name of your Travis CI repository.

```shell
gh actions-importer dry-run travis-ci --travis-ci-repository my-travis-ci-repository --output-dir tmp/dry-run
```

You can view the logs of the dry run and the converted workflow files in the specified output directory.

{% data reusables.actions.gai-custom-transformers-rec %}

## Perform a production migration of a Travis CI pipeline

You can use the `migrate` command to convert a Travis CI pipeline and open a pull request with the equivalent {% data variables.product.prodname_actions %} workflow.

### Running the migrate command

To migrate a Travis CI pipeline to {% data variables.product.prodname_actions %}, run the following command in your terminal, replacing the `target-url` value with the URL for your {% data variables.product.prodname_dotcom %} repository, and `my-travis-ci-repository` with the name of your Travis CI repository.

```shell
gh actions-importer migrate travis-ci --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --travis-ci-repository my-travis-ci-repository
```

The command's output includes the URL to the pull request that adds the converted workflow to your repository. An example of a successful output is similar to the following:

```shell
$ gh actions-importer migrate travis-ci --target-url https://github.com/octo-org/octo-repo --output-dir tmp/migrate --travis-ci-repository my-travis-ci-repository
[2022-08-20 22:08:20] Logs: 'tmp/migrate/log/actions-importer-20220916-014033.log'
[2022-08-20 22:08:20] Pull request: 'https://github.com/octo-org/octo-repo/pull/1'
```

{% data reusables.actions.gai-inspect-pull-request %}

## Reference

This section contains reference information on environment variables, optional arguments, and supported syntax when using {% data variables.product.prodname_actions_importer %} to migrate from Travis CI.

### Using environment variables

{% data reusables.actions.gai-config-environment-variables %}

{% data variables.product.prodname_actions_importer %} uses the following environment variables to connect to your Travis CI instance:

* `GITHUB_ACCESS_TOKEN`: The {% data variables.product.pat_v1 %} used to create pull requests with a converted workflow (requires the `workflow` scope).
* `GITHUB_INSTANCE_URL`: The URL to the target {% data variables.product.prodname_dotcom %} instance (for example, `https://github.com`).
* `TRAVIS_CI_ACCESS_TOKEN`: The Travis CI API access token used to view Travis CI resources.
* `TRAVIS_CI_ORGANIZATION`: The organization name of your Travis CI instance.
* `TRAVIS_CI_INSTANCE_URL`: The URL of the Travis CI instance.
* `TRAVIS_CI_SOURCE_GITHUB_ACCESS_TOKEN`: (Optional) The {% data variables.product.pat_generic %} used to authenticate with your source GitHub instance. If not provided, `GITHUB_ACCESS_TOKEN` will be used instead.
* `TRAVIS_CI_SOURCE_GITHUB_INSTANCE_URL`: (Optional) The URL to the source GitHub instance, such as https://github.com. If not provided, `GITHUB_INSTANCE_URL` will be used instead.

These environment variables can be specified in a `.env.local` file that is loaded by {% data variables.product.prodname_actions_importer %} when it is run.

### Using optional arguments

{% data reusables.actions.gai-optional-arguments-intro %}

#### `--source-file-path`

You can use the `--source-file-path` argument with the `forecast`, `dry-run`, or `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--source-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source file path instead.

For example:

```shell
gh actions-importer dry-run travis-ci --output-dir ./path/to/output/ --travis-ci-repository my-travis-ci-repository --source-file-path ./path/to/.travis.yml
```

#### `--allow-inactive-repositories`

You can use this argument to specify whether {% data variables.product.prodname_actions_importer %} should include inactive repositories in an audit. If this option is not set, inactive repositories are not included in audits.

```shell
gh actions-importer dry-run travis-ci --output-dir ./path/to/output/ --travis-ci-repository my-travis-ci-repository --allow-inactive-repositories
```

#### `--config-file-path`

You can use the `--config-file-path` argument with the `audit`, `dry-run`, and `migrate` subcommands.

By default, {% data variables.product.prodname_actions_importer %} fetches pipeline contents from source control. The `--config-file-path` argument tells {% data variables.product.prodname_actions_importer %} to use the specified source files instead.

##### Audit example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file to perform an audit.

```shell
gh actions-importer audit travis-ci --output-dir ./path/to/output/ --config-file-path ./path/to/travis-ci/config.yml
```

To audit a Travis CI instance using a configuration file, the file must be in the following format and each `repository_slug` value must be unique:

```yaml
source_files:
  - repository_slug: travis-org-name/travis-repo-name
    path: path/to/.travis.yml
  - repository_slug: travis-org-name/some-other-travis-repo-name
    path: path/to/.travis.yml
```

##### Dry run example

In this example, {% data variables.product.prodname_actions_importer %} uses the specified YAML configuration file as the source file to perform a dry run.

The pipeline is selected by matching the `repository_slug` in the configuration file to the value of the `--travis-ci-repository` option. The `path` is then used to pull the specified source file.

```shell
gh actions-importer dry-run travis-ci --travis-ci-repository travis-org-name/travis-repo-name --output-dir ./output/ --config-file-path ./path/to/travis-ci/config.yml
```

### Supported project languages

{% data variables.product.prodname_actions_importer %} supports migrating Travis CI projects in the following languages.

<ul style="-webkit-column-count: 3; -moz-column-count: 3; column-count: 3;">
<li><code>android</code></li>
<li><code>bash</code></li>
<li><code>c</code></li>
<li><code>clojure</code></li>
<li><code>c++</code></li>
<li><code>crystal</code></li>
<li><code>c#</code></li>
<li><code>d</code></li>
<li><code>dart</code></li>
<li><code>elixir</code></li>
<li><code>erlang</code></li>
<li><code>generic</code></li>
<li><code>go</code></li>
<li><code>groovy</code></li>
<li><code>haskell</code></li>
<li><code>haxe</code></li>
<li><code>java</code></li>
<li><code>julia</code></li>
<li><code>matlab</code></li>
<li><code>minimal</code></li>
<li><code>nix</code></li>
<li><code>node_js</code></li>
<li><code>objective-c</code></li>
<li><code>perl</code></li>
<li><code>perl6</code></li>
<li><code>php</code></li>
<li><code>python</code></li>
<li><code>r</code></li>
<li><code>ruby</code></li>
<li><code>rust</code></li>
<li><code>scala</code></li>
<li><code>sh</code></li>
<li><code>shell</code></li>
<li><code>smalltalk</code></li>
<li><code>swift</code></li>
</ul>

### Supported syntax for Travis CI pipelines

The following table shows the type of properties {% data variables.product.prodname_actions_importer %} is currently able to convert. For more details about how Travis CI pipeline syntax aligns with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/migrating-to-github-actions/manually-migrating-to-github-actions/migrating-from-travis-ci-to-github-actions)".

| Travis CI    | GitHub Actions                     |              Status |
| :------------------ | :--------------------------------- | ------------------: |
| branches            | <ul><li>`on.<push>.<branches>`</li>|           Supported |
| build_pull_requests | <ul><li>`on.<pull_request>`</li>   |           Supported |
| env                 | <ul><li>`env`</li> <li>`jobs.<job_id>.env`</li><li>`jobs.<job_id>.steps.env`</li>                                                               |           Supported |
| if                  | <ul><li>`jobs.<job_id>.if`</li></ul>       |           Supported |
| job                 | <ul><li>`jobs.<job_id>`</li><li>`jobs.<job_id>.name`</li></ul> |           Supported |
| matrix              | <ul><li>`jobs.<job_id>.strategy`</li><li>`jobs.<job_id>.strategy.fail-fast`</li><li>`jobs.<job_id>.strategy.matrix`</li>                 |           Supported |
| os & dist           | <ul><li>`runners`</li></ul>        |           Supported |
| scripts             | <ul><li>`jobs.<job_id>.steps`</li></ul>    |           Supported |
| stages              | <ul><li>`jobs`</li></ul>           |           Supported |
| env                 | <ul><li>`on`</li>                               | Partially supported |
| branches            | <ul><li>`on.<push>.<tags>`</li><li>`on.<push>.paths`</li>                                                                     |         Unsupported |
| build_pull_requests | <ul><li>`on.<pull_request>.<branches>`</li><li>`on.<pull_request>.<tags>`</li><li>`on.<pull_request>.paths`</li>                          |         Unsupported |
| cron triggers       | <ul><li>`on.schedule`</li><li>`on.workflow_run`</li></ul> |         Unsupported |
| env                 | <ul><li>`jobs.<job_id>.timeout-minutes`</li><li>`on.<event_name>.types`</li>                                                                     |         Unsupported |
| job                 | <ul><li>`jobs.<job_id>.container`</li>          |         Unsupported |
| os & dist           | <ul><li>`self hosted runners`</li></ul>         |         Unsupported |

For information about supported Travis CI constructs, see the [`github/gh-actions-importer` repository](https://github.com/github/gh-actions-importer/blob/main/docs/travis_ci/index.md).

### Environment variables syntax

{% data variables.product.prodname_actions_importer %} uses the mapping in the table below to convert default Travis CI environment variables to the closest equivalent in {% data variables.product.prodname_actions %}.

| Travis CI                     | GitHub Actions                                                                        |
| :---------------------------- | :------------------------------------------------------------------------------------ |
| {% raw %}`$CONTINUOUS_INTEGRATION`{% endraw %}     | {% raw %}`$CI`{% endraw %}                                                                                 |
| {% raw %}`$USER`{% endraw %}                       | {% raw %}`${{ github.actor }}`{% endraw %}                                                          |
| {% raw %}`$HOME`{% endraw %}                       | {% raw %}`${{ github.workspace }}`      {% endraw %}                                                       |
| {% raw %}`$TRAVIS_BRANCH`{% endraw %}             | {% raw %}`${{ github.ref }}`{% endraw %}                                                                   |
| {% raw %}`$TRAVIS_BUILD_DIR`{% endraw %}           | {% raw %}`${{ github.workspace }}`{% endraw %}                                                             |
| {% raw %}`$TRAVIS_BUILD_ID`{% endraw %}            | {% raw %}`${{ github.run_number }}`{% endraw %}                                                            |
| {% raw %}`$TRAVIS_BUILD_NUMBER`{% endraw %}        | {% raw %}`${{ github.run_id }}`{% endraw %}                                                                |
| {% raw %}`$TRAVIS_COMMIT`{% endraw %}              | {% raw %}`${{ github.sha }}`{% endraw %}                                                                   |
| {% raw %}`$TRAVIS_EVENT_TYPE`{% endraw %}          | {% raw %}`${{ github.event_name }}`{% endraw %}                                                            |
| {% raw %}`$TRAVIS_PULL_REQUEST_BRANCH`{% endraw %} | {% raw %}`${{ github.base_ref }}`{% endraw %}                                                              |
| {% raw %}`$TRAVIS_PULL_REQUEST`{% endraw %}        | {% raw %}`${{ github.event.number }}`{% endraw %}                                                          |
| {% raw %}`$TRAVIS_PULL_REQUEST_SHA`{% endraw %}    | {% raw %}`${{ github.head.sha }}`{% endraw %}                                                              |
| {% raw %}`$TRAVIS_PULL_REQUEST_SLUG`{% endraw %}   | {% raw %}`${{ github.repository }}`{% endraw %}                                                            |
| {% raw %}`$TRAVIS_TAG`{% endraw %}                 | {% raw %}`${{ github.ref }}`{% endraw %}                                                                   |
| {% raw %}`$TRAVIS_OS_NAME`{% endraw %}             | {% raw %}`${{ runner.os }}`{% endraw %}                                                                    |
| {% raw %}`$TRAVIS_JOB_ID`{% endraw %}              | {% raw %}`${{ github.job }}`{% endraw %}                                                                   |
| {% raw %}`$TRAVIS_REPO_SLUG`{% endraw %}           | {% raw %}`${{ github.repository_owner/github.repository }}`{% endraw %}                                    |
| {% raw %}`$TRAVIS_BUILD_WEB_URL`{% endraw %}       | {% raw %}`${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}`{% endraw %} |

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
