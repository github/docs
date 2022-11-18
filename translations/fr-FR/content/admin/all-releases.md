---
title: Versions de GitHub Enterprise Server
intro: '{% data variables.product.company_short %} publie régulièrement de nouvelles versions de {% data variables.product.product_name %}. Vous pouvez passer en revue les versions prises en charge, voir les dates de dépréciation et parcourir la documentation pour la version que vous avez déployée.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062905'
---
## À propos des versions de {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} prend en charge les quatre mises en production de fonctionnalité les plus récentes. Pour plus d’informations, consultez « [À propos des mises à niveau vers de nouvelles versions](/admin/overview/about-upgrades-to-new-releases) ».

Vous pouvez voir les nouveautés de chaque version dans les [notes de publication](/admin/release-notes), et vous pouvez consulter la documentation pour administrateurs et utilisateurs pour toutes les versions ici sur {% data variables.product.prodname_docs %}. Lorsque vous lisez la documentation, veillez à sélectionner la version qui reflète votre produit. Pour plus d’informations, consultez « [À propos des versions de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs) ».

## Versions actuellement prises en charge

{% data variables.product.company_short %} prend en charge les versions suivantes de {% data variables.product.product_name %}. Pour plus d’informations sur la dernière version, consultez le site web [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Version | Libérer | Dépréciation | Notes de publication | Documentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) | {%- endfor %}

## Versions déconseillées

{% data variables.product.company_short %} fournit une documentation pour les versions déconseillées, mais ne gère pas et ne met pas à jour la documentation.

| Version | Libérer | Dépréciation | Notes de publication | Documentation |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} documentation](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} release notes](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} documentation](/enterprise/{{version}}) | {%- endfor %}

### Documentation pour développeurs dépréciée

Documentation {% data variables.product.company_short %} pour développeur hébergé pour {% data variables.product.product_name %} sur un site distinct jusqu’à la version 2.17. {% data variables.product.company_short %} continue de fournir la documentation pour développeur pour la version 2.16 et les versions antérieures, mais ne maintient et ne met pas à jour la documentation.

| Version | Libérer | Dépréciation | Documentation pour les développeurs |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} developer documentation](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
