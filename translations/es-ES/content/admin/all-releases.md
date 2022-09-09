---
title: Lanzamientos de GitHub Enterprise Server
intro: '{% data variables.product.company_short %} admite las versiones nuevas de {% data variables.product.product_name %} de manera periódica. Puedes revisar las versiones compatibles, consultar las fechas de entrada en desuso y examinar la documentación correspondiente a la versión que implementaste.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062910'
---
## Acerca de las versiones de {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} admite las cuatro versiones de características más recientes. Para más información, vea "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)".

Puedes ver las novedades de cada versión en las [notas de la versión](/admin/release-notes), y puedes ver la documentación de administrador y usuario de todas las versiones aquí en {% data variables.product.prodname_docs %}. Al leer la documentación, asegúrate de seleccionar la versión que refleja el producto. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## Versiones admitidas actualmente

{% data variables.product.company_short %} admite las siguientes versiones de {% data variables.product.product_name %}. Para obtener más información sobre la versión más reciente, consulta el sitio web de [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Versión | Release | Desuso | Notas de la versión | Documentación |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) | {%- endfor %}

## Versiones en desuso

{% data variables.product.company_short %} proporciona documentación para las versiones en desuso, pero no mantiene ni actualiza la documentación.

| Versión | Release | Desuso | Notas de la versión | Documentación |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} documentation](/enterprise/{{version}}) | {%- endfor %}

### Documentación obsoletizada para desarrolladores

{% data variables.product.company_short %} hospedó la documentación para desarrolladores de {% data variables.product.product_name %} en un sitio independiente hasta la versión 2.17. {% data variables.product.company_short %} sigue proporcionando documentación para desarrolladores para la versión 2.16 y anteriores, pero no mantiene ni actualiza la documentación.

| Versión | Release | Desuso | Documentación del desarrollador |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
