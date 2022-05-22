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
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## 概览

{% data reusables.actions.workflow-organization-templates %}

## 创建工作流程模板

对组织的 `.github` 仓库具有写入权限的用户可以创建工作流程模板。 然后，有权限创建工作流程的组织成员便可使用这些模板。

{% ifversion fpt %}
Your workflow templates can be used to create workflows in public repositories only. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use workflow templates to create workflows in private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/learn-github-actions/creating-workflow-templates).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Note:** To avoid duplication in workflows created from a template you can call reusable workflows from within a workflow template. This can help make your workflows easier to maintain. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."

{% endnote %}
{% endif %}

此过程展示如何创建工作流程模板和元数据文件。 元数据文件描述在用户新建工作流程时如何向其显示模板。

1. 如果组织中没有名为 `.github` 的公共仓库，请新建一个。
2. 创建一个名为 `workflow-templates` 的目录。
3. 在 `workflow-templates` 目录中创建新的工作流程文件。

   如果需要引用仓库的默认分支，可以使用 `$default-branch` 占位符。 使用模板创建工作流程时，占位符将自动替换为仓库默认分支的名称。

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
   * `name` - **必要。**工作流程模板的名称。 这会显示在可用模板列表中。
   * `description` - **必要。**工作流程模板的描述。 这会显示在可用模板列表中。
   * `iconName` - **必要。**定义模板列表中工作流程项目的图标。 `iconName` 必须是同名的 SVG 图标，且必须存储在 `workflow-templates` 目录中。 例如，名为 `example-icon.svg` 的 SVG 文件被引用为 `example-icon`。
   * `categories` - **可选。**定义工作流程的语言类别。 当用户查看可用模板时，匹配相同语言的模板将更加突出。 有关可用语言类别的信息，请参阅https://github.com/github/linguist/blob/master/lib/linguist/languages.yml。
   * `filePatterns` - **可选。**如果用户仓库在其根目录中有符合定义的正则表达式的文件，则允许使用模板。

要添加另一个工作流模板，请将您的文件添加到同一 `workflow-templates` 目录中。 例如：

![工作流程模板文件](/assets/images/help/images/workflow-template-files.png)

## 后续步骤

To continue learning about {% data variables.product.prodname_actions %}, see "[Using workflow templates](/actions/learn-github-actions/using-workflow-templates)."
