---
title: 알림에 대한 메일 구성
intro: '사용자가 {% 데이터 variables.product.product_name %}의 활동에 빠르게 응답할 수 있도록 {% 데이터 variables.location.product_location %}을(를) 구성하여 문제, 끌어오기 요청 및 메모 커밋에 대한 전자 메일 알림을 보낼 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: 499c10953d0fb26287596a8a056b4a9c60af4c3d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098845'
---
{% ifversion ghae %} Enterprise 소유자는 알림에 대해 메일을 구성할 수 있습니다.
{% endif %}
## 엔터프라이즈용 SMTP 구성

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. **메일 사용** 을 선택합니다. 이렇게 하면 아웃바운드 및 인바운드 메일이 모두 사용할 수 있지만 인바운드 메일이 작동하려면 아래 “들어오는 메일을 [허용하도록 DNS 및 방화벽 설정 구성](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”에 설명된 대로 DNS 설정을 구성해야 합니다.
![아웃바운드 메일 사용 설정](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. SMTP 서버에 대한 설정을 입력합니다.
      - **서버 주소** 필드에 SMTP 서버의 주소를 입력합니다.
      - **포트** 필드에 SMTP 서버가 메일을 보내는 데 사용하는 포트를 입력합니다.
      - **도메인** 필드에 SMTP 서버가 HELO 응답(있는 경우)과 함께 보낼 도메인 이름을 입력합니다.
      - **인증** 드롭다운을 선택하고 SMTP 서버가 사용하는 암호화 유형을 선택합니다.
      - **발신 전용 메일 주소** 필드에 모든 알림 메일의 보낸 사람 및 받는 사람 필드에 사용할 메일 주소를 입력합니다.      
6. 발신 전용 메일 주소가 지정된 들어오는 모든 메일을 삭제하려면 **발신 전용 메일 주소가 지정된 메일 삭제** 를 선택합니다.
![발신 전용 메일 주소가 지정된 메일을 삭제하는 확인란](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. **지원** 에서 링크 유형을 선택하여 사용자에게 추가 지원을 제공합니다.
    - **메일:** 내부 메일 주소입니다.
    - **URL:** 내부 지원 사이트의 링크입니다. `http://` 또는 `https://`를 포함해야 합니다.
  ![지원 메일 또는 URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [메일 배달 테스트](#testing-email-delivery)
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. **메일 사용** 을 선택합니다.
  ![메일 설정 구성의 “사용” 확인란](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. 메일 서버에 대한 설정을 입력합니다.
    - **서버 주소** 필드에 SMTP 서버의 주소를 입력합니다.
    - **포트** 필드에 SMTP 서버가 메일을 보내는 데 사용하는 포트를 입력합니다.
    - **도메인** 필드에 SMTP 서버가 HELO 응답(있는 경우)과 함께 보낼 도메인 이름을 입력합니다.
    - **인증** 드롭다운을 선택하고 SMTP 서버가 사용하는 암호화 유형을 선택합니다.
    - **발신 전용 메일 주소** 필드에 모든 알림 메일의 보낸 사람 및 받는 사람 필드에 사용할 메일 주소를 입력합니다.
4. 발신 전용 메일 주소가 지정된 들어오는 모든 메일을 삭제하려면 **발신 전용 메일 주소가 지정된 메일 삭제** 를 선택합니다.
  ![메일 설정 구성의 “삭제” 확인란](/assets/images/enterprise/configuration/ae-discard-email.png)
5. **메일 설정 테스트** 를 클릭합니다.
  ![메일 설정 구성의 “메일 설정 테스트” 단추](/assets/images/enterprise/configuration/ae-test-email.png)
6. “테스트 메일 보내기”에서 테스트 메일을 보낼 메일 주소를 입력하고 **테스트 메일 보내기** 를 클릭합니다.
  ![메일 설정 구성의 “테스트 메일 보내기” 단추](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. **저장** 을 클릭합니다.
  ![엔터프라이즈 지원 연락처 구성의 “저장” 단추](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## 메일 배달 테스트

1. **메일** 섹션의 맨 위에서 **메일 설정 테스트** 를 클릭합니다.
![메일 설정 테스트](/assets/images/enterprise/management-console/test-email.png)
2. **테스트 메일 전송 대상** 필드에 테스트 메일을 보낼 주소를 입력합니다.
![테스트 메일 주소](/assets/images/enterprise/management-console/test-email-address.png)
3. **테스트 메일 보내기** 를 클릭합니다.
![테스트 메일 보내기](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **팁:** 테스트 메일을 보내던 중 즉각적인 배달 오류 또는 보내는 메일 구성 오류와 같은 SMTP 오류가 발생하면 테스트 메일 설정 대화 상자에 표시됩니다.

  {% endtip %}

4. 테스트 메일이 실패하면 [메일 설정 문제를 해결](#troubleshooting-email-delivery)합니다.
5. 테스트 메일이 성공하면 페이지 아래쪽에서 **설정 저장** 을 클릭합니다.
![설정 저장 단추](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## SMTP 연결에 TLS 적용

들어오는 모든 SMTP 연결에 TLS 암호화를 적용하여 ISO-27017 인증 요구 사항을 충족하는 데 도움이 될 수 있습니다.

{%- ifversion ghes = 3.6 %} {% note %}

**참고**: SMTP 연결에 대한 TLS 적용은 {% 데이터 variables.product.product_name %} 3.6.0 및 3.6.1에서 사용할 수 없습니다. 이 기능은 3.6.2 이상에서 사용할 수 있습니다.

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. “인증”에서 **TLS 인증 적용(권장)** 을 선택합니다.

   ![“TLS 인증 적용(권장)” 확인란 스크린샷](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## 수신 메일을 허용하도록 DNS 및 방화벽 설정 구성

알림에 대한 메일 회신을 허용하려면 DNS 설정을 구성해야 합니다.

1. 인스턴스의 포트 25가 SMTP 서버에서 액세스할 수 있는지 확인합니다.
2. `reply.[hostname]`을 가리키는 A 레코드를 만듭니다. DNS 공급 기업 및 인스턴스 호스트 구성에 따라 대신 `*.[hostname]`을 가리키는 단일 A 레코드를 만들 수 있습니다.
3. 해당 도메인에 대한 메일이 인스턴스로 라우팅되도록 `reply.[hostname]`을 가리키는 MX 레코드를 만듭니다.
4. 알림 메일의 `cc` 주소에 대한 회신이 인스턴스로 라우팅되도록 `noreply.[hostname]`이 `[hostname]`을 가리키는 MX 레코드를 만듭니다. 자세한 내용은 {% ifversion ghes %}“[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}“[메일 알림 정보](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}”를 참조하세요.

## 메일 배달 문제 해결

### 지원 번들 만들기

표시된 오류 메시지에서 잘못된 내용을 확인할 수 없는 경우 메일 서버와 {% data variables.product.prodname_ghe_server %} 간의 전체 SMTP 대화가 포함된 [지원 번들](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)을 다운로드할 수 있습니다. 번들을 다운로드하고 추출한 후에는 *enterprise-manage-logs/unicorn.log* 에서 전체 SMTP 대화 로그 및 관련 오류에 대한 항목을 확인합니다.

유니콘 로그는 다음과 유사한 트랜잭션을 표시해야 합니다.

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

이 로그는 어플라이언스의 다음 여부를 보여줍니다.

* SMTP 서버(`Connection opened: smtp.yourdomain.com:587`)와의 연결을 열었습니다.
* 성공적으로 연결하고 TLS(`TLS connection started`)를 사용하도록 선택했습니다.
* `login` 인증 유형이 수행되었습니다(`<- "AUTH LOGIN\r\n"`).
* SMTP 서버가 인증을 유효하지 않음으로 거부했습니다(`-> "535-5.7.1 Username and Password not accepted.`).

### {% 데이터 variables.location.product_location %} 로그 확인

인바운드 메일이 작동하는지 확인해야 하는 경우 인스턴스에서 검사할 수 있는 두 개의 로그 파일인 */var/log/mail.log* 및 */var/log/mail-replies/metroplex.log* 를 확인합니다.

*/var/log/mail.log* 는 메시지가 서버에 도달하는지 확인합니다. 성공적인 메일 회신의 예는 다음과 같습니다.

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

클라이언트가 먼저 연결되고 나면 큐가 활성화됩니다. 그런 다음 메시지가 배달되고 클라이언트가 큐에서 제거되며 세션 연결이 끊어집니다.

*/var/log/mail-replies/metroplex.log* 는 인바운드 메일이 문제와 끌어오기 요청에 회신으로 추가하도록 처리되고 있는지 여부를 표시합니다. 성공적인 메시지의 예는 다음과 같습니다.

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

`metroplex`가 인바운드 메시지를 catch하고 처리한 다음 파일을 `/data/user/incoming-mail/success`로 전달한다는 사실을 알 수 있습니다.{% endif %}

### DNS 설정 확인

인바운드 메일을 올바르게 처리하려면 유효한 A 레코드(또는 CNAME)와 MX 레코드를 구성해야 합니다. 자세한 내용은 “[들어오는 메일을 허용하도록 DNS 및 방화벽 설정 구성](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)”을 참조하세요.

### 방화벽 또는 AWS 보안 그룹 설정 확인

{% 데이터 variables.location.product_location %}이(가) 방화벽 뒤에 있거나 AWS 보안 그룹을 통해 제공되는 경우 메일을 보내는 모든 메일 서버에 포트 25가 열려 있는지 확인합니다 `reply@reply.[hostname]`.

### 지원에 문의
{% ifversion ghes %} 여전히 문제를 해결할 수 없는 경우 {% data variables.contact.contact_ent_support %}에 문의하세요. 문제 해결을 위해 출력 파일을 `http(s)://[hostname]/setup/diagnostics`에서 메일에 첨부하세요.
{% elsif ghae %} {% data variables.contact.github_support %}에 문의하여 SMTP 서버를 통해 알림을 보낼 메일을 구성하는 데 도움을 받을 수 있습니다. 자세한 내용은 “[{% data variables.contact.github_support %}에서 도움받기](/admin/enterprise-support/receiving-help-from-github-support)”를 참조하세요.
{% endif %}
