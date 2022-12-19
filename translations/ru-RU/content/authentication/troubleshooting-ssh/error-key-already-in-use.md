---
title: 'Ошибка: ключ уже используется'
intro: 'Эта ошибка возникает при попытке [добавить ключ](/articles/adding-a-new-ssh-key-to-your-github-account), который уже добавлен в другую учетную запись или репозиторий.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: ac5bf63d3c7763bb3df38f031a4e79a31d4f572c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094212'
---
## Поиск места использования ключа

Чтобы определить, где ранее был использован ключ, откройте терминал и введите команду `ssh`. С помощью флага `-i` укажите путь к ключу, который требуется проверить:

```shell
$ ssh -T -ai ~/.ssh/id_rsa git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.location.product_location %} using a specific ssh key
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

*Имя пользователя* в ответе — это учетная запись {% ifversion ghae %}{% данных variables.product.product_name %}{% остальных %}{% данных variables.location.product_location %}{% endif %}}, к которому в настоящее время подключен ключ. Если ответ имеет форму "имя_пользователя/репозиторий", значит ключ был присоединен к репозиторию в качестве [*ключа развертывания*](/guides/managing-deploy-keys#deploy-keys).


Чтобы принудительно использовать SSH для использования только ключа, указанного в командной строке, добавьте параметр `IdentitiesOnly=yes` с помощью `-o`:

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i ~/.ssh/id_rsa git@{% data variables.command_line.codeblock %}
```

## Устранение проблемы

Чтобы устранить эту проблему, сначала удалите ключ из других учетной записи или репозитория, а затем [добавьте его в свою учетную запись](/articles/adding-a-new-ssh-key-to-your-github-account).

Если у вас нет разрешений на передачу ключа и возможности связаться с пользователем, у которого они есть, удалите пару ключей и [создайте новую](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Ключи развертывания

Ключ, присоединенный к репозиторию в качестве ключа развертывания, нельзя использовать в другом репозитории.  Если при настройке ключей развертывания возникает эта ошибка, см. раздел [Управление ключами развертывания](/guides/managing-deploy-keys).
