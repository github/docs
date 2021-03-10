---
title: Переменные окружения
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom environment variables in your workflow file.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables that are available to every step in a workflow run. Environment variables are case-sensitive. Commands run in actions or steps can create, read, and modify environment variables.

To set custom environment variables, you need to specify the variables in the workflow file. You can define environment variables for a step, job, or entire workflow using the [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), and [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) keywords. For more information, see "[Workflow syntax for {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)."

```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: env.DAY_OF_WEEK == 'Mon'
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```

To use the value of an environment variable in a workflow file, you should use the [`env` context](/actions/reference/context-and-expression-syntax-for-github-actions#env-context). If you want to use the value of an environment variable inside a runner, you can use the runner operating system's normal method for reading environment variables.

If you use the workflow file's `run` key to read environment variables from within the runner operating system (as shown in the example above), the variable is substituted in the runner operating system after the job is sent to the runner. For other parts of a workflow file, you must use the `env` context to read environment variables; this is because workflow keys (such as `if`) require the variable to be substituted during workflow processing before it is sent to the runner.

You can also use the {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}`GITHUB_ENV` environment file{% else %} `set-env` workflow command{% endif %} to set an environment variable that the following steps in a workflow can use. The {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}environment file{% else %} `set-env` command{% endif %} can be used directly by an action or as a shell command in a workflow file using the `run` keyword. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)."

### Default environment variables

We strongly recommend that actions use environment variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets environment variables for actions to use in all runner environments.

| Environment variable | Description                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `CI`                 | Always set to `true`.                                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_WORKFLOW`    | The name of the workflow.                                                                                                                                                                                                                                                                                                                                          |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_ACTION`      | The unique identifier (`id`) of the action.                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_ACTIONS`     | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}.                                                                                                                                |
| `GITHUB_ACTOR`       | The name of the person or app that initiated the workflow. For example, `octocat`.                                                                                                                                                                                                                                                                                 |
| `GITHUB_REPOSITORY`  | The owner and repository name. For example, `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                 |
| `GITHUB_EVENT_NAME`  | The name of the webhook event that triggered the workflow.                                                                                                                                                                                                                                                                                                         |
| `GITHUB_EVENT_PATH`  | The path of the file with the complete webhook event payload. For example, `/github/workflow/event.json`.                                                                                                                                                                                                                                                          |
| `GITHUB_WORKSPACE`   | The {% data variables.product.prodname_dotcom %} workspace directory path. The workspace directory is a copy of your repository if your workflow uses the [actions/checkout](https://github.com/actions/checkout) action. If you don't use the `actions/checkout` action, the directory will be empty. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | The commit SHA that triggered the workflow. For example, `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                               |
| `GITHUB_REF`         | The branch or tag ref that triggered the workflow. For example, `refs/heads/feature-branch-1`. If neither a branch or tag is available for the event type, the variable will not exist.                                                                                                                                                                            |
| `GITHUB_HEAD_REF`    | Only set for pull request events. The name of the head branch.                                                                                                                                                                                                                                                                                                     |
| `GITHUB_BASE_REF`    | Only set for pull request events. The name of the base branch.                                                                                                                                                                                                                                                                                                     |
| `GITHUB_SERVER_URL`  | Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.                                                                                                                                                                                                                          |
| `GITHUB_API_URL`     | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                                                                                                     |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                                                                                                         |

{% tip %}

**Note:** If you need to use a workflow run's URL from within a job, you can combine these environment variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

#### Determining when to use default environment variables or contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

### Naming conventions for environment variables

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} reserves the `GITHUB_` environment variable prefix for internal use by {% data variables.product.prodname_dotcom %}. Setting an environment variable or secret with the `GITHUB_` prefix will result in an error.

{% endnote %}

Any new environment variables you set that point to a location on the filesystem should have a `_PATH` suffix. The `HOME` and `GITHUB_WORKSPACE` default variables are exceptions to this convention because the words "home" and "workspace" already imply a location.
