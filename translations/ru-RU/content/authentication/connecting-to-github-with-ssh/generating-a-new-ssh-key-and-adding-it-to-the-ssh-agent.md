---
title: Создание нового ключа SSH и его добавление в ssh-agent
intro: 'После проверки наличия существующих ключей SSH можно создать ключ SSH для проверки подлинности, а затем добавить его к агенту SSH.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118975'
---
## Сведения о парольных фразах ключа SSH

{% data reusables.ssh.about-ssh %} Дополнительные сведения см. в разделе "[Сведения об SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

При создании ключа SSH можно добавить парольную фразу для расширенной защиты ключа. При использовании ключа необходимо ввести парольную фразу. Если ключ имеет парольную фразу, и вы не хотите вводить парольную фразу при каждом использовании ключа, можно добавить ключ в агент SSH. Агент SSH управляет ключами SSH и запоминает парольную фразу.

Если у вас еще нет ключа SSH, необходимо создать новый ключ SSH для проверки подлинности. Если вы не уверены, есть ли у вас ключ SSH, можно проверить наличие существующих ключей. Дополнительные сведения см. в разделе [Проверка наличия ключей SSH](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).

Чтобы использовать аппаратный ключ безопасности для проверки подлинности в {% data variables.product.product_name %}, необходимо создать новый ключ SSH для аппаратного ключа безопасности. При проверке подлинности с помощью пары ключей необходимо подключить аппаратный ключ безопасности к компьютеру. Дополнительные сведения см. в [заметках о выпуске OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Создание нового ключа SSH

Вы можете создать новый ключ SSH на локальном компьютере. После создания ключа его можно добавить в учетную запись в {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, чтобы включить проверку подлинности для операций Git по протоколу SSH.

{% ifversion ghes %}

Если вы являетесь администратором сайта {% data variables.location.product_location %}, вы можете использовать тот же ключ, чтобы предоставить себе административный доступ по протоколу SSH к экземпляру. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Вставьте приведенный ниже текст, указав свой адрес электронной почты {% data variables.product.product_name %}.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **Примечание.** Если вы используете устаревшую систему, которая не поддерживает алгоритм Ed25519, используйте следующую команду:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   В результате будет создан новый ключ SSH, где в качестве метки будет использоваться указанный адрес электронной почты.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
При появлении запроса "Ввести файл, в котором нужно сохранить ключ", можно нажать клавишу **ВВОД** , чтобы принять расположение файла по умолчанию. Обратите внимание, что если вы создали ключи SSH ранее, ssh-keygen может попросить вас переписать другой ключ. В этом случае рекомендуется создать ключ SSH с пользовательским именем. Для этого введите расположение файла по умолчанию и замените id_ssh_keyname именем пользовательского ключа.


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. В командной строке введите безопасную парольную фразу. Дополнительные сведения см. в разделе [Работа с парольными фразами ключей SSH](/articles/working-with-ssh-key-passphrases).
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Добавление ключа SSH в ssh-agent

Перед добавлением нового ключа SSH в ssh-agent для управления ключами необходимо проверить наличие существующих ключей SSH и создать новый ключ SSH. <span class="platform-mac">При добавлении ключа SSH в агент используйте команду macOS `ssh-add` по умолчанию, а не приложение, установленное [macports](https://www.macports.org/), [homebrew](http://brew.sh/) или другим внешним источником.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Если вы используете macOS Sierra 10.12.2 или более поздней версии, необходимо внести изменения в файл `~/.ssh/config`, чтобы автоматически загружать ключи в ssh-agent и хранить парольные фразы в цепочке ключей.

   * Сначала проверьте, существует ли файл `~/.ssh/config` в расположении по умолчанию.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * Если файл не существует, создайте файл.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Откройте файл `~/.ssh/config`, а затем внесите в него изменения, чтобы он содержал следующие строки. Если файл ключа SSH имеет другое имя или путь, отличный от примера кода, измените имя файла или путь в соответствии с текущей настройкой.

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Примечания.**

     - Если вы решили не добавлять парольную фразу к ключу, следует опустить строку `UseKeychain`.

     - Если появится сообщение об ошибке `Bad configuration option: usekeychain`, добавьте дополнительную строку в раздел конфигурации `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}`.

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Добавьте закрытый ключ SSH в ssh-agent и сохраните парольную фразу в цепочке ключей. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **Примечание:** Параметр `--apple-use-keychain` сохраняет парольную фразу в цепочке ключей при добавлении ключа SSH в ssh-agent. Если вы решили не добавлять парольную фразу в ключ, выполните команду без параметра `--apple-use-keychain`.

   Параметр `--apple-use-keychain` находится в стандартной версии `ssh-add`Apple . В версиях MacOS до Monterey (12.0) `--apple-use-keychain` флаги и `--apple-load-keychain` использовали синтаксис `-K` и `-A`соответственно.

  Если у вас не установлена стандартная версия `ssh-add` Apple, может появись сообщение об ошибке. Дополнительные сведения см. в разделе [Error: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k).


   {% endnote %}

4. Добавьте ключ SSH в учетную запись {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Добавление адреса нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Убедитесь, что ssh-agent запущен. Можно воспользоваться инструкциями по автоматическому запуску агента в разделе [Работа с парольными фразами ключа SSH](/articles/working-with-ssh-key-passphrases) или запустить его вручную:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Добавьте закрытый ключ SSH в ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Добавьте ключ SSH в учетную запись {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Добавление адреса нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Добавьте закрытый ключ SSH в ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Добавьте ключ SSH в учетную запись {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Добавление адреса нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

{% endlinux %}

## Создание нового ключа SSH для аппаратного ключа безопасности

В macOS или Linux перед созданием нового ключа SSH может потребоваться обновить клиент SSH или установить новый клиент SSH. Дополнительные сведения см. в разделе [Ошибка: неизвестный тип ключа](/github/authenticating-to-github/error-unknown-key-type).

1. Вставьте аппаратный ключ безопасности в компьютер.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Вставьте приведенный ниже текст, указав адрес электронной почты своей учетной записи {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
   ```

   {%- ifversion not ghae %} {% note %}

   **Примечание.** Если команда завершается ошибкой `invalid format` или `feature not supported,`, возможно, используется аппаратный ключ безопасности, который не поддерживает алгоритм Ed25519. Введите приведенную ниже команду.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}
4. При появлении соответствующего запроса нажмите кнопку на аппаратном ключе безопасности.
5. При появлении запроса "Введите файл, в который нужно сохранить клавишу", нажмите клавишу ВВОД, чтобы принять расположение файла по умолчанию.

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. При появлении соответствующего запроса введите парольную фразу и нажмите клавишу **ВВОД**.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. Добавьте ключ SSH в учетную запись на сайте {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Добавление адреса нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
