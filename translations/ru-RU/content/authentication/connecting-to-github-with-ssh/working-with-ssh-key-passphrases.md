---
title: Работа с парольными фразами ключа SSH
intro: 'Вы можете защитить ключи SSH и настроить агент проверки подлинности, чтобы вам не пришлось заново вводить парольную фразу при каждом использовании ключей SSH.'
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 66c1289e8ebd40520962f01d61837df21eb4b8c9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009087'
---
## Сведения о парольных фразах для ключей SSH

При использовании ключей SSH, если кто-то получает доступ к компьютеру, злоумышленник может получить доступ к каждой системе, использующей этот ключ. Чтобы добавить дополнительный уровень безопасности, можно использовать парольную фразу с ключом SSH. Чтобы не вводить парольную фразу при каждом подключении, можно безопасно сохранить парольную фразу в агенте SSH.

## Добавление или изменение парольной фразы

Парольную фразу для существующего закрытого ключа можно изменить без повторного создания пары ключа, введя следующую команду:

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: [Type old passphrase]
> Key has comment 'your_email@example.com'
> Enter new passphrase (empty for no passphrase): [Type new passphrase]
> Enter same passphrase again: [Repeat the new passphrase]
> Your identification has been saved with the new passphrase.
```

Если у ключа уже есть парольная фраза, вам будет предложено ввести ее, прежде чем выбрать новую парольную фразу.

{% windows %}

## Автоматическое запуск `ssh-agent` в Git для Windows

Вы можете запускать `ssh-agent` автоматически при открытии оболочки Bash или Git. Скопируйте следующие строки и вставьте их в файл `~/.profile` или `~/.bashrc` в оболочке Git:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Если закрытый ключ не хранится в одном из расположений по умолчанию (например `~/.ssh/id_rsa`), вам потребуется сообщить агенту проверки подлинности SSH, где его найти. Чтобы добавить ключ в ssh-agent, введите `ssh-add ~/path/to/my_key`. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

{% tip %}

**Совет.** Если вы хотите, чтобы `ssh-agent` забыл ключ через некоторое время, выполните команду `ssh-add -t <seconds>`.

{% endtip %}

Теперь при первом запуске Git Bash вам будет предложено ввести парольную фразу:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/YOU/.ssh/id_rsa:
> Identity added: /c/Users/YOU/.ssh/id_rsa (/c/Users/YOU/.ssh/id_rsa)
> Welcome to Git (version 1.6.0.2-preview20080923)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

Процесс `ssh-agent` продолжится, пока вы не выйдете из системы, не завершите работу компьютера или не завершите процесс.

{% endwindows %}

{% mac %}

## Сохранение парольной фразы в цепочке ключей

На Mac OS X Leopard через OS X El Capitan эти файлы закрытых ключей по умолчанию обрабатываются автоматически:

- *.ssh/id_rsa*
- *.ssh/identity*

При первом использовании ключа вам будет предложено ввести парольную фразу. Если вы решили сохранить парольную фразу с цепочкой ключей, вам не придется вводить ее снова.

В противном случае парольную фразу можно сохранить в цепочке ключей при добавлении ключа в ssh-agent. Дополнительные сведения см. в разделе [Добавление ключа SSH в ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% endmac %}
