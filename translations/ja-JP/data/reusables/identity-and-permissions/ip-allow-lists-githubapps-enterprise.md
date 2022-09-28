---
ms.openlocfilehash: 130c705dad9367dbecb144ac281e8e58fa6d6cb7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880373"
---
許可リストを使っているなら、Enterpriseにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかも選択できます。 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

作成した {% data variables.product.prodname_github_app %} の許可リストを作成する方法の詳細については、「[GitHub App に対する許可 IP アドレスを管理する](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)」を参照してください。

{% data variables.product.prodname_github_apps %}のIPアドレスの自動追加を有効化するには:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. [IP 許可リスト] で、 **[インストール済みの GitHub App の IP 許可リストの構成を有効にする]** を選択します。
  ![GitHub App IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. **[保存]** をクリックします。
