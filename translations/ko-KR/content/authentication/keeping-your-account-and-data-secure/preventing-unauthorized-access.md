---
title: 무단 액세스 방지
intro: '{% 데이터 variables.location.product_location %}에 로그인하는 동안 [하트블레드 버그](http://heartbleed.com/) 검색과 같은 미디어의 보안 인시던트에 대한 경고가 표시되거나 컴퓨터가 도난당할 수 있습니다. 이러한 경우 암호를 변경하면 계정 및 프로젝트에 대해 의도하지 않은 향후 액세스를 방지할 수 있습니다.'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: a7b6b2cf0fa6dc91860a440314de9a51a503dae1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098926'
---
{% data variables.product.product_name %}에는 새 SSH 키 추가, 애플리케이션 권한 부여 또는 팀 구성원 수정과 같은 중요한 작업을 수행하는 데 암호가 필요합니다.

암호를 변경한 후 다음 작업을 수행하여 계정이 안전한지 확인해야 합니다.

- 계정에서 [2단계 인증을 사용하도록 설정](/articles/about-two-factor-authentication)하면 액세스에 암호 이상의 것이 필요합니다.
- [SSH 키를 검토](/articles/reviewing-your-ssh-keys)하고 [키를 배포](/articles/reviewing-your-deploy-keys)하고 [권한 있는 통합](/articles/reviewing-your-authorized-integrations)을 배포하고, SSH 및 애플리케이션 설정에서 권한이 없거나 익숙하지 않은 액세스를 철회합니다.
{% ifversion fpt or ghec %}
- [모든 이메일 주소를 확인합니다](/articles/verifying-your-email-address). 공격자가 자신의 이메일 주소를 계정에 추가한 경우 의도하지 않은 암호 재설정을 강제할 수 있습니다.
{% endif %}
- [계정의 보안 로그를 검토합니다](/github/authenticating-to-github/reviewing-your-security-log). 리포지토리의 다양한 구성에 대한 개요를 제공합니다. 예를 들어 비공개 리포지토리가 공개되거나 리포지토리가 전송되지 않았는지 확인할 수 있습니다.
- 리포지토리에서 [웹후크를 검토](/articles/creating-webhooks)합니다. 웹후크를 사용하면 공격자가 리포지토리에 대한 푸시를 가로챌 수 있습니다.
- [새 배포 키가 만들어지지 않았는지](/guides/managing-deploy-keys/#deploy-keys) 확인합니다. 새 배포 키를 통해 외부 서버에서 프로젝트에 액세스할 수 있습니다.
- 리포지토리에 대한 최근 커밋을 검토합니다.
- 각 리포지토리에 대한 협력자 목록을 검토합니다.
