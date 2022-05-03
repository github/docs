---
title: GitHub Enterprise Server 发行版
intro: '{% data variables.product.company_short %} 定期发布新版本的 {% data variables.product.product_name %} 。 您可以查看支持的版本、查看弃用日期以及浏览已部署版本的文档。'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: 版本发布
---

## 关于 {% data variables.product.product_name %} 的发布

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} 支持四个最新的功能版本。 更多信息请参阅“[关于升级到新发行版](/admin/overview/about-upgrades-to-new-releases)”。

您可以在 [发行说明](/admin/release-notes)中查看每个版本的新增功能，也可以在 {% data variables.product.prodname_docs %} 上查看所有版本的管理员和用户文档。 阅读文档时，请确保选择反映您的产品的版本。 更多信息请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs)”。

## 当前支持的版本

{% data variables.product.company_short %} 支持以下版本的 {% data variables.product.product_name %}。 有关最新版本的详细信息，请参阅 [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) 网站。

| 版本 | 发行版 | 弃用 | 发行说明 | 文档 |
|:-- |:--- |:-- |:---- |:-- |
|    |     |    |      |    |
{%- for version in enterpriseServerReleases.supported %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 文档](/enterprise-server@{{version}}) |
{%- endfor %}

## 已弃用的版本

{% data variables.product.company_short %} 为已弃用的版本提供文档，但不维护或更新文档。

| 版本 | 发行版 | 弃用 | 发行说明 | 文档 |
|:-- |:--- |:-- |:---- |:-- |
|    |     |    |      |    |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 文档](/enterprise-server@{{version}}) |
{%- endfor %}
{%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 发行说明](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} 文档](/enterprise/{{version}}) |
{%- endfor %}

### 已弃用的开发者文档

{% data variables.product.company_short %} 2.17 版本之前，在单独的站点上托管的 {% data variables.product.product_name %} 开发人员文档。 {% data variables.product.company_short %} 继续提供版本 2.16 及更早版本的开发人员文档，但不维护或更新文档。

| 版本 | 发行版 | 弃用 | 开发人员文档 |
|:-- |:--- |:-- |:------ |
|    |     |    |        |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 开发人员文档](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}
