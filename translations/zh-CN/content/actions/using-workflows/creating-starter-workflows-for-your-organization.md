---
title: 为组织创建入门工作流程
shortTitle: Creating starter workflows
intro: 了解如何创建入门工作流程，以帮助团队中的人员更轻松地添加新工作流程。
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
ms.openlocfilehash: cbaecefc90f3593b8883c7ccad5256b4addf972c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100132'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## 创建入门工作流程

入门工作流程可由对组织的 `.github` 存储库具有写入访问权限的用户创建。 然后，有权限创建工作流程的组织成员便可使用它们。

{% ifversion fpt %} 用户创建的入门工作流程只能用于在公共存储库中创建工作流程。 使用 {% data variables.product.prodname_ghe_cloud %} 的组织还可以使用入门工作流程在私有仓库中创建工作流程。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**注意：** 为避免入门工作流程之间的重复，可以从工作流程中调用可重用工作流程。 这有助于使您的工作流程更易于维护。 有关详细信息，请参阅“[重用工作流](/actions/learn-github-actions/reusing-workflows)”。

{% endnote %} {% endif %}

此过程演示如何创建入门工作流程和元数据文件。 元数据文件描述了在用户创建新工作流程时如何向用户显示入门工作流程。

1. 如果组织中没有名为 `.github` 的公共存储库，请新建一个。
2. 创建名为 `workflow-templates` 的目录。
3. 在 `workflow-templates` 目录中创建新的工作流文件。

   如果需要引用存储库的默认分支，可以使用 `$default-branch` 占位符。 创建工作流程时，占位符将自动替换为仓库默认分支的名称。

   例如，名为 `octo-organization-ci.yml` 的文件演示基本工作流。

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
4. 在 `workflow-templates` 目录中创建元数据文件。 元数据文件必须与工作流程文件同名，但扩展名不是 `.yml`，而必须附加 `.properties.json`。 例如，名为 `octo-organization-ci.properties.json` 的文件包含名为 `octo-organization-ci.yml` 的工作流文件的元数据：
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
   * `name` - **必选。** 工作流的名称。 这会显示在可用工作流程列表中。
   * `description` - **必选。** 工作流的说明。 这会显示在可用工作流程列表中。
   * `iconName` - **可选。** 指定工作流列表中显示的工作流的图标。 `iconName` 必须是 SVG 文件的名称，而不使用文件扩展名，且存储在 `workflow-templates` 目录中。 例如，名为 `example-icon.svg` 的 SVG 文件被引用为 `example-icon`。
   * `categories` - **可选。** 定义工作流的语言类别。 当用户查看存储库的可用入门工作流程时，与项目已识别语言匹配的工作流程将更加突出。 有关可用语言类别的信息，请参阅 https://github.com/github/linguist/blob/master/lib/linguist/languages.yml 。
   * `filePatterns` - **可选。** 如果用户的存储库在其根目录中具有与定义的正则表达式匹配的文件，则允许使用工作流。

若要添加另一个入门工作流程，请将文件添加到相同的 `workflow-templates` 目录。 例如：

![工作流程文件](/assets/images/help/images/workflow-template-files.png)

## 后续步骤

若要继续了解 {% data variables.product.prodname_actions %}，请参阅“[使用入门工作流程](/actions/using-workflows/using-starter-workflows)”。
