---
title: Проверка наличия существующих ключей SSH
intro: Перед созданием ключа SSH можно проверить наличие существующих ключей SSH.
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 1869bdc1960e90ab8deef1608d36f8fa439d1c47
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097756'
---
## Ключи SSH

SSH можно использовать для выполнения операций Git в репозиториях на {% ifversion fpt или ghec или ghes %}{% данных variables.location.product_location %}{% elsif ghae %}{% данных variables.product.product_name %}{% endif %}. Дополнительные сведения см. в разделе [Сведения о SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Если у вас есть ключ SSH, его можно использовать для проверки подлинности операций Git по протоколу SSH.

## Проверка наличия существующих ключей SSH

Перед созданием нового ключа SSH необходимо проверить наличие существующих ключей на локальном компьютере.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Введите `ls -al ~/.ssh`, чтобы узнать, имеются ли существующие ключи SSH.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Проверьте список файлов каталога, чтобы узнать, есть ли у вас открытый ключ SSH. По умолчанию {% ifversion ghae %}имя файла поддерживаемого открытого ключа для {% data variables.product.product_name %} — *id_rsa.pub*.{% else %}имена файлов поддерживаемых открытых ключей для {% data variables.product.product_name %} являются одним из следующих.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Совет**. Если появляется сообщение об ошибке, что ~ */.ssh* не существует, это означает, что у вас нет существующей пары ключей SSH в расположении по умолчанию. Новую пару ключей SSH можно создать на следующем шаге.

  {% endtip %}

4. Создайте новый ключ SSH или отправьте существующий ключ.
    - Если у вас нет поддерживаемой пары открытых и закрытых ключей или вы не хотите использовать доступные ключи SSH, создайте новый ключ SSH.
    - Если отображается существующая пара открытого и закрытого ключей (например, *id_rsa.pub* и *id_rsa*), которую вы хотите использовать для подключения к {% data variables.product.product_name %}, можно добавить ключ в ssh-agent.

      Дополнительные сведения о создании нового ключа SSH или добавлении существующего ключа в ssh-agent см. в разделе [Создание нового ключа SSH и его добавление в ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
