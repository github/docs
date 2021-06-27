---
title: アプライアンスのコードスキャンを設定する
shortTitle: コードスキャンを設定する
intro: '{% data variables.product.product_location %} の {% data variables.product.prodname_code_scanning %} を有効化、設定、および無効化できます。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、コードの脆弱性やエラーをスキャンできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

### {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_capc %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The table below summarizes all the options available to users when you configure {% data variables.product.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

### Prerequisites for {% data variables.product.prodname_code_scanning %}

- A license for {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion ver_gt "enterprise-server@3.0" %} (see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

### {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を実行する

#### セルフホストランナーを設定する

{% data variables.product.prodname_ghe_server %} は、{% data variables.product.prodname_actions %} ワークフローを使用して {% data variables.product.prodname_code_scanning %} を実行できます。 まず、環境内に 1 つ以上のセルフホスト {% data variables.product.prodname_actions %} ランナーをプロビジョニングする必要があります。 セルフホストランナーは、リポジトリ、Organization、または Enterprise アカウントレベルでプロビジョニングできます。 詳しい情報については、「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホストランナーを追加する](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_codeql %} アクションを実行するために使用するセルフホストランナーの PATH 変数に Git が含まれていることを確認する必要があります。

#### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

{% data variables.product.prodname_codeql %} アクションは {% data variables.product.prodname_ghe_server %} のインストールに含まれています。 {% data variables.product.prodname_ghe_server %} がインターネットにアクセス可能な場合、アクションは分析の実行に必要な {% data variables.product.prodname_codeql %} バンドルを自動的にダウンロードします。 または、同期ツールを使用して、{% data variables.product.prodname_codeql %} 分析バンドルをローカルで使用できるようにすることもできます。 詳しい情報については、以下の「[インターネットにアクセスできないサーバーで {% data variables.product.prodname_codeql %} 分析を設定する](#configuring-codeql-analysis-on-a-server-without-internet-access)」を参照してください。

{% data variables.product.prodname_github_connect %} を設定することで、{% data variables.product.prodname_code_scanning %} のユーザがサードパーティのアクションを利用できるようにすることもできます。 詳しい情報については、以下の「[{% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)」を参照してください。

#### インターネットアクセスのないサーバーで {% data variables.product.prodname_codeql %} 分析を設定する
{% data variables.product.prodname_ghe_server %} を実行しているサーバーがインターネットに接続されておらず、ユーザがリポジトリに対して {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を有効にできるようにする場合は、{% data variables.product.prodname_codeql %} アクション同期ツールを使用して {% data variables.product.prodname_codeql %} 分析バンドルを {% data variables.product.prodname_dotcom_the_website %} からサーバーにコピーする必要があります。 ツールおよびツールの使用方法の詳細は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) で確認できます。

{% data variables.product.prodname_codeql %} アクション同期ツールを設定すると、それを使用して、{% data variables.product.prodname_codeql %} アクションの最新リリースと関連する {% data variables.product.prodname_codeql %} 分析バンドルを同期できます。 これらは {% data variables.product.prodname_ghe_server %} と互換性があります。

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
{% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_code_scanning %} を実行するには、適切なアクションがローカルで使用可能である必要があります。 アクションは 3 つの方法で利用可能にすることができます。

- **推奨**: [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) を使用して、{% data variables.product.prodname_dotcom_the_website %} からアクションを自動的にダウンロードできます。 インスタンスをホストするマシンは、{% data variables.product.prodname_dotcom_the_website %} にアクセス可能である必要があります。 この方法で、最新のソフトウェアを自動的に入手できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)」を参照してください。
- {% data variables.product.prodname_codeql_workflow %} を使用する場合は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) にある {% data variables.product.prodname_codeql %} Action 同期ツールを使用して、リポジトリを {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.prodname_ghe_server %} に同期できます。 コンピューターで {% data variables.product.product_location %} と {% data variables.product.prodname_dotcom_the_website %} の両方に同時にアクセスできる限り、{% data variables.product.product_location %} または {% data variables.product.prodname_actions %} ランナーがインターネットにアクセスできるかどうかに関係なく、このツールを使用できます。
- アクションを含む {% data variables.product.prodname_dotcom_the_website %} リポジトリのクローンを作成することにより、サーバー上にアクションのリポジトリのローカルコピーを作成できます。 たとえば、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} のアクションを使用する場合は、インスタンスに `github/codeql-action` というリポジトリを作成し、{% data variables.product.prodname_dotcom_the_website %} から[リポジトリ](https://github.com/github/codeql-action)のクローンを作成して、そのリポジトリをインスタンスの `github/codeql-action` リポジトリにプッシュできます。 また、{% data variables.product.prodname_dotcom_the_website %} のリポジトリからリリースをダウンロードし、リリースとしてインスタンスの `github/codeql-action` リポジトリにアップロードする必要があります。
{% endif %}

#### {% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する
1. {% data variables.product.prodname_dotcom_the_website %} からオンデマンドでアクションワークフローをダウンロードする場合は、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を有効化する](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)」を参照してください。
2. また、{% data variables.product.product_location %} に対して {% data variables.product.prodname_actions %} を有効化する必要があります。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} を使ってみる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。
3. 次のステップは、{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.prodname_dotcom_the_website %} に対するアクションへのアクセスを設定することです。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。
4. セルフホストランナーをリポジトリ、Organization、または Enterprise アカウントに追加します。 詳しい情報については「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

### {% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行する
{% data variables.product.prodname_actions %} を使用しない場合は、{% data variables.product.prodname_codeql_runner %} を使用して {% data variables.product.prodname_code_scanning %} を実行できます。

{% data variables.product.prodname_codeql_runner %} は、サードパーティの CI/CD システムに追加できるコマンドラインツールです。 このツールは、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウトに対して {% data variables.product.prodname_codeql %} 分析を実行します。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を CI システムで実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)」を参照してください。
