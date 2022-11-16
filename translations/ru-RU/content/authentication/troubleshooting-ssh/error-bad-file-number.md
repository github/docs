---
title: 'Ошибка: недопустимый номер файла'
intro: 'Эта ошибка обычно означает, что не удалось подключиться к серверу. Зачастую это связано с брандмауэрами и прокси-серверами.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 10a0035281f7afd4297193100bc5f48aa65afac9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009102'
---
При выполнении удаленных команд Git или SSH может быть превышено время ожидания подключения:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

## Решение проблемы

### Используйте протокол HTTPS.

Во многих случаях самым простым решением будет полный отказ от использования SSH. Большинство брандмауэров и прокси-серверов без проблем обеспечивает прохождение трафика HTTPS. Чтобы использовать эти преимущества, измените используемый [удаленный URL-адрес](/github/getting-started-with-github/about-remote-repositories):

```shell
$ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPO-NAME.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### Проверка из другой сети

Если вы можете установить с компьютера подключение к другой сети без брандмауэра, попробуйте проверить SSH-подключение к {% data variables.product.product_name %}. Если все работает, обратитесь к администратору сети с просьбой изменить параметры брандмауэра и разрешить SSH-подключение к {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}

### Использование SSH через порт HTTPS

Если вы не можете использовать протокол HTTPS, а администратор брандмауэра не разрешает SSH-подключения, попробуйте использовать [SSH через порт HTTPS](/articles/using-ssh-over-the-https-port).

{% endif %}

{% ifversion fpt or ghec %}

## Дополнительные материалы

- [Устранение проблем с подключениями](/articles/troubleshooting-connectivity-problems)

{% endif %}
