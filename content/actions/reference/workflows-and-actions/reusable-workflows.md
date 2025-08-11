---
title: Reusable workflows reference
shortTitle: Reusable workflows
intro: Learn how to avoid duplication when creating a workflow by reusing existing workflows.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /actions/reference/reusable-workflows-reference
---

## Access to reusable workflows

A reusable workflow can be used by another workflow if any of the following is true:

* Both workflows are in the same repository.
* The called workflow is stored in a public repository{% ifversion ghes %} on {% data variables.product.prodname_ghe_server %}.

  You cannot directly use reusable workflows defined on {% data variables.product.prodname_dotcom_the_website %}. Instead store a copy of the reusable workflow on {% data variables.location.product_location %}, and call the workflow from that path.

  {% elsif actions-workflow-policy %}, and your {% ifversion ghec %}enterprise{% else %}organization{% endif %} allows you to use public reusable workflows.{% endif %}{% ifversion ghes or ghec %}
* The called workflow is stored in an internal repository and the settings for that repository allow it to be accessed. For more information, see [AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise).{% endif %}
* The called workflow is stored in a private repository and the settings for that repository allow it to be accessed. For more information, see {% ifversion ghes or ghec %}[AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise).{% else %}[AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-with-your-organization) and [AUTOTITLE](/actions/creating-actions/sharing-actions-and-workflows-from-your-private-repository).{% endif %}

The following table shows the accessibility of reusable workflows to a caller workflow, depending on the visibility of the host repository.

| Caller repository | Accessible workflows repositories |
|----|----|
| `private` | `private`{% ifversion ghes or ghec %}, `internal`,{% endif %} and `public` |
| {% ifversion ghes or ghec %} |
| `internal` | `internal`, and `public` |
| {% endif %} |
| `public` | `public` |

The **Actions permissions** on the callers repository's Actions settings page must be configured to allow the use of actions and reusable workflows - see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-select-actions-and-reusable-workflows-to-run).

For {% ifversion ghes or ghec %}internal or {% endif %}private repositories, the **Access** policy on the Actions settings page of the called workflow's repository must be explicitly configured to allow access from repositories containing caller workflows - see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository).

{% data reusables.actions.actions-redirects-workflows %}

## Limitations

* You can connect up to four levels of workflows. For more information, see [Nesting reusable workflows](/actions/how-tos/sharing-automations/reuse-workflows#nesting-reusable-workflows).
* You can call a maximum of 20 unique reusable workflows from a single workflow file. This limit includes any trees of nested reusable workflows that may be called starting from your top-level caller workflow file.

  For example, _top-level-caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ counts as 2 reusable workflows.

* Any environment variables set in an `env` context defined at the workflow level in the caller workflow are not propagated to the called workflow. For more information, see [AUTOTITLE](/actions/learn-github-actions/variables) and [AUTOTITLE](/actions/learn-github-actions/contexts#env-context).
* Similarly, environment variables set in the `env` context, defined in the called workflow, are not accessible in the `env` context of the caller workflow. Instead, you must use outputs of the reusable workflow. For more information, see [Using outputs from a reusable workflow](/actions/how-tos/sharing-automations/reuse-workflows#using-outputs-from-a-reusable-workflow).
* To reuse variables in multiple workflows, set them at the organization, repository, or environment levels and reference them using the `vars` context. For more information see [AUTOTITLE](/actions/learn-github-actions/variables) and [AUTOTITLE](/actions/learn-github-actions/contexts#vars-context).
* Reusable workflows are called directly within a job, and not from within a job step. You cannot, therefore, use `GITHUB_ENV` to pass values to job steps in the caller workflow.

## Supported keywords for jobs that call a reusable workflow

When you call a reusable workflow, you can only use the following keywords in the job containing the call:

* [`jobs.<job_id>.name`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)
* [`jobs.<job_id>.strategy`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy)
* [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)
* [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions)

  > [!NOTE]
  >
  > * If `jobs.<job_id>.permissions` is not specified in the calling job, the called workflow will have the default permissions for the `GITHUB_TOKEN`. For more information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#permissions).
  > * The `GITHUB_TOKEN` permissions passed from the caller workflow can be only downgraded (not elevated) by the called workflow.
  > * If you use `jobs.<job_id>.concurrency.cancel-in-progress: true`, don't use the same value for `jobs.<job_id>.concurrency.group` in the called and caller workflows as this will cause the workflow that's already running to be cancelled. A called workflow uses the name of its caller workflow in {% raw %}${{ github.workflow }}{% endraw %}, so using this context as the value of `jobs.<job_id>.concurrency.group` in both caller and called workflows will cause the caller workflow to be cancelled when the called workflow runs.

## How reusable workflows use runners

### {% data variables.product.github %}-hosted runners

The assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. Billing for {% data variables.product.prodname_dotcom %}-hosted runners is always associated with the caller. The caller workflow cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners).

### Self-hosted runners

Called workflows that are owned by the same user or organization{% ifversion ghes or ghec %} or enterprise{% endif %} as the caller workflow can access self-hosted runners from the caller's context. This means that a called workflow can access self-hosted runners that are:
* In the caller repository
* In the caller repository's organization{% ifversion ghes or ghec %} or enterprise{% endif %}, provided that the runner has been made available to the caller repository

## Access and permissions for nested workflows

A workflow that contains nested reusable workflows will fail if any of the nested workflows is inaccessible to the initial caller workflow. For more information, see [Access to reusable workflows](#access-to-reusable-workflows).

`GITHUB_TOKEN` permissions can only be the same or more restrictive in nested workflows. For example, in the workflow chain A > B > C, if workflow A has `package: read` token permission, then B and C cannot have `package: write` permission. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication).

For information on how to use the API to determine which workflow files were involved in a particular workflow run, see [AUTOTITLE](/actions/how-tos/sharing-automations/reuse-workflows#monitoring-which-workflows-are-being-used).

## Behavior of reusable workflows when re-running jobs

{% data reusables.actions.partial-reruns-with-reusable %}

## `github` context

When a reusable workflow is triggered by a caller workflow, the `github` context is always associated with the caller workflow. The called workflow is automatically granted access to `github.token` and `secrets.GITHUB_TOKEN`. For more information about the `github` context, see [AUTOTITLE](/actions/learn-github-actions/contexts#github-context).
