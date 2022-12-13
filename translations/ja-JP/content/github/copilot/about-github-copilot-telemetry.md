---
title: GitHub Copilot 利用統計情報について
intro: '{% data variables.product.prodname_copilot %} collects and relies on additional telemetry data beyond what other {% data variables.product.company_short %} products and services collect.'
redirect_from:
- /early-access/github/copilot/about-github-copilot-telemetry
versions:
  fpt: '*'
ms.openlocfilehash: ad46b7b2b6626cad0419b1588d64923cca34c0ca
ms.sourcegitcommit: d8653a0ad00d2122cdaaed47f6a4f0c1d0f41845
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/18/2022
ms.locfileid: "145148758"
---
## <a name="what-data-is-collected"></a>どのデータが収集されますか

収集されるデータについては、「[{% data variables.product.prodname_copilot %} 利用統計情報](/github/copilot/github-copilot-telemetry-terms)」を参照してください。 さらに、{% data variables.product.prodname_copilot %} 拡張機能/プラグインでは、タイムスタンプに関連付けられたユーザーの統合開発環境 (IDE) からのアクティビティと、拡張機能/プラグイン テレメトリ パッケージによって収集されるメタデータを収集します。 {% data variables.product.prodname_vscode %}、IntelliJ、NeoVIM、またはその他の IDE で使用すると、それらの IDE によって提供される標準メタデータが {% data variables.product.prodname_copilot %} によって収集されます。 

## <a name="how-the-data-is-used-by--data-variablesproductcompany_short-"></a>{% data variables.product.company_short %} によるデータの使用方法

{% data variables.product.company_short %} では、このデータが次の目的で使用されます。

- 処理におけるさまざまな戦略の評価や、ユーザーが役立つと思われる提案の予測など、製品を直接改善する
- 製品を評価する (例: ユーザーに与える肯定的な影響を測定する)
- 肯定的および否定的な例を提供するなどして、基になるコード生成モデルを改良する (ただし、常に、プライベート コードが {% data variables.product.prodname_copilot %} の他のユーザーにコードを提案するための入力として使用されないようにする)
- 密接に関連する {% data variables.product.company_short %} 製品をガイドする
- {% data variables.product.prodname_copilot %} サービスの潜在的な不正使用の調査と検出
- {% data variables.product.prodname_copilot %} サービスの改良に関連するその他の目的 (次のセクションで説明するような共有を含む)

## <a name="how-the-data-is-shared"></a>データの共有方法

利用統計情報データは、適切な暗号化を行って、{% data variables.product.company_short %} システムに安全に格納されます。 ユーザーの編集アクション、ソース コード スニペット、リポジトリとファイル パスの URL は機密データであることがわかっています。 その結果、アクセスは厳密に制御されます。 データにアクセスできるのは次のとおりです。(1) {% data variables.product.prodname_copilot %} チームで、または {% data variables.product.company_short %} プラットフォーム ヘルス チームで作業する {% data variables.product.company_short %} という名前の担当者 (従業員および請負業者) (2) Azure または {% data variables.product.prodname_copilot %} チームで作業している Microsoft の担当者 (従業員および請負業者) (3) {% data variables.product.prodname_copilot %} に取り組む OpenAI の従業員。

