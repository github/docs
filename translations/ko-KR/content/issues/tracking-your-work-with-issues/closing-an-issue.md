---
title: 문제 종결
intro: '버그가 수정되었거나, 피드백에 대해 작업이 실행되었거나, 작업이 계획되지 않았다는 것을 표시하려는 경우에 이슈를 종결할 수 있습니다.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060428'
---
{% note %}

**참고:** 끌어오기 요청 및 커밋 메시지에 키워드를 사용하여 이슈를 자동으로 종결할 수도 있습니다. 자세한 내용은 “[이슈에 끌어오기 요청 연결](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)”을 참조하세요.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. 이슈 목록에서 종결할 이슈를 클릭합니다.
{%- ifversion issue-close-reasons %}
1. 필요에 따라 이슈를 종결할 이유를 변경하려면 “이슈 종결” 옆에 있는 {% octicon "triangle-down" aria-label="The down triangle octicon" %}을 선택하고 이유를 클릭합니다.
   ![이슈 종결 이유가 포함된 드롭다운 메뉴를 보여 주는 스크린샷](/assets/images/help/issues/close-issue-select-reason.png)
2. **이슈 종결** 을 클릭합니다.
   ![“이슈 종결” 단추를 보여 주는 스크린샷](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. 페이지 아래쪽에서 **이슈 종결** 을 클릭합니다.
   ![“이슈 종결” 단추를 보여 주는 스크린샷](/assets/images/help/issues/close-issue.png) {% endif %}
