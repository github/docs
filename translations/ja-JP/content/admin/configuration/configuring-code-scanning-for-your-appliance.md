---
title: アプライアンスのコードスキャンを設定する
shortTitle: コードスキャンを設定する
intro: '{% data variables.product.product_location %} の {% data variables.product.prodname_code_scanning %} を有効化、設定、および無効化できます。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、コードの脆弱性やエラーをスキャンできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

以下の表は、{% data variables.product.prodname_code_scanning %} で利用可能な分析タイプをまとめたもので、個々のリポジトリで機能を有効化するためのリンクを示しています。

{% data reusables.code-scanning.enabling-options %}

{% data variables.product.product_location %} のユーザがリポジトリで {% data variables.product.prodname_code_scanning %} を有効化して使用できるようにするには、サイト管理者として、アプライアンス全体でこの機能を有効にする必要があります。

### アプライアンスで {% data variables.product.prodname_code_scanning %} が有効かどうかを確認する方法

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 左のサイドバーに **{% data variables.product.prodname_advanced_security %}** エントリがあるかどうかを確認します。 ![[Advanced Security] サイドバー](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}

### {% data variables.product.prodname_code_scanning %} の有効化

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. [
{% data variables.product.prodname_advanced_security %}] の下にある [**{% data variables.product.prodname_code_scanning_capc %}**] をクリックします。
![{% data variables.product.prodname_code_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を実行する

#### セルフホストランナーを設定する

{% data variables.product.prodname_ghe_server %} は、{% data variables.product.prodname_actions %} ワークフローを使用して {% data variables.product.prodname_code_scanning %} を実行できます。 まず、環境内に 1 つ以上のセルフホスト {% data variables.product.prodname_actions %} ランナーをプロビジョニングする必要があります。 セルフホストランナーは、リポジトリ、Organization、または Enterprise アカウントレベルでプロビジョニングできます。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_codeql %} アクションを実行するために使用するセルフホストランナーの PATH 変数に Git が含まれていることを確認する必要があります。

#### アクションをプロビジョニングする

{% if currentVersion ver_gt "enterprise-server@2.22" %}
If you want to use actions to run
{% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

The {% data variables.product.prodname_codeql %} action is included in your installation of {% data variables.product.prodname_ghe_server %}. If {% data variables.product.prodname_ghe_server %} has access to the internet, the action will automatically download the {% data variables.product.prodname_codeql %} bundle required to perform analysis. Alternatively, you can use a synchronization tool to make the {% data variables.product.prodname_codeql %} analysis bundle available locally. For more information, see "[Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access](#configuring-codeql-analysis-on-a-server-without-internet-access)" below.

You can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see "[Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" below.

#### Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access
If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, and you want to allow users to enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for their repositories, you must use the {% data variables.product.prodname_codeql %} action sync tool to copy the {% data variables.product.prodname_codeql %} analysis bundle from {% data variables.product.prodname_dotcom_the_website %} to your server. ツールおよびツールの使用方法の詳細は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) で確認できます。

If you set up the {% data variables.product.prodname_codeql %} action sync tool, you can use it to sync the latest releases of the {% data variables.product.prodname_codeql %} action and associated {% data variables.product.prodname_codeql %} analysis bundle. These are compatible with {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
To run
{% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %}, the appropriate actions must be available locally. アクションは 3 つの方法で利用可能にすることができます。

- **推奨**: [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) を使用して、{% data variables.product.prodname_dotcom_the_website %} からアクションを自動的にダウンロードできます。 インスタンスをホストするマシンは、{% data variables.product.prodname_dotcom_the_website %} にアクセス可能である必要があります。 この方法で、最新のソフトウェアを自動的に入手できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)」を参照してください。
- {% data variables.product.prodname_codeql_workflow %} を使用する場合は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) にある {% data variables.product.prodname_codeql %} Action 同期ツールを使用して、リポジトリを {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.prodname_ghe_server %} に同期できます。 コンピューターで {% data variables.product.product_location %} と {% data variables.product.prodname_dotcom_the_website %} の両方に同時にアクセスできる限り、{% data variables.product.product_location %} または {% data variables.product.prodname_actions %} ランナーがインターネットにアクセスできるかどうかに関係なく、このツールを使用できます。
- アクションを含む {% data variables.product.prodname_dotcom_the_website %} リポジトリのクローンを作成することにより、サーバー上にアクションのリポジトリのローカルコピーを作成できます。 たとえば、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} のアクションを使用する場合は、インスタンスに `github/codeql-action` というリポジトリを作成し、{% data variables.product.prodname_dotcom_the_website %} から[リポジトリ](https://github.com/github/codeql-action)のクローンを作成して、そのリポジトリをインスタンスの `github/codeql-action` リポジトリにプッシュできます。 また、{% data variables.product.prodname_dotcom_the_website %} のリポジトリからリリースをダウンロードし、リリースとしてインスタンスの `github/codeql-action` リポジトリにアップロードする必要があります。
{% endif %}

#### {% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する
1. {% data variables.product.prodname_dotcom_the_website %} からオンデマンドでアクションワークフローをダウンロードする場合は、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を有効化する](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)」を参照してください。
2. また、{% data variables.product.product_location %} に対して {% data variables.product.prodname_actions %} を有効化する必要があります。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} を使ってみる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。
3. 次のステップは、{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.prodname_dotcom_the_website %} に対するアクションへのアクセスを設定することです。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。
4. セルフホストランナーをリポジトリ、Organization、または Enterprise アカウントに追加します。 詳しい情報については「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

#### 個々のリポジトリのコードスキャンを有効にする
セルフホストランナーを設定し、{% if currentVersion == "enterprise-server@2.22" %}アクションをプロビジョニングした後、{% endif %}ユーザは {% data variables.product.product_location %} 上の個々のリポジトリに対して {% data variables.product.prodname_code_scanning %} を有効にできます。 For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)."

### {% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行する
{% data variables.product.prodname_actions %} を使用しない場合は、{% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行できます。

{% data variables.product.prodname_codeql_runner %} は、サードパーティの CI/CD システムに追加できるコマンドラインツールです。 このツールは、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウトに対して {% data variables.product.prodname_codeql %} 分析を実行します。 For more information, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."

### {% data variables.product.prodname_code_scanning %} を無効にする

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. [
[{% data variables.product.prodname_advanced_security %}] の下にある [**{% data variables.product.prodname_code_scanning_capc %}**] を選択解除します。
![{% data variables.product.prodname_code_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}

### 管理シェル (SSH) を介した {% data variables.product.prodname_code_scanning %} の有効化または無効化

{% data variables.product.product_location %} でプログラムによって {% data variables.product.prodname_code_scanning %} を有効化または無効化できます。 たとえば、ステージングまたはシステム災害復旧に対してインスタンスをデプロイするときに、infrastructure-as-code ツールを使用して {% data variables.product.prodname_code_scanning %} を有効化できます。

{% data variables.product.prodname_ghe_server %} の管理シェルおよびコマンドラインユーティリティの詳細については、「[管理シェル (SSH) へのアクセス](/admin/configuration/accessing-the-administrative-shell-ssh)」および「[コマンドラインユーティリティ](/admin/configuration/command-line-utilities#ghe-config)」を参照してください。

1. {% data variables.product.product_location %}にSSHでアクセスしてください。
1. {% data variables.product.prodname_code_scanning %} を有効化します。
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. 必要に応じて、{% data variables.product.prodname_code_scanning %} を無効化します。
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. 設定を適用します。
    ```shell
  ghe-config-apply
  ```
