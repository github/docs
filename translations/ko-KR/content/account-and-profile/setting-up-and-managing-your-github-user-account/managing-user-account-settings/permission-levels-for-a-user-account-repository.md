---
title: 사용자 계정 리포지토리에 대한 권한 수준
intro: 'A repository owned by a personal account has two permission levels: the repository owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user repositories
ms.openlocfilehash: 3fed88f8c31f5d3dd788f7b977c214499856f27e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088825"
---
## <a name="about-permissions-levels-for-a-personal-account-repository"></a>개인 계정 리포지토리에 대한 권한 수준 정보

개인 계정이 소유한 리포지토리에는 하나의 소유자가 있습니다. 소유권 권한은 다른 개인 계정과 공유할 수 없습니다.

또한 {% data variables.product.product_name %}의 사용자를 협력자로 {% ifversion fpt or ghec %}초대{% else %}추가{% endif %}할 수 있습니다. 자세한 내용은 “[개인 리포지토리에 협력자 초대](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)”를 참조하세요.

{% tip %}

**팁:** 개인 계정이 소유한 리포지토리에 대한 보다 세부적인 액세스가 필요한 경우 리포지토리를 조직으로 전송하는 것이 좋습니다. 자세한 내용은 “[리포지토리 전송](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)”을 참조하세요.

{% endtip %}

## <a name="owner-access-for-a-repository-owned-by-a-personal-account"></a>개인 계정이 소유한 리포지토리에 대한 소유자 액세스

리포지토리 소유자는 리포지토리를 완전히 제어할 수 있습니다. 모든 협력자가 수행할 수 있는 작업 외에도 리포지토리 소유자는 다음 작업을 수행할 수 있습니다.

| 작업 | 추가 정보 |
| :- | :- |
| {% ifversion fpt or ghec %}협력자 초대{% else %}협력자 추가{% endif %} | “[개인 리포지토리에 협력자 초대](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)” |
| 리포지토리의 표시 여부 변경 | “[리포지토리 표시 여부 설정](/github/administering-a-repository/setting-repository-visibility)” |{% ifversion fpt or ghec %}
| 리포지토리와의 상호 작용 제한 | “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)” |{% endif %}
| 기본 분기를 포함하여 분기 이름 바꾸기 | “[분기 이름 바꾸기](/github/administering-a-repository/renaming-a-branch)” |
| 승인하는 검토가 없는 경우에도 보호된 분기에서 끌어오기 요청을 병합합니다. | “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)” |
| 리포지토리 삭제 | “[리포지토리 삭제](/repositories/creating-and-managing-repositories/deleting-a-repository)” |
| 리포지토리의 토픽 관리 | “[토픽을 사용하여 리포지토리 분류](/github/administering-a-repository/classifying-your-repository-with-topics)” |{% ifversion fpt or ghec %}
| 리포지토리에 대한 보안 및 분석 설정 관리 | “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)” |{% endif %}{% ifversion fpt or ghec %}
| 프라이빗 리포지토리에 대한 종속성 그래프 사용 | “[리포지토리의 종속성 탐색](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)” |{% endif %}{% ifversion fpt or ghes > 3.1 or ghec or ghae %}
| 패키지 삭제 및 복원 | “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)” |{% endif %}
| 리포지토리의 소셜 미디어 미리 보기 사용자 지정 | “[리포지토리의 소셜 미디어 미리 보기 사용자 지정](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)” |
| 리포지토리에서 템플릿 만들기 | “[템플릿 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)” |{% ifversion fpt or ghes or ghae or ghec %}
| 취약한 종속성에 대한 {% data variables.product.prodname_dependabot_alerts %} 액세스 제어 | “[리포지토리에 대한 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)” |{% endif %}{% ifversion fpt or ghec %}
| 리포지토리에서 {% data variables.product.prodname_dependabot_alerts %} 해제 | “[취약한 종속성에 대한 {% data variables.product.prodname_dependabot_alerts %} 보기](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)” |
| 프라이빗 리포지토리에 대한 데이터 사용 관리 | “[프라이빗 리포지토리에 대한 데이터 사용 설정 관리](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”|{% endif %}
| 리포지토리에 대한 코드 소유자 정의 | “[코드 소유자 정보](/github/creating-cloning-and-archiving-repositories/about-code-owners)” |
| 리포지토리 보관 | “[리포지토리 보관](/repositories/archiving-a-github-repository/archiving-repositories)” |{% ifversion fpt or ghec %}
| 보안 공지 만들기 | “[{% data variables.product.prodname_security_advisories %} 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)” |
| 스폰서 단추 표시 | “[리포지토리에 스폰서 단추 표시](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)” |{% endif %}
| 끌어오기 요청에 대한 자동 병합 허용 또는 허용 안 함 | “[리포지토리에서 끌어오기 요청에 대한 자동 병합 관리](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)” | 

## <a name="collaborator-access-for-a-repository-owned-by-a-personal-account"></a>개인 계정이 소유한 리포지토리에 대한 협력자 액세스

개인 리포지토리의 협력자는 리포지토리의 콘텐츠를 풀(pull)하고(읽기) 리포지토리에 변경 내용을 푸시(쓰기)할 수 있습니다.

{% note %}

**참고:** 프라이빗 리포지토리에서 리포지토리 소유자는 협력자에게만 쓰기 권한을 부여할 수 있습니다. 협력자는 개인 계정이 소유한 리포지토리에 대한 읽기 전용 액세스를 가질 수 없습니다.

{% endnote %}

협력자는 다음 작업도 수행할 수 있습니다.

| 작업 | 추가 정보 |
| :- | :- |
| 리포지토리 포크 | “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)” |{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| 기본 분기가 아닌 분기 이름 바꾸기 | “[분기 이름 바꾸기](/github/administering-a-repository/renaming-a-branch)” |{% endif %}
| 리포지토리에서 커밋, 끌어오기 요청, 문제에 대한 주석 만들기, 편집, 삭제 | <ul><li>“[문제 정보](/github/managing-your-work-on-github/about-issues)”</li><li>“[끌어오기 요청에 대한 주석 추가](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”</li><li>“[방해가 되는 주석 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”</li></ul> |
| 리포지토리에서 문제 만들기, 할당, 닫기, 다시 열기 | “[문제를 사용하여 작업 관리](/github/managing-your-work-on-github/managing-your-work-with-issues)” |
| 리포지토리에서 문제에 대한 레이블 관리 및 끌어오기 요청 | “[레이블 문제 및 끌어오기 요청](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)” |
| 리포지토리에서 문제에 대한 마일스톤 관리 및 끌어오기 요청 | “[문제 및 끌어오기 요청에 대한 마일스톤 만들기 및 편집](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)” |
| 리포지토리의 문제 또는 끌어오기 요청을 중복으로 표시 | “[중복 문제 및 끌어오기 요청 정보](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)” |
| 리포지토리에서 끌어오기 요청 만들기, 병합, 닫기 | “[끌어오기 요청을 이용해 작업에 변경 사항 제안하기](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)” |
| 끌어오기 요청에 대해 자동 병합 사용 및 사용 안 함 | “[끌어오기 요청 자동 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)”
| 리포지토리에서 끌어오기 요청에 제안된 변경 내용 적용 |“[끌어오기 요청에 피드백 통합](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request)” |
| 리포지토리의 포크에서 끌어오기 요청 만들기 | “[포크에서 끌어오기 요청 만들기](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)” |
| 끌어오기 요청의 병합성에 영향을 미치는 끌어오기 요청에 대한 검토 제출 | “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)” |
| 리포지토리에 대한 Wiki 만들기 및 편집 | “[Wiki 정보](/communities/documenting-your-project-with-wikis/about-wikis)” |
| 리포지토리에 대한 릴리스 만들기 및 편집 | “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository)” |
| 리포지토리의 코드 소유자 역할 수행 | “[코드 소유자 정보](/articles/about-code-owners)” |{% ifversion fpt or ghae or ghec %}
| 패키지 게시, 보기 또는 설치 | “[패키지 게시 및 관리](/github/managing-packages-with-github-packages/publishing-and-managing-packages)” |{% endif %}
| 리포지토리에서 자신을 협력자에서 제거 | “[협력자의 리포지토리에서 자신을 제거](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)” |

## <a name="further-reading"></a>추가 참고 자료

- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
