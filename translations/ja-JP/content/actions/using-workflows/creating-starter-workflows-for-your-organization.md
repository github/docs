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

## 概要

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Creating a starter workflow

Starter workflows can be created by users with write access to the organization's `.github` repository. These can then be used by organization members who have permission to create workflows.

{% ifversion fpt %}
Starter workflows created by users can only be used to create workflows in public repositories. Organizations using {% data variables.product.prodname_ghe_cloud %} can also use starter workflows to create workflows in private repositories. 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization)を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
{% note %}

**Note:** To avoid duplication among starter workflows you can call reusable workflows from within a workflow. This can help make your workflows easier to maintain. 詳しい情報については「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

{% endnote %}
{% endif %}

This procedure demonstrates how to create a starter workflow and metadata file. The metadata file describes how the starter workflows will be presented to users when they are creating a new workflow.

1. 存在しない場合は、Organization内で`.github`という名前の新しいパブリック リポジトリを作成します。
2. `workflow-templates`という名前のディレクトリを作成します。
3. `workflow-templates` ディレクトリ内に新しいワークフローファイルを作成します。

   リポジトリのデフォルトブランチを参照する必要がある場合は、 `$default-branch` プレースホルダを使用できます。 When a workflow is created the placeholder will be automatically replaced with the name of the repository's default branch.

   たとえば、`octo-organization-ci.yml`という名前のこのファイルは、基本的なワークフローを示しています。

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
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. `workflow-templates` ディレクトリ内にメタデータファイルを作成します。 メタデータ ファイルは、ワークフロー ファイルと同じ名前である必要がありますが、 `.yml` 拡張子の代わりに、 `.properties.json`を付ける必要があります。 たとえば`octo-organization-ci.properties.json`という名前のこのファイルには 、`octo-organization-ci.yml`という名前のワークフローファイルのメタデータが含まれています。
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
   * `categories` - **オプション。** ワークフローの言語カテゴリを定義します。 When a user views the available starter workflows for a repository, the workflows that match the identified language for the project are featured more prominently. 使用可能な言語カテゴリについては、「https://github.com/github/linguist/blob/master/lib/linguist/languages.yml」を参照してください。
   * `filePatterns` - **Optional.** Allows the workflow to be used if the user's repository has a file in its root directory that matches a defined regular expression.

To add another starter workflow, add your files to the same `workflow-templates` directory. 例:

![Workflow files](/assets/images/help/images/workflow-template-files.png)

## 次のステップ

To continue learning about {% data variables.product.prodname_actions %}, see "[Using starter workflows](/actions/using-workflows/using-starter-workflows)."
