---
title: 'Ошибка: агент признал ошибку при подписании'
intro: 'В редких случаях подключение к {% data variables.product.product_name %} по SSH в Linux приводит к ошибке `"Agent admitted failure to sign using the key"`. Чтобы устранить такую проблему, выполните следующие действия.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
ms.openlocfilehash: 46817ec184394b93a27cbb796ea59a71f4a63248
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093748'
---
При попытке SSH-подключения к {% данных variables.location.product_location %} на компьютере Linux может отображаться следующее сообщение в терминале:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Дополнительные сведения см. в <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>этом отчете о проблеме</a>.

## Решение

Эту ошибку можно исправить, загрузив ключи в агент SSH с помощью `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/YOU/.ssh/id_rsa: [tippy tap]
> Identity added: /home/YOU/.ssh/id_rsa (/home/YOU/.ssh/id_rsa)
```

Если ключ не имеет имени файла по умолчанию (`/.ssh/id_rsa`), потребуется передать этот путь к `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/YOU/.ssh/my_other_key: [tappity tap tap]
> Identity added: /home/YOU/.ssh/my_other_key (/home/YOU/.ssh/my_other_key)
```
