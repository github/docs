---
title: Code Scanning
intro: '{% data variables.product.prodname_code_scanning %} APIを使うと、リオジトリから{% data variables.product.prodname_code_scanning %}アラートを取得して更新できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061395'
---
{% data reusables.code-scanning.beta %}

## Code Scanning API について

{% data variables.product.prodname_code_scanning %} APIを使うと、リオジトリから{% data variables.product.prodname_code_scanning %}アラートを取得して更新できます。 このエンドポイントを使って、Organization内で{% data variables.product.prodname_code_scanning %}アラートの自動化されたレポートを作成したり、オフラインの{% data variables.product.prodname_code_scanning %}ツールを使って生成された分析結果をアップロードしたりできます。 詳細については、[コード内にあるセキュリティの脆弱性とエラーの発見](/github/finding-security-vulnerabilities-and-errors-in-your-code)に関する記事を参照してください。

### {% data variables.product.prodname_code_scanning %}のためのカスタムメディアタイプ

{% data variables.product.prodname_code_scanning %} REST API用にサポートされているカスタムメディアタイプが1つあります。 

    application/sarif+json

これは、`/analyses/{analysis_id}` エンドポイントに送信される `GET` リクエストで使用できます。 この操作の詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} 分析を取得する](#get-a-code-scanning-analysis-for-a-repository)」を参照してください。 この操作でこのメディアの種類を使用する場合、応答には、既定のメディアの種類を使用したときに返される分析の概要ではなく、指定された分析に対してアップロードされた実際のデータのサブセットが含まれます。 この応答には、`github/alertNumber` や `github/alertUrl` のプロパティなどの追加データも含まれます。 データは、[SARIF バージョン 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html) として書式設定されます。

詳細については、「[メディア タイプ](/rest/overview/media-types)」を参照してください。
