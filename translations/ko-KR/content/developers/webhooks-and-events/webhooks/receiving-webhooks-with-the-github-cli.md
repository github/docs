---
title: GitHub CLI를 사용하여 웹후크 수신
intro: '{% data variables.product.prodname_cli %}를 사용하여 포트 전달 또는 타사 도구의 복잡성 없이 개발 환경에서 웹후크를 테스트할 수 있습니다.'
versions:
  feature: cli-webhook-forwarding
topics:
  - Webhooks
shortTitle: Receiving webhooks with the GitHub CLI
ms.openlocfilehash: 11bc5b476a191a61594cb73f1e6ce1be5bb6cf9b
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160666'
---
## {% data variables.product.prodname_cli %}을(를) 사용하여 웹후크 수신 정보

{% note %}

**참고**: {% data variables.product.prodname_cli %}을(를) 사용하여 웹후크를 수신하는 것은 현재 제한된 퍼블릭 베타로 제공되며 변경될 수 있습니다. 베타에 등록하려면 GitHub 커뮤니티 [토론에](https://github.com/orgs/community/discussions/38261) 회신하세요. 즉시 추가되지 않을 수 있습니다. 베타에 추가되면 이메일 알림을 받게 됩니다.

{% endnote %}

통합 코드를 변경할 때 로컬 환경에서 코드를 실행하면 코드를 배포하지 않고도 신속하게 테스트하고 반복할 수 있습니다. {% data variables.product.prodname_cli %}를 사용하여 웹후크를 로컬 환경으로 전달할 수 있습니다.

{% note %}

**참고:** {% data variables.product.prodname_cli %}의 웹후크 전달은 리포지토리 및 조직 웹후크에서만 작동합니다. 스폰서쉽, GitHub 앱, 엔터프라이즈 또는 Marketplace 웹후크를 로컬로 테스트하려면 이 작업을 수동으로 수행해야 합니다. 자세한 내용은 “[웹후크 만들기](/developers/webhooks-and-events/webhooks/creating-webhooks)”를 참조하세요.

{% endnote %}

## {% data variables.product.prodname_cli %}을(를) 사용하여 웹후크 수신

{% data reusables.cli.cli-learn-more %}

1. 웹후크 전달을 사용하도록 설정하기 위해 {% data variables.product.prodname_cli %} 확장을 설치하려면 하위 명령을 사용합니다 `extension install` . 

   ```sh
   gh extension install cli/gh-webhook
   ```


1. 애플리케이션을 로컬로 시작하고 웹후크를 받을 것으로 예상되는 URL을 기록해 둡니다. 이 가이드에서는 애플리케이션이 에서 `http://localhost:3000/webhook`웹후크 이벤트를 수신 대기하고 있다고 가정합니다.

1. 애플리케이션에 배달할 웹후크를 설정하려면 하위 명령을 실행 `webhook forward` 합니다. 을 리포지토리의 이름으로 바꿉 있습니다 `REPOSITORY` . 예들 들어 `monalisa/octocat`입니다. 를 수신하려는 이벤트의 쉼표로 구분된 목록으로 바꿉 `EVENTS` 있습니다. 예들 들어 `issues,pull_request`입니다. 을 애플리케이션이 웹후크를 받을 것으로 예상되는 로컬 URL로 바꿉 `URL` 니다. 예들 들어 `"http://localhost:3000/webhook"`입니다.  리포지토리 웹후크 대신 조직 웹후크를 수신하려면 플래그를 `--repo` 플래그로 `--org` 바꿉니다. 예: `--org="octo-org"`.


   ```sh
   gh webhook forward --repo=REPOSITORY --events=EVENTS --url=URL
   ```

  명령을 백그라운드에서 실행 상태로 둡니다. 지정된 리포지토리에 대해 지정된 이벤트를 모두 수신하고 지정된 URL에서 실행되는 웹후크 처리기에 전달합니다.
