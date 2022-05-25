---
title: Reusing workflows
shortTitle: Reusing workflows
intro: Learn how to avoid duplication when creating a workflow by reusing existing workflows.
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-4757
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.reusable-workflows-ghes-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

Rather than copying and pasting from one workflow to another, you can make workflows reusable. You and anyone with access to the reusable workflow can then call the reusable workflow from another workflow.

Reusing workflows avoids duplication. This makes workflows easier to maintain and allows you to create new workflows more quickly by building on the work of others, just as you do with actions. Workflow reuse also promotes best practice by helping you to use workflows that are well designed, have already been tested, and have been proved to be effective. Your organization can build up a library of reusable workflows that can be centrally maintained.

The diagram below shows three build jobs on the left of the diagram. After each of these jobs completes successfully a dependent job called "Deploy" runs. This job calls a reusable workflow that contains three jobs: "Staging", "Review", and "Production." The "Production" deployment job only runs after the "Staging" job has completed successfully. Using a reusable workflow to run deployment jobs allows you to run those jobs for each build without duplicating code in workflows.

![Diagram of a reusable workflow for deployment](/assets/images/help/images/reusable-workflows-ci-cd.png)

A workflow that uses another workflow is referred to as a "caller" workflow. The reusable workflow is a "called" workflow. One caller workflow can use multiple called workflows. Each called workflow is referenced in a single line. The result is that the caller workflow file may contain just a few lines of YAML, but may perform a large number of tasks when it's run. When you reuse a workflow, the entire called workflow is used, just as if it was part of the caller workflow.

If you reuse a workflow from a different repository, any actions in the called workflow run as if they were part of the caller workflow. For example, if the called workflow uses `actions/checkout`, the action checks out the contents of the repository that hosts the caller workflow, not the called workflow.

When a reusable workflow is triggered by a caller workflow, the `github` context is always associated with the caller workflow. The called workflow is automatically granted access to `github.token` and `secrets.GITHUB_TOKEN`. For more information about the `github` context, see "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

You can view the reused workflows referenced in your {% data variables.product.prodname_actions %} workflows as dependencies in the dependency graph of the repository containing your workflows. For more information, see “[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).”

### Reusable workflows and starter workflows

Starter workflows allow everyone in your organization who has permission to create workflows to do so more quickly and easily. When people create a new workflow, they can choose a starter workflow and some or all of the work of writing the workflow will be done for them. Within a starter workflow, you can also reference reusable workflows to make it easy for people to benefit from reusing centrally managed workflow code. If you use a tag or branch name when referencing the reusable workflow, you can ensure that everyone who reuses that workflow will always be using the same YAML code. However, if you reference a reusable workflow by a tag or branch, be sure that you can trust that version of the workflow. For more information, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows)."

For more information, see "[Creating starter workflows for your organization](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)."

## Access to reusable workflows

A reusable workflow can be used by another workflow if {% ifversion ghes or ghec or ghae %}any{% else %}either{% endif %} of the following is true:

* Both workflows are in the same repository.
* The called workflow is stored in a public repository{% if actions-workflow-policy %}, and your {% ifversion ghec %}enterprise{% else %}organization{% endif %} allows you to use public reusable workflows{% endif %}.{% ifversion ghes or ghec or ghae %}
* The called workflow is stored in an internal repository and the settings for that repository allow it to be accessed. For more information, see {% if internal-actions %}"[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}"[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}."{% endif %}

## Using runners

{% ifversion fpt or ghes or ghec %}

### Using GitHub-hosted runners

The assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. Billing for {% data variables.product.prodname_dotcom %}-hosted runners is always associated with the caller. The caller workflow cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository. For more information, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)."

### Using self-hosted runners

{% endif %}

Called workflows that are owned by the same user or organization{% ifversion ghes or ghec or ghae %} or enterprise{% endif %} as the caller workflow can access self-hosted runners from the caller's context. This means that a called workflow can access self-hosted runners that are:
* In the caller repository
* In the caller repository's organization{% ifversion ghes or ghec or ghae %} or enterprise{% endif %}, provided that the runner has been made available to the caller repository

## Limitations

* Reusable workflows can't call other reusable workflows.
* Reusable workflows stored within a private repository can only be used by workflows within the same repository.
* Any environment variables set in an `env` context defined at the workflow level in the caller workflow are not propagated to the called workflow. For more information about the `env` context, see "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)."
* The `strategy` property is not supported in any job that calls a reusable workflow.

## Creating a reusable workflow

Reusable workflows are YAML-formatted files, very similar to any other workflow file. As with other workflow files, you locate reusable workflows in the `.github/workflows` directory of a repository. Subdirectories of the `workflows` directory are not supported.

For a workflow to be reusable, the values for `on` must include `workflow_call`:

```yaml
on:
  workflow_call:
```

### Using inputs and secrets in a reusable workflow

You can define inputs and secrets, which can be passed from the caller workflow and then used within the called workflow. There are three stages to using an input or a secret in a reusable workflow.

1. In the reusable workflow, use the `inputs` and `secrets` keywords to define inputs or secrets that will be passed from a caller workflow.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         username:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %}
   {% if actions-inherit-secrets-reusable-workflows %}
   For details of the syntax for defining inputs and secrets, see [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs), [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets) and [`on.workflow_call.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_callsecretsinherit).
1. In the reusable workflow, reference the input or secret that you defined in the `on` key in the previous step. If the secrets are inherited using `secrets: inherit`, you can reference them even if they are not defined in the `on` key.
   {%- else %}
   For details of the syntax for defining inputs and secrets, see [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) and [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
1. In the reusable workflow, reference the input or secret that you defined in the `on` key in the previous step.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
         - uses: ./.github/workflows/my-action
           with:
             username: ${{ inputs.username }}
             token: ${{ secrets.envPAT }}
   ```
   {% endraw %}
   In the example above, `envPAT` is an environment secret that's been added to the `production` environment. This environment is therefore referenced within the job.

   {% note %}

   **Note**: Environment secrets are encrypted strings that are stored in an environment that you've defined for a repository. Environment secrets are only available to workflow jobs that reference the appropriate environment. For more information, see "[Using environments for deployment](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."

   {% endnote %}

1. Pass the input or secret from the caller workflow.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Example reusable workflow

This reusable workflow file named `workflow-B.yml` (we'll refer to this later in the [example caller workflow](#example-caller-workflow)) takes an input string and a secret from the caller workflow and uses them in an action.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      username:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  example_job:
    name: Pass input and secrets to my-action
    runs-on: ubuntu-latest
    steps:
      - uses: ./.github/workflows/my-action
        with:
          username: ${{ inputs.username }}
          token: ${{ secrets.token }}
```
{% endraw %}

## Calling a reusable workflow

You call a reusable workflow by using the `uses` keyword. Unlike when you are using actions within a workflow, you call reusable workflows directly within a job, and not from within job steps.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

You reference reusable workflow files using {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}one of the following syntaxes:{% else %}the syntax:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

You can call multiple workflows, referencing each in a separate job.

{% data reusables.actions.uses-keyword-example %}

### Passing inputs and secrets to a reusable workflow

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

### Supported keywords for jobs that call a reusable workflow

When you call a reusable workflow, you can only use the following keywords in the job containing the call:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)
 {% if actions-inherit-secrets-reusable-workflows %}* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_callsecretsinherit){% endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Note:**

   * If `jobs.<job_id>.permissions` is not specified in the calling job, the called workflow will have the default permissions for the `GITHUB_TOKEN`. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."
   * The `GITHUB_TOKEN` permissions passed from the caller workflow can be only downgraded (not elevated) by the called workflow.

   {% endnote %}

### Example caller workflow

This workflow file calls two workflow files. The second of these, `workflow-B.yml` (shown in the [example reusable workflow](#example-reusable-workflow)), is passed an input (`username`) and a secret (`token`).

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      username: mona
    secrets:
      token: ${{ secrets.TOKEN }}
```
{% endraw %}

## Using outputs from a reusable workflow

A reusable workflow may generate data that you want to use in the caller workflow. To use these outputs, you must specify them as the outputs of the reusable workflow.

The following reusable workflow has a single job containing two steps. In each of these steps we set a single word as the output: "hello" and "world." In the `outputs` section of the job, we map these step outputs to job outputs called: `output1` and `output2`. In the `on.workflow_call.outputs` section we then define two outputs for the workflow itself, one called `firstword` which we map to `output1`, and one called `secondword` which we map to `output2`.

{% raw %}
```yaml{:copy}
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
        run: echo "::set-output name=firstword::hello"
      - id: step2
        run: echo "::set-output name=secondword::world"
```
{% endraw %}

We can now use the outputs in the caller workflow, in the same way you would use the outputs from a job within the same workflow. We reference the outputs using the names defined at the workflow level in the reusable workflow: `firstword` and `secondword`. In this workflow, `job1` calls the reusable workflow and `job2` prints the outputs from the reusable workflow ("hello world") to standard output in the workflow log.

{% raw %}
```yaml{:copy}
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

For more information on using job outputs, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)."

## Monitoring which workflows are being used

You can use the {% data variables.product.prodname_dotcom %} REST API to monitor how reusable workflows are being used. The `prepared_workflow_job` audit log action is triggered when a workflow job is started. Included in the data recorded are:
* `repo` - the organization/repository where the workflow job is located. For a job that calls another workflow, this is the organization/repository of the caller workflow.
* `@timestamp` - the date and time that the job was started, in Unix epoch format.
* `job_name` - the name of the job that was run.
* `job_workflow_ref` - the workflow file that was used, in the form `{owner}/{repo}/{path}/{filename}@{ref}`. For a job that calls another workflow, this identifies the called workflow.

For information about using the REST API to query the audit log for an organization, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% note %}

**Note**: Audit data for `prepared_workflow_job` can only be viewed using the REST API. It is not visible in the {% data variables.product.prodname_dotcom %} web interface, or included in JSON/CSV exported audit data.

{% endnote %}

## Next steps

To continue learning about {% data variables.product.prodname_actions %}, see "[Events that trigger workflows](/actions/learn-github-actions/events-that-trigger-workflows)."

{% if restrict-groups-to-workflows %}You can standardize deployments by creating a self-hosted runner group that can only execute a specific reusable workflow. For more information, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."{% endif %}
