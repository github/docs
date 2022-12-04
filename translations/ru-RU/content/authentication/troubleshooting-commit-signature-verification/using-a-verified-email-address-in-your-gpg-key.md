---
title: Использование проверенного адреса электронной почты в ключе GPG
intro: 'При проверке подписи {% data variables.product.product_name %} проверяет, соответствует ли адрес электронной почты пользователя, отправившего фиксацию, или пользователя, добавившего тег, совпадает с адресом электронной почты из удостоверений ключа GPG и является проверенным адресом электронной почты в учетной записи пользователя. Это гарантирует, что ключ принадлежит вам и что вы создали фиксацию или тег.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088250'
---
{% ifversion fpt or ghec %} Если вам нужно проверить свой адрес электронной почты GitHub, см. сведения в статье "[Проверка адреса электронной почты](/articles/verifying-your-email-address/)". {% endif %} Чтобы обновить или добавить адрес электронной почты в ключ GPG, см. сведения в статье "[Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)".

Фиксации и теги могут содержать несколько адресов электронной почты. Для фиксаций есть автор — человек, написавший код, и опубликовавшее лицо — человек, добавивший фиксацию в дерево. При подписи фиксации с помощью Git, будь то во время слияния, выборочного обора или обычного `git commit`, адрес электронной почты опубликовавшего лица будет вашим, даже если адрес электронной почты автора таковым не является. Теги более просты: адрес электронной почты разметчика всегда является адресом пользователя, создавшего тег.

Если вам нужно изменить адрес электронной почты опубликовавшего лица или разметчика, см. сведения в статье "[Настройка адреса электронной почты фиксации](/articles/setting-your-commit-email-address/)".

## Дополнительные материалы

- "[Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification)"
