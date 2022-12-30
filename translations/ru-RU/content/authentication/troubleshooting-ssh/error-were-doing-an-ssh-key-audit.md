---
title: 'Ошибка: выполняется аудит ключей SSH'
intro: 'Эта ошибка означает, что ключ SSH, который вы используете для выполнения операции Git, не был проверен.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088167'
---
При использовании непроверенного ключа для выполнения операций GIT вам будет предложено провести аудит ключей SSH.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## Решение проблемы

Чтобы устранить эту проблему, необходимо [проверить ключи SSH](/articles/reviewing-your-ssh-keys) и отклонить или утвердить непроверенный ключ. Щелкнув ссылку в сообщении об ошибке, вы перейдете на страницу параметров SSH, где непроверенный ключ выделен в списке ключей SSH.
