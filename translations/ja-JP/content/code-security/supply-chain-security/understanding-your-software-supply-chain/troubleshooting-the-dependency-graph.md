---
title: 依存関係グラフのトラブルシューティング
intro: 依存関係グラフによって報告された依存関係の情報が期待したものと異なる場合、いくつかの考慮するポイントと、さまざまな確認項目があります。
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 30c4830c125e9b20ada59e0e0e29fa0eb5c6c649
ms.sourcegitcommit: a9af58ef52d8d109186053d184d9b1e52e5f0323
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/02/2022
ms.locfileid: '148128905'
---
{% data reusables.dependabot.result-discrepancy %}

## 依存関係グラフは、マニフェストとロックファイルの依存関係のみを検索しますか？

依存関係グラフには、環境で明示的に宣言されている依存関係に関する情報が{% ifversion dependency-submission-api %}自動的に{% endif %}含まれます。 つまり、マニフェストまたはロックファイルで指定されている依存関係です。 依存関係グラフには、通常、マニフェストファイル内の依存関係の依存関係を調べることにより、ロックファイルで指定されていない場合でも、推移的な依存関係も含まれます。

"ゆるい" 依存関係が依存関係グラフに{% ifversion dependency-submission-api %}自動的に{% endif %}含まれることはありません。 「ゆるい」依存関係は、パッケージマネージャーのマニフェストまたはロックファイルで参照されるのではなく、あるソースからコピーされ、リポジトリに直接またはアーカイブ (ZIP ファイルや JAR ファイルなど) に含まれてチェックインされる個々のファイルです。 

{% ifversion dependency-submission-api %}ただし、プロジェクトのビルド時に解決される依存関係など、依存関係がマニフェストまたはロック ファイルで宣言されていない場合でも、Dependency submission API (ベータ) を使用して、依存関係をプロジェクトの依存関係グラフに追加できます。 依存関係グラフには、送信された依存関係がエコシステム別にグループ化されて表示されますが、マニフェストまたはロック ファイルから解析された依存関係とは別になっています。 Dependency submission API について詳しくは、「[Dependency submission API の利用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」を参照してください。{% endif %}

**チェック**: リポジトリのマニフェストまたはロックファイル内で指定されていない、コンポーネントに対する見落とされている依存関係はありますか?

## 依存関係グラフは、変数を使用して指定された依存関係を検出しますか？

依存関係グラフは、マニフェストが {% data variables.product.prodname_dotcom %} にプッシュされるときにマニフェストを分析します。 したがって、依存関係グラフはプロジェクトのビルド環境にアクセスできないため、マニフェスト内で使用される変数を解決できません。 マニフェスト内で変数を使用して名前、またはより一般的には依存関係のバージョンを指定する場合、その依存関係は依存関係グラフに{% ifversion dependency-submission-api %}自動的には{% endif %}含まれません。

{% ifversion dependency-submission-api %}ただし、依存関係がプロジェクトのビルド時にのみ解決される場合でも、Dependency submission API (ベータ) を使用して、依存関係をプロジェクトの依存関係グラフに追加できます。 Dependency submission API について詳しくは、「[Dependency submission API の利用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」を参照してください。{% endif %}

**チェック**: マニフェストで、名前またはバージョンに変数を使用して、見落とされている依存関係が宣言されていますか?

## 依存関係グラフのデータに影響する制限はありますか？

はい、依存関係グラフの制限には 2 つのカテゴリがあります。

1. **処理制限**

    これらは {% data variables.product.prodname_dotcom %} 内に表示される依存関係グラフに影響を与え、{% data variables.product.prodname_dependabot_alerts %} が作成されないようにします。

    サイズが 0.5 MB を超えるマニフェストは、Enterprise アカウントに対してのみ処理されます。 他のアカウントの場合、0.5 MB を超えるマニフェストは無視され、{% data variables.product.prodname_dependabot_alerts %} は作成されません。

    規定では、{% data variables.product.prodname_dotcom %} はリポジトリごとに {% ifversion fpt %}150{% else %}600{% endif %} 個を超えるマニフェストを処理しません。 {% data variables.product.prodname_dependabot_alerts %} は、この制限を超えるマニフェストに対しては作成されません。 制限を増やす必要がある場合は、{% data variables.contact.contact_support %} にお問い合わせください。 

2. **視覚化の制限**

    これらは、{% data variables.product.prodname_dotcom %} 内の依存関係グラフに表示される内容に影響します。 ただし、作成された {% data variables.product.prodname_dependabot_alerts %} には影響しません。

    リポジトリの依存関係グラフの依存関係ビューには、100 個のマニフェストのみが表示されます。 通常、これは上記の処理制限よりも大幅に高いので十分です。 処理制限が100 個を超える状況でも、{% data variables.product.prodname_dotcom %} 内に表示されていないマニフェストに対して {% data variables.product.prodname_dependabot_alerts %} が作成されます。

**チェック**: 0.5 MB を超えるマニフェスト ファイル、または多数のマニフェストがあるリポジトリに見落とされている依存関係はありませんか?

## 参考資料

- "[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- 「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
- [脆弱な依存関係の検出に関するトラブルシューティング](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies){% ifversion fpt or ghec or ghes %}
- 「[{% data variables.product.prodname_dependabot %} エラーのトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)」{% endif %}
