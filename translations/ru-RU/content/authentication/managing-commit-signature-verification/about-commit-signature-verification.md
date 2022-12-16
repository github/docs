---
title: Сведения о проверке подписи фиксации
intro: 'С помощью GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} или S/MIME вы можете подписывать теги и фиксации локально. Эти теги или фиксации помечаются как проверенные в {% data variables.product.product_name %}, чтобы другие пользователи могли быть уверены, что изменения поступают из надежного источника.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 057552cd3004c4a29cf12a4676b949bfda2a77f2
ms.sourcegitcommit: 53fb7ebd6bb3da16ded794c4e0c50b0746f7a162
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101686'
---
## Сведения о проверке подписи фиксации

Вы можете локально подписывать фиксации и теги, чтобы обеспечить для других пользователей уверенность в происхождении внесенных изменений. Если фиксация или тег имеют подпись GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} или S/MIME, которая проверяется криптографически,{% data variables.product.product_name %} оставляет для фиксации или тега метку {% ifversion fpt or ghec %}"Проверено" или "Частично проверено".{% else %}"Проверено".{% endif %}

![Проверенная фиксация](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes or ghae %} Если фиксация или тег имеют подпись, которую нельзя проверить, {% data variables.product.product_name %} оставляет для фиксации или тега метку "Не проверено".
{% endif %}

{% ifversion ssh-commit-verification %} Для большинства отдельных пользователей для подписывания фиксаций лучше всего подходят GPG или SSH. Подписи S/MIME обычно требуются в контексте более крупной организации. Подписи SSH создавать проще всего. Вы даже можете отправить существующий ключ проверки подлинности в {% data variables.product.product_name %} для использования также в качестве ключа подписывания. Создание ключа подписывания GPG сложнее создания ключа SSH, но в GPG есть функции, отсутствующие у SSH. Если ключ GPG больше не используется, может истечь срок его действия или он может быть отозван. {% data variables.product.product_name %} показывает фиксации, подписанные таким ключом, как "Проверено", если ключ не помечен как скомпрометированный. У ключей SSH нет такой возможности.
{% endif %}

{% ifversion fpt or ghec %} Фиксации и теги имеют следующие состояния проверки в зависимости от того, включен ли режим бдительности. По умолчанию режим бдительности не включен. Сведения о включении режима бдительности см. в статье [Отображение состояний проверки для всех фиксаций](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits).

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

Подписывание фиксаций отличается от утверждения фиксации. Дополнительные сведения об утверждении фиксаций см. в разделе "[Управление политикой утверждения фиксаций для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)".

### Состояния по умолчанию

| Состояние         | Описание |
| -------------- | ----------- |
| **Проверено**   | Фиксация подписана, а подпись успешно проверена.
| **Непроверенные** | Фиксация подписана, но подпись нельзя проверить.
| Состояние проверки отсутствует | Фиксация не подписана.

### Проверка подписи для перемещения из одной ветви в другую и слияния
{% data reusables.pull_requests.rebase_and_merge_verification %}

Дополнительные сведения см. в разделе [Перемещение фиксаций из одной ветви в другую и слияние](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits).

### Состояния с включенным режимом бдительности

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}


Администраторы репозитория могут принудительно применить обязательное подписание фиксации в ветви, чтобы заблокировать все неподписанные и непроверенные фиксации. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-signed-commits).

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}Если администратор сайта разрешил подписание веб-фиксации, {% data variables.product.product_name %} будет автоматически использовать GPG, чтобы подписывать фиксации, созданные с помощью веб-интерфейса. У фиксаций, подписанных {% data variables.product.product_name %}, будет проверенное состояние. Вы можете проверить подпись локально с помощью открытого ключа, доступного по адресу `https://HOSTNAME/web-flow.gpg`. Дополнительные сведения см. в статье [Настройка подписывания веб-фиксации](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing).
{% else %}{% data variables.product.prodname_dotcom %} будет автоматически использовать GPG для подписывания фиксаций, созданных с помощью веб-интерфейса. У фиксаций, подписанных {% data variables.product.prodname_dotcom %}, будет проверенное состояние. Вы можете проверить подпись локально с помощью открытого ключа, доступного по адресу https://github.com/web-flow.gpg. Полный отпечаток ключа — `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

При необходимости можно выбрать подписывание фиксаций, созданных в {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_dotcom %}с помощью GPG. Дополнительные сведения о включении проверки GPG для codespace см. в статье [Управление проверкой GPG для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).{% endif %} {% endif %}

## Проверка GPG подписи фиксации

Вы можете использовать GPG для подписывания фиксаций с помощью ключа GPG, который вы создаете самостоятельно.

{% данных variables.product.product_name %} использует библиотеки OpenPGP, чтобы убедиться, что ваши локальные подписанные фиксации и теги криптографически проверяются на открытый ключ, добавленный в учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}.

Чтобы подписать фиксации с помощью GPG и проверить эти фиксации в {% data variables.product.product_name %}, выполните следующие действия:

1. [Проверьте наличие существующих ключей GPG](/articles/checking-for-existing-gpg-keys).
2. [Создайте новый ключ GPG](/articles/generating-a-new-gpg-key).
3. [Добавьте ключ GPG в учетную запись GitHub](/articles/adding-a-gpg-key-to-your-github-account).
4. [Расскажите в Git о ключе для подписывания](/articles/telling-git-about-your-signing-key).
5. [Подпишите фиксации](/articles/signing-commits).
6. [Подпишите теги](/articles/signing-tags).

{% ifversion ssh-commit-verification %}
## Проверка подписи фиксаций SSH

Вы можете использовать SSH для подписывания фиксаций с помощью ключа SSH, который вы создаете самостоятельно. Дополнительные сведения см. в [справочной документации по Git](https://git-scm.com/docs/git-config#Documentation/git-config.txt-usersigningKey)  для `user.Signingkey`. Если вы уже используете ключ SSH для проверки подлинности с помощью {% data variables.product.product_name %}, вы также можете отправить этот же ключ еще раз для использования в качестве ключа подписывания. Количество ключей подписывания, которые можно добавить в учетную запись, не ограничено.

{% данных variables.product.product_name %} использует [ssh_data](https://github.com/github/ssh_data), библиотеку открытый код Ruby, чтобы убедиться, что ваши локальные подписанные фиксации и теги криптографически проверяются на открытый ключ, добавленный в учетную запись {% ifversion ghae %}{% данных variables.product.product_name %}{%else %}{% данных variables.location.product_location %}{% endif %}.

{% data reusables.gpg.ssh-git-version %}

Чтобы подписать фиксации с помощью SSH и проверить эти фиксации в {% data variables.product.product_name %}, выполните следующие действия:

1. [Проверьте существующие ключи SSH](/articles/checking-for-existing-ssh-keys)
2. [Создайте новый ключ SSH.](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [Добавление ключа подписывания SSH в учетную запись GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)
4. [Расскажите в Git о ключе для подписывания](/articles/telling-git-about-your-signing-key).
5. [Подпишите фиксации](/articles/signing-commits).
6. [Подпишите теги](/articles/signing-tags).

{% endif %}
## Проверка S/MIME подписи фиксации

Вы можете использовать S/MIME для подписывания фиксаций с помощью ключа X.509, выданного вашей организацией.

{% data variables.product.product_name %} применяет [пакет сертификатов ЦС Debian](https://packages.debian.org/bullseye/ca-certificates), то же хранилище доверия, которое используют браузеры Mozilla, чтобы убедиться, что ваши локально подписанные фиксации и теги проверяются криптографически с помощью открытого ключа в доверенном корневом сертификате.

{% data reusables.gpg.smime-git-version %}

Чтобы подписать фиксации с помощью S/MIME и проверить эти фиксации в {% data variables.product.product_name %}, выполните следующие действия:

1. [Расскажите в Git о ключе для подписывания](/articles/telling-git-about-your-signing-key).
2. [Подпишите фиксации](/articles/signing-commits).
3. [Подпишите теги](/articles/signing-tags).

Вам не нужно отправлять открытый ключ в {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}
## Проверка подписи для ботов

Организации и {% data variables.product.prodname_github_apps %}, для которых необходима подпись фиксации, могут для этого использовать боты. Если фиксация или тег имеют подпись бота, которая проверяется криптографически, {% data variables.product.product_name %} отмечает фиксацию или тег как проверенные.

Проверка подписи для ботов будет работать только в том случае, если запрос проверяется и проходит проверку подлинности как {% data variables.product.prodname_github_app %} или бот и не содержит пользовательских сведений об авторе, о пользователе, выполняющем фиксации, и о подписях, например API фиксаций.
{% endif %}

## Дополнительные материалы

- [Подписывание фиксаций](/articles/signing-commits)
- [Подписывание тегов](/articles/signing-tags)
- [Устранение неполадок с проверкой подписи фиксации](/articles/troubleshooting-commit-signature-verification)
