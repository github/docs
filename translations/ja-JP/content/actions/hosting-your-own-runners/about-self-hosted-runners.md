---
title: セルフホステッド ランナーの概要
intro: '独自のランナーをホストして、{% data variables.product.prodname_actions %}ワークフロー中でジョブの実行に使われる環境をカスタマイズできます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107566'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## セルフホステッド ランナーの概要

セルフホステッド ランナーとは、{% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} の {% data variables.product.prodname_actions %} からジョブを実行するためにデプロイおよび管理するシステムです。 {% data variables.product.prodname_actions %} の詳細については、「[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions/understanding-github-actions)」{% ifversion fpt %}{% elsif ghec or ghes or ghae %}と「[エンタープライズの {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」{% endif %}を参照してください。

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

管理階層のさまざまなレベルでセルフホストランナーを追加できます。
- リポジトリレベルのランナーは、単一のリポジトリ専用です。
- Organization レベルのランナーは、Organization 内の複数のリポジトリのジョブを処理できます。
- Enterprise レベルのランナーは、Enterprise アカウントの複数の Organization に割り当てることができます。

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} 新しいバージョンがリリースされると、ランナー アプリケーションでは、ランナーにジョブが割り当てられたとき、またはジョブが割り当てられなかった場合はリリースから一週間以内に、それ自体を自動的に更新します。

{% ifversion ghes %} {% note %}

**注:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

セルフホスト ランナーのインストールと使用の詳細については、「[セルフホスト ランナーの追加](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」および「[Using self-hosted runners in a workflow (ワークフローでのセルフホスト ランナーの使用)](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。

## セルフホスト ランナー{% ifversion fpt or ghec or ghes %}と {% data variables.product.prodname_dotcom %} ホステッド ランナーの違い{% elsif ghae %}の特性{% endif %}

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dotcom %} ホステッド ランナーではワークフローを素早く簡単に実行する方法が提供されますが、セルフホステッド{% elsif ghae %}セルフホステッド{% endif %} ランナーは独自のカスタム環境内でワークフローを実行するための構成の幅が広い方法です。 {% ifversion ghae %}セルフホスト ランナー:{% endif %}

{% ifversion fpt or ghec or ghes %} **{% data variables.product.prodname_dotcom %} ホステッド ランナー:**
- オペレーティング システム、プリインストールされたパッケージとツール、セルフホステッド ランナー アプリケーションの自動更新プログラムを受け取ります。
- {% data variables.product.prodname_dotcom %}によって管理及びメンテナンスされます。
- ジョブを実行するたびにクリーンなインスタンスを提供します。
- {% data variables.product.prodname_dotcom %}プランの無料の分を使います。無料の分を超えると、分単位のレートが適用されます。

**セルフホスト ランナー:** {% endif %}
- セルフホステッド ランナー アプリケーションの自動更新のみを受け取ります。{% ifversion fpt or ghec or ghes > 3.4 or ghae %}ただし、ランナーの自動更新を無効にすることもできます。 セルフホスト ランナーでのランナー ソフトウェア更新プログラムの制御の詳細については、「[Autoscaling with self-hosted runners (セルフホスト ランナーの自動スケール)](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)」を参照してください。{% else %}{% endif %}オペレーティング システムおよび他のすべてのソフトウェアは、お客様の責任で更新する必要があります。
- 既に料金を支払っているクラウド サービスまたはローカル マシンを使用することができます。
- ハードウェア、オペレーティング システム、ソフトウェア、セキュリティの要件に合わせてカスタマイズできます。
- ジョブを実行するたびにクリーンなインスタンスを用意する必要はありません。
- {% data variables.product.prodname_actions %} と共に無料で利用できますが、ランナー マシンのメンテナンス コストは、お客様の負担となります。{% ifversion ghec or ghes or ghae %}
- 特定の{% ifversion restrict-groups-to-workflows %}ワークフロー、{% endif %}組織、リポジトリへのアクセスを制限するために、グループに編成できます。 詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。{% endif %}

## セルフホストランナーマシンに対する要求

以下の要求を満たしていれば、いかなるマシンもセルフホストランナーとして利用できます。

* マシン上にセルフホストランナーアプリケーションをあなたがインストールして実行できること。 詳細については、「[セルフホスト ランナーをサポートするアーキテクチャとオペレーティング システム](#supported-architectures-and-operating-systems-for-self-hosted-runners)」を参照してください。
* そのマシンが{% data variables.product.prodname_actions %}と通信できる。 詳細については、「[セルフホスト ランナーと {% data variables.product.product_name %} との通信](#communication-requirements)」を参照してください。
* そのマシンが、実行しようとしている種類のワークフローに対して十分なハードウェアリソースを持っていること。 セルフホストランナーアプリケーションそのものは、最小限のリソースしか必要としません。
* Dockerコンテナアクションあるいはサービスコンテナを使うワークフローを実行したいなら、Linuxのマシンを使い、Dockerがインストールされていなければなりません。

## セルフホスト ランナーの自動スケーリング

受信した Webhook イベントに応じて、環境内のセルフホスト ランナーの数を自動的に増減できます。 詳細については、「[セルフホスト ランナーによる自動スケーリング](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)」を参照してください。

## Usage limits (使用状況の制限)

セルフホストランナーを使用する場合、{% data variables.product.prodname_actions %} の使用にはいくつかの制限があります。 これらの制限は変更されることがあります。

{% data reusables.actions.usage-workflow-run-time %}
- **ジョブ キューの時間** - セルフホスト ランナーの各ジョブは、最大 24 時間キューに入れておくことができます。 この制限内にセルフホストランナーがジョブの実行を開始しなければ、ジョブは終了させられ、完了に失敗します。
{% data reusables.actions.usage-api-requests %}
- **ジョブ マトリックス** - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## セルフホストランナーのワークフローの継続性

{% data reusables.actions.runner-workflow-continuity %}

## セルフホストランナーをサポートするアーキテクチャとオペレーティングシステム

セルフホストランナーアプリケーション用には、以下のオペレーティングシステムがサポートされています。

### Linux

- Red Hat Enterprise Linux 7 以降
- CentOS 7 以降
- Oracle Linux 7
- Fedora 29以降
- Debian 9以降
- Ubuntu 16.04 以降
- Linux Mint 18以降
- openSUSE 15以降
- SUSE Enterprise Linux (SLES) 12 SP2以降

### Windows

- Windows 7 64-bit
- Windows 8.1 (64 ビット)
- Windows 10 (64 ビット)
- Windows 10 64-bit
- Windows Server 2019 64-bit

### macOS

- macOS 10.13 (High Sierra)以降

### アーキテクチャ

セルフホストランナーアプリケーションでは、次のプロセッサアーキテクチャがサポートされています。

- `x64` - Linux、macOS、Windows。
- `ARM64` - Linux{% ifversion actions-macos-arm %}、macOS{% endif %}{% ifversion actions-windows-arm %}、Windows (現在ベータ版){% endif %}。
- `ARM32` - Linux。

{% ifversion ghes %}

## セルフホステッド ランナーでサポートされるアクション

{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_dotcom_the_website %} のアクションを使用する場合、またはインターネット アクセスのないセルフホスト ランナーで `actions/setup-LANGUAGE` アクションを使用する場合は、いくつかの追加構成が必要になることがあります。 詳細については、「[{% data variables.product.prodname_dotcom_the_website %} からのアクションへのアクセスを管理する](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)」を参照し、{% data variables.product.prodname_enterprise %} サイト管理者にお問い合わせください。

{% endif %}

<a name="communication-requirements"></a>

## セルフホストランナーと{% data variables.product.product_name %}との通信

セルフホスト ランナーでは、{% data variables.product.product_name %} に接続して、ジョブの割り当てを受け取り、ランナー アプリケーションの新しいバージョンをダウンロードします。 セルフホスト ランナーでは、{% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} の _ロング ポーリング_ を使用します。これは {% data variables.product.product_name %} に対して 50 秒間接続を開き、レスポンスがない場合はタイムアウトして新しいロング ポーリングを作成します。 アプリケーションは、{% data variables.product.prodname_actions %}ジョブを受け付けて実行するためにマシン上で動作していなければなりません。

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %}セルフホステッド ランナーが {% data variables.location.product_location %} への接続を開くので、ユーザーはセルフホステッド ランナーへのインバウンド接続を行うことを {% data variables.product.prodname_dotcom %} に許可する必要はありません。
{% elsif ghes or ghae %}ランナーから {% data variables.location.product_location %} へのアウトバウンド接続のみが必要です。 {% data variables.location.product_location %} からランナーへのインバウンド接続は必要ありません。
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} は、{% data variables.location.product_location %} のホスト名と API サブドメインで、ランナーからの {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} 経由のインバウンド接続を受け入れる必要があります。ランナーは、{% data variables.location.product_location %} のホスト名と API サブドメインへの、{% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} 経由のアウトバウンド接続を許可する必要があります。

{% elsif ghae %}

{% data variables.product.product_name %} の URL とそのサブドメインと通信するための適切なネットワーク アクセスがセルフホスト ランナーにあることを確認する必要があります。 たとえば、{% data variables.product.product_name %} のサブドメインが `octoghae` の場合は、セルフホスト ランナーが `octoghae.githubenterprise.com`、`api.octoghae.githubenterprise.com`、`codeload.octoghae.githubenterprise.com` にアクセスできるようにする必要があります。

IP アドレス許可リストを使用する場合は、セルフホスト ランナーの IP アドレスを許可リストに追加する必要があります。 詳細については、「[Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)」を参照してください。

{% endif %}

{% ifversion fpt or ghec %}

下記の {% data variables.product.prodname_dotcom %} のホストと通信するための適切なネットワーク アクセスがマシンにあることを確認する必要があります。 一部のホストは重要なランナー操作で必要となり、他のホストは特定の機能でのみ必要となります。

{% note %}

**注:** 下記のドメインの一部は、`CNAME` レコードを使用して構成されます。 ファイアウォールによっては、すべての `CNAME` レコードに対して規則を再帰的に追加する必要がある場合があります。 `CNAME` レコードは今後変更される可能性があり、下記のドメインのみが一定のままであることに注意してください。

{% endnote %}

**重要な操作に必要:**

```
github.com
api.github.com
```

**ダウンロード アクションに必要:**

```
codeload.github.com
```

**ランナー バージョンの更新に必要:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**キャッシュとワークフロー成果物のアップロード/ダウンロードに必要:**    

```
*.blob.core.windows.net
```

**OIDC トークンを取得するために必要:**

```
*.actions.githubusercontent.com
```

**パッケージまたはコンテナーを {% data variables.product.prodname_dotcom %} パッケージにダウンロードまたは発行するために必要です。**

```
*.pkg.github.com
ghcr.io
```

さらに、ワークフローで他のネットワーク リソースへのアクセスが必要になる場合があります。

{% data variables.product.prodname_dotcom %} OrganizationあるいはEnterpriseアカウントでIPアドレス許可リストを使うなら、セルフホストランナーのIPアドレスを許可リストに追加しなければなりません。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} のドキュメントの{% else %}{% endif %}「[Organization に対する許可 IP アドレスを管理する](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)」または「[Enterprise でセキュリティ設定のポリシーを適用する](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)」を参照してください。

{% else %}

{% ifversion ghes %}セルフホスト ランナーは、外部のインターネット アクセスを必要とせずに機能します。 その結果、ネットワーク ルーティングを使って、セルフホステッド ランナーと {% data variables.location.product_location %} の間の通信を制御できます。 たとえば、プライベート IP アドレスをセルフホステッド ランナーに割り当て、トラフィックを {% data variables.location.product_location %} に送信するようにルーティングを構成できます。トラフィックが公衆ネットワークを通過する必要はありません。{% endif %}

{% endif %}

{% ifversion ghae %} {% data variables.product.prodname_dotcom %} の Organization または Enterprise アカウントで IP アドレス許可リストを使用する場合は、セルフホストランナーの IP アドレスを許可リストに追加する必要があります。 詳細については、「[Organization に対する許可 IP アドレスを管理する](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)」を参照してください。
{% endif %}

セルフホストランナーは、プロキシサーバーと合わせて使うこともできます。 詳細については、「[セルフホスト ランナーとプロキシ サーバーを使う](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)」を参照してください。

一般的なネットワーク接続の問題のトラブルシューティングの詳細については、「[Monitoring and troubleshooting self-hosted runners (セルフホスト ランナーの監視とトラブルシューティング)](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)」を参照してください。

{% ifversion ghes or ghae %}

## セルフホスト ランナーと {% data variables.product.prodname_dotcom_the_website %} の間の通信

{% data variables.location.product_location %} の {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にしている場合を除き、セルフホステッド ランナーが {% data variables.product.prodname_dotcom_the_website %} に接続する必要はありません。 詳細については、「[エンタープライズでのアクションの使用について](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)」を参照してください。

{% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効にした場合、セルフホスト ランナーでは {% data variables.product.prodname_dotcom_the_website %} に直接接続してアクションをダウンロードします。 下記の {% data variables.product.prodname_dotcom %} の URL と通信するための適切なネットワークアクセスがマシンにあることを確認する必要があります。 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**注:** 上記のドメインの一部は、`CNAME` レコードを使用して構成されます。 ファイアウォールによっては、すべての `CNAME` レコードに対して規則を再帰的に追加する必要がある場合があります。 `CNAME` レコードは今後変更される可能性があり、上記のドメインのみが一定のままであることに注意してください。

{% endnote %}

{% endif %}

## セルフホスト ランナーのセキュリティ

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

それぞれの{% data variables.product.prodname_dotcom %}ホストランナーは常にクリーンな隔離された仮想マシンになり、ジョブの実行が終わると破棄されるので、{% data variables.product.prodname_dotcom %}ホストランナーではこれは問題にはなりません。

{% endif %}

セルフホスト ランナー上で実行される信頼できないワークフローでは、マシンやネットワーク環境に大きなセキュリティ リスクがもたらされます。これは特に、マシンでジョブにまたがって環境が保持される場合に当てはまります。 リスクには以下のようなものがあります。

* マシン上での悪意あるプログラムの実行
* マシンのランナーのサンドボックスからの脱却
* マシンのネットワーク環境へのアクセスの露出
* 望まないもしくは危険なデータのマシン上への保存

セルフホスト ランナーのセキュリティ強化の詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)」を参照してください。

{% ifversion ghec or ghes or ghae %}

## 参考資料

- 「[Enterprise 向けセルフホスト ランナーの概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)」

{% endif %}
