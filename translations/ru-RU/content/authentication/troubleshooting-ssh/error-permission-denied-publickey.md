---
title: 'Ошибка: отказано в разрешении (publickey)'
intro: 'Ошибка "Отказано в разрешении" означает, что сервер отклонил подключение. Ниже приведено несколько причин и разъяснение по самым распространенным примерам.'
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: 091bdb97bf473225b2d5115b1df79ccf847d0221
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008990'
---
## Следует ли использовать команду `sudo` или более высокий уровень привилегий с GIT?

Команду `sudo` или более высокий уровень привилегий, например разрешения администратора, не следует использовать с GIT. Если у вас есть *очень веская причина* для применения команды `sudo`, используйте ее с каждой командой (вероятно, будет лучше применить `su` для работы с оболочкой от имени привилегированного пользователя). Если вы [создадите ключи SSH](/articles/generating-an-ssh-key) без `sudo`, а затем попытаетесь выполнить такую команду, как `sudo git push`, будут использоваться не те ключи, которые вы создали.

## Проверка подключения к правильному серверу

Правильно вводить текст не так уж легко. Будьте внимательны при вводе: вы не сможете подключиться к githib.com или guthub.com. В некоторых случаях в корпоративной сети также могут возникнуть проблемы с разрешением записи DNS.

Чтобы убедиться в том, что вы подключаетесь к нужному домену, можно ввести следующую команду:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/YOU/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

Подключение должно выполняться через порт 22{% ifversion fpt or ghec %}, если вы не переопределили параметры для использования [SSH по протоколу HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

## Подключение с помощью пользователя git

Все подключения, в том числе к удаленным URL-адресам, должны выполняться от имени пользователя git. Если вы попытаетесь подключиться с именем пользователя {% data variables.product.product_name %}, произойдет сбой:

```shell
$ ssh -T GITHUB-USERNAME@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Если подключение завершилось сбоем и вы используете удаленный URL-адрес с именем пользователя {% data variables.product.product_name %}, вы можете [переключить удаленный URL-адрес на пользователя git](/github/getting-started-with-github/managing-remote-repositories).

Чтобы проверить подключение, введите следующую команду:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated...
```

## Проверка наличия используемого ключа

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Убедитесь в наличии закрытого ключа, созданного и загруженного в SSH. 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Убедитесь в наличии закрытого ключа, созданного и загруженного в SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Убедитесь в наличии закрытого ключа, созданного и загруженного в SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

Команда `ssh-add` *должна* вывести длинную строку из цифр и букв. Если она ничего не выводит, необходимо [создать новый ключ SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) и связать его с {% data variables.product.product_name %}.

{% tip %}

**Совет**. В большинстве систем закрытые ключи по умолчанию (`~/.ssh/id_rsa` и `~/.ssh/identity`) автоматически добавляются в агент проверки подлинности SSH. Вам не нужно выполнять команду `ssh-add path/to/key`, если имя файла не было переопределено при создании ключа.

{% endtip %}

### Получение дополнительных сведений

Вы также можете проверить, используется ли ключ, попытавшись подключиться к `git@{% data variables.command_line.backticks %}`:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type -1
> debug1: identity file /Users/YOU/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa type -1
> debug1: identity file /Users/YOU/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/YOU/.ssh/id_rsa
> debug1: Trying private key: /Users/YOU/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

В этом примере у нас нет ключей для использования в SSH. Значение -1 в конце строк "identity file" означает, что SSH не удалось найти файл для использования. Далее в строках "Trying private key" также указывается, что файл не найден. Если бы файл существовал, в этих строках были бы значения 1 и "Offering public key" соответственно:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/YOU/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/YOU/.ssh/id_rsa
```

## Проверка подключения открытого ключа к учетной записи

Чтобы установить безопасное подключение, необходимо предоставить {% data variables.product.product_name %} открытый ключ.

{% mac %}

1. Откройте терминал.
2. Запустите агент SSH в фоновом режиме.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Найдите и запишите отпечаток открытого ключа. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Сравните список ключей SSH с выходными данными команды `ssh-add`.
![Список ключей SSH в {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Откройте командную строку.
2. Запустите агент SSH в фоновом режиме.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Найдите и запишите отпечаток открытого ключа. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Сравните список ключей SSH с выходными данными команды `ssh-add`.
![Список ключей SSH в {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Откройте терминал.
2. Запустите агент SSH в фоновом режиме.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Найдите и запишите отпечаток открытого ключа. Если вы используете OpenSSH 6.7 или более поздней версии:
  ```shell
  $ ssh-add -l
  > 2048 a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

  Если вы используете OpenSSH 6.8 или более ранней версии:
  ```shell
  $ ssh-add -l -E md5
  > 2048 MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Сравните список ключей SSH с выходными данными команды `ssh-add`.
![Список ключей SSH в {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Если открытый ключ отсутствует в {% data variables.product.product_name %}, необходимо [добавить ключ SSH в {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account), чтобы связать его с компьютером.

{% warning %}

**Предупреждение**. Если вы видите ключ SSH, который вам неизвестен, в {% data variables.product.product_name %}, сразу удалите его и обратитесь к {% data variables.contact.contact_support %} для получения дополнительной помощи. Неопознанный открытый ключ может указывать на возможную проблему безопасности. Дополнительные сведения см. в статье [Просмотр ключей SSH](/articles/reviewing-your-ssh-keys).

{% endwarning %}
