---
ms.openlocfilehash: d36caae48a389b9b84d9659277996834ec58f3ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147683701"
---
1. {% data variables.product.prodname_secret_scanning_caps %} の [プッシュ保護] の下にある **[すべて有効にする]** をクリックします。
   ![Organization の {% data variables.product.prodname_secret_scanning %} のプッシュ保護を有効にする方法を示すスクリーンショット](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. 必要に応じて、[{% data variables.product.prodname_secret_scanning %} に追加されたプライベート リポジトリに対して自動的に有効にする] をクリックしてください。{% ifversion push-protection-custom-link-orgs %}
1. メンバーがシークレットの push を試みると表示されるメッセージ内にカスタム リンクを含めるには、必要に応じて、 **[コミットがブロックされたらリソース リンクを CLI と Web UI に追加する]** を選んで、URL を入力したら **[リンクの保存]** をクリックしてください。
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![カスタム リンクを有効にするためのチェックボックスとテキスト フィールドを示すスクリーンショット](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}