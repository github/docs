---
ms.openlocfilehash: 224ce401421d3af0e9afa5976695c95ed219a7b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109179"
---
## {% data variables.product.prodname_copilot %} の設定を {% data variables.product.prodname_dotcom_the_website %} で構成する

アクティブな {% data variables.product.prodname_copilot %}試用版またはサブスクリプションがある場合、[{% data variables.product.prodname_copilot %} 設定](https://github.com/settings/copilot)で {% data variables.product.prodname_dotcom %} 上の個人用アカウントの {% data variables.product.prodname_copilot %} 設定を調整できます。 この設定は、{% data variables.product.prodname_copilot %} を使うすべての場所に適用されます。 {% data variables.product.prodname_copilot %} が提示する候補と、{% data variables.product.company_short %} がテレメトリ データを使う方法を構成できます。

## 重複検出の有効化または無効化

{% data variables.product.prodname_copilot %} には、{% data variables.product.prodname_dotcom %} のパブリック コードと一致するコード候補を検出するフィルターが含まれています。 フィルターを有効または無効にすることを選択できます。 フィルターが有効になっていると、{% data variables.product.prodname_copilot %} によって、周囲の約 150 文字のコードに関するコード候補が、{% data variables.product.prodname_dotcom %} でのパブリック コードに対してチェックされます。 一致または近い一致がある場合、候補は表示されません。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. **[Suggestions matching public code]\(公開コードに一致する候補\)** でドロップダウン メニューを選択し、 **[Allow]\(許可\)** をクリックして公開コードに一致する候補を許可するか、 **[Block]\(ブロック\)** をクリックして公開コードに一致する候補をブロックします。
  ![重複検出オプションのスクリーンショット](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

## テレメトリの有効化または無効化

ユーザー設定を調整することで、GitHub によってコード スニペットを収集して保持し、さらに処理して Microsoft や OpenAI と共有するかどうかを選択できます。 テレメトリの設定に応じて {% data variables.product.prodname_copilot %} で収集できるデータについて詳しくは、「[{% data variables.product.company_short %} 追加製品および機能の利用規約](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)」と [{% data variables.product.prodname_copilot %} のプライバシーの FAQ](https://github.com/features/copilot/#faq-privacy) に関するページをご覧ください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. {% data variables.product.prodname_dotcom %} でテレメトリデータの使用を許可または禁止するには、 **[{% data variables.product.prodname_dotcom %} で製品向上のためにコード スニペットを使用することを許可する\]** をオンまたはオフにします。
  ![テレメトリ オプションのスクリーンショット](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## 参考資料

- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot/#faq)
