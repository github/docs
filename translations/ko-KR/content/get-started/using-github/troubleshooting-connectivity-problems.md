---
title: 연결 문제 해결
intro: '{% data variables.product.prodname_dotcom %}에 연결하는 데 문제가 있는 경우 연결 문제를 해결한 다음 {% data variables.product.prodname_debug %} 도구를 사용하여 문제를 진단할 수 있습니다.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/using-github/troubleshooting-connectivity-problems
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Connectivity problems
ms.openlocfilehash: 0f3c37070b517b059ca0242fe387492b6266f205
ms.sourcegitcommit: a9d8d12680b6f8d6fc651a23262e4ad85b185040
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101702'
---
대부분의 경우 방화벽, 프록시 서버, 회사 네트워크 또는 기타 네트워크가 {% data variables.product.prodname_dotcom %}를 차단하는 방식으로 구성되기 때문에 연결 문제가 발생합니다.

## {% data variables.product.prodname_dotcom %}의 IP 주소 허용

{% data variables.product.prodname_dotcom %}의 IP 주소를 허용하도록 네트워크가 구성되어 있는지 확인합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 IP 주소 정보](/articles/about-github-s-ip-addresses)”를 참조하세요.

## 회사 또는 조직의 네트워크 사용

회사 또는 조직의 네트워크에 연결 문제가 있는 경우 네트워크 관리자에게 문의하여 네트워크에 특정 트래픽을 차단하는 규칙이 있는지 확인합니다. 규칙이 있는 경우 네트워크 관리자에게 {% data variables.product.prodname_dotcom %}에 대한 트래픽을 허용하도록 요청합니다.

## captcha 문제 해결

Captcha로 확인할 수 없는 경우:
- 브라우저에서 JavaScript가 사용되는지 확인합니다.
- 브라우저가 지원되는지 확인합니다. 브라우저가 지원되지 않는 경우 브라우저를 업그레이드하거나 지원되는 브라우저를 설치합니다. 지원되는 브라우저의 목록은 “[지원되는 브라우저](/articles/supported-browsers)”를 참조하세요.
- 네트워크 구성이 https://octocaptcha.com/ 또는 https://arkoselabs.com/ 을 차단하고 있지 않은지 확인합니다. 회사 방화벽 뒤에 있는 경우 해당 도메인을 허용하도록 IT 관리자에게 문의합니다. 이러한 도메인에 대한 액세스를 확인하려면 https://octocaptcha.com/test 을 방문하여 “연결이 성공적으로 수행되었습니다!”라는 텍스트가 표시되는지 확인한 다음, https://client-demo.arkoselabs.com/github 를 방문하여 captcha를 로드할 수 있는지 확인합니다.
- 브라우저에 GitHub를 방해할 수 있는 플러그 인 또는 확장이 없는지 확인합니다. 있는 경우 captcha 확인 중에 플러그 인 또는 확장을 일시적으로 사용하지 않도록 설정합니다.

## 복제 메서드 전환

SSH를 통한 복제에서 HTTPS를 통한 복제로 전환하거나 그 반대로 전환하면 연결이 향상될 수 있습니다. 자세한 내용은 “[복제 오류 문제 해결](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)”을 참조하세요.

SSH를 사용하려고 하지만 포트가 차단된 경우 대체 포트를 사용할 수 있습니다. 자세한 내용은 "[HTTPS 포트를 통해 SSH 사용"을](/authentication/troubleshooting-ssh/using-ssh-over-the-https-port) 참조하세요.

SSH에서 시간 제한이 발생하는 경우 “[오류: 잘못된 파일 번호](/articles/error-bad-file-number)”를 참조하세요.

## 느린 다운로드 및 간헐적 느린 연결 문제 해결

{% data variables.product.prodname_dotcom %}는 사용자당 대역폭을 제한하지 않습니다.

하루 중 특정 시간에 연결 속도가 느리지만 다른 시간에는 느리지 않은 경우 네트워크 정체로 인한 것일 가능성이 큽니다. {% data variables.product.prodname_dotcom %}에서는 네트워크 정체를 해결할 수 없으므로 인터넷 서비스 공급자에게 문제를 에스컬레이션해야 합니다.

## {% data variables.product.prodname_debug %}를 사용하여 문제 해결

위의 모든 문제 해결 제안을 따랐는데도 여전히 연결 문제가 있는 경우 {% data variables.product.prodname_debug %} 사이트의 지침에 따라 테스트를 실행하고 보고서를 {% data variables.product.prodname_dotcom %} 지원으로 보낼 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_debug %}](https://github-debug.com/)를 참조하세요.
