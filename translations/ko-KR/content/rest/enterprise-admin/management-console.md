---
title: 관리 콘솔
intro: '관리 콘솔 API를 통해 {% data variables.product.product_name %} 설치를 관리할 수 있습니다.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5d9ba417c5b9eff26b88d9db46f5442ab7a4871c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094411'
---
{% tip %}

관리 콘솔에 대한 API를 호출할 때 포트 번호를 명시적으로 설정해야 합니다. 엔터프라이즈에서 TLS를 사용하도록 설정하면 포트 번호가 `8443`이고, 그렇지 않으면 포트 번호가 `8080`입니다.

포트 번호를 제공하지 않으려면 리디렉션을 자동으로 따르도록 도구를 구성해야 합니다.

{% data variables.product.product_name %}은(는) [자체 TLS 인증서를 추가하기 전에](/enterprise/admin/guides/installation/configuring-tls/) 자체 서명된 인증서를 사용하므로 `curl`을 사용할 때 [`-k` 플래그](http://curl.haxx.se/docs/manpage.html#-k)를 추가해야 할 수도 있습니다.

{% endtip %}

### 인증

[`/setup/api/start`](#create-a-github-enterprise-server-license)를 제외한 모든 관리 콘솔 API 엔드포인트에 인증 토큰으로 [관리 콘솔 암호](/enterprise/admin/articles/accessing-the-management-console/)를 전달해야 합니다.

`api_key` 매개 변수를 사용하여 각 요청과 함께 이 토큰을 보냅니다. 예를 들면 다음과 같습니다.

```shell
$ curl -L 'https://HOSTNAME:ADMIN-PORT/setup/api?api_key=YOUR_PASSWORD'
```

이 토큰은 표준 HTTP 인증을 사용하여 보낼 수도 있습니다. 예를 들어:

```shell
$ curl -L -u "api_key:YOUR_PASSWORD" 'https://HOSTNAME:ADMIN-PORT/setup/api'
```

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
