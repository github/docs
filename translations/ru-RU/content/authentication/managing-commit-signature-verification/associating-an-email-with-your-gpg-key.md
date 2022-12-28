---
title: "Связывание адреса электронной почты с ключом\_GPG"
intro: 'Ключ GPG должен быть связан с проверенным адресом электронной почты {% data variables.product.product_name %}, соответствующим вашему удостоверению автора фиксации.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: 52d06daca2025cecd76a23a4dec12a6d2037b902
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094028'
---
{% note %}

Если вы используете ключ GPG, соответствующий вашему удостоверению фиксации, и проверенный электронный адрес, связанный с вашей учетной записью, на {% ifversion ghae %}{% данных variables.product.product_name %}{% данных, variables.location.product_location %}{% endif %}, можно начать подписывание фиксаций и подписывания тегов.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. Введите `gpg --edit-key GPG key ID`, заменив ИД ключа GPG, который вы хотите использовать. В следующем примере ИД ключа GPG является `3AA5C34371567BD2`:
  ```shell
  $ gpg --edit-key 3AA5C34371567BD2
  ```
5. Введите `gpg> adduid`, чтобы добавить сведения об ИД пользователя.
  ```shell
  $ gpg> adduid
  ```
6. Следуйте инструкциям, чтобы указать реальное имя, адрес электронной почты и комментарии. Вы можете изменить записи, выбрав `N`, `C`или `E`. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Дополнительные сведения см. в статье [Настройка адреса электронной почты фиксации](/articles/setting-your-commit-email-address).{% endif %}
  ```shell
  Real Name: OCTOCAT
  Email address: "octocat@github.com"
  Comment: GITHUB-KEY
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Введите `O`, чтобы подтвердить выбранные элементы.
8. Введите парольную фразу ключа.
9. Введите `gpg> save`, чтобы сохранить изменения
  ```shell
  $ gpg> save
  ```
10. Введите `gpg --armor --export GPG key ID`, заменив ИД ключа GPG, который вы хотите использовать. В следующем примере ИД ключа GPG является `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export 3AA5C34371567BD2
  # Prints the GPG key, in ASCII armor format
  ```
11. Отправьте ключ GPG, [добавив его в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Дополнительные материалы

- [Проверка наличия существующих ключей GPG](/articles/checking-for-existing-gpg-keys)
- [Создание нового ключа GPG](/articles/generating-a-new-gpg-key)
- [Использование проверенного адреса электронной почты для ключа GPG](/articles/using-a-verified-email-address-in-your-gpg-key)
- "[Добавление ключа GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
- [Подписывание фиксаций](/articles/signing-commits)
- [Подписывание тегов](/articles/signing-tags)
