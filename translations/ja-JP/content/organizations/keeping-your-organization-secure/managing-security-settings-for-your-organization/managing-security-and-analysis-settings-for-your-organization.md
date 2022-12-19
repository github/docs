---
title: Organization のセキュリティおよび分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上の Organization のプロジェクトでコードを保護し分析する機能を管理できます。'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107702'
---
## セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用して、Organization のリポジトリを保護できます。 Organization でメンバーが作成する既存または新規のリポジトリすべてについて、セキュリティおよび分析機能を管理できます。 {% ifversion ghec %}{% data variables.product.prodname_GH_advanced_security %} のライセンスを持っている場合は、これらの機能へのアクセスを管理することもできます。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}{% data variables.product.prodname_GH_advanced_security %}のライセンス付きで{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationは、それらの機能へのアクセスも管理できます。 詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)を参照してください。{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## セキュリティと分析の設定を表示する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

表示されるページでは、Organization 内のリポジトリのすべてのセキュリティおよび分析機能を有効化または無効化にできます。

{% ifversion ghec %}Organization が {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Enterprise に属している場合、ページには {% data variables.product.prodname_advanced_security %} 機能を有効化または無効化するオプションも含まれます。 {% data variables.product.prodname_GH_advanced_security %} を使用するリポジトリは、ページの下部に一覧表示されます。{% endif %}

{% ifversion ghes %}{% data variables.product.prodname_GH_advanced_security %} のライセンスを持っている場合、ページには {% data variables.product.prodname_advanced_security %} 機能を有効化または無効化するオプションも含まれます。 {% data variables.product.prodname_GH_advanced_security %} を使用するリポジトリは、ページの下部に一覧表示されます。{% endif %}

{% ifversion ghae %}このページには、{% data variables.product.prodname_advanced_security %} 機能を有効または無効にするオプションも含まれています。 {% data variables.product.prodname_GH_advanced_security %} を使用するリポジトリは、ページの下部に一覧表示されます。{% endif %}

## 既存のすべてのリポジトリの機能を有効または無効にする

すべてのリポジトリの機能を有効化または無効化できます。 {% ifversion fpt or ghec %}変更が Organization 内のリポジトリに与える影響は、リポジトリの可視性によって決まります。

- **依存関係グラフ** - この機能はパブリック リポジトリに対して常に有効になっているため、変更はプライベート リポジトリにのみ影響します。
- **{% data variables.product.prodname_dependabot_alerts %}** - 変更はすべてのリポジトリに影響します。
- **{% data variables.product.prodname_dependabot_security_updates %}** - 変更はすべてのリポジトリに影響します。
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** - {% data variables.product.prodname_GH_advanced_security %} および関連機能は常にパブリック リポジトリに対して有効になっているため、変更はプライベート リポジトリにのみ影響します。
- **{% data variables.product.prodname_secret_scanning_caps %}** - 変更は、{% data variables.product.prodname_GH_advanced_security %}も有効になっているリポジトリにのみ影響します。 このオプションは、{% data variables.product.prodname_secret_scanning_GHAS %}が有効になっているかどうかを制御します。 {% data variables.product.prodname_secret_scanning_partner_caps %}は、すべてのパブリックリポジトリ上で常に実行されます。
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

**注:** "Organization のポリシー設定が原因で、GitHub Advanced Security を有効にできません" というエラーが発生した場合は、Enterprise 管理者に問い合わせて、Enterprise の GitHub Advanced Security ポリシーを変更するように依頼してください。 詳しくは、「[Enterprise で Advanced Security のポリシーを適用する](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)」を参照してください。
{% endnote %} {% endif %}

1. 組織のセキュリティと分析の設定に移動します。 詳細については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
2. [Code security and analysis] の下で機能の右にある **[Disable all]** または **[Enable all]** をクリックします。 {% ifversion ghes or ghec %}{% data variables.product.prodname_GH_advanced_security %} ライセンスに空きシートがない場合、"{% data variables.product.prodname_GH_advanced_security %}" のコントロールは無効になります。{% endif %} {% ifversion fpt %} ![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} ![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png){% endif %} {% ifversion ghes %} ![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタン](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %}![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png){% endif %} {% ifversion fpt or ghec %}
3. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。
   {% ifversion fpt or ghec %}![新しいリポジトリの [既定で有効にする] オプション](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png){% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. **[機能の無効化]** または **[機能の有効化]** をクリックし、Organization のすべてのリポジトリに対してこの機能を無効または有効にします。
   {% ifversion fpt or ghec %}![機能を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png){% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. **[すべて有効にする]/[すべて無効にする]** または **[対象リポジトリの有効化]/[対象リポジトリの無効化]** をクリックして、変更を確定します。
   ![Organization 内の適格なすべてのリポジトリの機能を有効化するボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## 新しいリポジトリが追加されたときに機能を自動的に有効化または無効化する

1. 組織のセキュリティと分析の設定に移動します。 詳細については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
2. "Code security and analysis（コードのセキュリティと分析）"の下で、機能の右から、Organizationの新しいリポジトリ{% ifversion fpt or ghec %}、もしくはすべての新しいプライベートリポジトリ{% endif %}でデフォルトでこの機能を有効化もしくは無効化してください。
   {% ifversion fpt or ghec %} ![新しいリポジトリの機能を有効にするチェックボックスのスクリーンショット](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![新しいリポジトリの機能を有効にするチェックボックスのスクリーンショット](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![新しいリポジトリに対して機能を有効にするチェックボックスのスクリーンショット](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## {% data variables.product.prodname_dependabot %} のプライベート依存関係へのアクセスを許可する

{% data variables.product.prodname_dependabot %} は、プロジェクト内の古い依存関係参照をチェックし、それらを更新するためのプルリクエストを自動的に生成できます。 これを行うには、{% data variables.product.prodname_dependabot %} がすべてのターゲット依存関係ファイルにアクセスできる必要があります。 通常、1 つ以上の依存関係にアクセスできない場合、バージョン更新は失敗します。 詳細については、「[{% data variables.product.prodname_dependabot %} のバージョン アップデートについて](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。

デフォルトでは、{% data variables.product.prodname_dependabot %} はプライベートリポジトリまたはプライベートパッケージレジストリにある依存関係を更新できません。 ただし、依存関係が、その依存関係を使用するプロジェクトと同じ Organization 内のプライベート {% data variables.product.prodname_dotcom %} リポジトリにある場合は、ホストリポジトリへのアクセスを許可することで、{% data variables.product.prodname_dependabot %} がバージョンを正常に更新できるようにすることができます。

コードがプライベートレジストリ内のパッケージに依存している場合は、リポジトリレベルでこれを設定することにより、{% data variables.product.prodname_dependabot %} がこれらの依存関係のバージョンを更新できるようにすることができます。 これを行うには、リポジトリの _dependabot.yml_ ファイルに認証の詳細を追加します。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)」を参照してください。

{% data variables.product.prodname_dependabot %} がプライベート {% data variables.product.prodname_dotcom %} リポジトリにアクセスできるようにするには：

1. 組織のセキュリティと分析の設定に移動します。 詳細については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
1. [{% data variables.product.prodname_dependabot %} プライベート リポジトリ アクセス] で、 **[プライベート リポジトリの追加]** または **[内部およびプライベート リポジトリの追加]** をクリックします。
   ![[リポジトリの追加] ボタン](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. 許可するリポジトリの名前の入力を開始します。
   ![フィルタされたドロップダウンを持つリポジトリ検索フィールド](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. 許可するリポジトリをクリックします。

1. あるいは、リストからリポジトリを差k除するには、リポジトリの右の{% octicon "x" aria-label="The X icon" %}をクリックします。
   ![リポジトリを削除するための [X] ボタン](/assets/images/help/organizations/dependabot-private-repository-list.png){% endif %}

{% ifversion ghes or ghec %}

## Organization 内の個々のリポジトリから {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除する

リポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスは、[設定] タブで管理できます。詳細については、「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。 ただし、Organization の [Settings] タブから、リポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を無効にすることもできます。

1. 組織のセキュリティと分析の設定に移動します。 詳細については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
1. {% data variables.product.prodname_GH_advanced_security %} が有効になっている Organization 内のすべてのリポジトリのリストを表示するには、「{% data variables.product.prodname_GH_advanced_security %} リポジトリ」セクションまでスクロールします。
  ![[{% data variables.product.prodname_GH_advanced_security %} リポジトリ] セクション](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png)テーブルには、各リポジトリの一意のコミッターがリストされています。 これは、{% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除することによりライセンスで解放できるシートの数です。 詳細については、「[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」(GitHub Advanced Security の課金について) を参照してください。
1. リポジトリから {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除し、リポジトリ固有のコミッターが使用するシートを解放するには、隣接する {% octicon "x" aria-label="X symbol" %} をクリックします。
1. 確認ダイアログで、 **[リポジトリの削除]** をクリックして、{% data variables.product.prodname_GH_advanced_security %} の機能へのアクセスを削除します。

{% note %}

**注:** リポジトリの {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除する場合は、影響を受ける開発チームと連絡を取り、変更が意図されたものかを確認する必要があります。 これにより、失敗したコードスキャンの実行をデバッグすることに時間を費すことがなくなります。

{% endnote %}

{% endif %}

## 参考資料

- 「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」{% ifversion not fpt %}
- 「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」{% endif %}{% ifversion not ghae %}
- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph){% endif %}
- [サプライ チェーンのセキュリティについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
