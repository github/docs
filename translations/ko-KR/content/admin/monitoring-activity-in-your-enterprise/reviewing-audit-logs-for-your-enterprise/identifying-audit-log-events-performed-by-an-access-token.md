---
title: 액세스 토큰에서 수행하는 감사 로그 이벤트 식별
shortTitle: Identify events by token
intro: '엔터프라이즈의 특정 {% data variables.product.pat_generic %} 또는 OAuth 토큰에서 수행하는 작업을 식별할 수 있습니다.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160134'
---
## 감사 로그의 토큰 데이터 정보

엔터프라이즈의 감사 로그에서 인증을 위해 {% data variables.product.pat_generic %} 또는 OAuth 애플리케이션을 사용하여 수행된 모든 작업에 대해 이벤트 데이터에 사용된 인증 방법과 토큰의 SHA-256 해시가 표시됩니다.

토큰이 손상되었음을 알게 되면 해당 토큰과 연결된 모든 이벤트에 대해 엔터프라이즈의 감사 로그를 검색하여 손상된 토큰이 수행한 작업을 이해할 수 있습니다.

해시된 토큰 값은 감사 로그를 내보낼 때 포함되지 않습니다.

## 토큰과 연결된 이벤트 검색

특정 토큰과 연결된 이벤트를 검색할 때 UI 또는 REST API를 사용할 수 있습니다. 두 경우 모두 먼저 토큰의 SHA-256 해시를 알아야 합니다.

### 토큰에 대한 SHA-256 해시 값 생성

원시 토큰 값만 있는 경우 토큰을 검색하려면 SHA-256 해시를 생성해야 합니다.

MacOS 및 Linux의 경우 를 사용하여 `echo -n TOKEN | openssl dgst -sha256 -binary | base64`토큰을 토큰 값으로 바꿀 수 있습니다.

Powershell의 경우 다음 스크립트를 사용하여 지정된 문자열에 대한 SHA-256 해시를 반환할 수 있습니다.

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### {% data variables.product.prodname_dotcom %}에서 검색

{% data variables.product.prodname_dotcom %}에서 감사 로그를 검색하는 동안 검색 쿼리에 를 포함하고 `hashed_token:"VALUE"` 을 토큰의 SHA-256 해시로 바꿉 `VALUE` 있습니다. 

{% note %}

**참고:** 해시된 토큰 값을 따옴표로 래핑해야 합니다.

{% endnote %}

### REST API를 사용하여 검색

REST API를 사용하여 토큰을 검색하려면 SHA-256 해시를 생성한 후 해시를 URI로 이스케이프해야 합니다. 대부분의 주요 프로그래밍 언어는 URI 이스케이프를 위한 유틸리티를 제공합니다. 예를 들어 [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 는 JavaScript에 대한 문자열을 인코딩합니다.

그런 다음 검색 구에 를 포함하고 `hashed_token:"VALUE"` VALUE를 URI 이스케이프 해시로 바꿉니다. 

예를 들어 엔터프라이즈 계정 `octo-corp`의 이름이 인 경우 다음 curl 명령은 URI로 인코딩된 SHA-256 해시가 인 토큰과 연결된 모든 이벤트에 대해 의 감사 로그를 검색 @octo-corp합니다 `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## 추가 정보

- "[엔터프라이즈에 감사 로그 API 사용](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)"
