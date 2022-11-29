---
title: GitHub Enterprise Server のリリース
intro: '{% data variables.product.company_short %} では、{% data variables.product.product_name %} の新しいバージョンが定期的にリリースされています。 サポートされているバージョンや非推奨になる日付を確認したり、デプロイしたリリースのドキュメントを参照したりできます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062907'
---
## {% data variables.product.product_name %} のリリースについて

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} は、直近の 4 つの機能リリースをサポートしています。 詳細については、「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」を参照してください。

各リリースの最新情報については、[リリース ノート](/admin/release-notes)を参照してください。すべてのリリースの管理者向けとユーザー向けのドキュメントについては、{% data variables.product.prodname_docs %} を参照してください。 ドキュメントを参照するときは、お使いの製品に対応するバージョンを選んでください。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

## 現在サポートされているリリース

{% data variables.product.company_short %} は、以下のリリースの {% data variables.product.product_name %} をサポートしています。 最新のリリースについては、[{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) の Web サイトを参照してください。

| バージョン | リリース | 非推奨 | リリース ノート | ドキュメント |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} のリリース ノート](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} のドキュメント](/enterprise-server@{{version}}) | {%- endfor %}

## 非推奨のリリース

{% data variables.product.company_short %} は非推奨のバージョンに対してドキュメントを提供しますが、ドキュメントのメンテナンスや更新は行いません。

| バージョン | リリース | 非推奨 | リリース ノート | ドキュメント |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} のリリース ノート](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} のドキュメント](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} のリリース ノート](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} のドキュメント](/enterprise/{{version}}) | {%- endfor %}

### 非推奨の開発者向けドキュメント

{% data variables.product.company_short %} は、2.17 リリースまで {% data variables.product.product_name %} の開発者向けドキュメントを別サイトでホストしていました。 {% data variables.product.company_short %} は、バージョン 2.16 以前の開発者向けドキュメントを引き続き提供しますが、ドキュメントのメンテナンスや更新は行いません。

| バージョン | リリース | 非推奨 | 開発者向けドキュメント |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 開発者向けドキュメント](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
