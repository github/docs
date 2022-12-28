---
title: '오류: SSH 키 감사를 수행하고 있음'
intro: 이 오류는 Git 작업을 수행하는 데 사용하는 SSH 키가 확인되지 않음을 의미합니다.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key audit
ms.openlocfilehash: 8683f5506fc2a026c11f22f2086de2308d096906
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088168'
---
확인되지 않은 키를 사용하여 Git 작업을 수행하는 경우 SSH 키를 감사하라는 메시지가 표시됩니다.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## 문제 해결

문제를 해결하려면 [SSH 키를 검토](/articles/reviewing-your-ssh-keys)하고 확인되지 않은 키를 거부하거나 승인해야 합니다. 오류 메시지의 URL 링크를 클릭하면 SSH 설정 페이지로 이동되며, SSH 키 목록에서 확인되지 않은 SSH 키가 강조 표시됩니다.
