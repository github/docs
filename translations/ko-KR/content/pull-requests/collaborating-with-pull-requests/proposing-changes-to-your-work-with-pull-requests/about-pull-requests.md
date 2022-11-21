---
title: 끌어오기 요청 정보
intro: '끌어오기 요청을 사용하면 {% data variables.product.product_name %}의 리포지토리에서 분기로 푸시한 변경 내용에 대해 다른 사용자에게 알릴 수 있습니다. 끌어오기 요청이 열리면 공동 작업자와 잠재적인 변경 내용을 논의 및 검토하는 한 편 변경 내용이 기본 분기에 병합되기 전에 후속 커밋을 추가할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111112'
---
## 끌어오기 요청 정보

{% note %}

**참고:** 끌어오기 요청을 사용하는 경우 다음 사항에 유의하세요.
* [공유 리포지토리 모델](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)에서 작업하는 경우 끌어오기 요청에 토픽 분기를 사용하는 것이 좋습니다. 모든 분기 또는 커밋에서 끌어오기 요청을 보낼 수 있지만 토픽 분기를 사용하여 제안된 변경 내용을 업데이트해야 하는 경우 후속 커밋을 푸시할 수 있습니다.
* 강제 푸시 커밋을 끌어오기 요청에 적용할 때는 매우 주의해야 합니다. 강제 푸시는 리포지토리 기록을 변경하고 끌어오기 요청을 손상할 수 있습니다. 다른 협력자가 강제 푸시 전에 프로젝트를 분기하는 경우 강제 푸시는 협력자가 작업을 기반으로 하는 커밋을 덮어쓸 수 있습니다.

{% endnote %}

{% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_mobile %}에서와 GitHub CLI를 사용할 때 끌어오기 요청을 만들 수 있습니다.

끌어오기 요청을 초기화한 후 분기(비교 분기)와 리포지토리의 베이스 분기 간의 변경 내용에 대한 개략적인 개요를 보여 주는 검토 페이지가 표시됩니다. 제안된 변경 내용에 대한 요약을 추가하고, 커밋으로 인한 변경 내용을 검토하고, 레이블, 마일스톤, 담당자, @mention개별 기여자 또는 팀을 추가할 수 있습니다. 자세한 내용은 “[끌어오기 요청 만들기](/articles/creating-a-pull-request)”를 참조하세요.

끌어오기 요청을 만든 후에는 토픽 분기에서 커밋을 푸시하여 기존 끌어오기 요청에 추가할 수 있습니다. 이러한 커밋은 끌어오기 요청 내에서 시간순으로 나타나며 변경 내용은 “변경된 파일” 탭에서 볼 수 있습니다.

다른 기여자는 제안된 변경 내용을 검토하고, 검토 주석을 추가하고, 끌어오기 요청 토론에 기여하고, 끌어오기 요청에 커밋을 추가할 수도 있습니다. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} “대화” 탭에서 분기의 현재 배포 상태 및 이전 배포 작업에 대한 정보를 확인할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 배포 작업 보기](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)”를 참조하세요.
{% endif %}

제안된 변경 내용에 만족하면 끌어오기 요청을 병합할 수 있습니다. 공유 리포지토리 모델에서 작업하는 경우 끌어오기 요청을 만들고 사용자 또는 다른 사람이 기능 분기의 변경 내용을 끌어오기 요청에 지정한 베이스 분기에 병합합니다. 자세한 내용은 “[끌어오기 요청 병합](/articles/merging-a-pull-request)”을 참조하세요.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**팁:**
- 끌어오기 요청에서 모든 오래된 검토 주석을 축소하고 확장하는 것 사이에서 전환하려면 <span class="platform-mac"><kbd>옵션</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span>를 누른 상태에서 **오래된 내용 표시**  또는 **오래된 내용 숨기기** 을 클릭합니다. 더 많은 바로 가기 키는 “[바로 가기 키](/articles/keyboard-shortcuts)”를 참조하세요.
- 끌어오기 요청을 병합할 때 커밋을 Squash하여 변경 내용을 보다 간소화할 수 있습니다. 자세한 내용은 “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”를 참조하세요.

{% endtip %}

대시보드를 방문하여 작업 중이거나 구독 중인 최근에 업데이트된 끌어오기 요청에 대한 링크를 빠르게 찾을 수 있습니다. 자세한 내용은 “[개인 대시보드 정보](/articles/about-your-personal-dashboard)”를 참조하세요.

## 초안 끌어오기 요청

{% data reusables.gated-features.draft-prs %}

끌어오기 요청을 만들 때 검토할 준비가 된 끌어오기 요청 또는 초안 끌어오기 요청을 만들도록 선택할 수 있습니다. 초안 끌어오기 요청은 병합할 수 없으며 코드 소유자는 초안 끌어오기 요청을 검토하도록 자동으로 요청되지 않습니다. 초안 끌어오기 요청을 만드는 방법에 대한 자세한 내용은 “[끌어오기 요청 만들기](/articles/creating-a-pull-request) 및 “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”를 참조하세요.

{% data reusables.pull_requests.mark-ready-review %} 언제든지 끌어오기 요청을 초안으로 변환할 수 있습니다. 자세한 내용은 “[끌어오기 요청의 스테이지 변경](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)”을 참조하세요.

## 비교 및 끌어오기 요청 페이지의 커밋 간 차이점

비교 및 끌어오기 요청 페이지는 다른 메서드를 사용하여 변경된 파일에 대한 Diff 계산을 수행합니다.

- 비교 페이지에는 헤드 참조의 끝과 헤드 및 기본 참조의 현재 공통 상위 항목(즉, 병합 기준) 사이의 Diff가 표시됩니다.
- 끌어오기 요청 페이지에는 끌어오기 요청이 생성되었을 때 헤드 참조의 끝과 헤드 및 기본 참조의 공통 상위 항목 사이의 Diff가 표시됩니다. 따라서 비교에 사용되는 병합 기반이 다를 수 있습니다.

## 추가 참고 자료

- {% data variables.product.prodname_dotcom %} 용어집의 “[끌어오기 요청](/articles/github-glossary/#pull-request)”
- “[분기 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”
- “[끌어오기 요청에 대한 주석 추가](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”
- “[끌어오기 요청 닫기](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)”
