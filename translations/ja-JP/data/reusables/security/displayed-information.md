---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135688"
---
既存のリポジトリで1つ以上のセキュリティ及び分析機能を有効化すると、数分のうちに{% data variables.product.prodname_dotcom %}上に結果が表示されます。

- 既存のすべてのリポジトリは、選択された設定を持ちます。
- 新しいリポジトリのチェックボックスをオンにした場合、新しいリポジトリは選択した構成に従います。{% ifversion GH-advisory-db-supports-malware %}
- 関連するサービスに適用するマニフェストファイルをスキャンするために権限を使用します。
- 有効化すると、依存関係グラフに依存関係情報が表示されます。
- 有効化すると、{% data variables.product.prodname_dotcom %} により、脆弱な依存関係またはマルウェアに対して {% data variables.product.prodname_dependabot_alerts %}が生成されます。{% endif %}{% ifversion fpt or ghec or ghes %}
- 有効化すると、{% data variables.product.prodname_dependabot %} セキュリティ更新プログラムは、{% data variables.product.prodname_dependabot_alerts %} がトリガーされたときに、脆弱な依存関係をアップグレードするための pull request を作成します。{% endif %}
