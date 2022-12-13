---
title: GitHub Actions 빠른 시작
intro: '5분 이내에 {% data variables.product.prodname_actions %}의 기능을 사용해 보세요.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 3ae31c1f91a9c29176c97c516437aee92ba32724
ms.sourcegitcommit: 576f4142b5375e2eec7c2f50d39b94207d915435
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008755'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

{% data variables.product.prodname_actions %} 워크플로를 만들고 실행하려면 {% data variables.product.prodname_dotcom %} 리포지토리만 있으면 됩니다. 이 가이드에서는 {% data variables.product.prodname_actions %}의 몇 가지 필수 기능을 보여 주는 워크플로를 추가합니다. 

다음 예제에서는 {% data variables.product.prodname_actions %} 작업을 자동으로 트리거할 수 있는 방법, 작업 실행 위치 및 리포지토리에서 작업이 코드와 상호 작용하는 방법을 보여 줍니다.

## 첫 번째 워크플로 만들기

1. `.github/workflows` 디렉터리가 아직 없는 경우 {% data variables.product.prodname_dotcom %}의 리포지토리에 이 디렉터리를 만듭니다.
1. `.github/workflows` 디렉터리에서 `github-actions-demo.yml`라는 파일을 만듭니다. 자세한 내용은 “[새 파일 만들기](/github/managing-files-in-a-repository/creating-new-files)”를 참조하세요.
1. 다음 YAML 콘텐츠를 파일에 복사합니다 `github-actions-demo.yml` .

   ```yaml{:copy}
   name: GitHub Actions Demo
   {%- ifversion actions-run-name %}
   run-name: {% raw %}${{ github.actor }}{% endraw %} is testing out GitHub Actions 🚀
   {%- endif %}
   on: [push]
   jobs:
     Explore-GitHub-Actions:
       runs-on: ubuntu-latest
       steps:
         - run: echo "🎉 The job was automatically triggered by a {% raw %}${{ github.event_name }}{% endraw %} event."
         - run: echo "🐧 This job is now running on a {% raw %}${{ runner.os }}{% endraw %} server hosted by GitHub!"
         - run: echo "🔎 The name of your branch is {% raw %}${{ github.ref }}{% endraw %} and your repository is {% raw %}${{ github.repository }}{% endraw %}."
         - name: Check out repository code
           uses: {% data reusables.actions.action-checkout %}
         - run: echo "💡 The {% raw %}${{ github.repository }}{% endraw %} repository has been cloned to the runner."
         - run: echo "🖥️ The workflow is now ready to test your code on the runner."
         - name: List files in the repository
           run: |
             ls {% raw %}${{ github.workspace }}{% endraw %}
         - run: echo "🍏 This job's status is {% raw %}${{ job.status }}{% endraw %}."
   ```
1. 페이지 아래쪽으로 스크롤하여 **이 커밋에 대한 새 분기 만들기를 선택하고 끌어오기 요청을 시작합니다** 를 선택합니다. 그런 다음 끌어오기 요청을 만들기 위해 **새 파일 제안** 을 클릭합니다.

   ![워크플로 파일 커밋](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

리포지토리의 분기로 워크플로 파일을 커밋하면 `push` 이벤트가 트리거되고 워크플로가 실행됩니다.

## 워크플로 결과 보기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 왼쪽 사이드바에서 확인할 워크플로를 클릭합니다.

   ![왼쪽 사이드바의 워크플로 목록](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. 워크플로 실행 목록에서 보려는 실행의 이름을 클릭합니다.

   ![워크플로 실행의 이름](/assets/images/help/repository/actions-quickstart-run-name.png)
1. **작업** 아래에서 **Explore-GitHub-Actions** 작업을 클릭합니다.

   ![작업 찾기](/assets/images/help/repository/actions-quickstart-job.png)
1. 로그는 각 단계가 처리된 방법을 보여 줍니다. 단계를 확장하면 세부 정보를 볼 수 있습니다.

   ![예제 워크플로 결과](/assets/images/help/repository/actions-quickstart-logs.png)
   
   예를 들어 리포지토리에서 파일 목록을 볼 수 있습니다. ![예제 작업 세부 정보](/assets/images/help/repository/actions-quickstart-log-detail.png)

방금 추가한 예제 워크플로는 코드가 분기에 푸시될 때마다 트리거되며 {% 데이터 variables.product.prodname_actions %}이(가) 리포지토리의 콘텐츠로 작동하는 방법을 보여 줍니다. 자세한 자습서는 "[{% 데이터 variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions)"를 참조하세요.

## 추가 시작 워크플로

{% data reusables.actions.workflow-template-overview %}

## 다음 단계

{% data reusables.actions.onboarding-next-steps %}
