---
title: OAuth 권한 부여
intro: OAuth 권한 부여를 사용하면 계정에 대한 OAuth 애플리케이션의 액세스 권한을 관리할 수 있습니다.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/oauth-authorizations
ms.openlocfilehash: 7a690b1e874179496c80c4a235e61727b5f72a91
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444671'
---
## OAuth 권한 부여 API 정보

이 API를 사용하여 OAuth 애플리케이션이 계정에 대해 가지는 액세스 권한을 관리할 수 있습니다. 이 API는 토큰이 아닌 사용자 이름과 암호를 사용하여 [기본 인증](/rest/overview/other-authentication-methods#basic-authentication)을 통해서만 액세스할 수 있습니다.

관리자 또는 사용자가 2단계 인증을 사용하도록 설정한 경우 [2단계 인증을 사용](/rest/overview/other-authentication-methods#working-with-two-factor-authentication)하는 방법을 이해해야 합니다.
