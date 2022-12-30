---
title: 리포지토리로의 푸시에 대한 메일 알림 정보
intro: 누군가가 리포지토리로 푸시할 때 자동으로 이메일 알림을 특정 이메일 주소로 보내도록 선택할 수 있습니다.
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136749'
---
{% data reusables.notifications.outbound_email_tip %}

리포지토리로의 푸시에 대한 각 메일 알림에는 새 커밋과 해당 커밋만 포함된 diff에 대한 링크가 표시됩니다. 메일 알림에는 다음이 표시됩니다.

- 커밋이 수행된 리포지토리의 이름
- 커밋이 수행된 분기
- {% data variables.product.product_name %}의 diff에 대한 링크를 포함하는 커밋의 SHA1
- 커밋 작성자
- 커밋이 수행된 날짜
- 커밋의 일부로 변경된 파일
- 커밋 메시지

리포지토리로의 푸시에 대해 사용자가 수신하는 메일 알림을 필터링할 수 있습니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)”을 참조하세요.

## 리포지토리로의 푸시에 대한 메일 알림 사용

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. 알림을 보낼 공백으로 구분된 최대 두 개의 메일 주소를 입력합니다. 둘 이상의 계정으로 메일을 보내려면 메일 주소 중 하나를 그룹 메일 주소로 설정합니다.
![메일 주소 텍스트 상자](/assets/images/help/settings/email_services_addresses.png)
1. 자체 서버를 운영하는 경우 **승인된 헤더** 를 통해 메일의 무결성을 확인할 수 있습니다. **승인된 헤더** 는 이 필드에 입력한 토큰 또는 비밀이며 메일과 함께 전송됩니다. 메일의 `Approved` 헤더가 토큰과 일치하는 경우 메일을 {% data variables.product.product_name %}에서 온 것으로 신뢰할 수 있습니다.
![메일 승인된 헤더 텍스트 상자](/assets/images/help/settings/email_services_approved_header.png)
7. **설치 알림** 을 클릭합니다.
![설치 알림 단추](/assets/images/help/settings/setup_notifications_settings.png)

## 추가 참고 자료
- “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”

