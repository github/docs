---
title: 푸시 보호로 차단된 분기 푸시
intro: '{% data variables.product.prodname_secret_scanning %}의 푸시 보호 기능은 리포지토리에서 유출된 비밀로부터 사전에 보호합니다. 차단된 푸시를 해결할 수 있으며, 검색된 비밀이 제거되면 명령줄 또는 웹 UI에서 작업 분기에 변경 내용을 푸시할 수 있습니다.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 0d702637d55b7c04d71e7834c6d34743cc5f68b5
ms.sourcegitcommit: 6bc8b888e02cc31ec01464186ed4530889cf2408
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101616'
---
## {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호 정보

{% data variables.product.prodname_secret_scanning %}의 푸시 보호 기능은 변경 내용을 리포지토리에 푸시하기 전에 비밀을 검색하여 보안 누출을 방지하는 데 도움이 됩니다. {% data reusables.secret-scanning.push-protection-overview %} 푸시 보호가 지원되는 보안 비밀 및 서비스 제공업체에 대한 정보는 "[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)"을 참조하세요.

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**팁**{% data variables.product.prodname_dotcom %}이(가) 푸시해도 안전하다고 생각되는 비밀을 차단하는 경우 비밀을 허용하고 이를 허용해야 하는 이유를 지정할 수 있습니다. 비밀에 대한 푸시 보호를 우회하는 방법에 대한 자세한 내용은 명령줄 및 웹 UI에 대해 각각 "[차단된 비밀을 푸시할 수 있도록 허용](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" 및 "[비밀에 대한 푸시 보호 무시](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)"를 참조하세요. 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

조직 관리자는 푸시가 차단될 때 {% data variables.product.product_name %}의 메시지에 포함되는 사용자 지정 링크를 제공할 수 있습니다. 이 사용자 지정 링크에는 조직 및 해당 정책과 관련된 리소스 및 조언이 포함될 수 있습니다.
{% endif %}

## 명령줄에서 차단된 푸시 해결

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

차단된 비밀이 분기의 최신 커밋에 의해 도입된 경우 아래 지침을 따를 수 있습니다.

1. 코드에서 비밀을 제거합니다.
1. `git commit --amend`를 사용하여 변경 내용을 커밋합니다.
1. `git push`를 사용하여 변경 사항을 푸시합니다.

비밀이 Git 기록의 이전 커밋에 표시되는 경우에도 비밀을 제거할 수 있습니다.

1. `git log`를 사용하여 푸시 오류에 나타난 커밋이 기록에서 가장 먼저 발생한 커밋을 확인합니다.
1. `git rebase -i <commit-id>~1`을 사용하여 대화형 다시 지정을 시작합니다 . <commit-id>는 1단계의 커밋 ID입니다.
1. 편집기에 표시되는 텍스트의 첫 줄에서 `pick`을 `edit`로 변경하여 편집할 커밋을 식별합니다.
1. 코드에서 비밀을 제거합니다.
1. `git commit --amend`를 사용하여 변경 사항을 커밋합니다.
1. `git rebase --continue`를 실행하여 다시 지정을 완료합니다.

## 웹 UI에서 차단된 커밋 해결

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

웹 UI에서 차단된 커밋을 해결하려면 파일에서 비밀을 제거하거나 **보호 무시** 드롭다운을 사용하여 비밀을 허용해야 합니다. 웹 UI에서 푸시 보호를 무시하는 방법에 대한 자세한 내용은 "[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)"를 참조하세요.

비밀이 진짜인지 확인하는 경우 파일에서 비밀을 제거해야 합니다. 비밀을 제거하면 페이지 상단의 배너가 변경되고 이제 변경 사항을 커밋할 수 있음을 알려줍니다.
