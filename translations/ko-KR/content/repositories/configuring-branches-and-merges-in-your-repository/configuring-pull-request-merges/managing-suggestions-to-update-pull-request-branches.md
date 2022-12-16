---
title: 끌어오기 요청 분기를 업데이트하는 제안 관리
intro: 기본 분기에 대해 최신 상태가 아닌 경우 끌어오기 요청 분기를 항상 업데이트할 수 있는 기능을 사용자에게 제공할 수 있습니다.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578612'
---
## 끌어오기 요청 분기를 업데이트하는 제안 정보

리포지토리에서 끌어오기 요청 분기 업데이트를 항상 제안하도록 설정하면 쓰기 권한이 있는 사용자는 항상 끌어오기 요청 페이지에서 기본 분기를 사용하여 최신 상태가 아닐 때 끌어오기 요청의 헤드 분기를 업데이트할 수 있습니다. 사용하도록 설정하지 않으면 기본 분기에서 분기가 병합 전에 최신 상태이도록 요구하는데 분기가 최신 상태가 아닌 경우에만 업데이트 기능을 사용할 수 있습니다. 자세한 내용은 “[끌어오기 요청을 기본 분기와 동기화된 상태로 유지](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)”를 참조하세요.

{% data reusables.enterprise.3-5-missing-feature %}

## 끌어오기 요청 분기를 업데이트하는 제안 관리

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “끌어오기 요청”에서 **항상 끌어오기 요청 분기 업데이트 제안** 을 선택하거나 선택을 취소합니다.
  ![항상 분기 업데이트 제안을 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/help/repository/always-suggest-updating-branches.png)
