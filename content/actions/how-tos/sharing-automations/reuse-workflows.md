---
title: Reuse workflows
shortTitle: Reuse workflows
intro: Learn how to avoid duplication when creating a workflow by reusing existing workflows.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
  - /actions/using-workflows/reusing-workflows
  - /actions/sharing-automations/reusing-workflows
  - /actions/how-tos/sharing-automations/reusing-workflows
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

## Creating a reusable workflow

Reusable workflows are YAML-formatted files, very similar to any other workflow file. As with other workflow files, you locate reusable workflows in the `.github/workflows` directory of a repository. Subdirectories of the `workflows` directory are not supported.

{% ifversion ghec or ghes %}You can standardize deployments by creating a self-hosted runner group that can only execute a specific reusable workflow. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

For a workflow to be reusable, the values for `on` must include `workflow_call`:

```yaml
on:
  workflow_call:
```

## Using inputs and secrets in a reusable workflow

You can define inputs and secrets, which can be passed from the caller workflow and then used within the called workflow. There are three stages to using an input or a secret in a reusable workflow.

1. In the reusable workflow, use the `inputs` and `secrets` keywords to define inputs or secrets that will be passed from a caller workflow.
   {% raw %}

   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         personal_access_token:
           required: true
   ```

   {% endraw %}
   For details of the syntax for defining inputs and secrets, see [`on.workflow_call.inputs`](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_callinputs) and [`on.workflow_call.secrets`](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_callsecrets).
1. In the reusable workflow, reference the input or secret that you defined in the `on` key in the previous step.

   > [!NOTE]
   > If the secrets are inherited by using `secrets: inherit` in the calling workflow, you can reference them even if they are not explicitly defined in the `on` key. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit).

   {% raw %}

   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/labeler@v5
         with:
           repo-token: ${{ secrets.personal_access_token }}
           configuration-path: ${{ inputs.config-path }}
   ```

   {% endraw %}

   In the example above, `personal_access_token` is a secret that's defined at the repository or organization level.

   > [!WARNING]
   > Environment secrets cannot be passed from the caller workflow as `on.workflow_call` does not support the `environment` keyword. If you include `environment` in the reusable workflow at the job level, the environment secret will be used, and not the secret passed from the caller workflow. For more information, see [AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment#environment-secrets) and [AUTOTITLE](/actions/writing-workflows/workflow-syntax-for-github-actions#onworkflow_call).

1. Pass the input or secret from the caller workflow.

   {% data reusables.actions.pass-inputs-to-reusable-workflows %}

### Example reusable workflow

This reusable workflow file named `workflow-B.yml` (we'll refer to this later in the [example caller workflow](#example-caller-workflow)) takes an input string and a secret from the caller workflow and uses them in an action.

{% raw %}

```yaml copy
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v5
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```

{% endraw %}

## Calling a reusable workflow

You call a reusable workflow by using the `uses` keyword. Unlike when you are using actions within a workflow, you call reusable workflows directly within a job, and not from within job steps.

[`jobs.<job_id>.uses`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iduses)

You reference reusable workflow files using one of the following syntaxes:

{% data reusables.actions.reusable-workflow-calling-syntax %}

You can call multiple workflows, referencing each in a separate job.

{% data reusables.actions.uses-keyword-example %}

### Example caller workflow

This workflow file calls two workflow files. The second of these, `workflow-B.yml` (shown in the [example reusable workflow](#example-reusable-workflow)), is passed an input (`config-path`) and a secret (`token`).

{% raw %}

```yaml copy
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```

{% endraw %}

## Passing inputs and secrets to a reusable workflow

{% data reusables.actions.pass-inputs-to-reusable-workflows %}

## Using a matrix strategy with a reusable workflow

Jobs using the matrix strategy can call a reusable workflow.

A matrix strategy lets you use variables in a single job definition to automatically create multiple job runs that are based on the combinations of the variables. For example, you can use a matrix strategy to pass different inputs to a reusable workflow. For more information about matrices, see [AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs).

This example job below calls a reusable workflow and references the matrix context by defining the variable `target` with the values `[dev, stage, prod]`. It will run three jobs, one for each value in the variable.

{% raw %}

```yaml copy
jobs:
  ReusableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```

{% endraw %}

## Nesting reusable workflows

You can connect a maximum of four levels of workflows - that is, the top-level caller workflow and up to three levels of reusable workflows. For example: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. Loops in the workflow tree are not permitted.

> [!NOTE] Nested reusable workflows require all workflows in the chain to be accessible to the caller, and permissions can only be maintained or reduced—not elevated—throughout the chain. For more information, see [AUTOTITLE](/actions/reference/reusable-workflows-reference#access-and-permissions-for-nested-workflows).

From within a reusable workflow you can call another reusable workflow.

{% raw %}

```yaml copy
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```

{% endraw %}

## Passing secrets to nested workflows

You can use `jobs.<job_id>.secrets` in a calling workflow to pass named secrets to a directly called workflow. Alternatively, you can use `jobs.<job_id>.secrets.inherit` to pass all of the calling workflow's secrets to a directly called workflow. For more information, see the section [AUTOTITLE](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow) above, and the reference article [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit). Secrets are only passed to directly called workflow, so in the workflow chain A > B > C, workflow C will only receive secrets from A if they have been passed from A to B, and then from B to C.

In the following example, workflow A passes all of its secrets to workflow B, by using the `inherit` keyword, but workflow B only passes one secret to workflow C. Any of the other secrets passed to workflow B are not available to workflow C.

{% raw %}

```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      repo-token: ${{ secrets.personal_access_token }} # pass just this secret
```

{% endraw %}

## Using outputs from a reusable workflow

A reusable workflow may generate data that you want to use in the caller workflow. To use these outputs, you must specify them as the outputs of the reusable workflow.

If a reusable workflow that sets an output is executed with a matrix strategy, the output will be the output set by the last successful completing reusable workflow of the matrix which actually sets a value.
That means if the last successful completing reusable workflow sets an empty string for its output, and the second last successful completing reusable workflow sets an actual value for its output, the output will contain the value of the second last completing reusable workflow.

The following reusable workflow has a single job containing two steps. In each of these steps we set a single word as the output: "hello" and "world." In the `outputs` section of the job, we map these step outputs to job outputs called: `output1` and `output2`. In the `on.workflow_call.outputs` section we then define two outputs for the workflow itself, one called `firstword` which we map to `output1`, and one called `secondword` which we map to `output2`.

The `value` must be set to the value of a job-level output within the called workflow. Step-level outputs must first be mapped to job-level outputs as shown below.

For more information, see [AUTOTITLE](/actions/using-jobs/defining-outputs-for-jobs#overview) and [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_calloutputs).

{% raw %}

```yaml copy
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
      - id: step2
        run: echo "secondword=world" >> $GITHUB_OUTPUT
```

{% endraw %}

We can now use the outputs in the caller workflow, in the same way you would use the outputs from a job within the same workflow. We reference the outputs using the names defined at the workflow level in the reusable workflow: `firstword` and `secondword`. In this workflow, `job1` calls the reusable workflow and `job2` prints the outputs from the reusable workflow ("hello world") to standard output in the workflow log.

{% raw %}

```yaml copy
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```

{% endraw %}

For more information on using job outputs, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs). If you want to share something other than a variable (e.g. a build artifact) between workflows, see [AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts).

## Monitoring which workflows are being used

{% ifversion fpt or ghes %}

Organizations that use {% data variables.product.prodname_ghe_cloud %} can interact with the audit log via the {% data variables.product.github %} REST API to monitor which workflows are being used. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

You can use the {% data variables.product.prodname_dotcom %} REST API to monitor how reusable workflows are being used. The `prepared_workflow_job` audit log action is triggered when a workflow job is started. Included in the data recorded are:
* `repo` - the organization/repository where the workflow job is located. For a job that calls another workflow, this is the organization/repository of the caller workflow.
* `@timestamp` - the date and time that the job was started, in Unix epoch format.
* `job_name` - the name of the job that was run.
* `calling_workflow_refs` - an array of file paths for all the caller workflows involved in this workflow job. The items in the array are in the reverse order that they were called in. For example, in a chain of workflows A > B > C, when viewing the logs for a job in workflow C, the array would be `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` - an array of SHAs for all the caller workflows involved in this workflow job. The array contains the same number of items, in the same order, as the `calling_workflow_refs` array.
* `job_workflow_ref` - the workflow file that was used, in the form `{owner}/{repo}/{path}/{filename}@{ref}`. For a job that calls another workflow, this identifies the called workflow.

For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

> [!NOTE]
> Audit data for `prepared_workflow_job` can only be viewed using the REST API. It is not visible in the {% data variables.product.prodname_dotcom %} web interface, or included in JSON/CSV exported audit data.

{% endif %}

## Next steps

To find information on the intricacies of reusing workflows, see [AUTOTITLE](/actions/reference/reusable-workflows-reference).
