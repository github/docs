---
title: 'Ошибка ssh-add: недопустимый параметр -- K'
intro: 'Эта ошибка означает, что ваша версия `ssh-add` не поддерживает интеграцию цепочки ключей macOS, что позволяет хранить парольную фразу в цепочке ключей.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088202'
---
Параметр `-K` является стандартной версией параметра `ssh-add` в Apple, который сохраняет парольную фразу в цепочке ключей при добавлении ключа SSH в ssh-agent. Если вы установили другую версию `ssh-add`, она может не поддерживать `-K`.

## Решение проблемы

Чтобы добавить закрытый ключ SSH в ssh-agent, можно указать путь к версии Apple `ssh-add`:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**Примечание**. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Дополнительные материалы

- [Создание нового ключа SSH и его добавление в ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Страница руководства Linux для SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Чтобы просмотреть страницу руководства Apple для SSH-ADD, выполните в терминале команду `man ssh-add`.
