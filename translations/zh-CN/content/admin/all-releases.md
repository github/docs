---
title: GitHub Enterprise Server 发行版
intro: '{% data variables.product.company_short %} 定期发布 {% data variables.product.product_name %} 的新版本。 可以查看受支持的版本、查看弃用日期并浏览已部署版本的文档。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062904'
---
## 关于 {% data variables.product.product_name %} 的版本

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} 支持四个最新功能版。 有关详细信息，请参阅[“关于升级到新版本”](/admin/overview/about-upgrades-to-new-releases)。

可以查看[发行说明](/admin/release-notes)中每个版本的新增功能，并且可以在这里的 {% data variables.product.prodname_docs %} 上查看所有版本的管理员和用户文档。 阅读文档时，请确保选择反映你的产品的版本。 有关详细信息，请参阅[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)。

## 当前支持的版本

{% data variables.product.company_short %} 支持以下 {% data variables.product.product_name %} 版本。 有关最新版本的详细信息，请参阅 [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) 网站。

| 版本 | 发布 | 弃用 | 发行说明 | 文档 |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 文档](/enterprise-server@{{version}}) | {%- endfor %}

## 弃用的版本

{% data variables.product.company_short %} 提供已弃用版本的文档，但不维护或更新文档。

| 版本 | 发布 | 弃用 | 发行说明 | 文档 |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 文档](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} 文档](/enterprise/{{version}}) | {%- endfor %}

### 已弃用的开发者文档

{% data variables.product.company_short %} 在单独的站点上托管 {% data variables.product.product_name %} 的开发人员文档，直到 2.17 版本。 {% data variables.product.company_short %} 继续为版本 2.16 及更低版本提供开发人员文档，但不维护或更新文档。

| 版本 | 发布 | 弃用 | 开发人员文档 |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 开发人员文档](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
