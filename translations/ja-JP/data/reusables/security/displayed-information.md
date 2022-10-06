---
ms.openlocfilehash: c9e2c1bf2b01805ed973effedd219c3552ac2bf4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455670"
---
既存のリポジトリで1つ以上のセキュリティ及び分析機能を有効化すると、数分のうちに{% data variables.product.prodname_dotcom %}上に結果が表示されます。

- 既存のすべてのリポジトリは、選択された設定を持ちます。
- 新しいリポジトリに対するチェックボックスを有効化していれば、新しいリポジトリは選択された設定に従います。{% ifversion fpt or ghec %}
- 関連するサービスに適用するマニフェストファイルをスキャンするために権限を使用します。
- 有効化すると、依存関係グラフに依存関係情報が表示されます。
- 有効化すると、{% data variables.product.prodname_dotcom %} により、脆弱な依存関係またはマルウェアに対して {% data variables.product.prodname_dependabot_alerts %}が生成されます。{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- 有効化すると、{% data variables.product.prodname_dependabot %} セキュリティ更新プログラムは、{% data variables.product.prodname_dependabot_alerts %} がトリガーされたときに、脆弱な依存関係をアップグレードするための pull request を作成します。{% endif %}
