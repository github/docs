---
title: Аудит ключей SSH
intro: Администраторы сайта могут инициировать аудит ключей SSH на уровне экземпляра.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009943'
---
После инициирования аудит отключает все существующие ключи SSH и заставляет пользователей утверждать или отклонять их, прежде чем они смогут клонировать, извлекать или отправлять в любые репозитории. Аудит полезен в ситуациях, когда сотрудник или подрядчик покидает компанию и необходимо убедиться, что все ключи проверены.

## Инициирование аудита

Можно инициировать аудит ключа SSH на вкладке "Все пользователи" панели мониторинга администратора сайта:

![Запуск аудита открытого ключа](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

После нажатия кнопки "Начать аудит открытого ключа" откроется экран подтверждения, объясняющий, что произойдет дальше:

![Подтверждение аудита](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

После нажатия кнопки "Начать аудит" все ключи SSH становятся недействительными и требуют утверждения. Вы увидите уведомление о начале аудита.

## Что видят пользователи

Если пользователь пытается выполнить любую операцию Git по протоколу SSH, она завершится ошибкой и предоставит ему следующее сообщение:

```shell
ERROR: Hi USERNAME. We're doing an SSH key audit.
Please visit http(s)://HOSTNAME/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

Когда пользователь следует по ссылке, ему будет предложено утвердить ключи в своей учетной записи:

![Аудит ключей](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

После утверждения или отклонения ключей пользователь сможет взаимодействовать с репозиториями, как обычно.

## Добавление ключа SSH

{% ifversion ghes %}

Когда новый пользователь добавляет ключ SSH в учетную запись, чтобы подтвердить доступ, {% data variables.product.product_name %} запросит проверку подлинности. Дополнительные сведения см. в разделе "[Режим sudo](/authentication/keeping-your-account-and-data-secure/sudo-mode)".

{% endif %}

При добавлении ключа пользователь получит уведомление по электронной почте, которое будет выглядеть примерно так:

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
