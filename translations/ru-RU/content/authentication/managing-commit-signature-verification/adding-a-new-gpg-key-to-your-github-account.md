---
title: Добавление нового ключа GPG в учетную запись GitHub
intro: Чтобы настроить учетную запись в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} для использования нового (или существующего) ключа GPG; вам также потребуется ключ для вашей учетной записи.
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088371"
---
Перед добавлением нового ключа GPG в учетную запись на {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} необходимо следующее:
- [Проверенно наличие существующих ключей GPG](/articles/checking-for-existing-gpg-keys)
- [Созданный и скопированный новый ключ GPG](/articles/generating-a-new-gpg-key)

Можно добавить несколько открытых ключей в учетную запись GitHub. Фиксации, подписанные любым из соответствующих закрытых ключей, будут отображаться как проверенные. При удалении открытого ключа все фиксации, подписанные соответствующим закрытым ключом, больше не будут отображаться как проверенные.

{% data reusables.gpg.supported-gpg-key-algorithms %}

При проверке сигнатуры она извлекается и делается попытка анализа ее идентификатора ключа. Он сопоставляется с ключами, переданными в {% data variables.product.product_name %}. Пока не отправится ключ GPG в {% data variables.product.product_name %}, сигнатуры проверить нельзя.

## <a name="adding-a-gpg-key"></a>Добавление ключа GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Щелкните **Новый ключ GPG**.
   ![Кнопка "Ключ GPG"](/assets/images/help/settings/gpg-add-gpg-key.png)
4. В поле "Ключ" вставьте ключ GPG, скопированный при [создании ключа GPG](/articles/generating-a-new-gpg-key).
   ![Поле ключа](/assets/images/help/settings/gpg-key-paste.png)
5. Щелкните **Добавить ключ GPG**.
   ![Кнопка "Добавить ключ"](/assets/images/help/settings/gpg-add-key.png)
6. Чтобы подтвердить действие, введите пароль {% data variables.product.product_name %}.

## <a name="further-reading"></a>Дополнительные материалы

* [Проверка наличия существующих ключей GPG](/articles/checking-for-existing-gpg-keys)
* [Создание нового ключа GPG](/articles/generating-a-new-gpg-key)
* [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
* [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)
* [Подписывание фиксаций и тегов с помощью ключей GPG](/articles/signing-commits-and-tags-using-gpg)
