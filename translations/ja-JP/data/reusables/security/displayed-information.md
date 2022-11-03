---
ms.openlocfilehash: 14b8f0f8803056b5d3431e8de2eee868d9167546
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108785"
---
既存のリポジトリで1つ以上のセキュリティ及び分析機能を有効化すると、数分のうちに{% data variables.product.prodname_dotcom %}上に結果が表示されます。

- 既存のすべてのリポジトリは、選択された設定を持ちます。
- 新しいリポジトリに対するチェックボックスを有効化していれば、新しいリポジトリは選択された設定に従います。{% ifversion fpt or ghec %}
- 関連するサービスに適用するマニフェストファイルをスキャンするために権限を使用します。
- 有効化すると、依存関係グラフに依存関係情報が表示されます。
- 有効化すると、{% data variables.product.prodname_dotcom %} により、脆弱な依存関係またはマルウェアに対して {% data variables.product.prodname_dependabot_alerts %}が生成されます。{% endif %}{% ifversion fpt or ghec or ghes %}
- 有効化すると、{% data variables.product.prodname_dependabot %} セキュリティ更新プログラムは、{% data variables.product.prodname_dependabot_alerts %} がトリガーされたときに、脆弱な依存関係をアップグレードするための pull request を作成します。{% endif %}
