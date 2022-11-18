---
title: SSH 키 감사
intro: 사이트 관리자는 SSH 키에 대한 인스턴스 전체 감사를 시작할 수 있습니다.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 57fab80e5480c203d8ca8785e1b151ee7616f3d2
ms.sourcegitcommit: 8cfc4aedcfcd5b52758adf20e7257cd6715d84f1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009392'
---
감사가 시작되면 모든 기존 SSH 키는 사용하지 않도록 설정되고 사용자는 키를 승인 또는 거부해야 리포지토리를 복제, 끌어오기 또는 푸시할 수 있습니다. 감사는 직원이나 계약자가 퇴사한 상태에서 모든 키를 확인해야 하는 경우에 유용합니다.

## 감사 시작

사이트 관리자 대시보드의 "모든 사용자" 탭에서 SSH 키 감사를 시작할 수 있습니다.

![공개 키 감사 시작](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

"공개 키 감사 시작" 단추를 클릭하면 다음에 발생할 작업을 설명하는 확인 화면으로 이동합니다.

![감사 확인](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

"감사 시작" 단추를 클릭하면 모든 SSH 키가 무효화되고 승인이 필요하게 됩니다. 감사가 시작되었음을 나타내는 알림이 표시됩니다.

## 사용자에게 표시되는 내용

사용자가 SSH를 통해 git 작업을 수행하려고 하면 작업은 실패하고 다음 메시지가 표시됩니다.

```shell
ERROR: Hi USERNAME. We're doing an SSH key audit.
Please visit http(s)://HOSTNAME/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

링크를 따라가면 계정의 키를 승인하라는 메시지가 표시됩니다.

![키 감사](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

사용자가 키를 승인하거나 거부하면 평소처럼 리포지토리와 상호 작용할 수 있게 됩니다.

## SSH 키 추가

{% ifversion ghes %}

새 사용자가 계정에 SSH 키를 추가하면 사용자의 액세스를 확인하기 위해 {% data variables.product.product_name %}에서 인증을 요청합니다. 자세한 내용은 “[sudo 모드](/authentication/keeping-your-account-and-data-secure/sudo-mode)”를 참조하세요.

{% endif %}

사용자는 키를 추가할 때 다음과 비슷한 알림 이메일을 받게 됩니다.

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
