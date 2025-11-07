---
title: Creating workflow templates for your organization
shortTitle: Create workflow templates
intro: Learn how you can create workflow templates to help people in your team add new workflows more easily.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
  - /actions/using-workflows/creating-starter-workflows-for-your-organization
  - /actions/sharing-automations/creating-workflow-templates-for-your-organization
  - /actions/how-tos/sharing-automations/creating-workflow-templates-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Creating workflow templates

This procedure demonstrates how to create a workflow template and metadata file. The metadata file describes how the workflow templates will be presented to users when they are creating a new workflow.

1. If it doesn't already exist, create a new repository named `.github` in your organization.
1. Create a directory named `workflow-templates`.
1. Create your new workflow file inside the `workflow-templates` directory.
1. Create a metadata file inside the `workflow-templates` directory.
1. To add another workflow template, add your files to the same `workflow-templates` directory.

## Next steps

* For reference information about workflow templates, see [AUTOTITLE](/actions/reference/workflows-and-actions/reusing-workflow-configurations#workflow-templates).
