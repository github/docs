---
title: GitHub Enterprise Server-Releases
intro: '{% data variables.product.company_short %} veröffentlicht regelmäßig neue Versionen von {% data variables.product.product_name %}. Du kannst die unterstützten Versionen überprüfen, das Datum der Veralterung einsehen und die Dokumentation für das von dir bereitgestellte Release durchsuchen.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
ms.openlocfilehash: 85b0848f77b12920ba853bc674327392b6a89389
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062906'
---
## Informationen zu Releases von {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} unterstützt die vier neuesten Featurereleases. Weitere Informationen findest du unter [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases).

Informationen zu den Neuigkeiten in den einzelnen Releases findest du in den [Versionshinweisen](/admin/release-notes). Die Administrator- und Benutzerdokumentation für alle Releases kannst du hier auf {% data variables.product.prodname_docs %} einsehen. Stelle beim Lesen der Dokumentation sicher, dass du die deinem Produkt entsprechende Version auswählst. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## Derzeit unterstützte Releases

{% data variables.product.company_short %} unterstützt die folgenden Releases von {% data variables.product.product_name %}. Weitere Informationen zum neuesten Release findest du auf der Website zu [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Version | Release | Eingestellte Unterstützung | Versionshinweise | Dokumentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Versionshinweise zu {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [Dokumentation zu {{version}}](/enterprise-server@{{version}}) | {%- endfor %}

## Veraltete Releases

{% data variables.product.company_short %} stellt Dokumentationen für veraltete Versionen bereit, die Dokumentation wird jedoch nicht gepflegt und aktualisiert.

| Version | Release | Eingestellte Unterstützung | Versionshinweise | Dokumentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Versionshinweise zu {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [Dokumentation zu {{version}}](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Versionshinweise zu {{version}}](https://enterprise.github.com/releases/series/{{version}}) | [Dokumentation zu {{version}}](/enterprise/{{version}}) | {%- endfor %}

### Veraltete Entwicklerdokumentation

{% data variables.product.company_short %} hat Entwicklerdokumentation für {% data variables.product.product_name %} bis zum Release 2.17 auf einer separaten Website gehostet. {% data variables.product.company_short %} stellt weiterhin Entwicklerdokumentation für Version 2.16 und ältere Versionen bereit, die Dokumentation wird jedoch nicht gepflegt und aktualisiert.

| Version | Release | Eingestellte Unterstützung | Entwicklerdokumentation |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Entwicklerdokumentation zu {{version}}](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
