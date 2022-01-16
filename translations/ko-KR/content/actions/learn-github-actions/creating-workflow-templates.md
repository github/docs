---
title: Creating workflow templates
shortTitle: Creating templates
intro: Learn how you can create workflow templates to help people in your team add new workflows more easily.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

{% data reusables.actions.workflow-organization-templates %}

## Creating a workflow template

Workflow templates can be created by users with write access to the organization's `.github` repository. The templates can then be used by organization members who have permission to create workflows. You can share workflow templates if your organization's repository is public or if the repository is private and on an Enterprise plan.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
{% note %}

**Note:** To avoid duplication in workflows created from a template you can call reusable workflows from within a workflow template. This can help make your workflows easier to maintain. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

{% endnote %}
{% endif %}

This procedure demonstrates how to create a workflow template and metadata file. The metadata file describes how the template is presented to users when they are creating a new workflow.

1. If it doesn't already exist, create a new public repository named `.github` in your organization.
2. Create a directory named `workflow-templates`.
3. Create your new workflow file inside the `workflow-templates` directory.

   If you need to refer to a repository's default branch, you can use the `$default-branch` placeholder. When a workflow is created using your template, the placeholder will be automatically replaced with the name of the repository's default branch.

   For example, this file named `octo-organization-ci.yml` demonstrates a basic workflow.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Create a metadata file inside the `workflow-templates` directory. The metadata file must have the same name as the workflow file, but instead of the `.yml` extension, it must be appended with `.properties.json`. For example, this file named `octo-organization-ci.properties.json` contains the metadata for a workflow file named `octo-organization-ci.yml`:
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Required.** The name of the workflow template. This is displayed in the list of available templates.
   * `description` - **Required.** The description of the workflow template. This is displayed in the list of available templates.
   * `iconName` - **Required.** Defines an icon for the workflow's entry in the template list. The `iconName` must be an SVG icon of the same name, and must be stored in the `workflow-templates` directory. For example, a SVG file named `example-icon.svg` is referenced as `example-icon`.
   * `categories` - **Optional.** Defines the language category of the workflow. When a user views the available templates, those templates that match the same language will feature more prominently. For information on the available language categories, see https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Optional.** Allows the template to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another workflow template, add your files to the same `workflow-templates` directory. 예시:

![Workflow template files](/assets/images/help/images/workflow-template-files.png)

## 다음 단계

To continue learning about {% data variables.product.prodname_actions %}, see "[Using workflow templates](/actions/learn-github-actions/using-workflow-templates)."
