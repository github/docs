---
title: GitHub Enterprise Serverを使い始める
intro: '{% data variables.location.product_location %} の設定と管理を開始します。'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163417'
---
このガイドでは、エンタープライズ管理者として {% data variables.location.product_location %} の設定、構成、管理を行う方法について説明します。

{% data variables.product.company_short %} には、{% data variables.product.prodname_enterprise %} をデプロイするための方法として、次の 2 つが用意されています。

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.prodname_ghe_cloud %} は、{% data variables.product.company_short %} でホストされます。 {% data variables.product.prodname_ghe_server %} は、自身のデータセンターまたはサポートされているクラウド プロバイダーにデプロイしてホストすることができます。

{% data variables.product.product_name %} の詳細については、「[{% data variables.product.prodname_ghe_server %} について](/admin/overview/about-github-enterprise-server)」を参照してください。

## パート 1: {% data variables.product.product_name %} のインストール方法
{% data variables.product.product_name %} を使い始めるには、Enterprise アカウントの作成とインスタンスのインストールを行い、初期設定に管理コンソールを使用し、インスタンスを構成し、支払いを管理する必要があります。 
### 1. Enterprise アカウントの作成
{% data variables.product.product_name %} をインストールする前に、[{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact) に連絡して、{% data variables.product.prodname_dotcom_the_website %} に Enterprise アカウントを作成できます。 {% data variables.product.prodname_dotcom_the_website %} の Enterprise アカウントは、支払いや、{% data variables.product.prodname_github_connect %} を介した {% data variables.product.prodname_dotcom_the_website %} での共有機能に役立ちます。  詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。
### 2. {% data variables.product.product_name %} のインストール
{% data variables.product.product_name %} を使い始めるには、選択した仮想化プラットフォームにアプライアンスをインストールする必要があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/admin/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。

### 3. 管理コンソールの使用
{% data variables.location.product_location %} を初めて起動する場合、管理コンソールを使用して、初期設定プロセスを実行します。 また、管理コンソールを使用して、ライセンス、ドメイン、認証、TLS などのインスタンス設定を管理することもできます。 詳細については、「[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)」 (管理コンソールへのアクセス) を参照してください。

### 4. {% data variables.location.product_location %} の構成
管理コンソールに加えて、サイト管理ダッシュボードと管理シェル (SSH) を使用して {% data variables.location.product_location %} を管理することもできます。 たとえば、アプリケーションやレート制限を構成したり、レポートを表示したり、コマンドライン ユーティリティを使用したりすることができます。 詳細については、「[Enterprise を設定する](/admin/configuration/configuring-your-enterprise)」を参照してください。

動的ホスト構成プロトコル (DHCP) を介して {% data variables.product.product_name %} で使用される既定のネットワーク設定を使用することも、仮想マシン コンソールを使用してネットワーク設定を構成することもできます。 プロキシサーバあるいはファイアウォールルールを設定することもできます。 詳細については、「[ネットワークを設定する](/admin/configuration/configuring-network-settings)」を参照してください。

### 5. 高可用性の構成
{% data variables.location.product_location %} を高可用性向けに構成して、ハードウェア障害やネットワークの停止による影響を最小限に抑えることができます。 詳細については、「[High Availability の設定](/admin/enterprise-management/configuring-high-availability)」を参照してください。

### 6. ステージング インスタンスのセットアップ
ステージング インスタンスを設定して、{% data variables.location.product_location %} に適用される前に変更をテストし、ディザスター リカバリーを計画し、更新プログラムを試すことができます。  詳細については、「[ステージング インスタンスのセットアップ](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)」を参照してください。

### 7. バックアップとディザスター リカバリーの指定
運用データを保護するには、{% data variables.product.prodname_enterprise_backup_utilities %} による {% data variables.location.product_location %} の自動バックアップを構成できます。 詳細については、「[Configuring backups on your appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)」 (アプライアンスでのバックアップの構成) を参照してください。

### 8. Enterprise の支払いの管理
Enterprise アカウントに接続されているすべての Organization および {% data variables.product.product_name %} インスタンスの支払いは、有料のすべての {% data variables.product.prodname_dotcom %}.com サービスに対する単一の請求料金として集計されます。 Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定にアクセスして管理することができます。 詳細については、「[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)」 (Enterprise の支払いの管理) を参照してください。

## パート 2: Team の編成と管理
Enterprise オーナーまたは管理者は、ユーザー、リポジトリ、Team、Organization のレベルの設定を管理できます。 Enterprise のメンバーの管理、Organization の作成と管理、リポジトリ管理に関するポリシーの設定、Team の作成と管理を行うことができます。

### 1. {% data variables.location.product_location %} のメンバーの管理
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Organization の作成
{% data reusables.getting-started.creating-organizations %}

### 3. Organization へのメンバーの追加
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. チームの作成
{% data reusables.getting-started.creating-teams %}

### 5. Organization とリポジトリのアクセス許可レベルの設定
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. リポジトリ管理ポリシーの適用
{% data reusables.getting-started.enforcing-repo-management-policies %}

## パート 3: 安全なビルド
{% data variables.location.product_location %} のセキュリティを強化するには、エンタープライズ メンバーの認証を構成し、ツールと監査ログを使用してコンプライアンスを維持し、組織のセキュリティおよび分析機能を構成し、必要に応じて {% data variables.product.prodname_GH_advanced_security %} を有効にすることができます。
### 1. Enterprise メンバーの認証
{% data variables.product.product_name %} の組み込み認証方法を使用するか、CAS、LDAP、SAML などの外部の認証プロバイダーを選び、既存のアカウントを統合して、{% data variables.location.product_location %} へのユーザー アクセスを一元的に管理することができます。 詳しくは、「[Enterprise の認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」をご覧ください。

また、Organization ごとに 2 要素認証を要求することもできます。 詳細については、「[Organization に 2 要素認証を要求する](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)」を参照してください。

### 2. コンプライアンスの維持
必要な状態チェックとコミット検証を実装して、Organization のコンプライアンス標準を適用し、コンプライアンス ワークフローを自動化できます。 また、Organization の監査ログを使用して、Team によって実行されるアクションをレビューすることもできます。 詳細については、「[Pre-receive フックを使ってポリシーを適用する](/admin/policies/enforcing-policy-with-pre-receive-hooks)」および「[About the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)」 (Enterprise の監査ログについて) を参照してください。

{% ifversion ghes %}
### 3. Organization のセキュリティ機能の構成
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. {% data variables.product.prodname_GH_advanced_security %} 機能の有効化
{% data variables.product.product_name %} ライセンスをアップグレードして、{% data variables.product.prodname_GH_advanced_security %} を含めることができます。 これにより、コードやシークレット スキャンなど、ユーザーがコード内のセキュリティ上の問題を検出して修正するのに役立つ追加機能が提供されます。 詳細については、「[Enterprise の {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照してください。
{% endif %}

## パート 4: {% data variables.product.prodname_dotcom %} での Enterprise の作業のカスタマイズと自動化
{% data variables.product.prodname_dotcom %} と {% data variables.product.prodname_oauth_apps %}、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %}、{% data variables.product.prodname_pages %} を使用して、Enterprise 内の Organization での作業をカスタマイズおよび自動化できます。

### 1. {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} のビルド
{% data variables.product.prodname_github_apps %} や {% data variables.product.prodname_oauth_apps %} などの {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API との統合を構築し、ワークフローを補完および拡張するために Enterprise 内の Organization で使用することができます。 詳細については、「[About apps](/developers/apps/getting-started-with-apps/about-apps)」 (アプリについて) を参照してください。
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の使用
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. {% data variables.product.prodname_actions %} のビルド
{% data reusables.getting-started.actions %}

{% data variables.product.product_name %} で {% data variables.product.prodname_actions %} を有効にして構成する方法の詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} を使い始める](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。

### 4. {% data variables.product.prodname_registry %} の公開と管理 
{% data reusables.getting-started.packages %}

{% data variables.location.product_location %} の {% data variables.product.prodname_registry %} を有効にして構成する方法の詳細については、「[エンタープライズの {% data variables.product.prodname_registry %} を使い始める](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」を参照してください。
{% endif %}

### 5. {% data variables.product.prodname_pages %} の使用
{% data reusables.getting-started.github-pages-enterprise %}

## パート 5: 他の {% data variables.product.prodname_dotcom %} リソースとの接続
{% data variables.product.prodname_github_connect %} を使用してリソースを共有することができます。

{% data variables.product.product_name %} インスタンスと、{% data variables.product.prodname_ghe_cloud %} の Organization または Enterprise アカウントの両方のオーナーである場合、{% data variables.product.prodname_github_connect %} を有効にすることができます。 {% data variables.product.prodname_github_connect %} を使用すると、{% data variables.location.product_location %} と {% data variables.product.prodname_ghe_cloud %} の間で、統合検索やコントリビューションなどの特定のワークフローや機能を共有できます。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} への {% data variables.product.prodname_ghe_server %} の接続](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

## パート 6: {% data variables.product.prodname_dotcom %} の学習およびサポート リソースの使用
エンタープライズ メンバーは、学習リソースを使用して Git と {% data variables.product.prodname_dotcom %} の詳細を学ぶことができます。また、{% data variables.location.product_location %} の設定および管理を行う際に、{% data variables.product.prodname_dotcom %} エンタープライズ サポートを使用して必要なサポートを受けることができます。

### 1. {% data variables.product.prodname_docs %} で {% data variables.product.product_name %} に関するドキュメントを読む

{% data variables.product.prodname_ghe_server %} で使用できる機能が掲載されたドキュメントを読むことができます。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

{% data reusables.enterprise.best-practices %}

### 2. {% data variables.product.prodname_learning %} による学習
{% data reusables.getting-started.learning-enterprise %}

### 3. {% data variables.product.prodname_dotcom %} Enterprise サポートの使用
{% data reusables.getting-started.contact-support-enterprise %}
