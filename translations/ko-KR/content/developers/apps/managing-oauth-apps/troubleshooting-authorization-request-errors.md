---
title: 권한 부여 요청 오류 문제 해결
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Troubleshoot authorization
ms.openlocfilehash: 8706453423298277ed27ac5f950c562db8a42a09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089801'
---
## 애플리케이션 일시 중단됨

(남용, 스팸 또는 API의 잘못된 사용 신고로 인해) 설정한 OAuth 앱이 일시 중단된 경우 GitHub는 오류를 요약하기 위해 다음 매개 변수를 사용하여 등록된 콜백 URL로 리디렉션합니다.

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

일시 중단된 애플리케이션 문제를 해결하려면 {% data variables.contact.contact_support %}에 문의하세요.

## 리디렉션 URI 불일치

애플리케이션에 등록한 것과 일치하지 않는 `redirect_uri`를 제공하는 경우 GitHub는 오류를 요약하는 다음 매개 변수를 사용하여 등록된 콜백 URL로 리디렉션됩니다.

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

이 오류를 해결하려면 등록한 것과 일치하는 `redirect_uri`를 제공하거나 애플리케이션에 등록된 기본 매개 변수를 사용하도록 이 매개 변수를 그대로 둡니다.

### 액세스 거부됨

사용자가 애플리케이션에 대한 액세스를 거부하는 경우 GitHub는 오류를 요약하는 다음 매개 변수를 사용하여 등록된 콜백 URL로 리디렉션됩니다.

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

사용자가 애플리케이션을 사용하지 않도록 자유롭게 선택할 수 있으므로 여기에서 수행할 수 있는 작업은 없습니다. 사용자가 창을 닫거나 브라우저에서 다시 누르는 경우가 많으므로 이 오류가 표시되지 않을 수 있습니다.
