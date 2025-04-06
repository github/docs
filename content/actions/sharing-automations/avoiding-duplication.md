---
title: Avoiding duplication
shortTitle: Avoid duplication
intro: You can use reusable workflows or composite actions to avoid duplicating the content of workflows.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Workflows
redirect_from:
  - /actions/using-workflows/avoiding-duplication
---

## About reusable workflows and composite actions

Reusable workflows and composite actions are two ways to avoid duplicating the content of workflows.

**Reusable workflows** allow you to reuse an entire workflow, including all of its jobs and steps. This is particularly useful when you have a complete CI/CD process that you want to use across multiple repositories. Reusable workflows can be centrally maintained, in one location, but used in many repositories across your organization.

**Composite actions** allow you to combine multiple steps into a single action. You can then run this bundle of steps as a single step within a workflow. This is useful if you have a sequence of steps that will be used in more than one workflow. Composite actions allow you refactor long YAML workflow files into much smaller files and avoid copying and pasting between workflow files.

Reusable workflows and composite actions solve similar problems, but have a few important differences. Most of the time you can use either solution. But some of the time, you’ll need to use one or the other, as described later in this article.

For details of how to create and use reusable workflows and composite actions, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)" and "[AUTOTITLE](/actions/creating-actions/creating-a-composite-action)."

## Comparison of reusable workflows and composite actions

* **Workflow jobs** - Composite actions contain a series of steps, that are run as a single step within the caller workflow. Unlike reusable workflows, they cannot contain jobs.
* **Logging** - When a composite action runs, the log will show just the step in the caller workflow that ran the composite action, not the individual steps within the composite action. With reusable workflows, every job and step is logged separately.
* **Specifying runners** - Reusable workflows contain one or more jobs. As with all workflow jobs, the jobs in a reusable workflow specify the type of machine on which the job will run. Therefore, if the steps must be run on a type of machine that might be different from the machine chosen for the calling workflow job, then you should use a reusable workflow, not a composite action.
* **Passing output to steps** - A composite action is run as a step within a workflow job, and you can have multiple steps before or after the step that runs the composite action. Reusable workflows are called directly within a job, and not from within a job step. You can't add steps to a job after calling a reusable workflow, so you can't use `GITHUB_ENV` to pass values to subsequent job steps in the caller workflow.

### Key differences between reusable workflows and composite actions

| Reusable workflows | Composite actions |
| ------------------ | ----------------- |
| A YAML file, very similar to any standard workflow file | An action containing a bundle of workflow steps |
| Each reusable workflow is a single file in the `.github/workflows` directory of a repository | Each composite action is a separate repository, or a directory, containing an `action.yml` file and, optionally, other files |
| Called by referencing a specific YAML file | Called by referencing a repository or directory in which the action is defined |
| Called directly within a job, not from a step | Run as a step within a job |
| Can contain multiple jobs | Does not contain jobs |
| Each step is logged in real-time | Logged as one step even if it contains multiple steps |
| Can connect a maximum of four levels of workflows | Can be nested to have up to 10 composite actions in one workflow |
| Can use secrets | Cannot use secrets |
