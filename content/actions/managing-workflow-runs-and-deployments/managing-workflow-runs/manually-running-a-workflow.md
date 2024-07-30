---
title: Manually running a workflow
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the Actions tab on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, or the REST API.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Manually run a workflow
redirect_from:
  - /actions/managing-workflow-runs/manually-running-a-workflow
  - /actions/using-workflows/manually-running-a-workflow
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Configuring a workflow to run manually

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event.

To trigger the `workflow_dispatch` event, your workflow must be in the default branch. For more information about configuring the `workflow_dispatch` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)."

{% data reusables.repositories.permissions-statement-write %}

## Running a workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the name of the workflow you want to run.

   {% ifversion workflow-nav-2022 -%}
   ![Screenshot of the "Actions" page. In the left sidebar, a workflow name is highlighted with an outline in dark orange.](/assets/images/help/repository/actions-select-workflow-2022.png)
   {%- else -%}
   ![Screenshot of the "Actions" page. Features apart from one workflow in the left sidebar are grayed out.](/assets/images/help/repository/actions-select-workflow.png)
   {%- endif %}
1. Above the list of workflow runs, click the **Run workflow** button.
   {% note %}

   **Note:** To see the **Run workflow** button, your workflow file must use the `workflow_dispatch` event trigger. Only workflow files that use the `workflow_dispatch` event trigger will have the option to run the workflow manually using the **Run workflow** button. For more information about configuring the `workflow_dispatch` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch)."

   {% endnote %}

   ![Screenshot of a workflow page. Above the list of workflow runs, a button, labeled "Run workflow", is outlined in dark orange.](/assets/images/help/actions/actions-workflow-dispatch.png)
1. Select the **Branch** dropdown menu and click a branch to run the workflow on.
1. If the workflow requires input, fill in the fields.
1. Click **Run workflow**.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To run a workflow, use the `workflow run` subcommand. Replace the `workflow` parameter with either the name, ID, or file name of the workflow you want to run. For example, `"Link Checker"`, `1234567`, or `"link-check-test.yml"`. If you don't specify a workflow, {% data variables.product.prodname_cli %} returns an interactive menu for you to choose a workflow.

```shell
gh workflow run WORKFLOW
```

If your workflow accepts inputs, {% data variables.product.prodname_cli %} will prompt you to enter them. Alternatively, you can use `-f` or `-F` to add an input in `key=value` format. Use `-F` to read from a file.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

You can also pass inputs as JSON by using standard input.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

To run a workflow on a branch other than the repository's default branch, use the `--ref` flag.

```shell
gh workflow run WORKFLOW --ref BRANCH
```

To view the progress of the workflow run, use the `run watch` subcommand and select the run from the interactive list.

```shell
gh run watch
```

{% endcli %}

## Running a workflow using the REST API

When using the REST API, you configure the `inputs` and `ref` as request body parameters. If the inputs are omitted, the default values defined in the workflow file are used.

{% note %}

**Note:** You can define up to 10 `inputs` for a `workflow_dispatch` event.

{% endnote %}

For more information about using the REST API, see "[AUTOTITLE](/rest/actions/workflows#create-a-workflow-dispatch-event)."
