---
title: Проверка ключей SSH
intro: 'Чтобы обеспечить безопасность учетных данных, следует регулярно проверять ключи SSH, развертывать ключи и просматривать авторизованные приложения, которые обращаются к вашей учетной записи на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 36c7ae3b6227e13f2afae1d50e71469d155ffca8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094132'
---
Можно удалить несанкционированные (или, возможно, скомпрометированные) ключи SSH, чтобы убедиться, что злоумышленник больше не имеет доступа к репозиториям. Вы также можете утвердить существующие ключи SSH, которые являются действующими.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. На странице «Параметры SSH» запишите ключи SSH, связанные с вашей учетной записью. Для тех ключей, которые вы не распознали, или для устаревших ключей нажмите кнопку **Удалить**. Если вы хотите сохранить действующие ключи SSH, нажмите кнопку **Утвердить**.
    ![Список ключей SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Примечание.** Если вы выполняете аудит ключей SSH из-за неудачной операции Git, непроверенный ключ, который вызвал [ошибку аудита ключа SSH](/articles/error-we-re-doing-an-ssh-key-audit), будет выделен в списке ключей SSH.

  {% endtip %}

4. Откройте терминал.

{% data reusables.command_line.start_ssh_agent %}

6. Найдите и запишите отпечаток открытого ключа. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. Ключи SSH на {% data variables.product.product_name %} *должны* совпадать с теми же ключами на компьютере.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. На странице «Параметры SSH» запишите ключи SSH, связанные с вашей учетной записью. Для тех ключей, которые вы не распознали, или для устаревших ключей нажмите кнопку **Удалить**. Если вы хотите сохранить действующие ключи SSH, нажмите кнопку **Утвердить**.
    ![Список ключей SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Примечание.** Если вы выполняете аудит ключей SSH из-за неудачной операции Git, непроверенный ключ, который вызвал [ошибку аудита ключа SSH](/articles/error-we-re-doing-an-ssh-key-audit), будет выделен в списке ключей SSH.

  {% endtip %}

4. Откройте Git Bash. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Найдите и запишите отпечаток открытого ключа. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. Ключи SSH на {% data variables.product.product_name %} *должны* совпадать с теми же ключами на компьютере.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. На странице «Параметры SSH» запишите ключи SSH, связанные с вашей учетной записью. Для тех ключей, которые вы не распознали, или для устаревших ключей нажмите кнопку **Удалить**. Если вы хотите сохранить действующие ключи SSH, нажмите кнопку **Утвердить**.
    ![Список ключей SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Примечание.** Если вы выполняете аудит ключей SSH из-за неудачной операции Git, непроверенный ключ, который вызвал [ошибку аудита ключа SSH](/articles/error-we-re-doing-an-ssh-key-audit), будет выделен в списке ключей SSH.

  {% endtip %}

4. Откройте терминал.

{% data reusables.command_line.start_ssh_agent %}

6. Найдите и запишите отпечаток открытого ключа. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
  ```

7. Ключи SSH на {% data variables.product.product_name %} *должны* совпадать с теми же ключами на компьютере.

{% endlinux %}

{% warning %}

**Предупреждение.** Если вы видите ключ SSH, который вам неизвестен, в {% data variables.product.product_name %}, сразу удалите его и обратитесь к {% data variables.contact.contact_support %} для получения дополнительной помощи. Неопознанный открытый ключ может указывать на возможную проблему безопасности.

{% endwarning %}
