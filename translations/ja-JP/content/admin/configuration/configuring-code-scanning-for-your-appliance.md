---
title: アプライアンスのコードスキャンを設定する
shortTitle: コードスキャンを設定する
intro: '{% data variables.product.product_location_enterprise %} の {% data variables.product.prodname_code_scanning %} を有効化、設定、および無効化できます。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、コードの脆弱性やエラーをスキャンできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %}について

{% data reusables.code-scanning.about-code-scanning %}

以下の表は、{% data variables.product.prodname_code_scanning %} で利用可能な分析タイプをまとめたもので、個々のリポジトリで機能を有効化するためのリンクを示しています。

{% data reusables.code-scanning.enabling-options %}

{% data variables.product.product_location_enterprise %} のユーザがリポジトリで {% data variables.product.prodname_code_scanning %} を有効化して使用できるようにするには、サイト管理者として、アプライアンス全体でこの機能を有効にする必要があります。

### アプライアンスで {% data variables.product.prodname_code_scanning %} が有効かどうかを確認する方法

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 左のサイドバーに **{% data variables.product.prodname_advanced_security %}** エントリがあるかどうかを確認します。 ![[Advanced Security] サイドバー](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

サイドバーに **{% data variables.product.prodname_advanced_security %}** が表示されない場合は、ライセンスに {% data variables.product.prodname_code_scanning %} を含む {% data variables.product.prodname_advanced_security %} 機能のサポートが含まれていないということです。 {% data variables.product.prodname_advanced_security %} ライセンスを使用すると、リポジトリとコードのセキュリティを強化するのに役立つ機能にアクセスできます。

### {% data variables.product.prodname_code_scanning %} の有効化

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. [{% data variables.product.prodname_advanced_security %}] で、[**{% data variables.product.prodname_code_scanning_capc %}**] をクリックします。 ![{% data variables.product.prodname_code_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}


### {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を実行する

#### セルフホストランナーを設定する

{% data variables.product.prodname_actions %} ベータに登録している場合、{% data variables.product.prodname_ghe_server %} は {% data variables.product.prodname_actions %} ワークフローを使用して {% data variables.product.prodname_code_scanning %} を実行できます。 まず、環境内に 1 つ以上のセルフホスト {% data variables.product.prodname_actions %} ランナーをプロビジョニングする必要があります。 セルフホストランナーは、リポジトリ、Organization、または Enterprise アカウントレベルでプロビジョニングできます。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

#### アクションをプロビジョニングする
{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を実行するには、適切なアクションがローカルで使用可能である必要があります。 アクションを 3 つの方法で利用可能にすることができます。

- **推奨** [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) を使用して、{% data variables.product.prodname_dotcom_the_website %} からアクションを自動的にダウンロードできます。 インスタンスをホストするマシンは、{% data variables.product.prodname_dotcom_the_website %} にアクセス可能である必要があります。 この方法で、最新のソフトウェアを自動的に入手できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)」を参照してください。
- {% data variables.product.prodname_codeql_workflow %} を使用する場合は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) にある {% data variables.product.prodname_codeql %} Action 同期ツールを使用して、リポジトリを {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.prodname_ghe_server %} に同期できます。 コンピューターで {% data variables.product.product_location_enterprise %} と {% data variables.product.prodname_dotcom_the_website %} の両方に同時にアクセスできる限り、{% data variables.product.product_location_enterprise %} または {% data variables.product.prodname_actions %} ランナーがインターネットにアクセスできるかどうかに関係なく、このツールを使用できます。
- アクションで {% data variables.product.prodname_dotcom_the_website %} リポジトリをクローンすることにより、サーバーにアクションのリポジトリのローカルコピーを作成できます。 たとえば、{% data variables.product.prodname_codeql %} アクションを使用する場合、インスタンス `github/codeql-action` と呼ばれるリポジトリを作成し、{% data variables.product.prodname_dotcom_the_website %} から[リポジトリ](https://github.com/github/codeql-action)を複製して、そのリポジトリをインスタンスの `github/codeql-action` リポジトリにプッシュできます。 また、{% data variables.product.prodname_dotcom_the_website %} のリポジトリからリリースをダウンロードし、リリースとしてインスタンスの `github/codeql-action` リポジトリにアップロードする必要があります。


##### {% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する

1. {% data variables.product.prodname_dotcom_the_website %} からオンデマンドでアクションワークフローをダウンロードする場合は、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を有効化する](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)」を参照してください。
2. また、{% data variables.product.product_location_enterprise %} に対して {% data variables.product.prodname_actions %} を有効化する必要があります。 詳しい情報については、「[{% data variables.product.prodname_actions %} の有効化とストレージの設定](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)」をご覧ください。
3. 次のステップは、{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.prodname_dotcom_the_website %} に対するアクションへのアクセスを設定することです。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。
4. セルフホストランナーをリポジトリ、Organization、または Enterprise アカウントに追加します。 詳しい情報については「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

セルフホストランナーを設定した後、ユーザは {% data variables.product.product_location_enterprise %} の個々のリポジトリに対して {% data variables.product.prodname_code_scanning %} を有効化できます。 デフォルトの {% data variables.product.prodname_code_scanning %} ワークフローは、`on.push` イベントを使用して、ワークフローファイルを含むブランチへのプッシュごとにコードスキャンをトリガーします。

### {% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行する
Organization が {% data variables.product.prodname_actions %} のベータに参加していない場合、または {% data variables.product.prodname_actions %} を使用しない場合は、{% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行できます。

{% data variables.product.prodname_codeql_runner %} は、サードパーティの CI/CD システムに追加できるコマンドラインツールです。 このツールは、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウトに対して {% data variables.product.prodname_codeql %} 分析を実行します。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を CI システムで実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)」を参照してください。

### {% data variables.product.prodname_code_scanning %} を無効にする

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. [{% data variables.product.prodname_advanced_security %}] で、[**{% data variables.product.prodname_code_scanning_capc %}**] を選択解除します。 ![{% data variables.product.prodname_code_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
