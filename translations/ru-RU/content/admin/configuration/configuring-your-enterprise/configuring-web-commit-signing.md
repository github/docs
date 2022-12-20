---
title: Настройка подписи веб-фиксации
shortTitle: Configure web commit signing
intro: 'Можно включить автоматическую подпись фиксаций, созданных в веб-интерфейсе {% data variables.product.product_name %}.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.location.product_location %}.'
ms.openlocfilehash: ae836ff3f1ff9a73a511ec0678a8f5d402792070
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098119'
---
## Сведения о подписи веб-фиксации

Если вы включите подписывание веб-фиксации, {% данных variables.product.product_name %} автоматически будет использовать GPG для подписывания фиксаций пользователей в веб-интерфейсе {% данных variables.location.product_location %}. У фиксаций, подписанных {% data variables.product.product_name %}, будет проверенное состояние. Дополнительные сведения см. в разделе [Сведения о проверке сигнатуры фиксации](/authentication/managing-commit-signature-verification/about-commit-signature-verification).

Можно включить подпись веб-фиксации, сменить закрытый ключ, используемый для подписи веб-фиксации, и отключить подпись веб-фиксации.

## Включение подписи веб-фиксации

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
    - Используйте `web-flow` в качестве имени пользователя. Если `web-flow` он недоступен или недоступен, используйте любое новое уникальное имя пользователя. Используйте это имя пользователя на следующих шагах в этой статье.
   - Если у вас есть адрес электронной почты, с которого вы не отвечаете на входящие сообщения, определенный в {% data variables.enterprise.management_console %}, используйте этот адрес. В противном случае используйте любой адрес электронной почты, например `web-flow@my-company.com`. Адрес электронной почты не обязательно должен быть действительным.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Включите о подпись веб-фиксации.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Примените конфигурацию, а затем дождитесь завершения настройки.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Создайте пользователя на {% данных variables.location.product_location %} с помощью встроенной проверки подлинности или внешней проверки подлинности. Дополнительные сведения см. в разделе [Сведения о проверке подлинности для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).
   - Имя пользователя должно совпадать с именем пользователя, которое использовалось при создании ключа PGP на шаге 1 выше, например `web-flow`. 
   - Адрес электронной почты пользователя должен совпадать с адресом, используемым при создании ключа PGP. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. В поле "Адрес электронной почты без ответа" введите тот же адрес электронной почты, который использовался при создании ключа PGP. 

   {% note %}

   **Примечание:** Поле "Адрес электронной почты без ответа" будет отображаться только в том случае, если вы включили электронную почту для {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Настройка электронной почты для уведомлений](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise).

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Смена закрытого ключа, используемого для подписи веб-фиксации

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Используйте имя пользователя для подписывания веб-фиксации, например `web-flow`.
   - Используйте адрес электронной почты без ответа, определенный в {% данных variables.enterprise.management_console %}, который должен совпадать с адресом электронной почты пользователя, подписывавшего веб-фиксацию, например `web-flow`.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Выключение подписи веб-фиксации

Вы можете отключить подписывание веб-фиксации для {% данных variables.location.product_location %}.

1. В административной оболочке выполните следующую команду.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Примените конфигурацию.

   ```bash{:copy}
   ghe-config-apply
   ```
