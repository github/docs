---
title: 다른 리포지토리로 문제 전송
intro: 문제를 더 적합한 리포지토리로 이동하려면 열려 있는 문제를 다른 리포지토리로 전송할 수 있습니다.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: b9a9cfcfb8c2026759f14c3edaee466c8a97327a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008827'
---
열려 있는 문제를 다른 리포지토리로 전송하려면 문제가 있는 리포지토리 및 문제를 전송하는 리포지토리에 대한 쓰기 권한이 있어야 합니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

{% note %}

**참고**: 동일한 사용자 또는 조직 계정이 소유한 리포지토리 간에만 문제를 전송할 수 있습니다. {% ifversion fpt or ghes or ghec %}프라이빗 리포지토리 문제는 퍼블릭 리포지토리로 전송할 수 없습니다.{% endif %}

{% endnote %}

이슈를 전송하면 주석, 및 담당자가 유지됩니다. 레이블 및 마일스톤은 대상 리포지토리에 있는 경우에도 이름 및 마일스톤에 따라 이름과 기한이 일치하는 레이블과 함께 유지됩니다. 이 문제는 사용자 소유 또는 조직 전체 프로젝트 보드에서 유지되며 리포지토리 프로젝트 보드에서 제거됩니다. 자세한 내용은 “[프로젝트 보드 정보](/articles/about-project-boards)”를 참조하세요.

이 문제에 언급된 사용자 또는 팀은 문제가 새 리포지토리로 전송되었음을 알리는 알림을 받게 됩니다. 원래 URL은 새 문제의 URL로 리디렉션됩니다. 새 리포지토리에 읽기 권한이 없는 사용자에게는 문제가 액세스할 수 없는 새 리포지토리로 전송되었음을 알리는 배너가 표시됩니다.

## 열려 있는 문제를 다른 리포지토리로 전송

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 문제 목록에서 전송하려는 문제를 클릭합니다.
4. 오른쪽 사이드바에서 **문제 전송** 을 클릭합니다.
![문제를 전송하는 단추](/assets/images/help/repository/transfer-issue.png)
5. **리포지토리 선택** 드롭다운 메뉴를 사용하고 문제를 전송하려는 리포지토리를 선택합니다.
![리포지토리 선택 선택](/assets/images/help/repository/choose-a-repository.png)
6. **문제 전송** 을 클릭합니다.
![문제 전송 단추](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

문제를 전송하려면 `gh issue transfer` 하위 명령을 사용합니다. `issue` 매개 변수를 문제의 번호 또는 URL로 바꿉니다. 매개 변수를 `{% ifversion ghes %}hostname/{% endif %}owner/repo` 문제를 전송하려는 리포지토리의 {% ifversion ghes %}URL{% else %}name{% endif %}(으)로 `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`바꿉니다.

```shell
gh issue transfer ISSUE {% ifversion ghes %}HOSTNAME/{% endif %}OWNER/REPO
```

{% endcli %}

## 추가 참고 자료

- “[문제 정보](/articles/about-issues)”
- “[보안 로그 검토](/articles/reviewing-your-security-log)”
- “[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)”
