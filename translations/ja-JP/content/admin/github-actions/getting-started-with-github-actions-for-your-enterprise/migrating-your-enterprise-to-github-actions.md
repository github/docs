---
title: GitHub Actions への Enterprise の移行
shortTitle: Migrate to Actions
intro: '別のプロバイダーから Enterprise の {% data variables.product.prodname_actions %} への移行を計画する方法について学びます。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 332d8af7f1087626509a9c72751882ea11f3072f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160300'
---
## {% data variables.product.prodname_actions %} への Enterprise の移行について

既存のシステムから {% data variables.product.prodname_actions %} に Enterprise を移行するために、移行を計画し、移行を完了し、既存のシステムを廃止します。

このガイドでは、移行に関する具体的な考慮事項について説明します。 {% data variables.product.prodname_actions %} を Enterprise に導入する方法の詳細については、「[Enterprise への {% data variables.product.prodname_actions %} の導入](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)」を参照してください。

## 移行を計画する

Enterprise を {% data variables.product.prodname_actions %} に移行する前に、移行するワークフローとその移行がチームにどのように影響するかを特定し、移行を完了する方法とタイミングを計画する必要があります。

### 移行スペシャリストの活用

{% data variables.product.company_short %} が移行に役立つ場合があります。また、{% data variables.product.prodname_professional_services %} を購入する利点が得られる場合もあります。 詳細については、専任の担当者または {% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

### 移行ターゲットの特定とインベントリ作成

{% data variables.product.prodname_actions %} に移行する前に、既存のシステムで Enterprise によって使用されているワークフローを完全に理解しておく必要があります。

まず、Enterprise 内の既存のビルドおよびリリース ワークフローのインベントリを作成し、どのワークフローがアクティブに使用されていて移行する必要があるかと、取り残されている可能性があるのはどれかに関する情報を収集します。

次に、現在のプロバイダーと {% data variables.product.prodname_actions %} の違いを確認します。 これは、各ワークフローの移行に関する問題や、Enterprise で機能の違いが生じる可能性がある場所を評価するのに役立ちます。 詳細については、「[{% data variables.product.prodname_actions %} への移行](/actions/migrating-to-github-actions)」を参照してください。

この情報を使用すると、{% data variables.product.prodname_actions %} への移行が可能で必要であるワークフローを判断できます。

### 移行によるチームへの影響を特定する

Enterprise 内で使用されているツールを変更すると、チームの作業に影響します。 既存のシステムから {% data variables.product.prodname_actions %} にワークフローを移行すると、開発者の日常業務にどのような影響を与えるかを考える必要があります。

移行の影響を受けるプロセス、統合、サード パーティ製のツールを特定し、行う必要がある更新の計画を立てます。

移行がコンプライアンスに関する問題にどのように影響するかを考えます。 たとえば、既存の資格情報スキャンとセキュリティ分析ツールは {% data variables.product.prodname_actions %} で動作しますか? それとも、新しいツールを使用する必要がありますか?

既存のシステムのゲートとチェックを特定し、{% data variables.product.prodname_actions %} で実装できることを確認します。

### 移行ツールの特定と検証

自動移行ツールを使用すると、Enterprise のワークフローを既存のシステムの構文から、{% data variables.product.prodname_actions %} で必要な構文に変換できます。 サードパーティ製のツールを特定するか、専任の担当者または {% data variables.contact.contact_enterprise_sales %} に問い合わせて、{% data variables.product.company_short %} が提供できるツールについて確認します。 たとえば、{% data variables.product.prodname_actions_importer %} を使用して、サポートされているさまざまなサービスから CI パイプラインの計画、スコープ設定を行い、{% data variables.product.prodname_actions %} に移行することができます。 詳しくは、「[{% data variables.product.prodname_actions_importer %} を使用した移行の自動化](/actions/migrating-to-github-actions/automating-migration-with-github-actions-importer)」をご覧ください。

移行を自動化するツールを特定した後、一部のテスト ワークフローでツールを実行し、結果が期待どおりであることを確認することで、ツールを検証します。

自動化されたツールではほとんどのワークフローを移行できるはずですが、少なくともごく一部は手動で書き換える必要がある可能性があります。 完了する必要がある手動の作業量を見積もります。

### 移行アプローチの決定

Enterprise に最適な移行アプローチを決定します。 小規模なチームでは、"完全な置き換え" アプローチを使用して、すべてのワークフローを一度に移行できる場合があります。 大規模な Enterprise では、反復的なアプローチの方がより現実的な場合があります。 移行全体を中央で管理することも、個々のチームに独自のワークフローを移行してセルフ サービスを依頼することもできます。

アクティブな管理とセルフ サービスを組み合わせた反復的なアプローチをお勧めします。 内部チャンピオンとしての役割を果たせる早期導入者の小規模なグループから始めます。 ビジネスの幅を表すのに十分に包括的な一部のワークフローを特定します。 早期導入者と協力して、これらのワークフローを {% data variables.product.prodname_actions %} に移行し、必要に応じて反復処理します。 これにより、他のチームもワークフローを移行できることを確信できます。

その後、より大規模な Organization で {% data variables.product.prodname_actions %} を使用できるようにします。 これらのチームが独自のワークフローを {% data variables.product.prodname_actions %} に移行するのに役立つリソースを提供し、既存のシステムが廃止されるタイミングをチームに知らせます。 

最後に、特定の期間内に移行を完了するために古いシステムをまだ使用しているチームに知らせます。 他のチームの成功を示し、移行が可能で望ましいことを伝えて安心させます。

### 移行スケジュールの定義

移行アプローチを決定した後、各チームがワークフローを {% data variables.product.prodname_actions %} に移行するタイミングを示すスケジュールを作成します。

まず、移行を完了する日付を決定します。 たとえば、現在のプロバイダーとの契約が終了するまでに移行を完了することを計画できます。

その後、チームと協力して、チームの目標を犠牲にすることなく、期限に間に合うスケジュールを作成します。 移行を求める個々のチームのビジネスの周期とワークロードを確認します。 各チームと連携して、配信スケジュールを理解し、チームが配信能力に影響を与えない時間帯にワークフローを移行できるようにする計画を作成します。

## {% data variables.product.prodname_actions %} への移行

移行を開始する準備ができたら、上記で計画した自動ツールと手動書き換えを使用して、既存のワークフローを {% data variables.product.prodname_actions %} に変換します。

また、おそらく成果物をアーカイブするスクリプト化されたプロセスを記述することで、既存のシステムからの古いビルド成果物を維持することもできます。

## 既存のシステムの廃止

移行が完了した後、既存のシステムの廃止について考えることができます。

一定期間、両方のシステムをサイド バイ サイドで実行しながら、{% data variables.product.prodname_actions %} 構成が安定しており、開発者のエクスペリエンスを低下させていないことを確認できます。

最終的に、古いシステムの使用を停止して切り離し、確実に Enterprise 内の誰も古いシステムを再び有効にできないようにします。
