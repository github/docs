---
title: OAuth 앱 액세스 토큰 요청 오류 문제 해결
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Troubleshoot token request
ms.openlocfilehash: 7764d0e1f23a3d2dac841412ea0120487c8f6560
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089798'
---
{% note %}

**참고:** 다음 예제에서는 JSON 응답만 표시합니다.

{% endnote %}

## 잘못된 클라이언트 자격 증명

전달한 client\_id 및/또는 client\_secret이 올바르지 않으면 이 오류 응답을 받게 됩니다.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

이 오류를 해결하려면 {% data variables.product.prodname_oauth_app %}에 대한 올바른 자격 증명이 있는지 확인합니다. `client_id` 및 `client_secret`가 올바른지 다시 확인하고 {% data variables.product.product_name %}에 올바르게 전달되었는지 확인합니다.

## 리디렉션 URI 불일치

{% data variables.product.prodname_oauth_app %}에 등록한 항목과 일치하지 않는 `redirect_uri`를 제공하면 다음 오류 메시지가 표시됩니다.

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

이 오류를 해결하려면 등록한 것과 일치하는 `redirect_uri`를 제공하거나 애플리케이션에 등록된 기본 매개 변수를 사용하도록 이 매개 변수를 그대로 둡니다.

## 잘못된 확인 코드

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

전달한 확인 코드가 올바르지 않거나 만료되었거나 첫 번째 권한 부여 요청에서 받은 코드와 일치하지 않으면 이 오류가 발생합니다.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

이 오류를 해결하려면 [OAuth 권한 부여 프로세스를 다시](/apps/building-oauth-apps/authorizing-oauth-apps/) 시작하고 새 코드를 가져옵니다.
