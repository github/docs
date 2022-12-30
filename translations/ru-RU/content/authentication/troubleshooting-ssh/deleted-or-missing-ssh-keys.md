---
title: Удаленные или отсутствующие ключи SSH
intro: 'В качестве меры предосторожности {% data variables.product.prodname_dotcom %} автоматически удаляет ключи SSH, которые не использовались в течение года.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088226'
---
{% data variables.product.prodname_dotcom %} автоматически удаляет неактивные ключи SSH, например после того, как кто-то уходит с работы или теряет компьютер. Это необходимо для обеспечения безопасности учетных записей.

Чтобы проверить факт использования ключа SSH в течение года, можно просмотреть журнал безопасности учетной записи. Дополнительные сведения см. в статье "[Просмотр журнала безопасности](/articles/reviewing-your-security-log/)".

После удаления неактивного ключа SSH необходимо создать новый ключ SSH и связать его с учетной записью. Дополнительные сведения см. в статьях "[Создание ключа SSH и его добавление в ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)" и "[Добавление нового ключа SSH в учетную запись GitHub](/articles/adding-a-new-ssh-key-to-your-github-account/)".
