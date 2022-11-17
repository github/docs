---
title: "Создание ключа\_GPG"
intro: 'Если у вас нет существующего ключа GPG, можно создать новый ключ GPG для подписывания фиксаций и тегов.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710230'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Создание ключа GPG

{% note %}

**Примечание**. Перед созданием ключа GPG необходимо подтвердить свой адрес электронной почты. Если вы еще не сделали этого, то не сможете подписывать фиксации и метки с помощью GPG.{% ifversion fpt or ghec %} Дополнительные сведения см. в разделе [Подтверждение адреса электронной почты](/articles/verifying-your-email-address).{% endif %}

{% endnote %}

1. Скачайте и установите [программы командной строки GPG](https://www.gnupg.org/download/) для своей операционной системы. Как правило, рекомендуется устанавливать последнюю версию для вашей операционной системы.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Создайте пару ключей GPG. Так как версий GPG несколько, может потребоваться обратиться к соответствующей [_странице руководства_](https://en.wikipedia.org/wiki/Man_page), чтобы найти команду создания ключей. Ключ должен использовать RSA.
    - Если вы используете версию 2.1.17 или более позднюю, вставьте приведенный ниже текст, чтобы создать пару ключей GPG.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - В других версиях команда `gpg --full-generate-key` не работает. Вставьте приведенный ниже текст и перейдите к шагу 6.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. В командной строке укажите нужный тип ключа или нажмите клавишу `Enter`, чтобы принять значение по умолчанию.
5. В командной строке укажите нужный размер ключа или нажмите клавишу `Enter`, чтобы принять значение по умолчанию. Размер ключа должен быть не менее `4096` бит.
6. Введите срок действия ключа. Нажмите `Enter`, чтобы принять значение по умолчанию: бессрочный ключ. Если вам не требуется установка даты окончания срока действия, рекомендуется принять значение по умолчанию.
7. Проверьте правильность выбранных параметров.
8. Введите идентификатор пользователя.

  {% note %}

  **Примечание**. При запросе адреса электронной почты введете подтвержденный адрес, связанный с вашей учетной записью GitHub. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Дополнительные сведения см. в разделах [Подтверждение адреса электронной почты](/articles/verifying-your-email-address) и [Указание адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address).{% endif %}

  {% endnote %}

9. Введите надежную парольную фразу.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. Вставьте приведенный ниже текст, подставив нужный идентификатор ключа GPG. В этом примере идентификатором ключа GPG является `3AA5C34371567BD2`:
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. Скопируйте ключ PGP, начиная с `-----BEGIN PGP PUBLIC KEY BLOCK-----` и заканчивая `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Добавьте ключ GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Дополнительные материалы

* [Проверка наличия существующих ключей GPG](/articles/checking-for-existing-gpg-keys)
* "[Добавление ключа GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
* [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)
* [Подписывание фиксаций](/articles/signing-commits)
* [Подписывание тегов](/articles/signing-tags)
