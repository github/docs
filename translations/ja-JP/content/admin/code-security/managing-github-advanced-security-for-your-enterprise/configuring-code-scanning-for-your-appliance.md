---
title: アプライアンスのコードスキャンを設定する
shortTitle: Configuring code scanning
intro: '{% data variables.location.product_location %}の {% data variables.product.prodname_code_scanning %} を有効化、構成、および無効化できます。 {% data variables.product.prodname_code_scanning_capc %} を使用すると、コードの脆弱性やエラーをスキャンできます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161087'
---
{% data reusables.code-scanning.beta %}

## {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

{% data variables.product.prodname_code_scanning %} を構成して、{% data variables.product.prodname_codeql %} の分析とサードパーティの分析を実行できます。 また、{% data variables.product.prodname_code_scanning_capc %} では、{% data variables.product.prodname_actions %} を使用したネイティブな分析の実行と、外部にある既存の CI/CD インフラストラクチャの使用もサポートされています。 次の表は、アクションを使って {% data variables.product.prodname_code_scanning %} を許可するように{% data variables.location.product_location %}を構成するときにユーザーが使うことができるすべてのオプションをまとめたものです。

{% data reusables.code-scanning.enabling-options %}

## ライセンスに {% data variables.product.prodname_GH_advanced_security %} が含まれているかどうかを確認する

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_code_scanning %} の前提条件

- {% data variables.product.prodname_GH_advanced_security %} のライセンス{% ifversion ghes %} (「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照){% endif %}

- 管理コンソールで有効になっている {% data variables.product.prodname_code_scanning_capc %} (「[エンタープライズで {% data variables.product.prodname_GH_advanced_security %} を有効にする](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照)

- {% data variables.product.prodname_code_scanning %} の分析を実行する VM またはコンテナー。

## {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を実行する

### セルフホストランナーを設定する

{% data variables.product.prodname_ghe_server %} は、{% data variables.product.prodname_actions %} ワークフローを使用して {% data variables.product.prodname_code_scanning %} を実行できます。 まず、環境内に 1 つ以上のセルフホスト {% data variables.product.prodname_actions %} ランナーをプロビジョニングする必要があります。 セルフホストランナーは、リポジトリ、Organization、または Enterprise アカウントレベルでプロビジョニングできます。 詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

{% data variables.product.prodname_codeql %} アクションを実行するために使用するセルフホストランナーの PATH 変数に Git が含まれていることを確認する必要があります。

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を使って Enterprise 内で Python で記述されたコートを分析する場合、セルフホステッド ランナーに Python 3 がインストールされていることを確認する必要があります。

{% endnote %} {% endif %}

### {% data variables.product.prodname_code_scanning %} のアクションをプロビジョニングする

{% ifversion ghes %} アクションを使用して {% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_code_scanning %} を実行する場合は、アプライアンスでアクションを使用できる必要があります。

{% data variables.product.prodname_codeql %} アクションは {% data variables.product.prodname_ghe_server %} のインストールに含まれています。 {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} と {% data variables.product.prodname_actions %} の両方がインターネットにアクセスできる場合、分析を実行するために必要な {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} バンドルが、このアクションによって自動的にダウンロードされます。 または、同期ツールを使って、{% data variables.product.prodname_codeql %} 分析バンドルの最新のリリース バージョンをローカルで使用できるようにすることもできます。 詳細については、後の「[インターネット アクセスのないサーバーで {% data variables.product.prodname_codeql %} 分析を設定する](#configuring-codeql-analysis-on-a-server-without-internet-access)」を参照してください。

{% data variables.product.prodname_github_connect %} を設定することで、{% data variables.product.prodname_code_scanning %} のユーザがサードパーティのアクションを利用できるようにすることもできます。 詳細については、後の「[{% data variables.product.prodname_actions %} を同期するように {% data variables.product.prodname_github_connect %} を構成する](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)」を参照してください。

### インターネットアクセスのないサーバーで {% data variables.product.prodname_codeql %} 分析を設定する
{% data variables.product.prodname_ghe_server %} を実行しているサーバーがインターネットに接続されておらず、ユーザがリポジトリに対して {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を有効にできるようにする場合は、{% data variables.product.prodname_codeql %} アクション同期ツールを使用して {% data variables.product.prodname_codeql %} 分析バンドルを {% data variables.product.prodname_dotcom_the_website %} からサーバーにコピーする必要があります。 ツールとその使用方法の詳細は、[https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) で手に入ります。

{% data variables.product.prodname_codeql %} アクション同期ツールを設定すると、それを使用して、{% data variables.product.prodname_codeql %} アクションの最新リリースと関連する {% data variables.product.prodname_codeql %} 分析バンドルを同期できます。 これらは {% data variables.product.prodname_ghe_server %} と互換性があります。

{% endif %}

### {% data variables.product.prodname_actions %} を同期するために {% data variables.product.prodname_github_connect %} を設定する
1. {% data variables.product.prodname_dotcom_the_website %} からオンデマンドでアクションワークフローをダウンロードする場合は、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳細については、「[{% data variables.product.prodname_github_connect %} を有効にする](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)」を参照してください。
2. また、{% data variables.location.product_location %}に対して {% data variables.product.prodname_actions %} を有効にする必要もあります。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。
3. 次のステップは、{% data variables.product.prodname_github_connect %} を使用して、{% data variables.product.prodname_dotcom_the_website %} に対するアクションへのアクセスを設定することです。 詳細については、「[{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にする](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。
4. セルフホストランナーをリポジトリ、Organization、または Enterprise アカウントに追加します。 詳細については、「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。

## {% data variables.product.prodname_codeql_cli %} を使用して code scanning を実行する

{% data variables.product.prodname_actions %} を使用しない場合は、{% data variables.product.prodname_codeql_cli %} を使用して {% data variables.product.prodname_code_scanning %} を実行する必要があります。 

{% data variables.product.prodname_codeql_cli %} は、サードパーティの CI/CD システムを含め、任意のマシン上でコードベースを分析するために使用するコマンド ライン ツールです。 詳細については、「[CI システムに CodeQL CLI をインストールする](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

{% ifversion codeql-runner-supported %}

## {% data variables.code-scanning.codeql_runner %}を使って {% data variables.product.prodname_code_scanning %} を実行する

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% data variables.product.prodname_actions %} を使用しない場合は、{% data variables.code-scanning.codeql_runner %}を使って {% data variables.product.prodname_code_scanning %} を実行できます。 

{% data variables.code-scanning.codeql_runner %}は、サードパーティ CI/CD システムに追加できるコマンドライン ツールです。 このツールは、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウトに対して {% data variables.product.prodname_codeql %} 分析を実行します。 詳細については、「[CI システムで {% data variables.product.prodname_code_scanning %} を実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)」を参照してください。

{% endif %}
