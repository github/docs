---
title: "Проверка наличия ключей\_GPG"
intro: Перед созданием ключа GPG можно проверить наличие существующих ключей GPG.
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: 23a984642b98d3793f6540666f27943420cf3a4a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008858'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Примечание**. GPG не устанавливается по умолчанию в macOS или Windows. Сведения об установке программ командной строки GPG см. на [странице скачивания GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. Проверьте выходные данные команды, чтобы узнать, есть ли у вас пара ключей GPG.
    * Если пар ключей GPG нет или вы не хотите использовать имеющиеся пары для подписывания фиксаций и тегов, [создайте новый ключ GPG](/articles/generating-a-new-gpg-key).
    * Если пара ключей GPG имеется и вы хотите использовать ее для подписывания фиксаций и тегов, вы можете отобразить открытый ключ с помощью следующей команды, в которую следует подставить нужный идентификатор ключа GPG. В этом примере идентификатором ключа GPG является `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export 3AA5C34371567BD2
      # Prints the GPG key ID, in ASCII armor format
      ```
      Затем вы можете [добавить ключ GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Дополнительные материалы

* [Создание нового ключа GPG](/articles/generating-a-new-gpg-key)
* "[Добавление ключа GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
* [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)
* [Подписывание фиксаций](/articles/signing-commits)
* [Подписывание тегов](/articles/signing-tags)
