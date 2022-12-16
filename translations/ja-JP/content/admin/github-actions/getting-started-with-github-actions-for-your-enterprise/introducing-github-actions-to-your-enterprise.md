---
title: 企業への GitHub Actions の導入
shortTitle: Introduce Actions
intro: 'エンタープライズで {% data variables.product.prodname_actions %} をロールアウトする方法を計画できます。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191863'
---
## 企業向け {% data variables.product.prodname_actions %} について

{% data reusables.actions.about-actions %}{% data variables.product.prodname_actions %} を使用すると、企業はテストやデプロイなどのソフトウェア開発ワークフローを自動化、カスタマイズ、実行できます。 詳細については、「[企業向け {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」を参照してください。

![セルフホスト ランナーで実行されているジョブの図](/assets/images/help/images/actions-enterprise-overview.png)

大規模な企業に {% data variables.product.prodname_actions %} を導入する前に、まず導入を計画し、企業が独自のニーズを最適にサポートするための {% data variables.product.prodname_actions %} の使用方法について決定する必要があります。

## ガバナンスとコンプライアンス

企業での {% data variables.product.prodname_actions %} の使用を管理し、コンプライアンス義務を果たす計画を作成する必要があります。

開発者に使用を許可するアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を決定します。 {% ifversion ghes %}まず、インスタンスの外部からアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}にアクセスできるようにするかどうかを決定します。 {% data reusables.actions.access-actions-on-dotcom %}詳細については、「[Enterprise でのアクションの使用について](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)」を参照してください。

次に、{% else %}まず、{% endif %}{% data variables.product.company_short %} によって作成されたものではないサードパーティのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可するかどうかを決定します。 リポジトリ、組織、エンタープライズの各レベルで実行できるアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を構成できます。また、{% data variables.product.company_short %} によって作成されたアクションのみを許可するように選択できます。 サードパーティのアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}を許可する場合は、許可されるアクションを、検証済みの作成者によって作成されたもの、または特定のアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}のリストに制限できます。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)」、「[Organization の {% data variables.product.prodname_actions %} を無効化または制限する](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)」、「[Enterprise での {% data variables.product.prodname_actions %} のポリシーの施行](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)」を参照してください。

{% ifversion actions-workflow-policy %} ![{% data variables.product.prodname_actions %} ポリシーのスクリーンショット](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![{% data variables.product.prodname_actions %} ポリシーのスクリーンショット](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %}OpenID Connect (OIDC) と再利用可能なワークフローを組み合わせて、リポジトリ、Organization、Enterprise の全体で一貫したデプロイを適用することを検討してください。 これを行うには、再利用可能なワークフローに基づいてクラウド ロールの信頼条件を定義します。 詳細については、「[再利用可能なワークフローでの OpenID Connect の使用](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)」を参照してください。
{% endif %}

Enterprise の監査ログで、{% data variables.product.prodname_actions %} に関連したアクティビティに関する情報にアクセスできます。 ビジネス ニーズのために監査ログ データの保持期間より長くこの情報を保持する必要がある場合は、このデータをエクスポートして {% data variables.product.prodname_dotcom %} の外部に格納する方法を計画します。 詳しくは、{% ifversion ghec %}「[Enterprise の監査ログ アクティビティのエクスポート](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)」と「[Enterprise の監査ログのストリーミング](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)」{% else %}{% ifversion audit-log-streaming %}「[Enterprise の監査ログのストリーミング](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)」と{% endif %}「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」{% endif %}を参照してください。

![監査ログのエントリ](/assets/images/help/repository/audit-log-entries.png)

## セキュリティ

{% data variables.product.prodname_actions %} のセキュリティ強化へのアプローチを計画する必要があります。

### 個々のワークフローとリポジトリのセキュリティ強化

Enterprise 内で {% data variables.product.prodname_actions %} の機能を使用しているユーザーに対して、適切なセキュリティ プラクティスを適用する計画を立てます。 これらのプラクティスの詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions)」を参照してください。

また、セキュリティについて既に評価済みのワークフローの再利用を推奨することもできます。 詳細については、「[インナーソーシング](#innersourcing)」を参照してください。

### シークレットとデプロイ リソースへのアクセスのセキュリティ保護

シークレットを保存する場所を計画する必要があります。 シークレットは {% data variables.product.prodname_dotcom %} に保存することをお勧めしますが、クラウド プロバイダーにシークレットを保存することも選択できます。

{% data variables.product.prodname_dotcom %} では、リポジトリまたは Organization レベルでシークレットを保存できます。 リポジトリ レベルのシークレットは、運用環境やテストなど、特定の環境のワークフローに限定できます。 詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

![シークレットの一覧のスクリーンショット](/assets/images/help/settings/actions-org-secrets-list.png) 機密性の高い環境については、手動の承認による保護の追加を検討する必要があります。そうすることで、ワークフローは環境のシークレットにアクセスする前に承認を受けることが必要になります。 詳細については、「[デプロイに環境を使用する](/actions/deployment/targeting-different-environments/using-environments-for-deployment)」を参照してください。

### サード パーティのアクションのセキュリティに関する考慮事項

{% data variables.product.prodname_dotcom %} 上のサード パーティのリポジトリからアクションを調達することには大きなリスクがあります。 サード パーティのアクションを許可する場合は、アクションを完全なコミット SHA にピン止めするなどのベスト プラクティスに従うことをチームに促す内部ガイドラインを作成する必要があります。 詳細については、「[サード パーティ アクションを使用する](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)」を参照してください。

## インナーソーシング

企業が {% data variables.product.prodname_actions %} の機能をインナーソース自動化にどのように使用できるかについて考えてみましょう。 インナーソーシングは、オープンソースの手法の利点を社内ソフトウェア開発サイクルに組み込む方法です。 詳細については、{% data variables.product.company_short %} リソースの「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %}再利用可能なワークフローを使用すると、チームはあるワークフローを別のワークフローから呼び出すことができ、完全な重複を回避できます。 再利用可能なワークフローは、適切に設計され、既にテスト済みのワークフローをチームが使用できるようにすることで、ベスト プラクティスを促進します。 詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。
{% endif %}

新しいワークフローを構築するための出発点を開発者に提供するには、スターター ワークフローを使用できます。 これにより、開発者の時間を節約できるだけでなく、企業全体の一貫性とベスト プラクティスが促進されます。 詳細については、「[Organization のスターター ワークフローの作成](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)」を参照してください。

{% ifversion not internal-actions %} ワークフロー開発者がプライベート リポジトリに保存されているアクションを使用する場合は、最初にリポジトリをクローンするようにワークフローを構成する必要があります。 クローンする必要があるリポジトリの数を減らすには、よく使われるアクションを 1 つのリポジトリにグループ化することを検討してください。 詳細については、「[カスタム アクションについて](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)」を参照してください。
{% endif %}

## リソースの管理

{% data variables.product.prodname_actions %} を使用するために必要なリソースの管理方法を計画する必要があります。

{% ifversion ghes %}
### ハードウェア要件

パフォーマンスを低下させずに {% data variables.product.prodname_actions %} からの負荷を処理するには、{% data variables.location.product_location %}の CPU とメモリ リソースのアップグレードが必要な場合があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)」を参照してください。
{% endif %}

### ランナー

{% data variables.product.prodname_actions %} ワークフローにはランナーが必要です。{% ifversion ghec %}{% data variables.product.prodname_dotcom %} ホスト ランナーまたはセルフホスト ランナーを使用できます。 {% data variables.product.prodname_dotcom %} ホスト ランナーは、{% data variables.product.company_short %} によって管理され、メンテナンスとアップグレードが自動的に処理されるので便利です。 ただし、ファイアウォールの内側にあるリソースにアクセスするワークフローを実行する必要がある場合や、ランナー マシンのリソース、構成、または地理的な場所をより詳細に制御する必要がある場合は、セルフホスト ランナーを検討することをお勧めします。 詳細については、「[{% data variables.product.prodname_dotcom %} ホスト ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」および「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。{% else %}独自のランナーをホストするには、{% data variables.product.prodname_actions %} セルフホスト ランナー アプリケーションをご自身のマシンにインストールする必要があります。 詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。{% endif %}

{% ifversion ghec %}セルフホスト ランナーを使用している場合は、物理マシン、仮想マシン、コンテナーのどれを使用するかを決定する必要があります。{% else %}セルフホスト ランナーに物理マシン、仮想マシン、コンテナーのどれを使用するかを決定します。{% endif %}各ジョブに新しいイメージを使用するか、各ジョブの実行後にマシンをクリーンアップしない限り、物理マシンは以前のジョブの残りの部分を保持し、仮想マシンも同様になります。 コンテナーを選択した場合、ランナーの自動更新によってコンテナーがシャットダウンされ、ワークフローが失敗する可能性があることに注意する必要があります。 自動更新ができないようにするか、コンテナーを強制終了するコマンドをスキップすることで、これに対する解決策を考案する必要があります。

また、各ランナーを追加する場所も決定する必要があります。 セルフホスト ランナーを個々のリポジトリに追加することも、Organization 全体または Enterprise 全体でランナーを使用可能にすることもできます。 Organization レベルまたは Enterprise レベルでランナーを追加すると、ランナーの共有が可能になります。これにより、ランナー インフラストラクチャのサイズが小さくなる可能性があります。 ポリシーを使用して、Organization および Enterprise レベルのセルフホスト ランナーへのアクセスを制限できます。そのためには、特定のリポジトリまたは Organization にランナーのグループを割り当てます。 詳細については、「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」および「[グループを使用してセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

{% ifversion ghec or ghes %}自動スケーリングを使って、使用可能なセルフホステッド ランナーの数を自動的に増減することを検討する必要があります。 詳細については、「[セルフホスト ランナーによる自動スケーリング](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)」を参照してください。
{% endif %}

最後に、セルフホスト ランナーのセキュリティ強化を検討する必要があります。 詳細については、「[{% data variables.product.prodname_actions %} のセキュリティ強化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)」を参照してください。

### Storage

{% data reusables.actions.about-artifacts %}詳細については、「[ワークフロー データを成果物として保存する](/actions/advanced-guides/storing-workflow-data-as-artifacts)」を参照してください。 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} には、依存関係をキャッシュしてワークフローの実行を高速化するために使用できるキャッシュ システムもあります。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。{% endif %}

{% ifversion ghes %} ワークフロー成果物、{% ifversion actions-caching %}キャッシュ、{% endif %}その他のワークフロー ログ用に外部 BLOB ストレージを構成する必要があります。 企業が使用する、サポートされているストレージ プロバイダーを決定します。 詳細については、「[{% data variables.product.product_name %} 用 {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)」を参照してください。
{% endif %}

{% ifversion ghec or ghes %}

{% data variables.product.prodname_actions %} のポリシー設定を使用して、ワークフロー成果物、{% ifversion actions-caching %}キャッシュ、{% endif %}ログの保持期間をカスタマイズできます。 詳細については、「[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise (エンタープライズでフォーク pull request のポリシーを適用する)](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghec %}一定のストレージがサブスクリプションに含まれていますが、追加のストレージは課金に影響します。 このコストについて計画する必要があります。 詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。
{% endif %}

## 使用状況の追跡

ワークフローの実行頻度、それらの実行の成功と失敗の数、どのリポジトリがどのワークフローを使用しているかなど、{% data variables.product.prodname_actions %} の Enterprise の使用状況を追跡する計画を立てる必要があります。

{% ifversion ghec %}Enterprise 内の Organization ごとに、{% data variables.product.prodname_actions %} のストレージとデータ転送の使用状況を示す基本的な詳細を支払い設定で確認できます。 詳細については、「[{% data variables.product.prodname_actions %} の使用状況を表示する](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)」を参照してください。

詳細な使用状況データについては、{% else %}{% endif %}Webhook を使用して、ワークフロー ジョブとワークフロー実行に関する情報をサブスクライブできます。 詳細については、「[Webhook について](/developers/webhooks-and-events/webhooks/about-webhooks)」を参照してください。

Enterprise でこれらの Webhook からデータ アーカイブ システムに情報を渡す方法を計画します。 {% data variables.product.prodname_dotcom %} から Webhook データを収集して処理するオープンソース ツールである、"CEDAR.GitHub.Collector" の使用を検討できます。 詳細については、[`Microsoft/CEDAR.GitHub.Collector` リポジトリ](https://github.com/microsoft/CEDAR.GitHub.Collector/)を参照してください。

また、チームがアーカイブ システムから必要なデータを取得できるようにする方法も計画する必要があります。
