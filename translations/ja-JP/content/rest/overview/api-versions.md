---
title: API のバージョン
shortTitle: API Versions
intro: REST API に対して要求を行う場合は、必ず使用する REST API バージョンを指定する必要があります。
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192866'
---
## API のバージョン管理について

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## {% data variables.product.prodname_ghe_server %} のバージョン管理と REST API のバージョン管理について

{% data variables.product.prodname_ghe_server %} のバージョンは、REST API のバージョンから切り離されています。 API のバージョンが {% data variables.product.prodname_ghe_server %} のバージョンに含まれている限り、{% data variables.product.prodname_ghe_server %} のバージョンをアップグレードしつつ、同じ REST API バージョンを維持できます。 同様に、選択する新しい REST API のバージョンが {% data variables.product.prodname_ghe_server %} のバージョンで使用できる限り、{% data variables.product.prodname_ghe_server %} のバージョンを更新せずに REST API のバージョンをアップグレードできます。

{% data variables.product.prodname_ghe_server %} のリリース ノートには、REST API のバージョンがサポートされなくなるタイミングが記載されます。 詳細については、「[リリース ノート](/admin/release-notes)」を参照してください。

{% endif %}

## API バージョンの指定

`X-GitHub-Api-Version` ヘッダーを使用して、API のバージョンを指定する必要があります。 次に例を示します。

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

`X-GitHub-Api-Version` ヘッダーのない要求では、既定で `{{ initialRestVersioningReleaseDate }}` バージョンが使用されます。

サポートされなくなった API のバージョンを指定すると、`400` エラーが表示されます。

## 新しい API バージョンへのアップグレード

新しい REST API バージョンにアップグレードする前に、新しい API バージョンの破壊的変更に関する変更ログを読んで、どのような破壊的変更が含まれているかを理解し、その特定の API バージョンにアップグレードする方法の詳細を確認する必要があります。 詳細については、「[破壊的変更](/rest/overview/breaking-changes)」を参照してください。

`X-GitHub-Api-Version` ヘッダーで新しい API バージョンを指定するように統合を更新する場合は、統合が新しい API バージョンで動作するために必要な変更を加える必要もあります。

統合が更新されたら、統合をテストして、新しい API バージョンで動作することを確認します。

## サポートされる API バージョン

現在、次の REST API バージョンがサポートされています。

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

API 要求を行い、サポートされているすべての API バージョンを取得することもできます。 詳しくは、「[すべての API バージョンを取得する](/rest/meta#get-all-api-versions)」を参照してください。
