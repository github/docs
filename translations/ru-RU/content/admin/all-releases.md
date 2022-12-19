---
title: Выпуски GitHub Enterprise Server
intro: '{% data variables.product.company_short %} регулярно выпускает новые версии {% data variables.product.product_name %}. Здесь можно просмотреть поддерживаемые версии, даты прекращения поддержки, а также ознакомиться с документацией по выпуску, который вы развернули.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062909'
---
## Сведения о выпусках {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} поддерживает четыре последних выпуска компонентов. Дополнительные сведения см. в разделе [Сведения об обновлениях до новых выпусков](/admin/overview/about-upgrades-to-new-releases).

Новые возможности каждого выпуска можно просмотреть в [заметках о выпуске](/admin/release-notes), а также можно ознакомиться с документацией администратора и пользователя для всех выпусков на странице {% data variables.product.prodname_docs %}. При чтении документации обязательно выберите версию, соответствующую вашему продукту. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## Поддерживаемые выпуски

{% data variables.product.company_short %} поддерживает следующие выпуски {% data variables.product.product_name %}. Сведения о последнем выпуске см. на сайте [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Версия | Выпуск | Устаревшее | Заметки о выпуске | Документация |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Заметки о выпуске {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [Документация по {{version}}](/enterprise-server@{{version}}) | {%- endfor %}

## Устаревшие выпуски

{% data variables.product.company_short %} предоставляет документацию по устаревшим версиям, но не поддерживает или не обновляет ее.

| Версия | Выпуск | Устаревшее | Заметки о выпуске | Документация |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Заметки о выпуске {{version}} ](/enterprise-server@{{version}}/admin/release-notes) | [Документация по {{version}}](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Заметки о выпуске {{version}}](https://enterprise.github.com/releases/series/{{version}}) | [Документация по {{version}}](/enterprise/{{version}}) | {%- endfor %}

### Нерекомендуемая документация для разработчиков

{% data variables.product.company_short %} использовали размещение документации разработчика для {% data variables.product.product_name %} на отдельном сайте до выпуска 2.17. {% data variables.product.company_short %} продолжает предоставлять документацию разработчика для версии 2.16 и более ранних версий, но не поддерживает или не обновляет документацию.

| Версия | Выпуск | Устаревшее | Документация для разработчика |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Документация для разработчика по {{version}}](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
