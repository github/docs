---
title: Organization のセキュリティおよび分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上の Organization のプロジェクトでコードを保護し分析する機能を管理できます。'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

### セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用して、Organization のリポジトリを保護できます。 Organization でメンバーが作成する既存または新規のリポジトリすべてについて、セキュリティおよび分析機能を管理できます。 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_GH_advanced_security %} のライセンスをお持ちの場合は、これらの機能へのアクセスを管理することもできます。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### セキュリティと分析の設定を表示する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}

表示されるページでは、Organization 内のリポジトリのすべてのセキュリティおよび分析機能を有効化または無効化にできます。

{% if currentVersion == "free-pro-team@latest" %}Organization が {% data variables.product.prodname_GH_advanced_security %} のライセンスを持つ Enterprise に属している場合、ページには {% data variables.product.prodname_advanced_security %} 機能を有効化または無効化するオプションも含まれます。 {% data variables.product.prodname_GH_advanced_security %} を使用するリポジトリは、ページの下部に一覧表示されます。{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_GH_advanced_security %} のライセンスをお持ちの場合、ページには {% data variables.product.prodname_advanced_security %} 機能を有効化または無効化するオプションも含まれています。 {% data variables.product.prodname_GH_advanced_security %} を使用するリポジトリは、ページの下部に一覧表示されます。{% endif %}

{% if currentVersion == "github-ae@latest" %}このページには、{% data variables.product.prodname_advanced_security %} 機能を有効化または無効化するオプションも含まれます。{% endif %}

### すべての既存のリポジトリに対して機能を有効化または無効化する

すべてのリポジトリの機能を有効化または無効化できます。 {% if currentVersion == "free-pro-team@latest" %}変更が Organization 内のリポジトリに与える影響は、リポジトリの可視性によって決まります。

- **依存関係グラフ** - この機能はパブリックリポジトリに対して常に有効になっているため、変更はプライベートリポジトリにのみ影響します。
- **{% data variables.product.prodname_dependabot_alerts %}** - 変更はすべてのリポジトリに影響します。
- **{% data variables.product.prodname_dependabot_security_updates %}** - 変更はすべてのリポジトリに影響します。
- **{% data variables.product.prodname_GH_advanced_security %}** - {% data variables.product.prodname_GH_advanced_security %} および関連機能は常にパブリックリポジトリに対して有効になっているため、変更はプライベートリポジトリにのみ影響します。
- **{% data variables.product.prodname_secret_scanning_caps %}** - 変更は {% data variables.product.prodname_GH_advanced_security %} も有効になっているプライベートリポジトリにのみ影響します。 {% data variables.product.prodname_secret_scanning_caps %} は常にパブリックリポジトリに対して有効になっています。{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

1. Organization のセキュリティと分析の設定に移動します。 詳しい情報については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
2. [Configure security and analysis features] で、機能の右側にある [**Disable all**] または [**Enable**] をクリックします。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_GH_advanced_security %} のライセンスにシートがない場合、「{% data variables.product.prodname_GH_advanced_security %}」の制御は無効になります。{% endif %}
   {% if currentVersion == "free-pro-team@latest" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-dotcom.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@3.0" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/enterprise/3.0/organizations/security-and-analysis-disable-or-enable-all-ghas.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "enterprise-server@3.0" %}
3. オプションで、Organization の新しいリポジトリに対して機能をデフォルトで有効にすることもできます。
   {% if currentVersion == "free-pro-team@latest" %}
   ![新規のリポジトリの [Enable by default] オプション](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![新規のリポジトリの [Enable by default] オプション](/assets/images/enterprise/3.0/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "enterprise-server@3.0" %}
4. Organization のすべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。
   {% if currentVersion == "free-pro-team@latest" %}
   ![機能 を無効または有効にするボタン](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![機能 を無効または有効にするボタン](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-secret-scanning.png)
   {% endif %}
   {% endif %}
   {% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
3. **[Enable/Disable all]**あるいは**[Enable/Disable for eligible repositories]**をクリックして、変更を確認します。 ![Organization 内の適格なすべてのリポジトリの機能を有効化するボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png)
   {% endif %}

   {% data reusables.security.displayed-information %}

### 新しいリポジトリが追加されたときに機能を自動的に有効化または無効化する

1. Organization のセキュリティと分析の設定に移動します。 詳しい情報については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
2. [Configure security and analysis features]の下で、機能の右から、Organizatin中の新しいリポジトリ{% if currentVersion == "free-pro-team@latest" %}あるいはすべての新しいプライベートリポジトリ{% endif %}でデフォルトでその機能を有効または無効にします。
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox-dotcom.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.1" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/enterprise/3.1/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)
   {% endif %}
   {% if currentVersion == "enterprise-server@3.0" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/enterprise/3.0/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![新規のリポジトリに対して機能を有効または無効にするチェックボックス](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png)
   {% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### {% data variables.product.prodname_dependabot %} のプライベート依存関係へのアクセスを許可する

{% data variables.product.prodname_dependabot %} は、プロジェクト内の古い依存関係参照をチェックし、それらを更新するためのプルリクエストを自動的に生成できます。 これを行うには、{% data variables.product.prodname_dependabot %} がすべてのターゲット依存関係ファイルにアクセスできる必要があります。 通常、1 つ以上の依存関係にアクセスできない場合、バージョン更新は失敗します。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} バージョン更新について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。

デフォルトでは、{% data variables.product.prodname_dependabot %} はプライベートリポジトリまたはプライベートパッケージレジストリにある依存関係を更新できません。 ただし、依存関係が、その依存関係を使用するプロジェクトと同じ Organization 内のプライベート {% data variables.product.prodname_dotcom %} リポジトリにある場合は、ホストリポジトリへのアクセスを許可することで、{% data variables.product.prodname_dependabot %} がバージョンを正常に更新できるようにすることができます。

コードがプライベートレジストリ内のパッケージに依存している場合は、リポジトリレベルでこれを設定することにより、{% data variables.product.prodname_dependabot %} がこれらの依存関係のバージョンを更新できるようにすることができます。 これを行うには、リポジトリの _dependabot.yml_ ファイルに認証の詳細を追加します。 詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) 」を参照してください。

{% data variables.product.prodname_dependabot %} がプライベート {% data variables.product.prodname_dotcom %} リポジトリにアクセスできるようにするには：

1. Organization のセキュリティと分析の設定に移動します。 詳しい情報については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
1. [{% data variables.product.prodname_dependabot %} private repository access] の下で、[**Add private repositories**] または [**Add internal and private repositories**] をクリックします。 ![[Add repositories] ボタン](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. 許可するリポジトリの名前を入力します。 ![[Add repositories] ボタン](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. 許可するリポジトリをクリックします。

1. あるいは、リストからリポジトリを差k除するには、リポジトリの右の{% octicon "x" aria-label="The X icon" %}をクリックします。 ![リポジトリを削除する [X] ボタン](/assets/images/help/organizations/dependabot-private-repository-list.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### Organization 内の個々のリポジトリから {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除する

[Settings] タブから、リポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスを管理できます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。 ただし、Organization の [Settings] タブから、リポジトリの {% data variables.product.prodname_GH_advanced_security %} 機能を無効にすることもできます。

1. Organization のセキュリティと分析の設定に移動します。 詳しい情報については、「[セキュリティと分析の設定を表示する](#displaying-the-security-and-analysis-settings)」を参照してください。
1. {% data variables.product.prodname_GH_advanced_security %} が有効になっている Organization 内のすべてのリポジトリのリストを表示するには、「{% data variables.product.prodname_GH_advanced_security %} リポジトリ」セクションまでスクロールします。 ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) この表は、各リポジトリの一意のコミッターの数を示しています。 これは、{% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除することによりライセンスで解放できるシートの数です。 {% if currentVersion == "free-pro-team@latest" %}詳しい情報については「[{% data variables.product.prodname_GH_advanced_security %}のライセンスについて](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)」を参照してください。{% else %}詳しい情報については「[{% data variables.product.prodname_GH_advanced_security %}のライセンスについて](/admin/advanced-security/about-licensing-for-github-advanced-security)」を参照してください。{% endif %}
1. リポジトリから {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除し、リポジトリ固有のコミッターが使用するシートを解放するには、隣接する {% octicon "x" aria-label="X symbol" %} をクリックします。
1. 確認ダイアログで、[**Remove repository**] をクリックして、{% data variables.product.prodname_GH_advanced_security %} の機能へのアクセスを削除します。

{% note %}

**注釈:** リポジトリの {% data variables.product.prodname_GH_advanced_security %} へのアクセスを削除する場合は、影響を受ける開発チームと連絡を取り、変更が意図されたものかを確認する必要があります。 これにより、失敗したコードスキャンの実行をデバッグすることに時間を費すことがなくなります。

{% endnote %}

{% endif %}

### 参考リンク

- 「[リポジトリをセキュアにする](/code-security/getting-started/securing-your-repository)」
- 「[シークレットスキャンについて](/github/administering-a-repository/about-secret-scanning)」{% if currentVersion == "free-pro-team@latest" %}
- [依存関係を自動的に更新する](/github/administering-a-repository/keeping-your-dependencies-updated-automatically){% endif %}{% if currentVersion != "github-ae@latest" %}
- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- 「[プロジェクトの依存関係にある脆弱性を管理する](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)」{% endif %}
