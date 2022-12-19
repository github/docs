---
title: Обновление ключа GPG с истекшим сроком действия
intro: При проверке подписи {% data variables.product.product_name %} выполняет проверку, чтобы убедиться, что ключ не отозван и не истек. Если ключ подписывания отозван или истек, {% data variables.product.product_name %} не сможет проверить подписи. Если ключ отозван, используйте для подписывания своих фиксаций первичный ключ или другой ключ, который не был отозван.
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088257"
---
Если срок действия ключа истек, необходимо [обновить срок действия](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), экспортировать новый ключ, удалить ключ с истекшим сроком действия в учетной записи GitHub и [отправить новый ключ в GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/). Предыдущие фиксации и теги будут отображаться как проверенные при условии, что ключ соответствует всем остальным требованиям проверки.

Если ключ недопустим, и вы не используете другой допустимый ключ в наборе ключей, а генерируете новый ключ GPG с новым набором учетных данных, то фиксации, выполненные с отозванным или просроченным ключом, будут по-прежнему отображаться как непроверенные. Кроме того, новые учетные данные невозможно использовать для повторного подписания или проверки старых фиксаций и тегов.

## <a name="further-reading"></a>Дополнительные материалы

- "[Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification)"
