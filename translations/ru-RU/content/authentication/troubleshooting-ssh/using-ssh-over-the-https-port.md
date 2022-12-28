---
title: Использование SSH через порт HTTPS
intro: 'Иногда брандмауэры отказываются в полной мере разрешать подключения по протоколу SSH.  Если использование [клонирования HTTPS с кэшированием учетных данных](/github/getting-started-with-github/caching-your-github-credentials-in-git) недоступно, можно попытаться выполнить клонирование с помощью SSH-подключения, выполненного через порт HTTPS.  Большинство правил брандмауэра должны разрешать этот вариант, но прокси-серверы могут этому помешать.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190325'
---
{% tip %}

**Пользователи {% data variables.product.prodname_ghe_server %}** : доступ к {% data variables.product.prodname_ghe_server %} по SSH через порт HTTPS в настоящее время не поддерживается.

{% endtip %}

Чтобы проверить, возможно ли подключение по протоколу SSH через порт HTTPS, выполните следующую команду SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Примечание**. Имя узла для порта 443 — , а `ssh.{% data variables.command_line.backticks %}`не `{% data variables.command_line.backticks %}`.

{% endnote %}

Если она выполнена успешно, все в порядке. В противном случае вам может потребоваться [выполнить руководство по устранению неполадок](/articles/error-permission-denied-publickey).

Теперь, чтобы клонировать репозиторий, можно выполнить следующую команду:

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Включение SSH-подключений по протоколу HTTPS

Если вы можете подключиться `git@ssh.{% data variables.command_line.backticks %}` по протоколу SSH через порт 443, можно переопределить параметры SSH, чтобы любое подключение к {% data variables.location.product_location %} выполнялось через этот сервер и порт.

Чтобы настроить это в файле конфигурации SSH, измените файл по пути `~/.ssh/config` и добавьте следующий раздел:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Вы можете проверить, работает ли это, подключившись еще раз к {% data variables.location.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Обновление известных узлов

При первом взаимодействии с GitHub после переключения на порт 443 может отображаться предупреждающее сообщение о том, что узел не найден в `known_hosts`или что он был найден с другим именем.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Можно с уверенностью ответить "да" на этот вопрос, если отпечаток SSH соответствует одному из опубликованных отпечатков пальцев GitHub. Список отпечатков пальцев см. в разделе "[Отпечатки ключей SSH Github](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)".
