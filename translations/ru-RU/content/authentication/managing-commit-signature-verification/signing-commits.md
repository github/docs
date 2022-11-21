---
title: Подписание фиксаций
intro: 'Вы можете подписывать фиксации локально с помощью GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} или S/MIME.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106752'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Советы**

Чтобы настроить клиент Git для подписывания фиксаций по умолчанию для локального репозитория, выполните `git config commit.gpgsign true` в Git версии 2.0.0 и более поздних версий. Чтобы подписать все фиксации по умолчанию в любом локальном репозитории на компьютере, выполните команду `git config --global commit.gpgsign true`.

Для сохранения кодовой фразы ключа GPG, чтобы вам не приходилось вводить ее каждый раз, подписывая фиксацию, рекомендуется использовать следующие инструменты:
  - Для пользователей Mac [набор GPG](https://gpgtools.org/) позволяет хранить парольную фразу ключа GPG в цепочке ключей Mac OS.
  - Для пользователей Windows [Gpg4win](https://www.gpg4win.org/) интегрируется с другими средствами Windows.

Можно также вручную настроить [gpg-agent](http://linux.die.net/man/1/gpg-agent) для сохранения парольной фразы ключа GPG, но это не интегрируется с цепочкой ключей Mac OS как ssh-agent и требует дополнительной настройки.

{% endtip %}

Если у вас несколько ключей или вы пытаетесь подписать фиксации либо теги с помощью ключа, который не соответствует удостоверению фиксации, следует [сообщить Git о ключе для подписывания](/articles/telling-git-about-your-signing-key).

1. При фиксации изменений в локальной ветви добавьте флаг -S в команду фиксации Git:
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. Если вы используете GPG, после создания фиксации укажите парольную фразу, настроенную при [создании ключа GPG](/articles/generating-a-new-gpg-key).
3. Завершив создание фиксаций локально, отправьте их в удаленный репозиторий на {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. В {% data variables.product.product_name %} перейдите к запросу на вытягивание.
{% data reusables.repositories.review-pr-commits %}
5. Чтобы просмотреть более подробные сведения о проверенной сигнатуры, нажмите кнопку "Проверено".
![Подписанная фиксация](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## Дополнительные материалы

* [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
* [Подписывание тегов](/articles/signing-tags)
