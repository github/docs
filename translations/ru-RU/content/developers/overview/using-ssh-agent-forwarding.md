---
title: Использование пересылки с SSH-агентом
intro: 'Чтобы упростить развертывание на сервере, вы можете настроить перенаправление агента SSH для безопасного использования локальных ключей SSH.'
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: b6d812bcaf979980233f99c5f614f480883375cc
ms.sourcegitcommit: 248e974c64f2439c6756a2c644ec77a98b8d3ecd
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/13/2022
ms.locfileid: '148045363'
---
Пересылку с SSH-агентом можно использовать для более удобного развертывания на сервере.  Она позволяет использовать локальные ключи SSH, не оставляя ключи (без парольных фраз) на вашем сервере.

Если вы уже настроили ключ SSH для взаимодействия с {% data variables.product.product_name %}, то наверняка знакомы с `ssh-agent`. Это программа, которая выполняется в фоновом режиме и хранит ключ в памяти, благодаря чему не нужно вводить парольную фразу при каждом использовании ключа. Вы можете разрешить серверам доступ к локальному `ssh-agent`, как если бы они уже работали на сервере. Это словно попросить друга ввести пароль, чтобы вы могли использовать его компьютер.

Дополнительные сведения о пересылки с SSH-агентом см. в [руководстве Стива Фридла][tech-tips].

## Настройка пересылки с SSH-агентом

Убедитесь, что ваш собственный ключ SSH настроен и работает. Если вы еще не создали ключ SSH, можете воспользоваться [нашим руководством][generating-keys].

Вы можете проверить, работает ли локальный ключ, введя `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` в терминале:

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi USERNAME! You've successfully authenticated, but GitHub does not provide
> shell access.
```

Отличное начало. Давайте настроим SSH, чтобы разрешить пересылку на сервер с использованием агента.

1. Откройте файл в папке `~/.ssh/config` в предпочитаемом текстовом редакторе. Если этот файл не существует, вы можете создать его, введя команду `touch ~/.ssh/config` в терминале.

2. Введите в файл следующий текст, заменив `example.com` доменным именем или IP-адресом сервера:

        Host example.com
          ForwardAgent yes

{% warning %}

**Внимание!** У вас может возникнуть желание использовать подстановочный знак, например `Host *`, чтобы просто применить этот параметр ко всем SSH-подключениям. Это не очень хорошая идея, так как тогда вы будете делиться своими локальными ключами SSH с *каждым* сервером, в который вы входите с помощью SSH. У них не будет прямого доступа к ключам, но они смогут использовать их *от вашего имени* при установке подключения. **Добавляйте только те серверы, которым вы доверяете, и которые планируете использовать с функцией пересылки с использованием агента.**

{% endwarning %}

## Проверка пересылки с SSH-агентом

Чтобы проверить, что пересылка работает с сервером, можете выполнить вход с помощью SSH на сервер и запустить `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` еще раз.  Если все хорошо, появится та же подсказка, что и в локальной среде.

Если вы не уверены, используется ли локальный ключ, можете также проверить переменную `SSH_AUTH_SOCK` на сервере:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

Если переменная не задана, это означает, что пересылка с использованием агента не работает:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> [No output]
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## Устранение неполадок с пересылкой с использованием SSH-агента

Ниже приведены некоторые аспекты, которые следует учитывать при устранении неполадок при пересылке с использованием агента SSH.

### Для извлечения кода необходимо использовать URL-адрес SSH.

Пересылка SSH работает только с URL-адресами SSH, а не с URL-адресами HTTP. Проверьте файл на сервере `.git/config` и убедитесь, что URL-адрес является URL-адресом в стиле SSH, как показано ниже.

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:YOUR_ACCOUNT/YOUR_PROJECT.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### Ключи SSH должны работать локально

Прежде чем настраивать пересылку с использованием агента, убедитесь, что ключи работают локально. [Наше руководство по созданию ключей SSH][generating-keys] поможет вам настроить ключи SSH в локальной среде.

### Система должна разрешать пересылку с использованием SSH-агента

В некоторых случаях конфигурация системы запрещает пересылку с использованием SSH-агента. Чтобы проверить, используется ли файл конфигурации системы, введите следующую команду в терминале:

```shell
$ ssh -v URL
# Connect to the specified URL with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

В приведенном выше примере сначала загружается файл `~/.ssh/config`, а затем считывается `/etc/ssh_config`.  Мы можем проверить этот файл, чтобы узнать, переопределяет ли он заданные вами параметры, выполнив следующие команды:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

В этом примере в файле `/etc/ssh_config` указывается `ForwardAgent no`, что является способом блокировки пересылки с использованием агента. После удаления этой строки из файла эта функция должна заработать.

### Сервер должен разрешить пересылку с использованием агента SSH для входящих подключениях

Пересылка с использованием агента также может быть заблокирована на сервере. Вы можете проверить, разрешена ли пересылка с использованием агента, подключившись по протоколу SSH к серверу и выполнив `sshd_config`. Выходные данные этой команды должны указывать на то, что `AllowAgentForwarding` задано.

### Локальный `ssh-agent` должен работать

На большинстве компьютеров операционная система автоматически запускает `ssh-agent`.  Однако на Windows это необходимо сделать вручную. У нас есть [руководство по запуску `ssh-agent` при открытии Git Bash][autolaunch-ssh-agent].

Чтобы убедиться, что `ssh-agent` работает на вашем компьютере, введите следующую команду в терминале:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### Ключ должен быть доступен для `ssh-agent`

Чтобы убедиться, что ключ виден `ssh-agent`, выполните следующую команду:

```shell
ssh-add -L
```

Если в выходных данных команды указано, что удостоверение недоступно, добавитье ключ:

```shell
$ ssh-add YOUR-KEY
```

{% tip %}

На macOS `ssh-agent` "забудет" этот ключ при повторном запуске после перезагрузки, но вы можете импортировать ключи SSH в цепочку ключей с помощью следующей команды:

```shell
$ ssh-add --apple-use-keychain YOUR-KEY
```

Для версий MacOS до Монтерей (12.0) используйте `-K` вместо `--apple-use-keychain`. Дополнительные сведения см. в разделе [Добавление ключа SSH в ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
