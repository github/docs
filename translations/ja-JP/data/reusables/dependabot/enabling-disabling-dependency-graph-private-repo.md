---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145138795"
---
リポジトリ管理者は、プライベートリポジトリに対して依存関係グラフを有効または無効にすることができます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの依存関係グラフを有効または無効にすることもできます。 詳細については、「[依存関係グラフの構成](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. リポジトリ データへの読み取りアクセスを {% data variables.product.product_name %} に許可して依存関係グラフを有効にすることに関するメッセージを読んだうえで、[依存関係グラフ] の隣にある **[有効]** をクリックします。
   ![依存関係グラフの [有効] ボタン](/assets/images/help/repository/dependency-graph-enable-button.png) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} [コード セキュリティと分析] の設定ページで、[依存関係グラフ] の横にある **[無効]** をクリックすることで、いつでも依存関係グラフを無効にすることができます。{% else %} [セキュリティと分析]。{% endif %}
