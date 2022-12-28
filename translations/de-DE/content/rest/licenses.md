---
title: Lizenzen
intro: Mit der Lizenzen-API kannst du beliebte Open Source-Lizenzen und Informationen zu der Lizenzdatei eines bestimmten Projekts abrufen.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064866'
---
## Informationen zur Lizenz-API

Die Lizenz-API verwendet den [Open-Source-Lizenznehmer Ruby Gem](https://github.com/benbalter/licensee) für Versuche, die Lizenz des Projekts zu ermitteln. Der Lizenznehmer gleicht den Inhalt der `LICENSE`-Projektdatei (falls vorhanden) mit einer kurzen Liste bekannter Lizenzen ab. Die API berücksichtigt daher nicht die Lizenzen von Projektabhängigkeiten oder andere Mittel zum Dokumentieren der Lizenz eines Projekts, z. B. Verweise auf den Lizenznamen in der Dokumentation.

Wenn eine übereinstimmende Lizenz gefunden wird, entsprechen der zurückgegebene Lizenzschlüssel und Lizenzname der [SPDX-Spezifikation](https://spdx.org/).

**Hinweis:** Diese Endpunkte geben auch die Lizenzinformationen eines Repositorys zurück:

- [Abrufen eines Repositorys](/rest/reference/repos#get-a-repository)
- [Auflisten von Repositorys für einen Benutzer](/rest/reference/repos#list-repositories-for-a-user)
- [Auflisten von Organisationsrepositorys](/rest/reference/repos#list-organization-repositories)
- [Auflisten von Forks](/rest/reference/repos#list-forks)
- [Auflisten von Repositorys, die von einem Benutzer überwacht werden](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Auflisten von Teamrepositorys](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub ist vieles, aber keine Anwaltskanzlei. Deshalb bietet GitHub keine Rechtsberatung an. Die Verwendung der Lizenz oder die E-Mail-Kommunikation zu dieser stellt keine Rechtsberatung dar und führt nicht zu einer Mandantsbeziehung. Wenn du Fragen zu den zulässigen und unzulässigen Aktionen mit einer bestimmten Lizenz hast, solltest du deine*n Rechtsberater*in konsultieren, bevor du fortfährst. Du solltest immer deinen Anwalt oder deine Anwältin konsultieren, bevor du Entscheidungen triffst, die rechtliche Auswirkungen haben oder sich auf deine Rechtsansprüche auswirken können.

GitHub hat die Lizenz-API entwickelt, um Benutzer*innen über Open-Source-Lizenzen und die Projekte, bei denen diese Lizenzen verwendet werden, zu informieren. Wir hoffen, dass wir dir damit helfen. Bedenke aber bitte, dass wir (bzw. die meisten von uns) keine Juristen sind und wie alle Menschen Fehler machen können. Aus diesem Grund stellt GitHub die API wie vorliegend bereit und übernimmt keine Gewährleistung im Hinblick auf alle auf oder über GitHub bereitgestellten Informationen und Lizenzen. Außerdem lehnt GitHub jegliche Haftung für Schäden ab, die sich aus der Nutzung der API ergeben.

{% endwarning %}
