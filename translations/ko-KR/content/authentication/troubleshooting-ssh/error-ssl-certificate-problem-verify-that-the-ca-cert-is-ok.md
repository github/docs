---
title: '오류: SSL 인증서 문제, CA 인증서가 정상인지 확인'
intro: '이 오류는 CA 루트 인증서가 만료됨을 의미합니다. CA 루트 인증서를 업데이트해야 하는 경우 {% data variables.product.product_name %} 리포지토리에서 푸시하거나 끌어올 수 없습니다.'
redirect_from:
  - /articles/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssl-certificate-problem-verify-that-the-ca-cert-is-ok
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSL certificate problem
ms.openlocfilehash: 26777edf5b312c8f45c5b1fb211b87648778cf13
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088192'
---
수신하는 오류는 다음과 같을 수 있습니다.

```shell
$ git push -u github.main
> fatal: 'github.main' does not appear to be a git repository
> fatal: The remote end hung up unexpectedly

$ git pull -u github
> error: SSL certificate problem, verify that the CA cert is OK. Details:
> error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed while accessing https://github.com/tqisjim/google-oauth.git/info/refs
> fatal: HTTP request failed
```

“CA”는 웹에서 보안 연결을 처리하는 타사 그룹인 “인증 기관”의 약자입니다. 두 컴퓨터(예: 사용자의 컴퓨터와 GitHub.com) 간에 유효한 연결이 있는지 확인하는 방법인 디지털 “인증서”를 설정합니다. 인증서가 없으면 두 컴퓨터 간의 보안 위험이 더 커집니다.

이 오류가 표시되면 CA가 만료되어 업데이트해야 한다는 의미일 수 있습니다. 일반적으로 운영 체제를 업데이트하면 CA도 업데이트되고 문제가 해결됩니다.
