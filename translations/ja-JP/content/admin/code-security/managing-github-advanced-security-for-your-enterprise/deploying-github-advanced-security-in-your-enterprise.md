---
title: エンタープライズでの GitHub Advanced Security のデプロイ
intro: Enterprise に {% data variables.product.prodname_GH_advanced_security %} (GHAS) を段階的にロールアウトするアプローチを計画、準備、実装する方法について説明します。
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
- /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 7990891fd4b90127ae5f32aa262d6c096d23acab
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147060755"
---
## <a name="overview-of-the-deployment-process"></a>デプロイ プロセスの概要

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

これらのさまざまなフェーズの概要については、「[{% data variables.product.prodname_GH_advanced_security %} のデプロイの概要](/admin/advanced-security/overview-of-github-advanced-security-deployment)」を参照してください。

デプロイを始める前に、「[{% data variables.product.prodname_GH_advanced_security %} のデプロイの概要](/admin/advanced-security/overview-of-github-advanced-security-deployment)」で GHAS をインストールするための前提条件と GHAS のデプロイに関するベスト プラクティスを確認することをお勧めします。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 0: 計画とキックオフ

{% note %}

{% octicon "clock" aria-label="Clock" %} **推定所要時間:** フェーズ 0 には、約 1 から 4 週間かかる可能性があるものと思われます。 この範囲は、リリースのニーズと、会社がデプロイ計画で必要になる場合がある承認によって、変化する可能性があります。

{% endnote %}

計画とキックオフ フェーズの目標は、すべての人、プロセス、テクノロジを用意し、GHAS を実装できる状態にすることです。

エグゼクティブ スポンサーからの了承を得るため、社内に GHAS をリリースする前に、ロールアウト計画と目標を準備して調整することをお勧めします。

段階的なロールアウト戦略の一環として、企業の他の部分より前に GHAS への参加対象にする必要がある、影響の大きい重要なチームまたはアプリケーションを明らかにすることをお勧めします。

段階的なロールアウトが適していない企業の場合は、[パイロット プロジェクト フェーズ](#--phase-1-pilot-projects)までスキップできます。

{% data variables.product.prodname_professional_services %} と協力している場合、このフェーズの間に、ロールアウトと実装プロセスを通じてチームがどのように連携するかも計画します。 {% data variables.product.prodname_professional_services_team %} チームは、必要に応じて、段階的ロールアウトの計画と目標の作成をサポートできます。

### <a name="step-1-kickoff-meeting-with--data-variablesproductprodname_professional_services--optional"></a>ステップ 1: {% data variables.product.prodname_professional_services %} とのキックオフ ミーティング (省略可能)

{% data variables.product.prodname_professional_services %} と契約した場合は、Services の担当者と会ってロールアウトと実装プロセスを開始します。

{% data variables.product.prodname_professional_services %} と契約していない場合は、次のステップにスキップできます。

この会議の目的は、会社に最適なロールアウトと実装計画の作成を開始するために必要な情報について 2 つのチームを一致させることです。 この会議に向けて、ディスカッションの準備を深めるのに役立つアンケートを作成しました。 Services の担当者からこのアンケートが送られます。

この最初の会議の準備のため、次のトピックを確認してください。

-  お客様の会社と {% data variables.product.prodname_professional_services %} が最適に連携する方法の調整
  - 購入したサービスの日数や時間数を最適に利用する方法について期待値の設定
  - コミュニケーション計画と会議の頻度
  - ロールと責任
- ソフトウェア開発ライフサイクル (SDLC) での GHAS のしくみのレビュー。 {% data variables.product.prodname_professional_services %} の担当者が GHAS のしくみを説明します。
- GHAS デプロイに関するベスト プラクティスのレビュー。 これは、お客様のチームがそれに価値があると判断した場合に再教育として、またはお客様の会社が概念実証 (POC) 演習に参加しなかった場合に、提供されます。 このレビューには、DevSecOps 成熟度モデルのようなものに対する、既存のアプリケーション セキュリティ プログラムとその成熟度のレベルの検討が含まれます。
-  お客様の GHAS デプロイの次の手順についての意識合わせ。 {% data variables.product.prodname_professional_services %} 担当者が、次の手順と、お客様がパートナーシップから期待できるサポートについて説明します。

ロールアウト戦略の計画に役立つよう、次の質問について話し合うこともできます。
  - 有効にするチームの数はいくつか。
  - チームのリポジトリの構造はどのようなものか。 (技術スタック、現在のツールなど)
    - この一部は、お客様の会社が概念実証演習に参加している場合は、既にカバーされている可能性があります。 そうでない場合は、これについて話し合う重要な時期です。
   - 導入のレベルは、有機的、支援付き、または無機的のどれであると予想されるか。
   - リソースとドキュメントの観点から、支援付き導入はどのようなものになるか。
   - 無機的な導入をどのように管理するか。 (たとえば、ポリシーの適用や、一元的に管理されたワークフローの使用)。

### <a name="step-2-internal-kickoff-at-your-company"></a>ステップ 2: お客様の社内キックオフ

お客様の会社が {% data variables.product.prodname_professional_services %} との連携を選択しているかどうかに関係なく、お客様のチーム内の統一のためのキックオフ ミーティングを開催することを常にお勧めします。

このキックオフ ミーティングでは、目標と期待が明確に理解されていて、ロールアウトと実装を進める方法についての計画が設けられていることを、確認することが重要です。

さらに、これは、GHAS のロールアウトと実装をサポートするための適切なツールと専門知識をチームが持っていることを確認するために、チームのトレーニングと準備について考え始めるのに適した時期です。

#### <a name="topics-for-your-internal-kickoff-meeting"></a>社内キックオフ ミーティングに関するトピック

キックオフ ミーティングと同じグループと {% data variables.product.prodname_professional_services %} の間で次のトピックをまだ話し合っていない場合は、お客様の社内キックオフ ミーティングでこれらを取り上げすることをお勧めします。

- ビジネスの成功のメトリックは何で、それらのメジャーをどうのように測定して報告しますか。
  - これらが定義されていない場合は、それらを定義してください。 定義されている場合は、それらを伝え、データ主導の進行状況の更新を提供する方法について説明します。
- SDLC (ソフトウェア開発ライフ サイクル) 内での GHAS のしくみと、お客様の会社でそれがどのように機能すると期待されるかをレビューします。
- お客様の会社が概念実証演習に参加していない場合、ベスト プラクティスをレビューします (または、お客様のチームがこの確認に価値があると判断した場合は再教育)
  - これを、お客様の既存のアプリケーション セキュリティ プログラムと比較すると何が異なりますか。
- ロールアウトと実装を通じて、社内チームが最適に連携する方法について話し合い、同意します。
  - 社内チームのコミュニケーション計画とミーティングの頻度について意見を統一します。
  - ロールアウトと実装を実施するためのタスクをレビューし、役割と責任を定義します。 この記事では、タスクの大部分を説明しましたが、お客様の会社で必要な他のタスクが含まれていない可能性があります。
  - スケーリングを有効にするための "チャンピオン プログラム" の確立を検討します
  - タスクの完了のタイミングについての検討を始めます
- お客様の会社にとって最適なロールアウト アプローチについての作業を始めます。 これには、いくつかの重要な項目の理解が含まれます。
  - 有効にするチームの数はいくつか。 この一部は、お客様の会社が POC (概念実証) 演習に参加している場合は、既にカバーされている可能性があります。 そうでない場合は、これについて話し合う重要な時期です。
  - 最初のロールアウトの対象に選ばれた重要なアプリケーションのうち、GHAS によってサポートされるテクノロジに基づくものはいくつあるか。
  - 組織の準備はどの程度必要か。 詳細については、「[フェーズ 2](#--phase-2-organizational-buy-in--rollout-preparation)」を参照してください。

### <a name="step-3-prepare-your-rollout--implementation-plan-and-goals"></a>ステップ 3: ロールアウトと実装の計画と目標を準備する

ロールアウトの最初のフェーズのパイロット プロジェクトを進める前に、会社の計画の進め方に関するロールアウト計画とビジネス目標が確立されていることを確認することが重要です。

{% data variables.product.prodname_professional_services %} と協力している場合は、その担当者がこの計画の作成において重要な役割を果たすことができます。

独立して作業している場合は、このセクションで、作業を進める準備として計画に含まれる必要がある事項について説明します。

プロセスの変更 (必要な場合) と、必要に応じたチーム メンバーのトレーニングを計画します。
  - 文書化された、役割と責任に関するチームの割り当て。 各機能に必要なアクセス許可の詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)」を参照してください。
  - 文書化された、タスクとタイムラインおよび期間の計画 (可能な場合)。 これには、インフラストラクチャの変更、プロセスの変更とトレーニング、GHAS の有効化に関する後続のすべてのフェーズが含まれる必要があります。これにより、必要に応じて、修復および構成の調整のための期間を設けることができます。 詳細については、後の「[フェーズ 1: パイロット プロジェクト](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects)」を参照してください。
  - プロジェクトやチームが最初に GHAS を有効にする優先順位付けされた計画と、プロジェクトやチームが次のフェーズに入る後続の計画
  - ビジネス目標に基づく成功メトリック。 これは、完全なロールアウトの了承を得るための、パイロット プロジェクトに続く重要な基準点になります。

{% note %}

**注:** お客様の会社のすべてのグループが確実に認識、了承、導入するためには、ロールアウトのタイミングと、お客様の会社のインフラストラクチャ、プロセス、日常的な開発ワークフローへの影響に関して、現実的な期待を設定することが重要です。 より円滑で成功したロールアウトにするには、セキュリティ チームと開発チームが GHAS の影響を理解していることを確認します。

{% endnote %}

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} をご利用の場合は、お客様のインスタンスが GHAS のロールアウトと実装を確実にサポートできるようにするために、次のことを確認してください。

- GHES 3.0 へのアップグレードは必須ではありませんが、code scanning と {% data variables.product.prodname_actions %} のような機能の組み合わせを利用するには、GHES 3.0 以降にアップグレードする必要があります。 詳細については、「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)」を参照してください。

- High Availability 設定では、完全に冗長なセカンダリの {% data variables.product.prodname_ghe_server %} アプライアンスは、すべての主要なデータストアのレプリケーションによってプライマリアプライアンスとの同期を保ちます。 高可用性を設定する方法の詳細については、「[高可用性の構成](/admin/enterprise-management/configuring-high-availability)」を参照してください。

- 会社のセットアップに対する変更の可能性に関する検討をサポートするには、{% data variables.product.prodname_ghe_server %} システムの概要を確認できます。 詳細については、「[システムの概要](/admin/overview/system-overview)」をご覧ください。

{% endif %}

### <a name="step-4-establish-a-baseline-of-organizational-insights"></a>ステップ 4: 組織の分析情報のベースラインを確立する

お客様の会社がパイロット プロジェクトを開始する準備を進めるときは、会社の現在のベースラインを設定し、パイロット プロジェクトの進行状況を測定するための明確な成功メトリックを定義しておくことが重要です。

お客様の会社には測定する必要がある重要なビジネス目標がおそらくありますが、パイロットの成功を測定するために特定できるメトリックは他にもあります。

出発点として、これらのメトリックには次のものが含まれる場合があります。
  - GHAS の脆弱性に対する修復までの平均時間と、パイロット プロジェクトおよびチームが使用した以前のツールとプラクティス。
  - 最も重要な上位 X つのアプリケーションの code scanning 統合の結果。
  - SAST (静的アプリケーション セキュリティ テスト) が統合されているアプリケーションとエンゲージメント前のアプリケーションの数。

GHAS を購入する前に POC 演習に参加した場合、これらの目標は見覚えがあるかもしれません。 この成功基準には、次の大まかな役割に関するいくつかの目標が含まれます。
  - 実装チームと管理チーム
  - セキュリティと CISO (最高情報セキュリティ責任者)
  - アプリケーション開発チーム

さらに一歩踏み込みたい場合は、OWASP の DevSecOps 成熟度モデル (DSOMM) を利用して、レベル 1 の成熟度になるように作業できます。 DSOMM には次の 4 つの主要評価基準があります。

- **静的な深度:** AppSec CI パイプライン内で実行される静的コード スキャンがどれだけ包括的であるか
- **動的な深度:** AppSec CI パイプライン内で実行される動的スキャンがどれだけ包括的であるか
- **強度:** AppSec CI パイプラインで実行されるセキュリティ スキャンのスケジュール頻度
- **統合:** 結果とプロセスの完全性を処理するための修復ワークフロー

このアプローチとそれを GHAS で実装する方法の詳細については、「[GitHub での DevSecOps 成熟度の達成](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/)」ホワイト ペーパーをダウンロードしてください。

より広い会社の目標と現在の DevSecOps 成熟度レベルを基にすると、パイロットの進行状況と成功を最適に測定する方法を決定するのに役立ちます。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 1: パイロット プロジェクト

{% note %}

{% octicon "clock" aria-label="Clock" %} **推定所要時間:** フェーズ 1 には、約 2 週間から 3 か月以上かかる可能性があるものと思われます。 この範囲は、会社のインフラストラクチャまたはシステムの複雑さ、これらの変更を管理および承認するための内部プロセス、GHAS を進めるために大規模な組織プロセスの変更が必要かどうかによって、大きく異なる場合があります。

{% endnote %}

会社全体で GHAS を有効にする作業を始めるには、いくつかの影響の大きいプロジェクトまたはチームから始めて、最初のロールアウトをパイロットにすることをお勧めします。 これにより、社内の最初のグループが GHAS に慣れ、GHAS に関する強固な基盤を構築してから、会社の残りの部分にロールアウトすることができます。

パイロット プロジェクトを始める前に、最初のミーティング、中間レビュー、パイロット完了時の総括セッションなど、チームのチェックポイント ミーティングをスケジュールすることをお勧めします。 これらのチェックポイント ミーティングは、必要に応じて調整を行い、チームがパイロットを正常に完了できる状態で、サポートを受けていることを確認するのに役立ちます。

これらの手順は、お客様の会社で GHAS を有効にし、その機能を使い始めて、結果を確認するのに役立ちます。

{% data variables.product.prodname_professional_services %} と協力している場合は、担当者がオンボーディング セッション、GHAS ワークショップ、必要に応じたトラブルシューティングを通じて、このプロセス全体の追加の支援を提供できます。

### <a name="step-1-ghas-set-up--installation"></a>ステップ 1: GHAS のセットアップとインストール

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスに対して GHAS をまだ有効にしていない場合は、「[エンタープライズの GitHub Advanced Security の有効化](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照してください。

{% endif %}

リポジトリごとに GHAS 機能を有効にするか、プロジェクトに参加しているすべての組織のすべてのリポジトリで GHAS 機能を有効にすることにより、各パイロット プロジェクトについて GHAS を有効にする必要があります。 詳細については、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」または「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

GHAS をセットアップしてインストールする作業の大部分の中心になるのは、お客様の会社とリポジトリでの code scanning の有効化と構成です。

code scanning を使用すると、{% data variables.product.prodname_dotcom %} リポジトリ内のコードを分析して、セキュリティの脆弱性とコーディング エラーを見つけることができます。 code scanning を使用すると、コード内の既存の問題に対する修正の発見、トリアージ、優先順位付けを行うことができるだけでなく、開発者が新しい問題を作り出すのを防ぐことができます。コード スキャンを使用しないと、そのような問題が運用環境まで残る可能性があります。 詳細については、「[コード スキャンについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

### <a name="step-2-set-up--data-variablesproductprodname_code_scanning_capc-"></a>ステップ 2: {% data variables.product.prodname_code_scanning_capc %} を設定する

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスで {% data variables.product.prodname_code_scanning %} を有効にするには、「[アプライアンスのコード スキャンの構成](/admin/advanced-security/configuring-code-scanning-for-your-appliance)」を参照してください。

{% endif %}

code scanning を設定するには、[{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning) または独自の[サードパーティ CI システム](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning)のどちらで code scanning を実行するかを決める必要があります。

#### <a name="using--data-variablesproductprodname_actions--for--data-variablesproductprodname_code_scanning-"></a>{% data variables.product.prodname_code_scanning %} に {% data variables.product.prodname_actions %} を使用する

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 用に {% data variables.product.prodname_actions %} で code scanning を設定するには、環境内に 1 つ以上のセルフホステッド {% data variables.product.prodname_actions %} ランナーをプロビジョニングする必要があります。 詳細については、[セルフホステッド ランナーの設定](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions)に関するページを参照してください。

{% endif %}

{% data variables.product.prodname_ghe_cloud %} の場合は、リポジトリで code scanning を実行するための [CodeQL アクション](https://github.com/github/codeql-action/)を使用して、{% data variables.product.prodname_actions %} ワークフローの作成を始めることができます。 {% data variables.product.prodname_code_scanning_capc %} は既定では [GitHub ホステッド ランナー](/actions/using-github-hosted-runners/about-github-hosted-runners)を使用しますが、独自のハードウェア仕様で独自のランナーをホストする予定の場合は、これをカスタマイズできます。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners)に関する記述をご覧ください。

{% data variables.product.prodname_actions %} の詳細については、次を参照してください。
  - [GitHub Actions について](/actions/learn-github-actions)
  - [GitHub Actions を理解する](/actions/learn-github-actions/understanding-github-actions)
  - [ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows)
  - [フィルター パターンのチート シート](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

#### <a name="using-a-third-party-ci-system-with-the-codeql-cli-for--data-variablesproductprodname_code_scanning-"></a>{% data variables.product.prodname_code_scanning %} 用に CodeQL CLI でサードパーティの CI システムを使用する

{% data variables.product.prodname_actions %} を使用せず、独自の継続的インテグレーション システムがある場合は、CodeQL CLI を使用して、サードパーティの CI システムで CodeQL の code scanning を実行できます。

詳細については、次を参照してください。
  - [CI システムでの CodeQL の code scanning について](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)

### <a name="step-3-enable--data-variablesproductprodname_code_scanning_capc--in-repositories"></a>ステップ 3: リポジトリで {% data variables.product.prodname_code_scanning_capc %} を有効にする

GHAS のロールアウトに段階的なアプローチを使用している場合は、ロールアウト計画の一環として、リポジトリごとに {% data variables.product.prodname_code_scanning %} を有効にすることをお勧めします。 詳細については、「[リポジトリの code scanning の設定](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)」を参照してください。

段階的ロールアウト アプローチを計画していない場合に、多くのリポジトリで code scanning を有効にするには、プロセスをスクリプト化することができます。

{% data variables.product.prodname_actions %} ワークフローを複数のリポジトリに追加する pull request を開くスクリプトの例については、PowerShell を使用する例の場合は [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) リポジトリを、PowerShell を使わず代わりに NodeJS を使用したいチームの場合は [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) を参照してください。

### <a name="step-4-run-code-scans-and-review-your-results"></a>ステップ 4: コード スキャンを実行して結果を確認する

必要なリポジトリで code scanning を有効にしたら、開発チームがコード スキャンとレポートを実行し、レポートを表示して、結果を処理する方法を理解するのを支援できるようになります。

#### <a name="-data-variablesproductprodname_code_scanning_capc-"></a>{% data variables.product.prodname_code_scanning_capc %}

code scanning を使用すると、GitHub でプロジェクトのコード内の脆弱性とエラーを見つけるだけでなく、関連する {% data variables.product.prodname_code_scanning %} アラートの表示、トリアージ、理解、解決を行うことができます。

code scanning で pull request の問題が見つかったら、強調表示されたコードを確認してアラートを解決できます。 詳細については、「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。

リポジトリに対する書き込みアクセス許可がある場合は、そのリポジトリの code scanning アラートを管理できます。 リポジトリへの書き込みアクセス許可があれば、リポジトリのコード内の潜在的な脆弱性またはエラーに関する{% ifversion delete-code-scanning-alerts %}アラートの表示、修正、却下、または削除{% else %}アラートの表示、修正、または却下{% endif %}を行うことができます。 詳細については、「[リポジトリの code scanning アラートの管理](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)」を参照してください。

#### <a name="generate-reports-of--data-variablesproductprodname_code_scanning--alerts"></a>{% data variables.product.prodname_code_scanning %} アラートのレポートを生成する

code scanning アラートのレポートを作成する場合は、{% data variables.product.prodname_code_scanning_capc %} API を使用できます。 詳細については、「[{% data variables.product.prodname_code_scanning_capc %} API](/rest/reference/code-scanning)」を参照してください。

{% data variables.product.prodname_code_scanning_capc %} API の使用方法の例については、[`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample) リポジトリを参照してください。

### <a name="step-5-configure--data-variablesproductprodname_code_scanning_capc--to-fine-tune-your-results"></a>ステップ 5: 結果を微調整するように {% data variables.product.prodname_code_scanning_capc %} を構成する

初めてコード スキャンを実行すると、結果が見つからなかったり、普通ではない数の結果が返されたりする場合があります。 以降のスキャンでフラグが設定される内容を調整できます。

詳細については、「[code scanning を構成する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)」を参照してください。

GitHub code scanning で他のサードパーティ製コード分析ツールを使用する場合は、アクションを使用して、それらのツールを GitHub 内で実行できます。 または、サードパーティ製ツールによって生成された結果を SARIF ファイルとして code scanning にアップロードすることもできます。 詳細については、「[code scanning と統合する](/code-security/code-scanning/integrating-with-code-scanning)」を参照してください。

### <a name="step-6-set-up-secret-scanning"></a>ステップ 6: シークレットのスキャンを設定する

GitHub は、誤ってコミットされたシークレットの不正使用を防ぐために、リポジトリで既知の種類のシークレットをスキャンします。

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスでシークレットのスキャンを有効にするには、「[アプライアンスでシークレットのスキャンを構成する](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)」を参照してください。

{% endif %}

リポジトリごとにシークレット スキャン機能を有効にするか、プロジェクトに参加しているすべての組織のすべてのリポジトリで機能を有効にすることにより、各パイロット プロジェクトについて機能を有効にする必要があります。 詳細については、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」または「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

リポジトリにチェックインされたシークレットのアラートを表示して閉じる方法については、「[Secret scanning からのアラートを管理する](/code-security/secret-scanning/managing-alerts-from-secret-scanning)」を参照してください。

### <a name="step-7-set-up-dependency-management"></a>ステップ 7: 依存関係の管理を設定する

GitHub は、既知の脆弱性を含むサードパーティ製ソフトウェアの使用を回避するのに役立ちます。 脆弱な依存関係を更新{% ifversion GH-advisory-db-supports-malware %}し、マルウェアを削除{% endif %}するために、次のツールが用意されています。

| 依存関係管理ツール | 説明 |
|----|----|
| Dependabot Alerts | Enterprise で安全ではない依存関係が検出されたら、リポジトリの依存関係を追跡して、Dependabot アラートを受け取ることができます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| 依存関係グラフ | 依存関係グラフは、リポジトリに保存されているマニフェストファイルおよびロックファイルのサマリーです。 コードベースが依存するエコシステムとパッケージ（依存関係）、およびプロジェクトに依存するリポジトリとパッケージ（依存関係）が表示されます。 詳細については、「[依存関係グラフの概要](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。 |{% ifversion ghes or ghec %}
| 依存関係レビュー | プルリクエストに依存関係への変更が含まれている場合は、変更内容の概要と、依存関係に既知の脆弱性があるかどうかを確認できます。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」または「[pull request 内の依存関係の変更をレビューする](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。 | {% endif %} {% ifversion ghec or ghes > 3.2 %}
| Dependabot セキュリティ アップデート | Dependabot は、セキュリティ更新プログラムを使用して pull request を発行することにより、脆弱な依存関係を自動的に修正できます。 詳細については、「[Dependabot のセキュリティ更新プログラムについて](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。 |
| Dependabot バージョン アップデート | Dependabot を使用して、使用するパッケージを最新バージョンに更新しておくことができます。 詳細については、「[GitHub Dependabot のバージョン アップデートについて](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)」を参照してください。 | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### <a name="step-8-establish-a-remediation-process"></a>ステップ 8: 修復プロセスを確立する

お客様のチームがスキャンを実行し、脆弱性と依存関係を特定し、各セキュリティ機能の結果を使用できるようになったら、次のステップは、セキュリティ チームが関与することなく、通常の開発プロセス内で特定された脆弱性を確実に修復できるようにすることです。

つまり、開発チームは、開発プロセス全体で GHAS の機能を利用する方法を理解しており、通常の開発ワークフロー内でスキャンの実行、レポートの読み取り、結果の使用、脆弱性の修復を行うことができます。開発の最後に独立してセキュリティ フェーズを設けたり、レポートや結果を理解するためにセキュリティ チームに頼ったりする必要はありません。

### <a name="step-9-set-up-custom-analysis-if-needed"></a>ステップ 9: 必要に応じてカスタム分析を設定する

カスタム分析とは、既定で (およびコミュニティで) 使用できるクエリのセット以外の、カスタム CodeQL クエリが必要な場合に、オプションとして code scanning をより高度に使用することです。 カスタム クエリが必要になることはまれです。

カスタム クエリは、カスタム セキュリティ アラートを識別したり、開発者がコーディング標準に従うために特定のコード パターンを検出したりするために使用されます。

カスタム CodeQL クエリを記述することに関心がある会社は、特定の要件を満たす必要があります。

お客様のチームが CodeQL を使用して見つけたい既存の脆弱性の例をいくつか提供できる場合は、GitHub のチームに知らせてください。言語の基本を確認し、いずれかの問題に対処する方法について話し合うための入門セッションを、こちらでスケジュールできます。 CodeQL についてさらに詳しく知りたい場合は、お客様のチームが独自のクエリを作成できるように、より多くのトピックを取り上げる追加のエンゲージメント オプションを提供します。

[CodeQL クエリ](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/)の詳細については、[CodeQL のドキュメント](https://codeql.github.com/docs/codeql-overview/)を参照するか、{% data variables.product.prodname_professional_services %} チームまたは営業担当者にお問い合わせください。

### <a name="step-10-create--maintain-documentation"></a>ステップ 10: ドキュメントを作成して管理する

パイロット フェーズ全体を通じて、お客様の社内で行われたインフラストラクチャとプロセスの変更に関する高品質の内部ドキュメントと、お客様のチームによるロールアウトと実装プロセスの過程で行われたパイロット プロセスと構成の変更から得られたことを、作成して管理することが不可欠です。

綿密で完全なドキュメントを用意すると、ロールアウトの残りのフェーズをより反復可能なプロセスにするのに役立ちます。
また、優れたドキュメントがあると、ロールアウト プロセス全体を通して、新しいチームのオンボードや、新しいチーム メンバーのチームへの参加を、一貫して行うこともできます。

適切なドキュメントは、ロールアウトと実装が完了した時点で終わるわけではありません。 最も役に立つドキュメントは、チームによる GHAS の使用経験の蓄積や、ニーズの拡大に合わせて、積極的に更新され、進化します。

ドキュメントに加えて、お客様の会社からチームに、ロールアウト、実装、その他のサポートとガイダンスに関する明確なチャネルを提供することをお勧めします。 GHAS のロールアウトと実装をサポートするためにお客様の会社が行う必要がある変更のレベルに応じて、チームを適切にサポートすると、開発チームの毎日のワークフローへの導入を成功させるのに役立ちます。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 2: 組織としての了承とロールアウトの準備

{% note %}

{% octicon "clock" aria-label="Clock" %} **推定所要時間:** フェーズ 2 には、約 1 週間から 1 か月以上かかる可能性があるものと思われます。 この範囲は、お客様の会社の内部承認プロセスによって大きく異なる場合があります。

{% endnote %}

このフェーズの主な目標の 1 つは、GHAS の完全なデプロイを成功させるために組織の了承を得ることです。

このフェーズの間に、お客様の会社は、パイロット プロジェクトの結果を検討し、パイロットが成功したかどうか、どのような調整を行う必要があるか、ロールアウトを続ける準備ができているかどうかを判断します。

会社の承認プロセスによっては、作業を続けるには、エグゼクティブ スポンサーからの組織としての了承が必要な場合があります。 ほとんどの場合、会社で GHAS の価値の利用を始めるには、チームからの組織的な了承が必要です。

会社全体により広く GHAS をロールアウトする次のフェーズに進む前に、多くの場合、パイロットからの学習に基づいて、元のロールアウト計画を修正します。

変更によってドキュメントが影響を受ける可能性がある場合は、最新の状態にしてロールアウトを続けられるようにする必要もあります。

また、まだ実施していない場合は、ロールアウトの次のフェーズで GHAS に導入されるチームまたはチーム メンバーをトレーニングする計画を検討することをお勧めします。

### <a name="step-1-organize-results"></a>ステップ 1: 結果を整理する

フェーズ 1 が完了すると、{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} インスタンスで GHAS が有効になっており、{% endif %}チームは GHAS のすべての主要な機能を正常に利用できるようになっているはずであり、結果を最適化するために構成が変更されている可能性があります。 フェーズ 0 で成功メトリックを明確に定義してある場合、これらのメトリックを測定してパイロットの成功を判断できるはずです。

結果を準備するときにベースライン メトリックを見直し、元のビジネス目標に対してパイロットから収集されたメトリックに基づいて、段階的な進行状況を確実に実証できるようにすることが重要です。 この情報に関してサポートが必要な場合、GitHub は、お客様の会社が進捗状況を測定するための適切なメトリックを確実に得られるように支援できます。 利用できるサポートについて詳しくは、「[GitHub のサービスとサポート](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)」を参照してください。

### <a name="step-2-secure-organizational-buy-in"></a>ステップ 2: 組織の了承を確実に得る

組織の了承は、会社の規模、承認プロセス、GHAS をロールアウトするために必要な変更レベルなど、さまざまな要因によって異なります。

企業によって、1 回の会議で了承を得られる場合もあれば、このプロセスにかなりの時間 (数週間または数か月) が必要な場合もあります。 了承には、エグゼクティブ スポンサーからの承認が必要な場合もあれば、チームの毎日のワークフローへの GHAS の導入が必要な場合もあります。

このステージの長さは、完全にお客様の会社次第であり、どれくらい速く作業を進めたいかによって決まります。 可能な場合は、GitHub のサポートまたはサービスから、質問への回答と、このプロセスをサポートするために必要な推奨事項を得ることをお勧めします。 利用できるサポートについて詳しくは、「[GitHub のサービスとサポート](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)」を参照してください。

### <a name="step-3-revise-and-update-documentation"></a>ステップ 3: ドキュメントを修正および更新する

パイロット プロジェクトの結果、そこから得られたこと、および会社の残りのチームのニーズを確認します。 結果とニーズの分析に基づいて、ドキュメントを更新および修正します。

会社の残りの組織へのロールアウトを続ける前に、ドキュメントを最新の状態にすることが不可欠であることがわかっています。

### <a name="step-4-prepare-a-full-rollout-plan-for-your-company"></a>ステップ 4: 会社への完全なロールアウト計画を準備する

パイロット プロジェクトから学習した内容に基づいて、ステージ 0 で設計したロールアウト計画を更新します。 会社へのロールアウトを準備をするには、GHAS の使用のトレーニング、プロセスの処理、会社が GitHub に移行している場合は移行トレーニングなど、チームが必要とするトレーニングを検討します。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 3: 組織への全体なロールアウトと変更管理

{% note %}

{% octicon "clock" aria-label="Clock" %} **推定所要時間:** フェーズ 3 には、約 2 週間から複数月がかかる可能性があるものと思われます。 この範囲は、会社の規模、リポジトリやチームの数、GHAS ロールアウトの変更レベルなどによって大きく異なる場合があります。

{% endnote %}

パイロット プロジェクトの結果が会社に反映され、フェーズ 2 のすべてのロールアウト準備手順が完了したら、計画に基づいて会社への完全なロールアウトを進めることができます。

### <a name="step-1-evaluate-your-rollout-as-you-go"></a>ステップ 1: 現時点でのロールアウトを評価する

段階的アプローチを使用して GHAS をロールアウトしている場合は、会社の異なるセグメントに GHAS をロールアウトした後で少し時間を取って簡単な評価を行い、ロールアウトが円滑に進んでいることを確認することをお勧めします。 評価により、チームが適切に有効化およびトレーニングされていること、GHAS の固有の構成ニーズが満たされていること、および必要に応じて計画とドキュメントを調整できることを確認できます。

### <a name="step-2-set-up-any-needed-training"></a>ステップ 2: 必要なトレーニングを設定する

パイロット プロジェクト チーム以外のチームに GHAS をロールアウトする場合は、チームをトレーニングするか、必要に応じて追加のサポートを提供するトレーニング リソースを利用できるようにすることが重要です。

主に次のような領域で、追加のサポートが必要になります。
  - GHAS に関するトレーニング
  - GitHub の新規顧客向けトレーニング
  - GitHub への移行に関するトレーニング

{% data variables.product.prodname_professional_services_team %} チームは、さまざまなトレーニング サービス、ブートキャンプ、一般的なアドバイスを提供して、お客様のチームによるロールアウトと実装のプロセス全体をサポートします。 詳細については、「[GitHub のサービスとサポート](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)」を参照してください。

お客様のチームのサポートに役立つよう、関連する GitHub ドキュメントを次にまとめておきます。

GHAS を有効にする方法のドキュメントについては、次を参照してください。
  - [Advanced Security の機能を有効にする](/get-started/learning-about-github/about-github-advanced-security)
  - [Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
  - 「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」

GitHub に移行する方法のドキュメントについては、次を参照してください。
  - [GitHub にソース コードをインポートする](/github/importing-your-projects-to-github/importing-source-code-to-github)

GitHub の概要に関するドキュメントについては、次を参照してください。
  - [始めましょう!](/get-started)

### <a name="step-3-help-your-company-manage-change"></a>ステップ 3: 会社の変更管理を支援する

フェーズ 2 のステップ 4 では、パイロット プロジェクトからの学習に基づいて初期ロールアウト計画を更新することをお勧めしました。 会社への GHAS のロールアウトを成功させるため、組織で必要な変更を実装したら、引き続き計画を更新してください。

GHAS のロールアウトと、毎日のワークフローへのベスト プラクティスの導入が成功するかどうかは、作業にセキュリティを組み込むことが必要である理由をチームに確実に理解させることにかかっています。

### <a name="step-4-continued-customization"></a>ステップ 4: カスタマイズを続ける

会社の組織全体へのロールアウトが済んでも、GHAS の構成とカスタマイズは終わりではありません。 GHAS が会社の変化するニーズを引き続きサポートできるよう、さらにカスタム構成の変更を継続する必要があります。

お客様のチームが時間の経過と共に GHAS の経験とスキルを高めるにつれて、さらなるカスタマイズの機会が生まれます。
