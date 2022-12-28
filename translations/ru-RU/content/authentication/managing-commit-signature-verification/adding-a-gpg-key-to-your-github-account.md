---
title: Добавление ключа GPG в учетную запись GitHub
intro: 'Чтобы настроить учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} для использования нового (или существующего) ключа групповой политики, вам также потребуется ключ для вашей учетной записи.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: 60c4e440c26332b25f9172b95a2bfb059e03e495
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098807'
---
## Сведения о добавлении ключей GPG в учетную запись

Чтобы подписывать фиксации, связанные с вашей учетной записью на {% data variables.product.product_name %}, можно добавить открытый ключ GPG в личную учетную запись. Перед добавлением ключа необходимо проверить наличие существующих ключей. Если существующие ключи не обнаружены, можно создать и скопировать новый. Дополнительные сведения см. в статьях "[Проверка наличия существующих ключей GPG](/articles/checking-for-existing-gpg-keys)" и "[Создание ключа GPG](/articles/generating-a-new-gpg-key)".

В учетную запись на {% data variables.product.product_name %} можно добавить несколько открытых ключей. Фиксации, подписанные любым из соответствующих закрытых ключей, будут отображаться как проверенные. При удалении открытого ключа все фиксации, подписанные соответствующим закрытым ключом, больше не будут отображаться как проверенные.

{% ifversion upload-expired-or-revoked-gpg-key %} Чтобы проверить как можно больше фиксаций, можно добавить просроченные и отозванные ключи. Если ключ удовлетворяет остальным требованиям проверки, фиксации, ранее подписанные любым из соответствующих закрытых ключей, будут отображаться как проверенные с пометкой о том, что ключ подписывания просрочен или отозван.

![Проверенная фиксация с просроченным ключом](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Во время проверки подписи {% data variables.product.product_name %} извлекает ее и пытается проанализировать ее идентификатор ключа. Затем идентификатор ключа сопоставляется с ключами, добавленными в {% data variables.product.product_name %}. Если не добавить соответствующий ключ GPG в {% data variables.product.product_name %}, он не сможет проверить ваши подписи.

## Добавление ключа GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Щелкните **Новый ключ GPG**.
   ![Кнопка "Ключ GPG"](/assets/images/help/settings/gpg-add-gpg-key.png)
4. В поле "Ключ" вставьте ключ GPG, скопированный при [создании ключа GPG](/articles/generating-a-new-gpg-key).
   ![Поле ключа](/assets/images/help/settings/gpg-key-paste.png)
5. Щелкните **Добавить ключ GPG**.
   ![Кнопка "Добавить ключ"](/assets/images/help/settings/gpg-add-key.png)
6. Чтобы подтвердить действие, введите пароль {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## Обновление ключа GPG с истекшим сроком действия

При проверке подписи {% data variables.product.product_name %} выполняет проверку, чтобы убедиться, что ключ не отозван и не истек. Если ключ подписывания отозван или истек, {% data variables.product.product_name %} не сможет проверить подписи.

Если ключ просрочен, необходимо [обновить его срок действия](https://www.gnupg.org/gph/en/manual.html#AEN329), экспортировать новый ключ, удалить просроченный ключ в учетной записи {% data variables.product.product_name %}, а затем добавить новый в учетную запись, как это описано выше. Предыдущие фиксации и теги будут отображаться как проверенные при условии, что ключ соответствует всем остальным требованиям проверки.

Если ключ отозван, используйте для подписывания своих фиксаций первичный ключ или другой ключ, который не был отозван.

Если ключ недопустим, и вы не используете другой допустимый ключ в наборе ключей, а генерируете новый ключ GPG с новым набором учетных данных, то фиксации, выполненные с отозванным или просроченным ключом, будут по-прежнему отображаться как непроверенные. Кроме того, новые учетные данные невозможно использовать для повторного подписания или проверки старых фиксаций и тегов.
{% endif %}

## Дополнительные материалы

- [Проверка наличия существующих ключей GPG](/articles/checking-for-existing-gpg-keys)
- [Создание нового ключа GPG](/articles/generating-a-new-gpg-key)
- [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
- [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)
- [Подписывание фиксаций и тегов с помощью ключей GPG](/articles/signing-commits-and-tags-using-gpg)
- "[Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification)"
