---
title: 조직의 시작 워크플로 만들기
shortTitle: Create starter workflows
intro: 팀의 사용자가 새 워크플로를 더 쉽게 추가할 수 있도록 시작 워크플로를 만드는 방법을 알아봅니다.
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
ms.openlocfilehash: 77c220a06ac8d27db1c54a5a6c6c8c17662ed958
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009581'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## 시작 워크플로 만들기

시작 워크플로는 조직의 `.github` 리포지토리에 대한 쓰기 권한이 있는 사용자가 만들 수 있습니다. 그런 다음 워크플로를 만들 수 있는 권한이 있는 조직 구성원이 이를 사용할 수 있습니다.

{% ifversion fpt %} 사용자가 만든 시작 워크플로는 공용 리포지토리에서 워크플로를 만드는 데만 사용할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 시작 워크플로를 사용하여 프라이빗 리포지토리에 워크플로를 만들 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization)를 참조하세요.
{% endif %}

{% ifversion fpt 또는 ghes > 3.3 또는 ghae > 3.3 또는 ghec %} {% note %}

**참고:** 시작 워크플로 간에 중복을 방지하려면 워크플로 내에서 재사용 가능한 워크플로를 호출할 수 있습니다. 이렇게 하면 워크플로를 더 쉽게 유지 관리할 수 있습니다. 자세한 내용은 “[워크플로 다시 사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.

{% endnote %} {% endif %}

이 절차에서는 시작 워크플로 및 메타데이터 파일을 만드는 방법을 보여 줍니다. 메타데이터 파일은 사용자가 새 워크플로를 생성할 때 사용자에게 시작 워크플로를 표시하는 방법을 설명합니다.

1. 아직 없는 경우 조직에서 `.github`로 명명된 새 공용 리포지토리를 만듭니다.
2. 이름이 `workflow-templates`인 디렉터리를 만듭니다.
3. `workflow-templates` 디렉터리 내에 새 워크플로 파일을 만듭니다.

   리포지토리의 기본 분기를 참조해야 하는 경우 `$default-branch` 자리 표시자를 사용할 수 있습니다. 워크플로가 생성될 때 자리 표시자는 리포지토리의 기본 분기 이름으로 자동으로 대체됩니다.

   예를 들어 이름이 `octo-organization-ci.yml`로 지정된 이 파일은 기본 워크플로를 보여 줍니다.

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
4. `workflow-templates` 디렉터리 내에 메타데이터 파일을 만듭니다. 메타데이터 파일의 이름은 워크플로 파일과 동일해야 하지만 `.yml` 확장명 대신 `.properties.json`을 추가해야 합니다. 예를 들어, `octo-organization-ci.properties.json`이라는 이름의 이 파일에는 다음과 같이 워크플로 파일에 대한 `octo-organization-ci.yml`라는 이름의 메타데이터가 포함됩니다.
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
   * `name` - **필수 사항.** 워크플로의 이름입니다. 사용 가능한 워크플로 목록에 표시됩니다.
   * `description` - **필수 사항.** 워크플로에 대한 설명입니다. 사용 가능한 워크플로 목록에 표시됩니다.
   * `iconName` - **선택 사항.** 워크플로 목록에 표시되는 워크플로의 아이콘을 지정합니다. `iconName`은 파일 이름 확장명 없이 `workflow-templates` 디렉터리에 저장된 SVG 파일의 이름이어야 합니다. 예를 들어, `example-icon.svg`이라는 SVG 파일은 `example-icon`로 참조됩니다.
   * `categories` - **선택 사항.** 워크플로의 언어 범주를 정의합니다. 사용자가 리포지토리에 사용할 수 있는 시작 워크플로를 볼 때 프로젝트의 식별된 언어와 일치하는 워크플로가 더 두드러집니다. 사용 가능한 언어 범주에 대한 자세한 내용은 https://github.com/github/linguist/blob/master/lib/linguist/languages.yml 페이지를 참조하세요.
   * `filePatterns` - **선택 사항.** 사용자 리포지토리의 루트 디렉터리에 정의된 정규식과 일치하는 파일이 있는 경우 워크플로를 사용할 수 있도록 합니다.

다른 시작 워크플로를 추가하려면 파일을 동일한 `workflow-templates` 디렉터리에 추가합니다. 예를 들면 다음과 같습니다.

![워크플로 파일](/assets/images/help/images/workflow-template-files.png)

## 다음 단계

{% data variables.product.prodname_actions %}에 대해 계속 알아보려면 “[시작 워크플로 사용”](/actions/using-workflows/using-starter-workflows)을 참조하세요.
