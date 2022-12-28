---
title: Тестирование подключения по протоколу SSH
intro: 'После настройки ключа SSH и добавления его в учетную запись {% ifversion ghae %}{% данных variables.product.product_name %}{% остальных %}{% данных %}{% данных variables.location.product_location %}{% endif %}, можно проверить подключение.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 27a5d2b45ccad880ca94a1fffd3dd524ac867520
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094036'
---
Перед тестированием подключения по протоколу SSH необходимо выполнить следующие действия.
- [Проверьте существующие ключи SSH](/articles/checking-for-existing-ssh-keys)
- [Создайте новый ключ SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Добавьте новый ключ SSH в учетную запись GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

При проверке подключения необходимо выполнить проверку подлинности этого действия с помощью пароля, который является парольной фразой ключа SSH, созданного ранее. Дополнительные сведения о работе с парольными фразами ключей SSH см. в разделе [Работа с парольными фразами ключа SSH](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Заполните следующие поля:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Может отобразиться следующее предупреждение:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Убедитесь, что отпечаток в сообщении соответствует {% ifversion fpt or ghec %}[отпечаток открытого ключа {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} отпечатку открытого ключа вашего предприятия{% endif %}. Если это так, введите `yes`:
  ```shell
  > Hi USERNAME! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Может быть выдано следующее сообщение об ошибке:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  Это известная проблема, возникающая в определенных дистрибутивах Linux. Дополнительные сведения см. в разделе ["Ошибка: агент признал ошибку при подписании".](/articles/error-agent-admitted-failure-to-sign)

  {% endlinux %}

   {% note %}

   **Примечание.** Удаленная команда должна выйти из кода 1.

   {% endnote %}

4. Убедитесь, что в полученном сообщении указано ваше имя пользователя. Если вы получили сообщение "Отказано в разрешении", см. раздел ["Ошибка: отказано в разрешении (publickey)".](/articles/error-permission-denied-publickey)
