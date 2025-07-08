---
title: Reusable workflows
shortTitle: Reusable workflows
intro: Learn how to avoid duplication when creating a workflow by reusing existing workflows.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

## About reusable workflows

Rather than copying and pasting from one workflow to another, you can make workflows reusable. You and anyone with access to the reusable workflow can then call the reusable workflow from another workflow.

Reusing workflows avoids duplication. This makes workflows easier to maintain and allows you to create new workflows more quickly by building on the work of others, just as you do with actions. Workflow reuse also promotes best practice by helping you to use workflows that are well designed, have already been tested, and have been proven to be effective. Your organization can build up a library of reusable workflows that can be centrally maintained.

The diagram below shows an in-progress workflow run that uses a reusable workflow.

* After each of three build jobs on the left of the diagram completes successfully, a dependent job called "Deploy" is run.
* The "Deploy" job calls a reusable workflow that contains three jobs: "Staging", "Review", and "Production."
* The "Production" deployment job only runs after the "Staging" job has completed successfully.
* When a job targets an environment, the workflow run displays a progress bar that shows the number of steps in the job. In the diagram below, the "Production" job contains 8 steps, with step 6 currently being processed.
* Using a reusable workflow to run deployment jobs allows you to run those jobs for each build without duplicating code in workflows.

![Diagram of a workflow calling a reusable workflow.](/assets/images/help/actions/reusable-workflows-ci-cd.png)

A workflow that uses another workflow is referred to as a "caller" workflow. The reusable workflow is a "called" workflow. One caller workflow can use multiple called workflows. Each called workflow is referenced in a single line. The result is that the caller workflow file may contain just a few lines of YAML, but may perform a large number of tasks when it's run. When you reuse a workflow, the entire called workflow is used, just as if it was part of the caller workflow.

If you reuse a workflow from a different repository, any actions in the called workflow run as if they were part of the caller workflow. For example, if the called workflow uses `actions/checkout`, the action checks out the contents of the repository that hosts the caller workflow, not the called workflow.

You can view the reused workflows referenced in your {% data variables.product.prodname_actions %} workflows as dependencies in the dependency graph of the repository containing your workflows. For more information, see “[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).”

## Reusable workflows versus composite actions

Reusable workflows and composite actions both help you to avoid duplication. Whereas reusable workflows allow you to reuse an entire workflow, with multiple jobs and steps, composite actions combine multiple steps that you can then run within a job step, just like any other action. For more information, see [AUTOTITLE](/actions/using-workflows/avoiding-duplication).

## Reusable workflows and workflow templates

Workflow templates allow everyone in your organization who has permission to create workflows to do so more quickly and easily. When people create a new workflow, they can choose a workflow template and some or all of the work of writing the workflow will be done for them. Within a workflow template, you can also reference reusable workflows to make it easy for people to benefit from reusing centrally managed workflow code. If you use a commit SHA when referencing the reusable workflow, you can ensure that everyone who reuses that workflow will always be using the same YAML code. However, if you reference a reusable workflow by a tag or branch, be sure that you can trust that version of the workflow. For more information, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows).

For more information, see [AUTOTITLE](/actions/using-workflows/creating-starter-workflows-for-your-organization).

## Next steps

To start reusing your workflows, see [AUTOTITLE](/actions/how-tos/sharing-automations/reuse-workflows).

To find information on the intricacies of reusing workflows, see [AUTOTITLE](/actions/reference/reusable-workflows-reference).
