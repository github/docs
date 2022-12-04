---
title: Informationen zu den IP-Adressen von GitHub
intro: '{% data variables.product.product_name %} versorgt Anwendungen aus mehreren IP-Adressbereichen, die über die API verfügbar sind.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106587'
---
Du kannst eine Liste der IP-Adressen von {% data variables.product.prodname_dotcom %} über den [Meta](https://api.github.com/meta)-API-Endpunkt abrufen. Weitere Informationen findest du unter [Meta](/rest/reference/meta).

{% note %}

**Hinweis:** Die Liste der {% data variables.product.prodname_dotcom %} IP-Adressen, die von der Meta-API zurückgegeben werden, ist nicht als vollständige Liste gedacht. Beispielsweise werden IP-Adressen für einige {% data variables.product.prodname_dotcom %} Dienste wie LFS oder {% data variables.product.prodname_registry %} möglicherweise nicht aufgeführt.

{% endnote %}

Diese IP-Adressen werden von {% data variables.product.prodname_dotcom %} verwendet, um unsere Inhalte bereitzustellen, WebHooks zu liefern und gehostete {% data variables.product.prodname_actions %}-Builds durchzuführen.

Diese Bereiche befinden sich in der [CIDR-Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Du kannst zum Beispiel ein Online-Konvertierungstool verwenden, um von der CIDR-Notation in IP-Adressbereiche umzuwandeln: [CIDR zu IPv4 Konvertierungsseite](https://www.ipaddressguide.com/cidr).

Wir nehmen von Zeit zu Zeit Änderungen an unseren IP-Adressen vor. Wir empfehlen nicht, die Erlaubnis nach IP-Adresse zu erteilen. Wenn Du jedoch diese IP-Bereiche verwendest, empfehlen wir dringend eine regelmäßige Überwachung unserer API.

Damit die Anwendungen funktionieren, musst Du die TCP-Ports 22, 80, 443 und 9418 über unsere IP-Bereiche für `github.com`.

## Weiterführende Themen

- [Behandlung von Konnektivitätsproblemen](/articles/troubleshooting-connectivity-problems)
