---
title: Codespaces 만들기 및 삭제 문제 해결
intro: 이 문서에서는 스토리지 및 구성 문제를 포함하여 Codespace를 만들거나 삭제할 때 발생할 수 있는 일반적인 문제에 대한 문제 해결 단계를 제공합니다.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 09c3a73ec5e41f0170f1d3cd66df139bb2a497e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158695'
---
## codespace 만들기

### codespace를 만들 수 있는 액세스 권한 없음
{% data variables.product.prodname_github_codespaces %}은(는) 모든 리포지토리에 사용할 수 없습니다. codespace를 만드는 옵션이 표시되지 않으면 해당 리포지토리에 {% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 없습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces).

개인 계정에 {% data variables.product.prodname_github_codespaces %}의 남은 월간 사용량이 있거나 결제 방법 및 지출 한도를 설정한 경우 퍼블릭 리포지토리에 대한 codespace를 만들 수 있습니다. 그러나 리포지토리에 변경 내용을 푸시하거나 리포지토리를 포크할 수 있는 경우에만 프라이빗 리포지토리에 대한 codespace를 만들 수 있습니다.

개인 계정의 포함된 사용량 및 지출 한도 설정에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" 및 "[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

### codespace를 만들었는데 열리지 않음

codespace를 만들었는데 열리지 않는 경우:

1. 캐싱 또는 보고 문제가 있는 경우 페이지를 다시 로드해 보세요.
2. {% data variables.product.prodname_github_codespaces %} 페이지(https://github.com/codespaces )로 이동하여 새 Codespace가 나열되어 있는지 확인하세요. 프로세스에서 codespace를 성공적으로 만들었지만 브라우저에 다시 보고하지 못했습니다. 새 codespace가 나열되면 해당 페이지에서 직접 열 수 있습니다.
3. 일시적인 통신 오류를 제외하려면 리포지토리에 대한 codespace 만들기를 다시 시도합니다.

{% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 있는 리포지토리에 대한 codespace를 여전히 만들 수 없는 경우 {% data reusables.codespaces.contact-support %}

### Codespace 만들기 실패

codespace 만들기가 실패하면 클라우드의 임시 인프라 문제(예: codespace에 대한 가상 머신 프로비전 문제)로 인해 발생할 수 있습니다. 실패의 일반적인 이유는 컨테이너를 빌드하는 데 1시간 이상 걸리는 경우입니다. 이 경우 빌드가 취소되고 codespace 만들기가 실패합니다.

{% note %}

**참고:** 성공적으로 만들어지지 않은 codespace는 절대 사용할 수 없으며 삭제해야 합니다. 자세한 내용은 "[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)"를 참조하세요.

{% endnote %}

codespace를 만들고 생성에 실패하는 경우:

1. 활성 인시던트에 대한 {% data variables.product.prodname_dotcom %}의 [상태 페이지를](https://githubstatus.com) 확인합니다.
1. [{% data variables.product.prodname_github_codespaces %} 페이지로](https://github.com/codespaces) 이동하여 codespace를 삭제하고 새 codespace를 만듭니다.
1. 컨테이너가 빌드되는 경우 스트리밍 중인 로그를 확인하고 빌드가 중단되지 않았는지 확인합니다. 1시간 이상 걸리는 컨테이너 빌드가 취소되어 생성에 실패합니다.

   이 문제가 발생할 수 있는 한 가지 일반적인 시나리오는 사용자 입력을 묻는 메시지를 표시하고 답변을 기다리는 스크립트가 실행되는 경우입니다. 이 경우 비대화형으로 빌드를 완료할 수 있도록 대화형 프롬프트를 제거합니다.

   {% note %}

   **참고**: 빌드하는 동안 로그를 보려면 다음을 수행합니다.
   * 브라우저에서 **로그 보기를 클릭합니다.** 

   ![로그 보기 링크가 강조 표시된 Codespaces 웹 UI의 스크린샷](/assets/images/help/codespaces/web-ui-view-logs.png)

   * VS Code 데스크톱 애플리케이션에서 표시되는 "원격 연결 설정"에서 **codespace 빌드** 를 클릭합니다. 

   ![Codespace 빌드 링크가 강조 표시된 VS Code의 스크린샷](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. 빌드하는 데 시간이 오래 걸리는 컨테이너가 있는 경우 사전 빌드를 사용하여 codespace 만들기 속도를 높일 수 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.

## codespace 삭제

codespace는 다음에서만 삭제할 수 있습니다.
* codespace를 만든 사람입니다.
* 조직 소유 codespace의 조직 소유자입니다.
* 보존 기간이 끝날 때 자동 삭제. 

자세한 내용은 "[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace)" 및 "[codespace 자동 삭제 구성"을 참조하세요.](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)

## 컨테이너 스토리지

codespace를 만들 때 스토리지가 한정되어 있으므로 시간이 지남에 따라 공간을 확보해야 할 수 있습니다. {% data variables.product.prodname_github_codespaces %} 터미널에서 다음 명령을 실행하여 스토리지 공간을 확보해 보세요.

- `sudo apt autoremove`를 사용하여 더 이상 사용되지 않는 패키지를 제거합니다.
- `sudo apt clean`을 사용하여 apt 캐시를 정리합니다.
- `sudo find / -printf '%s %p\n'| sort -nr | head -10`을 사용하여 codespace에서 가장 큰 상위 10개 파일을 확인하세요.
- 빌드 아티팩트 및 로그와 같은 불필요한 파일을 삭제합니다.

몇 가지 더 파괴적인 옵션:

- `docker system prune`을 사용하여 사용하지 않는 Docker 이미지, 네트워크 및 컨테이너를 제거합니다(모든 이미지를 제거하려면 `-a`, 모든 볼륨을 제거하려면 `--volumes` 추가).
- 작업 트리에서 추적되지 않은 파일(`git clean -i`)을 제거합니다.

## 구성

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
만들기 로그를 검토하고 필요에 따라 개발 컨테이너 구성을 업데이트합니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 로그](/codespaces/troubleshooting/github-codespaces-logs)”를 참조하세요.

그런 다음 codespace를 다시 시작하거나 컨테이너를 다시 빌드할 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”를 참조하세요.
