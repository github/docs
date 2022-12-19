---
title: Organization のスターター ワークフローを作成する
shortTitle: Creating starter workflows
intro: Team 内のユーザーがより簡単に新しいワークフローを追加できるように、スタート ワークフローを作成する方法について学びます。
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
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884190'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## スターター ワークフローを作成する

Organization の `.github` リポジトリへの書き込みアクセス権を持つユーザーは、スターター ワークフローを作成できます。 その後、ワークフローを作成するアクセス許可を持つ Organization のメンバーはそれを使用できます。

{% ifversion fpt %}ユーザーが作成したスターター ワークフローは、パブリック リポジトリ内のワークフローの作成にのみ使用できます。 {% data variables.product.prodname_ghe_cloud %} を使っている Organization は、スターター ワークフローを使ってプライベート リポジトリのワークフローを作成することもできます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization)を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**注:** スターター ワークフロー間の重複を避けるには、ワークフロー内から再利用可能なワークフローを呼び出すことができます。 これにより、ワークフローの管理を容易にできます。 詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

{% endnote %} {% endif %}

この手順では、スターター ワークフローとメタデータ ファイルを作成する方法を示します。 メタデータ ファイルには、ユーザーが新しいワークフローを作成するときに、スターター ワークフローがどのように表示されるかが記述されています。

1. それがまだない場合は、Organization で `.github` という名前の新しいパブリック リポジトリを作成します。
2. `workflow-templates` という名前のディレクトリを作成します。
3. `workflow-templates` ディレクトリ内に新しいワークフロー ファイルを作成します。

   リポジトリの既定のブランチを参照する必要がある場合は、`$default-branch` プレースホルダーを使用できます。 ワークフローが作成されるとき、プレースホルダーはリポジトリの既定のブランチの名前に自動的に置き換えられます。

   たとえば、`octo-organization-ci.yml` という名前のこのファイルは、基本的なワークフローを示しています。

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
4. `workflow-templates` ディレクトリ内にメタデータ ファイルを作成します。 メタデータ ファイルは、ワークフロー ファイルと同じ名前にする必要がありますが、`.yml` 拡張子の代わりに、`.properties.json` を付ける必要があります。 たとえば、`octo-organization-ci.properties.json` という名前のこのファイルには、`octo-organization-ci.yml` という名前のワークフロー ファイルのメタデータが含まれます。
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
   * `name` - **必須。** ワークフローの名前。 これは、使用可能なワークフローの一覧に表示されます。
   * `description` - **必須。** ワークフローの説明。 これは、使用可能なワークフローの一覧に表示されます。
   * `iconName` - **省略可能。** ワークフローの一覧に表示されるワークフローのアイコンを指定します。 `iconName` は、`workflow-templates` ディレクトリに格納されている SVG ファイルの名前からファイル名拡張子を除いたものでなければなりません。 たとえば、`example-icon.svg` という名前の SVG ファイルは `example-icon` として参照されます。
   * `categories` - **省略可能。** ワークフローの言語カテゴリを定義します。 ユーザーがリポジトリで使用可能なスターター ワークフローを表示すると、プロジェクトで識別された言語に一致するワークフローが、より目立つように表示されます。 使用可能な言語カテゴリについては、 https://github.com/github/linguist/blob/master/lib/linguist/languages.yml をご覧ください。
   * `filePatterns` - **省略可能。** ユーザーのリポジトリのルート ディレクトリに、定義された正規表現に一致するファイルがある場合、そのワークフローを使用できるようにします。

別のスターター ワークフローを追加するには、同じ `workflow-templates` ディレクトリにファイルを追加します。 たとえば次のような点です。

![ワークフロー ファイル](/assets/images/help/images/workflow-template-files.png)

## 次の手順

{% data variables.product.prodname_actions %} についてさらに学ぶには、「[スターター ワークフローの使用](/actions/using-workflows/using-starter-workflows)」をご覧ください。
