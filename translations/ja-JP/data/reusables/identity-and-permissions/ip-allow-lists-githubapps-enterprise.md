---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180143"
---
許可リストを使っているなら、Enterpriseにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかも選択できます。 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

作成した {% data variables.product.prodname_github_app %} の許可リストを作成する方法の詳細については、「[GitHub App に対する許可 IP アドレスを管理する](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)」を参照してください。

{% data variables.product.prodname_github_apps %}のIPアドレスの自動追加を有効化するには:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. **[インストール済みの GitHub App の IP 許可リストの構成を有効にする]** を選びます。 OIDC で {% data variables.product.prodname_emus %} を使っている場合は、まず IP 許可リストの構成として **GitHub** を選んだら、 **[インストール済みの GitHub App の IP 許可リストの構成を有効にする]** を選びます。
  ![GitHub App IP アドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. **[保存]** をクリックします。
