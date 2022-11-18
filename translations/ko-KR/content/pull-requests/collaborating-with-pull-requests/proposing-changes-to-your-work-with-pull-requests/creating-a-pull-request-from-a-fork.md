---
title: 포크에서 끌어오기 요청 만들기
intro: 끌어오기 요청을 만들어 업스트림 리포지토리의 포크에서 했던 변경 내용을 제안할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883289'
---
끌어오기 요청이 토픽 분기를 업스트림 리포지토리의 분기와 기본 분기로 비교하는 경우 토픽 분기를 끌어오기 요청의 비교 분기라고도 합니다. 예제를 포함하여 끌어오기 요청 분기에 대한 자세한 내용은 "[끌어오기 요청 만들기](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)"를 참조하세요.

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. 포크를 만든 원래 리포지토리로 이동합니다.
{% data reusables.repositories.new-pull-request %}
3. 비교 페이지에서 **포크 간 비교** 를 클릭합니다.
  ![포크 간 비교 링크](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. "기본 분기" 드롭다운 메뉴에서 변경 내용을 병합하려는 업스트림 리포지토리의 분기를 선택합니다.
  ![기본 포크 및 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. "헤드 포크" 드롭다운 메뉴에서 포크를 선택한 다음, "분기 비교" 드롭다운 메뉴를 사용하여 변경한 분기를 선택합니다.
  ![헤드 포크 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## 추가 참고 자료

- "[포크 작업](/articles/working-with-forks)"
- “[포크에서 만든 끌어오기 요청 분기에 변경 내용 허용](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
