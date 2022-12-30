---
title: GitHub 흐름
intro: '{% data variables.product.prodname_dotcom %} 흐름에 따라 프로젝트에 대해 공동 작업을 수행합니다.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878686'
---
## 소개

{% data variables.product.prodname_dotcom %} 흐름은 간단한 분기 기반 워크플로입니다. {% data variables.product.prodname_dotcom %} 흐름은 개발자뿐만 아니라 모든 사용자에게 유용합니다. 예를 들어 여기 {% data variables.product.prodname_dotcom %}에서는 [사이트 정책](https://github.com/github/site-policy), [설명서](https://github.com/github/docs), [로드맵](https://github.com/github/roadmap)에 {% data variables.product.prodname_dotcom %} 흐름을 사용합니다.

## 필수 조건

{% data variables.product.prodname_dotcom %} 흐름을 따르려면 {% data variables.product.prodname_dotcom %} 계정 및 리포지토리가 필요합니다. 계정을 만드는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 가입](/github/getting-started-with-github/signing-up-for-github)”을 참조하세요. 리포지토리를 만드는 방법에 대한 자세한 내용은 “[리포지토리 만들기](/github/getting-started-with-github/create-a-repo)”를 참조하세요. {% ifversion fpt or ghec %} 기여할 기존 리포지토리를 찾는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 오픈 소스에 기여할 수 있는 방법 찾기](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”를 참조하세요."{% endif %}

## {% data variables.product.prodname_dotcom %} 흐름 따르기

{% tip %}

{% ifversion fpt or ghec %} **팁:** {% data variables.product.prodname_dotcom %} 웹 인터페이스, 명령줄 및 [{% data variables.product.prodname_cli %}](https://cli.github.com) 또는 [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop)을 통해 {% data variables.product.prodname_dotcom %} 흐름의 모든 단계를 완료할 수 있습니다.
{% else %} **팁:** {% data variables.product.prodname_dotcom %} 웹 인터페이스 또는 명령줄 및 [{% data variables.product.prodname_cli %}](https://cli.github.com)를 통해 {% data variables.product.prodname_dotcom %} 흐름의 모든 단계를 완료할 수 있습니다.
{% endif %}

{% endtip %}

### 분기 만들기

  리포지토리에 분기를 만듭니다. 짧고 설명이 포함된 분기 이름을 사용하면 협력자가 진행 중인 작업을 한눈에 볼 수 있습니다. 예를 들어 `increase-test-timeout` 또는 `add-code-of-conduct`입니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)”를 참조하세요.

  분기를 만들어서 기본 분기에 영향을 주지 않고 작업할 공간을 만듭니다. 또한 협력자에게 작업을 검토할 수 있는 기회를 제공합니다.

### 변경 작업

분기에서 원하는 리포지토리를 변경합니다. 자세한 내용은 “[새 파일 만들기](/articles/creating-new-files)”, “[파일 편집](/articles/editing-files)”, “[파일 이름 바꾸기](/articles/renaming-a-file)”, “[새 위치로 파일 이동](/articles/moving-a-file-to-a-new-location)” 또는 “[리포지토리에서 파일 삭제](/github/managing-files-in-a-repository/deleting-files-in-a-repository)”를 참조하세요.

분기는 변경할 수 있는 안전한 장소입니다. 실수를 하면 변경 내용을 되돌리거나 추가 변경 내용을 푸시하여 실수를 해결할 수 있습니다. 분기를 병합할 때까지 변경 내용은 기본 분기에 적용되지 않습니다.

변경 내용을 커밋하고 분기에 푸시합니다. 커밋마다 설명이 담긴 메시지를 제공하면 사용자와 이후 참가자가 커밋에 포함된 변경 내용을 이해하는 데 도움이 됩니다. 예를 들어 `fix typo` 또는 `increase rate limit`입니다.

각 커밋에는 격리된 완전한 변경 내용이 포함되어 있는 것이 이상적입니다. 이렇게 하면 다른 접근 방식을 취하기로 결정한 경우 변경 내용을 쉽게 되돌릴 수 있습니다. 예를 들어 변수 이름을 바꾸고 일부 테스트를 추가하려면 변수 이름을 한 커밋에, 다른 커밋에 테스트 이름을 추가합니다. 나중에 테스트는 유지하지만 변수 이름은 되돌리고자 한다면 변수 이름이 포함된 특정 커밋을 되돌리면 됩니다. 변수 이름 바꾸기 및 테스트를 동일한 커밋에 배치하거나 변수 이름을 여러 커밋에 분산하면 변경 내용을 되돌리는 데 더 많은 노력을 기울여야 합니다.

변경 내용을 커밋하고 푸시하면 작업이 원격 스토리지에 백업됩니다. 즉, 모든 디바이스에서 작업에 액세스할 수 있습니다. 또한 협력가 작업을 보고, 질문에 답변하고, 제안 또는 기여를 할 수도 있습니다.

피드백을 요청할 준비가 될 때까지 계속해서 분기를 변경하고, 커밋하고, 푸시합니다.

{% tip %}

**팁:** 관련 없는 변경의 각 집합에 대해 별도의 분기를 만듭니다. 이렇게 하면 검토자가 피드백을 더 쉽게 제공할 수 있습니다. 또한 사용자와 미래의 협력자가 변경 내용을 더 쉽게 이해하고 이를 되돌리거나 빌드할 수 있습니다. 또한 한 변경 집합에 지연이 있는 경우에도 다른 변경 내용은 지연되지 않습니다.

{% endtip %}

### 끌어오기 요청 만들기

끌어오기 요청을 만들어 협력자에게 변경 내용에 대한 피드백을 요청합니다. 끌어오기 요청 검토는 끌어오기 요청을 병합하기 전에 일부 리포지토리에 승인 검토가 필요한 경우에 매우 중요합니다. 변경을 완료하기 전에 초기 피드백 또는 조언을 원하는 경우 끌어오기 요청을 초안으로 표시할 수 있습니다. 자세한 내용은 “[끌어오기 요청 만들기](/articles/creating-a-pull-request)”를 참조하세요.

끌어오기 요청을 만들 경우 변경 내용과 해결한 문제에 대한 요약을 포함합니다. 이 정보를 전달하는 데 도움이 되는 이미지, 링크 및 테이블을 포함할 수 있습니다. 끌어오기 요청이 문제를 처리하는 경우 문제 관련자가 끌어오기 요청을 인식할 수 있도록 문제를 연결합니다. 그 반대의 경우도 마찬가지입니다. 키워드와 연결하면 끌어오기 요청이 병합될 때 문제가 자동으로 종결됩니다. 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/github/writing-on-github/basic-writing-and-formatting-syntax)” 및 “[문제에 끌어오기 요청 연결](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”을 참조하세요.

![끌어오기 요청 본문](/assets/images/help/pull_requests/pull-request-body.png)

끌어오기 요청의 본문을 작성하는 것 외에도 끌어오기 요청의 특정 줄에 주석을 추가하여 검토자에게 명시적으로 무언가를 지적할 수 있습니다.

![끌어오기 요청 설명](/assets/images/help/pull_requests/pull-request-comment.png)

끌어오기 요청을 만들 때 특정 팀 또는 사용자의 검토를 자동으로 요청하도록 리포지토리를 구성할 수 있습니다. 수동으로 @mention하거나 특정 사용자 또는 팀의 검토를 요청할 수도 있습니다.

리포지토리의 검사를 끌어오기 요청 시 실행되도록 구성한 경우 끌어오기 요청 시 실패한 검사가 표시됩니다. 이렇게 하면 분기를 병합하기 전에 오류를 잡을 수 있습니다. 자세한 내용은 “[상태 검사 정보](/github/collaborating-with-issues-and-pull-requests/about-status-checks)”를 참조하세요.

### 의견 검토 처리

검토자는 질문, 의견 및 제안을 남겨야 합니다. 검토자는 전체 끌어오기 요청에 대해 의견을 남기거나 특정 줄에 의견을 추가할 수 있습니다. 사용자와 검토자는 이미지 또는 코드 제안을 삽입하여 의견을 명확히 할 수 있습니다. 자세한 내용은 “[끌어오기 요청의 변경 내용 검토](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)”를 참조하세요.

검토에 대한 응답으로 변경 내용을 계속 커밋하고 푸시할 수 있습니다. 끌어오기 요청이 자동으로 업데이트됩니다.

### 끌어오기 요청 병합

끌어오기 요청이 승인되면 끌어오기 요청을 병합합니다. 이렇게 하면 변경 내용이 기본 분기에 표시되도록 분기가 자동으로 병합됩니다. {% data variables.product.prodname_dotcom %}는 향후 참가자가 변경 내용을 이해하는 데 도움이 되도록 끌어오기 요청에 주석 및 커밋 기록을 유지합니다. 자세한 내용은 “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”을 참조하세요.

{% data variables.product.prodname_dotcom %}는 끌어오기 요청에 병합하기 전에 해결해야 하는 충돌이 있는지 알려 줍니다. 자세한 내용은 “[병합 충돌 해결](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)”을 참조하세요.

끌어오기 요청이 특정 요구 사항을 충족하지 않는 경우 분기 보호 설정이 병합을 차단할 수 있습니다. 특정 수의 승인 검토 또는 특정 팀의 승인 검토가 필요한 경우를 예로 들 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)”를 참조하세요.

### 분기 삭제

끌어오기 요청을 병합한 후 분기를 삭제합니다. 이는 분기의 작업이 완료되었으며 사용자 또는 다른 사용자가 실수로 이전 분기를 사용하지 못하게 했음을 나타냅니다. 자세한 내용은 “[끌어오기 요청에서 분기 삭제 및 복원](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)”을 참조하세요.

정보 손실에 대해서는 걱정하지 마세요. 끌어오기 요청 및 커밋 기록은 삭제되지 않습니다. 필요한 경우 항상 삭제된 분기를 복원하거나 끌어오기 요청을 되돌릴 수 있습니다.
