---
title: Variables reference
shortTitle: Variables reference
intro: 'Find information for supported variables, naming conventions, limits, and contexts in {% data variables.product.prodname_actions %} workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

This article lists the supported variables you can use in {% data variables.product.prodname_actions %} workflows, including environment variables, configuration variables, and default variables provided by {% data variables.product.github %}. Use this reference to look up variable names, naming conventions, limits, and supported contexts when configuring your workflows.

For more information about variables, see [AUTOTITLE](/actions/concepts/workflows-and-actions/variables).

## Default environment variables

The default environment variables that {% data variables.product.prodname_dotcom %} sets are available to every step in a workflow.

Because default environment variables are set by {% data variables.product.prodname_dotcom %} and not defined in a workflow, they are not accessible through the `env` context. However, most of the default variables have a corresponding, and similarly named, context property. For example, the value of the `GITHUB_REF` variable can be read during workflow processing using the {% raw %}`${{ github.ref }}`{% endraw %} context property.

{% data reusables.actions.environment-variables-are-fixed %} For more information about setting environment variables, see [AUTOTITLE](/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#defining-environment-variables-for-a-single-workflow) and [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable).

We strongly recommend that actions use variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets variables for actions to use in all runner environments.

| Variable | Description |
| ---------|------------ |
| `CI` | Always set to `true`. |
| `GITHUB_ACTION` | The name of the action currently running, or the [`id`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsid) of a step. For example, for an action, `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} removes special characters, and uses the name `__run` when the current step runs a script without an `id`. If you use the same script or action more than once in the same job, the name will include a suffix that consists of the sequence number preceded by an underscore. For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. Similarly, the second invocation of `actions/checkout` will be `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | The path where an action is located. This property is only supported in composite actions. You can use this path to change directories to where the action is located and access other files in that same repository. For example, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | For a step executing an action, this is the owner and repository name of the action. For example, `actions/checkout`. |
| `GITHUB_ACTIONS` | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}. |
| `GITHUB_ACTOR` | The name of the person or app that initiated the workflow. For example, `octocat`. |
| `GITHUB_ACTOR_ID` | {% data reusables.actions.actor_id-description %} |
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.rest_url %}`. |
| `GITHUB_BASE_REF` | The name of the base ref or target branch of the pull request in a workflow run. This is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `main`. |
| `GITHUB_ENV` | The path on the runner to the file that sets variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable). |
| `GITHUB_EVENT_NAME` | The name of the event that triggered the workflow. For example, `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | The path to the file on the runner that contains the full event webhook payload. For example, `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url %}`. |
| `GITHUB_HEAD_REF` | The head ref or source branch of the pull request in a workflow run. This property is only set when the event that triggers a workflow run is either `pull_request` or `pull_request_target`. For example, `feature-branch-1`. |
| `GITHUB_JOB` | The [job_id](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_id) of the current job. For example, `greeting_job`. |
| `GITHUB_OUTPUT` | The path on the runner to the file that sets the current step's outputs from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/set_output_a50ef383-b063-46d9-9157-57953fc9f3f0`. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter). |
| `GITHUB_PATH` | The path on the runner to the file that sets system `PATH` variables from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path). |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} |
| `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} |
| `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_REPOSITORY_ID` | {% data reusables.actions.repository_id-description %} |
| `GITHUB_REPOSITORY_OWNER` | The repository owner's name. For example, `octocat`. |
| `GITHUB_REPOSITORY_OWNER_ID` | {% data reusables.actions.repository_owner_id-description %} |
| `GITHUB_RETENTION_DAYS` | The number of days that workflow run logs and artifacts are kept. For example, `90`. |
| `GITHUB_RUN_ATTEMPT` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. For example, `3`. |
| `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} For example, `1658821493`. |
| `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} For example, `3`. |
| `GITHUB_SERVER_URL`| The URL of the {% data variables.product.github %} server. For example: `https://{% data variables.product.product_url %}`. |
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} |
| `GITHUB_STEP_SUMMARY` | The path on the runner to the file that contains job summaries from workflow commands. The path to this file is unique to the current step and changes for each step in a job. For example, `/home/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary). |
| `GITHUB_TRIGGERING_ACTOR` | {% data reusables.actions.github-triggering-actor-description %} |
| `GITHUB_WORKFLOW` | The name of the workflow. For example, `My test workflow`. If the workflow file doesn't specify a `name`, the value of this variable is the full path of the workflow file in the repository. |
| `GITHUB_WORKFLOW_REF` | {% data reusables.actions.workflow-ref-description %} |
| `GITHUB_WORKFLOW_SHA` | {% data reusables.actions.workflow-sha-description %} |
| `GITHUB_WORKSPACE` | The default working directory on the runner for steps, and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} |
| `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} |
| `RUNNER_ENVIRONMENT` | {% data reusables.actions.runner-environment-description %} |
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} For example, `Hosted Agent` |
| `RUNNER_OS` | {% data reusables.actions.runner-os-description %} For example, `Windows` |
| `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} For example, `D:\a\_temp` |
| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} For example, `C:\hostedtoolcache\windows` |

> [!NOTE]
> If you need to use a workflow run's URL from within a job, you can combine these variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

## Naming conventions for configuration variables

The following rules apply to configuration variable names:

{% data reusables.actions.actions-secrets-and-variables-naming %}

## Naming conventions for environment variables

When you set an environment variable, you cannot use any of the default environment variable names. For a complete list of default environment variables, see [AUTOTITLE](/actions/reference/variables-reference#default-environment-variables) below. If you attempt to override the value of one of these default variables, the assignment is ignored.

> [!NOTE]
> You can list the entire set of environment variables that are available to a workflow step by using <span style="white-space: nowrap;">`run: env`</span> in a step and then examining the output for the step.

## Configuration variable precedence

If a variable with the same name exists at multiple levels, the variable at the lowest level takes precedence. For example, if an organization-level variable has the same name as a repository-level variable, then the repository-level variable takes precedence. Similarly, if an organization, repository, and environment all have a variable with the same name, the environment-level variable takes precedence.

For reusable workflows, the variables from the caller workflow's repository are used. Variables from the repository that contains the called workflow are not made available to the caller workflow.

## Limits for configuration variables

{% ifversion ghes %}

Individual variables are limited to 48 KB in size.

You can store up to 1,000 organization variables, 500 variables per repository, and 100 variables per environment. The total combined size limit for organization and repository variables is 10 MB per workflow run.

A workflow created in a repository can access the following number of variables:

* Up to 500 repository variables, if the total size of repository variables is less than 10 MB. If the total size of repository variables exceeds 10 MB, only the repository variables that fall below the limit will be available (as sorted alphabetically by variable name).
* Up to 1,000 organization variables, if the total combined size of repository and organization variables is less than 10 MB. If the total combined size of organization and repository variables exceeds 10 MB, only the organization variables that fall below that limit will be available (after accounting for repository variables and as sorted alphabetically by variable name).
* Up to 100 environment-level variables.

> [!NOTE]
> Environment-level variables do not count toward the 10 MB total size limit. If you exceed the combined size limit for repository and organization variables and still need additional variables, you can use an environment and define additional variables in the environment.

{% else %}

Individual variables are limited to 48 KB in size.

You can store up to 1,000 organization variables, 500 variables per repository, and 100 variables per environment. The total combined size limit for organization and repository variables is 256 KB per workflow run.

A workflow created in a repository can access the following number of variables:

* Up to 500 repository variables, if the total size of repository variables is less than 256 KB. If the total size of repository variables exceeds 256 KB, only the repository variables that fall below the limit will be available (as sorted alphabetically by variable name).
* Up to 1,000 organization variables, if the total combined size of repository and organization variables is less than 256 KB. If the total combined size of organization and repository variables exceeds 256 KB, only the organization variables that fall below that limit will be available (after accounting for repository variables and as sorted alphabetically by variable name).
* Up to 100 environment-level variables.

> [!NOTE]
> Environment-level variables do not count toward the 256 KB total size limit. If you exceed the combined size limit for repository and organization variables and still need additional variables, you can use an environment and define additional variables in the environment.

{% endif %}

## Supported contexts

You will commonly use either the `env` or `github` context to access variable values in parts of the workflow that are processed before jobs are sent to runners.

> [!WARNING] Do not print the `github` context to logs. It contains sensitive information.

| Context | Use case | Example |
| --- | --- | --- |
| `env` | Reference custom variables defined in the workflow. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Reference information about the workflow run and the event that triggered the run. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |
