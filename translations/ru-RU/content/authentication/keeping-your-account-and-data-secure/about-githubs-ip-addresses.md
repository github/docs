---
title: Сведения об IP-адресах GitHub
intro: '{% data variables.product.product_name %} обслуживает приложения из нескольких диапазонов IP-адресов, которые доступны с помощью API.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
ms.openlocfilehash: ab598fa408512a43ab07c069119480b5ae03278e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119984'
---
Список IP-адресов {% data variables.product.prodname_dotcom %} можно извлечь из конечной точки API [Meta](https://api.github.com/meta). Дополнительные сведения см. в разделе [Meta](/rest/reference/meta).

{% note %}

**Примечание.** Список IP-адресов {% data variables.product.prodname_dotcom %}, возвращаемых API Meta — это не исчерпывающий список. IP-адреса для некоторых служб {% data variables.product.prodname_dotcom %} могут не быть перечислены, например LFS или {% data variables.product.prodname_registry %}.

{% endnote %}

{% data variables.product.prodname_dotcom %} использует эти IP-адреса для обслуживания содержимого, доставки веб-перехватчиков и выполнения размещенных сборок {% data variables.product.prodname_actions %}.

Эти диапазоны находятся в [нотации CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Можно использовать онлайн-конвертер для преобразования из нотации CIDR в диапазоны IP-адресов, например [сайт преобразования из CIDR в IPv4](https://www.ipaddressguide.com/cidr).

Время от времени мы вносим изменения в наши IP-адреса. Мы не рекомендуем разрешения по IP-адресу, однако если вы используете эти диапазоны IP-адресов, настоятельно рекомендуется регулярно отслеживать наш API.

Чтобы приложения работали, необходимо разрешить подключение TCP-портов 22, 80, 443 и 9418 через наши диапазоны IP-адресов для `github.com`.

## Дополнительные материалы

- [Устранение проблем с подключениями](/articles/troubleshooting-connectivity-problems)
