---
title: 알림 구성
intro: '알림을 받을 {% data variables.product.prodname_dotcom %}의 작업 유형과 이러한 업데이트를 전달하는 방법을 선택합니다.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: f8e2185b316a360806a389af7203fd6f8c12dd15
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094475'
---
## 알림 배달 옵션

다음 위치에서 {% 데이터 variables.location.product_location %}에 대한 활동에 대한 알림을 받을 수 있습니다.

  - {% 데이터 variables.location.product_location %} 웹 인터페이스의 알림 받은 편지함{% ifversion fpt 또는 ghes 또는 ghec %}
  - {% 데이터 variables.product.prodname_mobile %}의 알림 받은 편지함- {% 데이터 variables.location.product_location %}{% endif %}의 받은 편지함과 동기화됩니다.
  - 확인된 전자 메일 주소를 사용하는 전자 메일 클라이언트로, {% 데이터 variables.location.product_location %}{% ifversion fpt 또는 ghec %} 및 {% 데이터 variables.product.prodname_mobile %}{% endif %}의 알림 받은 편지함과 동기화할 수도 있습니다.

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 자세한 내용은 “[알림 설정 선택](#choosing-your-notification-settings)”을 참조하세요.
{% endif %}

{% data reusables.notifications.shared_state %}

### 알림 받은 편지함의 이점

{% 데이터 variables.location.product_location %}{% ifversion fpt 또는 ghec %} 및 {% 데이터 variables.product.prodname_mobile %}{% endif %}의 알림 받은 편지함에는 다음 옵션을 포함하여 {% 데이터 variables.product.prodname_dotcom %} 알림 흐름용으로 특별히 설계된 심사 옵션이 포함되어 있습니다.
  - 한 번에 여러 알림을 심사합니다.
  - 완료된 알림을 **완료** 로 표시하고 받은 편지함에서 제거합니다. **완료** 로 표시된 알림을 모두 보려면 `is:done` 쿼리를 사용합니다.
  - 나중에 검토할 수 있도록 알림을 저장합니다. 저장된 알림은 받은 편지함에서 플래그가 지정되고 무기한 보관됩니다. 저장된 모든 알림을 보려면 `is:saved` 쿼리를 사용합니다.
  - 구독을 취소하고 받은 편지함에서 알림을 제거합니다.
  - 알림 받은 편지함 내의 {% 데이터 variables.location.product_location %}에서 알림이 시작되는 문제, 끌어오기 요청 또는 팀 토론을 미리 봅니다.
  - 받은 편지함에서 `reasons` 레이블을 사용하여 알림이 수신되는 최신 이유 중 하나를 참조하세요.
  - 원하는 경우 사용자 지정 필터를 만들어 다른 알림을 중점적으로 살펴봅니다.
  - 받은 편지함의 알림을 리포지토리 또는 날짜별로 그룹화하여 컨텍스트를 덜 전환하면서 전반적인 내용을 빠르게 확인할 수 있습니다.

{% ifversion fpt or ghes or ghec %} 또한 {% data variables.product.prodname_mobile %}을 사용하여 모바일 디바이스에서 알림을 받고 심사할 수 있습니다. 자세한 내용은 “[GitHub Mobile을 사용하여 알림 설정 관리](#managing-your-notification-settings-with-github-mobile)” 또는 “[GitHub Mobile](/get-started/using-github/github-mobile)”을 참조하세요.
{% endif %}

### 알림에 메일 클라이언트를 사용할 경우의 이점

메일 클라이언트 사용의 한 가지 이점은 메일 클라이언트의 스토리지 용량에 따라 모든 알림을 무기한으로 보관할 수 있다는 것입니다. 받은 편지함 알림은 **저장됨** 으로 표시하지 않으면 {% data variables.product.prodname_dotcom %}에서 5개월 동안만 보관됩니다. **저장됨** 알림은 무기한 보관됩니다. 받은 편지함의 보존 정책에 대한 자세한 내용은 “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)”를 참조하세요.

메일 클라이언트에 알림을 보내면 사용자 지정 또는 색으로 구분된 레이블을 포함할 수 있는 메일 클라이언트의 설정에 따라 받은 편지함을 사용자 지정할 수도 있습니다.

또한 메일 알림을 통해 수신하는 알림 유형을 선택하고 업데이트에 대해 다른 메일 주소를 선택할 수 있습니다. 예를 들어 리포지토리에 대한 특정 알림을 확인된 개인 메일 주소로 보낼 수 있습니다. 메일 사용자 지정 옵션에 대한 자세한 내용은 “[메일 알림 사용자 지정](#customizing-your-email-notifications)”을 참조하세요.

## 참여 및 시청 알림 정보

리포지토리를 시청하면 해당 리포지토리의 작업에 대한 업데이트를 구독하게 됩니다. 마찬가지로 특정 팀의 토론을 시청하면 해당 팀 페이지의 모든 대화 업데이트를 구독하게 됩니다. 자세한 내용은 “[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)”를 참조하세요.

시청하는 리포지토리를 보려면 [시청 페이지](https://github.com/watching)로 이동합니다. 자세한 내용은 “[GitHub 구독 및 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)”를 참조하세요.

{% ifversion ghae %}
### 알림 구성
{% endif %} 리포지토리 페이지 또는 시청 페이지에서 리포지토리에 대한 알림을 구성할 수 있습니다.

### 사용자 지정 알림 정보
리포지토리에 대한 알림을 사용자 지정할 수 있습니다. 예를 들어 리포지토리 내에서 하나 이상의 이벤트 유형({% data reusables.notifications-v2.custom-notification-types %})에 대한 업데이트가 발생하는 경우에만 알림을 받거나 리포지토리에 대한 모든 알림을 무시하도록 선택할 수 있습니다. 자세한 내용은 아래의 “[개별 리포지토리에 대한 시청 설정 구성](#configuring-your-watch-settings-for-an-individual-repository)”을 참조하세요.

### 대화 참여
대화에서 댓글을 달거나 다른 사람이 사용자 이름을 @mentions하면 대화에 참여하게 됩니다. 기본적으로 대화에 참여하면 대화가 자동으로 구독됩니다. 이슈 또는 끌어오기 요청에서 **구독 취소** 를 클릭하거나 알림 받은 편지함의 **구독 취소** 옵션을 통해 참여하는 대화에서 수동으로 구독을 취소할 수 있습니다.

{% ifversion update-notification-settings-22 %} 보고 있거나 참여하는 대화의 경우 {% 데이터 variables.product.company_short %}에서 알림을 받을지 또는 알림 설정의 전자 메일로 알림을 받을지 선택할 수 있습니다. 자세한 내용은 "[알림 설정 선택"을 참조하세요](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings).

![구독 참여 및 시청 옵션의 애니메이션 GIF](/assets/images/help/notifications/selecting-participating-notifications.gif) 

{% else %}

보고 있거나 참여하는 대화의 경우 {% 데이터 variables.location.product_location %}{% ifversion ghes %} 및 {% 데이터 variables.product.prodname_mobile %}{% endif %}의 알림 받은 편지함을 통해 알림을 받을지 선택할 수 있습니다. 자세한 내용은 "[알림 설정 선택"을 참조하세요](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings).

![알림 옵션 참여 및 시청 스크린샷](/assets/images/help/notifications-v2/participating-and-watching-options.png){% endif %}



예를 들면 다음과 같습니다.
  - 메일로 알림을 받지 않으려면 참여 및 시청 알림에 대한 **메일** 을 선택 취소합니다.
  - 대화에 참여했을 때 메일로 알림을 받으려면 “참여” 아래에서 **메일** 을 선택할 수 있습니다.

{% ifversion update-notification-settings-22 %} 알림을 보거나 참여시키는 데 "알림: GitHub"를 사용하도록 설정하지 않으면 알림 받은 편지함에 업데이트가 없습니다.

{% else %}

웹{% ifversion ghes %} 및 mobile{% endif %}에 대한 알림을 보거나 참여하도록 설정하지 않으면 알림 받은 편지함에 업데이트가 없습니다. {% endif %}

## 메일 알림 사용자 지정

전자 메일 알림을 사용하도록 설정한 후 {% 데이터 variables.location.product_location %}은(는) 콘텐츠의 HTML 및 일반 텍스트 복사본을 모두 포함하는 다중 파트 전자 메일로 알림을 보냅니다. Email 알림 콘텐츠에는 {% 데이터 variables.location.product_location %}의 원래 콘텐츠에 표시되는 Markdown@mentions, 이모지, 해시 링크 등이 포함됩니다. 메일에서 텍스트만 보려면 일반 텍스트 복사본만 표시하도록 메일 클라이언트를 구성할 수 있습니다.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Gmail을 사용하는 경우 알림 메일 옆에 있는 단추를 클릭하여 알림을 생성한 원래 이슈 또는 끌어오기 요청을 방문할 수 있습니다.

![Gmail의 단추](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

참여하거나 시청하는 대화에 대한 업데이트를 보낼 기본 메일 주소를 선택합니다. 기본 전자 메일 주소를 사용하기 위한 업데이트를 받을 {% 데이터 variables.location.product_location %}에서 어떤 활동을 지정할 수도 있습니다. 예를 들어 다음에서 기본 메일로 업데이트를 원하는지 선택합니다.
  - 이슈 및 끌어오기 요청에 대한 주석
  - 끌어오기 요청 검토
  - 끌어오기 요청 푸시
  - 사용자의 업데이트(이슈 또는 끌어오기 요청 열기, 주석 달기 또는 이슈 또는 끌어오기 요청 닫기 등)

리포지토리를 소유하는 조직에 따라 다른 메일 주소로 알림을 보낼 수도 있습니다. 조직에서 특정 도메인에 대한 메일 주소를 확인하도록 요구할 수 있습니다. 자세한 내용은 “[조직의 메일 알림이 전송되는 위치 선택](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)”을 참조하세요.

특정 리포지토리에 대한 알림을 메일 주소로 보낼 수도 있습니다. 자세한 내용은 “[리포지토리에 푸시에 대한 메일 알림 정보](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)”를 참조하세요.

{% data reusables.notifications-v2.email-notification-caveats %}

## 메일 알림 필터링

{% 데이터 variables.location.product_location %}이(가) 보내는 각 전자 메일 알림에는 헤더 정보가 포함됩니다. 모든 메일의 헤더 정보는 일관되므로 메일 클라이언트에서 헤더 정보를 사용하여 모든 {% data variables.product.prodname_dotcom %} 알림 또는 특정 유형의 {% data variables.product.prodname_dotcom %} 알림을 필터링하거나 전달할 수 있습니다.

사용자에게 해당 없는 알림을 받고 있다고 생각되면 `X-GitHub-Recipient` 및 `X-GitHub-Recipient-Address` 헤더를 검사합니다. 헤더는 의도한 수신자가 누구인지 표시합니다. 메일 설정에 따라 다른 사용자를 위한 알림을 받을 수 있습니다.

{% 데이터 variables.location.product_location %}의 Email 알림에는 다음 헤더 정보가 포함됩니다.

| 헤더 | 정보 |
| --- | --- |
| `From` 주소 | 이 주소는 항상 {% ifversion fpt or ghec %}‘`notifications@github.com`’{% else %}‘사이트 관리자가 구성한 발신 전용 메일 주소’{% endif %}입니다. |
| `To` 필드 | 이 필드는 스레드에 직접 연결됩니다.{% ifversion not ghae %} 메일에 회신하는 경우 대화에 새 주석을 추가합니다.{% endif %} |
| `Cc` 주소 | 대화를 구독하는 경우 {% data variables.product.product_name %}는 사용자를 `Cc`합니다. 두 번째 `Cc` 메일 주소는 알림 이유와 일치합니다. 알림 이유의 접미사는 {% data variables.notifications.cc_address %}입니다. 가능한 알림 이유는 다음과 같습니다. <ul><li>`assign`: 이슈 또는 끌어오기 요청에 할당되었습니다.</li><li>`author`: 이슈 또는 끌어오기 요청을 만들었습니다.</li><li>`ci_activity`: 트리거한 {% data variables.product.prodname_actions %} 워크플로 실행이 완료되었습니다.</li><li>`comment`: 이슈 또는 끌어오기 요청에 대해 주석을 달았습니다.</li><li>`manual`: 수동으로 구독한 이슈 또는 끌어오기 요청에 대한 업데이트가 있습니다.</li><li>`mention`: 이슈 또는 끌어오기 요청에 언급되었습니다.</li><li>`push`: 다른 사람이 사용자가 구독하는 끌어오기 요청을 커밋했습니다.</li><li>`review_requested`: 사용자 또는 사용자가 속한 팀이 끌어오기 요청을 검토하도록 요청되었습니다.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %}가 경고를 수신하는 리포지토리에서 취약성을 탐지했습니다.</li><li>`state_change`: 구독하는 이슈 또는 끌어오기 요청이 닫혔거나 열렸습니다.</li><li>`subscribed`: 시청하는 리포지토리에 업데이트가 있습니다.</li><li>`team_mention`: 사용자가 속한 팀이 이슈 또는 끌어오기 요청에 언급되었습니다.</li><li>`your_activity`: 이슈 또는 끌어오기 요청을 열었거나, 주석을 달았거나, 닫았습니다.</li></ul> |
| `mailing list` 필드 | 이 필드는 리포지토리의 이름과 해당 소유자를 식별합니다. 이 주소의 형식은 항상 `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`입니다. |
| `X-GitHub-Severity` 필드 | {% data reusables.repositories.security-alerts-x-github-severity %} 가능한 심각도 수준은 다음과 같습니다.<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요. |

## 알림 설정 선택

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. 알림 설정 페이지에서 다음과 같은 경우 알림을 받는 방법을 선택합니다.
    - 시청하는 리포지토리나 팀 토론 또는 참여 중인 대화에 업데이트가 있습니다. 자세한 내용은 “[참여 및 시청 알림 정보](#about-participating-and-watching-notifications)”를 참조하세요.
    - 새 리포지토리에 대한 액세스 권한을 얻거나 새 팀에 참가했습니다. 자세한 내용은 “[자동 시청](#automatic-watching)”을 참조하세요.
    - 리포지토리에 새 {% data variables.product.prodname_dependabot_alerts %}가 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 알림 옵션](#dependabot-alerts-notification-options)”을 참조하세요.  {% ifversion fpt or ghec %}
    - {% data variables.product.prodname_actions %}로 설정된 리포지토리에 대한 워크플로 실행 업데이트가 있습니다. 자세한 내용은 "[{% 데이터 variables.product.prodname_actions %} 알림 옵션](#github-actions-notification-options)"을 참조하세요. {% endif %} {% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %}
    - 사용자가 소유자인 조직에 속하는 리포지토리에 추가된 새 배포 키가 있습니다. 자세한 내용은 “[조직 경고 알림 옵션](#organization-alerts-notification-options)”을 참조하세요.{% endif %}

## 자동 시청

기본적으로 새 리포지토리에 대한 액세스 권한을 얻을 때마다 해당 리포지토리를 자동으로 시청하기 시작합니다. 새 팀에 참가할 때마다 자동으로 업데이트를 구독하게 되고 해당 팀이 @mentioned되면 알림을 받게 됩니다. 자동으로 구독하지 않으려면 알림 설정에서 자동 시청 옵션을 선택 취소할 수 있습니다. 

{% ifversion update-notification-settings-22 %} ![ 팀 및 리포지](/assets/images/automatically-watch-repos-and-teams.png) 토리에 대한 자동 시청 옵션 {% else %} ![자동 시청 옵션](/assets/images/help/notifications-v2/automatic-watching-options.png){% endif %}

“리포지토리 자동 시청”을 사용하지 않도록 설정하면 사용자의 리포지토리를 자동으로 시청하지 않게 됩니다. 리포지토리 페이지로 이동하여 시청 옵션을 선택해야 합니다. 

자세한 내용은 "[알림 설정 선택"을 참조하세요](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings).

## 개별 리포지토리에 대한 시청 설정 구성

개별 리포지토리를 시청할지 시청 해제할지 선택할 수 있습니다. {% data reusables.notifications-v2.custom-notification-types %}(리포지토리에 사용하도록 설정된 경우) 같은 특정 이벤트 유형에 대해서만 알림을 받거나 개별 리포지토리를 완전히 무시하도록 선택할 수도 있습니다.

{% data reusables.repositories.navigate-to-repo %}
2. 오른쪽 위에서 “시청” 드롭다운 메뉴를 선택하여 시청 옵션을 클릭합니다.
   ![리포지토리에 대한 드롭다운 메뉴의 보기 옵션](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   **사용자 지정** 옵션을 사용하면 참여 및 @mentions 외에도 리포지토리에서 특정 이벤트가 발생할 때만 알림을 받도록 알림을 추가로 사용자 지정할 수 있습니다.
   ![리포지](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) 토리에 대한 드롭다운 메뉴의 사용자 지정 조사식 옵션 "문제"를 선택하면 리포지토리에서 모든 문제(이 옵션을 선택하기 전에 존재했던 문제 포함)에 대한 업데이트를 알리고 구독하게 됩니다. 이 리포지토리의 끌어오기 요청에 @mentioned되면 해당 알림도 받게 되며, 이슈에 대한 알림을 받는 것 외에도 해당 특정 끌어오기 요청에 대한 업데이트를 구독하게 됩니다.

## 조직의 메일 알림이 전송되는 위치 선택

조직에 속한 경우 조직 활동에 대한 알림을 보낼 메일 계정을 선택할 수 있습니다. 예를 들어 회사 조직에 속한 경우 개인 주소가 아닌 회사 메일 주소로 알림을 보내도록 할 수 있습니다.    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}

3. “기본 알림 메일”에서 알림을 보낼 메일 주소를 선택합니다.   
{% ifversion update-notification-settings-22 %}

   ![기본 알림 이메일 주소 설정의 스크린샷](/assets/images/help/notifications/default-email-address-emphasized.png)

{% else %}

   ![기본 알림 이메일 주소 드롭다운](/assets/images/help/notifications/notifications_primary_email_for_orgs.png){% endif %} {% ifversion ghes 또는 ghae %} 스크린샷
4. **저장** 을 클릭합니다. {% endif %}   

### 조직당 메일 라우팅 사용자 지정   

둘 이상의 조직에 속한 경우{% ifversion fpt or ghec %} 확인된 메일 주소{% else %} 계정의 메일 주소{% endif %}로 알림을 보내도록 각각 구성할 수 있습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[메일 주소 확인](/articles/verifying-your-email-address)”을 참조하세요.{% endif %} 

{% 데이터 reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %} {% ifversion update-notification-settings-22 %}
3. "기본 알림 전자 메일"에서 **사용자 지정 라우팅을** 클릭합니다.

   ![사용자 지정 라우팅 단추가 강조 표시된 기본 알림 전자 메일 설정의 스크린샷](/assets/images/help/notifications/custom-router-emphasized.png)

4. **새 경로 추가** 를 클릭합니다.

   ![새 경로 추가 단추가 강조 표시된 사용자 지정 라우팅 설정의 스크린샷](/assets/images/help/notifications/add-new-route-emphasized.png)

5. **조직 선택을** 클릭한 다음 드롭다운에서 사용자 지정할 조직을 선택합니다.

   ![조직 선택 드롭다운 스크린샷](/assets/images/help/notifications/organization-dropdown-custom-routing-emphasis.png)

6. 확인된 메일 주소 중 하나를 선택한 다음 **저장** 을 클릭합니다. 

   ![저장 단추가 있는 사용자 지정 라우팅 페이지의 스크린샷](/assets/images/help/notifications/select-email-address-custom-routing-and-save.png)

{% else %}
3. “사용자 지정 라우팅” 아래의 목록에서 조직의 이름을 찾습니다.

   ![조직 및 메일 주소 목록](/assets/images/help/notifications/notifications_org_emails.png) 

4. 변경할 메일 주소 옆에 있는 **편집** 을 클릭합니다.

   ![조직의 메일 주소 편집](/assets/images/help/notifications/notifications_edit_org_emails.png)    

5. 확인된 메일 주소 중 하나를 선택한 다음 **저장** 을 클릭합니다.    

   ![조직별 메일 주소 전환](/assets/images/help/notifications/notifications_switching_org_email.gif){% endif %}

## {% data variables.product.prodname_dependabot_alerts %} 알림 옵션 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

사용할 수 있는 알림 배달 방법 및 {% data variables.product.prodname_dependabot_alerts %}의 알림을 최적화하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %}에 대한 알림 구성](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”을 참조하세요.

{% ifversion update-notification-settings-22 또는 ghes %}
## {% data variables.product.prodname_actions %} 알림 옵션

{% data variables.product.prodname_actions %}로 설정된 시청 중인 리포지토리에 대한 워크플로 실행 업데이트를 받는 방법을 선택합니다. 실패한 워크플로 실행에 대한 알림만 수신하도록 선택할 수도 있습니다. {% endif %}

{% ifversion update-notification-settings-22 %} ![ {% 데이터 variables.product.prodname_actions %}](/assets/images/help/notifications/github-actions-customize-notifications.gif){% endif %}에 대한 알림 옵션의 애니메이션 GIF

{% ifversion ghes %} ![ {% 데이터 variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png){% endif %}에 대한 알림 옵션 스크린샷


{% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %}
## 조직 경고 알림 옵션 

조직 소유자인 경우 조직 구성원이 조직 내 리포지토리에 새 배포 키를 추가하면 기본적으로 메일 알림을 받습니다. 해당 알림을 구독 취소할 수 있습니다. 알림 설정 페이지의 “조직 경고” 아래에서 **메일** 을 선택 취소합니다. 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_mobile %}을 사용하여 알림 설정 관리

{% data variables.product.prodname_mobile %}을 설치하면 웹 알림이 자동으로 옵트인됩니다. 앱 내에서 다음 이벤트에 대한 푸시 알림을 사용하도록 설정할 수 있습니다.
- 직접 멘션
- 이슈 또는 끌어오기 요청에 할당
- 끌어오기 요청 검토 요청
- 배포 승인 요청

{% data variables.product.prodname_mobile %}이 모바일 디바이스에 푸시 알림을 보내는 시기를 예약할 수도 있습니다.

{% data reusables.mobile.push-notifications-on-ghes %}

### {% data variables.product.prodname_ios %}를 사용하여 알림 설정 관리

1. 하단 메뉴에서 **프로필** 을 탭합니다.
2. 설정을 보려면 {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 탭합니다.
3. 알림 설정을 업데이트하려면 **알림** 을 탭한 다음 토글을 사용하여 원하는 유형의 푸시 알림을 사용하거나 사용하지 않도록 설정합니다.
4. 필요에 따라 {% data variables.product.prodname_mobile %}이 모바일 디바이스에 푸시 알림을 보낼 시기를 예약하려면 **작업 시간** 을 탭하고 **사용자 지정 작업 시간** 토글을 사용한 다음 푸시 알림을 받을 시기를 선택합니다.

### {% data variables.product.prodname_android %}를 사용하여 알림 설정 관리

1. 하단 메뉴에서 **프로필** 을 탭합니다.
2. 설정을 보려면 {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 탭합니다.
3. 알림 설정을 업데이트하려면 **알림 구성** 을 탭한 다음 토글을 사용하여 원하는 유형의 푸시 알림을 사용하거나 사용하지 않도록 설정합니다.
4. 필요에 따라 {% data variables.product.prodname_mobile %}이 모바일 디바이스에 푸시 알림을 보낼 시기를 예약하려면 **작업 시간** 을 탭하고 **사용자 지정 작업 시간** 토글을 사용한 다음 푸시 알림을 받을 시기를 선택합니다.

## {% data variables.product.prodname_mobile %}을 사용하여 개별 리포지토리에 대한 시청 설정 구성 

개별 리포지토리를 시청할지 시청 해제할지 선택할 수 있습니다. {% ifversion fpt or ghec %}이슈, 끌어오기 요청, 토론(리포지토리에 대해 사용하도록 설정된 경우) 및 {% endif %}새 릴리스와 같은 특정 이벤트 유형에 대해서만 알림을 받거나 개별 리포지토리를 완전히 무시하도록 선택할 수도 있습니다.

1. {% data variables.product.prodname_mobile %}에서 리포지토리의 기본 페이지로 이동합니다.
2. **시청** 을 탭합니다.
   ![{% data variables.product.prodname_mobile %}의 시청 단추](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. 알림을 받는 활동을 선택하려면 원하는 시청 설정을 탭합니다.
   ![{% data variables.product.prodname_mobile %}의 시청 설정 드롭다운 메뉴](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
