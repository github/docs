---
title: Creating starter workflows for your organization
shortTitle: Creating starter workflows
intro: Learn how you can create starter workflows to help people in your team add new workflows more easily.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Creating a starter workflow

Starter workflows can be created by users with write access to the organization's `.github` repository. These can then be used by organization members who have permission to create workflows.

{% ifversion fpt %}
Starter workflows created by users can only be used to create workflows in public repositories. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use starter workflows to create workflows in private repositories. 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Note:** To avoid duplication among starter workflows you can call reusable workflows from within a workflow. This can help make your workflows easier to maintain. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

{% endnote %}
{% endif %}

This procedure demonstrates how to create a starter workflow and metadata file. The metadata file describes how the starter workflows will be presented to users when they are creating a new workflow.

1. 如果组织中没有名为 `.github` 的公共仓库，请新建一个。
2. 创建一个名为 `workflow-templates` 的目录。
3. 在 `workflow-templates` 目录中创建新的工作流程文件。

   如果需要引用仓库的默认分支，可以使用 `$default-branch` 占位符。 When a workflow is created the placeholder will be automatically replaced with the name of the repository's default branch.

   例如，下面这个名为 `octo-organization-ci.yml` 的文件展示了一个基本的工作流程。

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
4. 在 `workflow-templates` 目录中创建元数据文件。 元数据文件必须与工作流程文件同名，但扩展名不是 `.yml`，而必须附加 `.properties.json`。 例如，下面这个名为 `octo-organization-ci.properties.json` 的文件包含名为 `octo-organization-ci.yml` 的工作流程文件的元数据：
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
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
   * `name` - **Required.** The name of the workflow. This is displayed in the list of available workflows.
   * `description` - **Required.** The description of the workflow. This is displayed in the list of available workflows.
   * `iconName` - **Optional.** Specifies an icon for the workflow that's displayed in the list of workflows. The `iconName` must be the name of an SVG file, without the file name extension, stored in the `workflow-templates` directory. For example, an SVG file named `example-icon.svg` is referenced as `example-icon`.
   * `categories` - **可选。**定义工作流程的语言类别。 When a user views the available starter workflows for a repository, the workflows that match the identified language for the project are featured more prominently. 有关可用语言类别的信息，请参阅https://github.com/github/linguist/blob/master/lib/linguist/languages.yml。
   * `filePatterns` - **Optional.** Allows the workflow to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another starter workflow, add your files to the same `workflow-templates` directory. 例如：

![Workflow files](/assets/images/help/images/workflow-template-files.png)

## 后续步骤

To continue learning about {% data variables.product.prodname_actions %}, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)."
