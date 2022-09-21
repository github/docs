---
title: GitHub Actions を理解する
shortTitle: Understanding GitHub Actions
intro: 'コア概念や重要な用語など、{% data variables.product.prodname_actions %} の基本について説明します。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: b1e82506da6ede65b5ab93f94ce67dee681f81f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763573'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% data reusables.actions.about-actions %} リポジトリに対するすべての pull request をビルドしてテストしたり、マージされた pull request を運用環境にデプロイしたりするワークフローを作成できます。

{% data variables.product.prodname_actions %} は、DevOps であるだけでなく、リポジトリで他のイベントが発生したときにワークフローを実行できます。 たとえば、リポジトリで新しい issue が作成されるたびに、適切なラベルを自動的に追加するワークフローを実行できます。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} では、ワークフローを実行するための Linux、Windows、macOS 仮想マシンが提供されます。また、自身のデータセンターまたはクラウド インフラストラクチャで独自のセルフホスト ランナーをホストすることもできます。

{% elsif ghes or ghae %}

{% data variables.product.product_location %} のワークフローを実行するには、独自の Linux、Windows、または macOS 仮想マシンをホストする必要があります。 {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

{% data variables.product.prodname_actions %} を Enterprise に導入する方法の詳細については、「[Enterprise への {% data variables.product.prodname_actions %} の導入](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)」を参照してください。

{% endif %}

## {% data variables.product.prodname_actions %} のコンポーネント

リポジトリで、pull request のオープンや issue の作成などの _イベント_ が発生したときにトリガーされるように {% data variables.product.prodname_actions %} _ワークフロー_ を構成できます。  ワークフローには、1 つ以上の _ジョブ_ が含まれており、ジョブは順次にまたは並列で実行できます。  各ジョブは、専用の仮想マシン _ランナー_ 内、またはコンテナー内で実行され、定義した _スクリプト_ を実行するか、または _アクション_ (ワークフローを簡略化できる再利用可能な拡張機能) を実行する 1 つ以上のステップで構成されます。

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} ワークフローを別のワークフローで参照できます。「[Reusing workflows](/actions/learn-github-actions/reusing-workflows)」 (ワークフローの再利用) を参照してください。{% endif %}

ワークフローの詳細については、「[Using workflows](/actions/using-workflows)」 (ワークフローの使用) を参照してください。

### イベント

イベントは、ワークフロー実行をトリガーする、リポジトリ内の特定のアクティビティです。 たとえば、pull request が作成されたとき、issue が開かれたとき、またはリポジトリにコミットがプッシュされたときに、{% data variables.product.prodname_dotcom %} からアクティビティを発生させることができます。  また、スケジュールに従って、[REST API に投稿](/rest/reference/repos#create-a-repository-dispatch-event)して、または手動で、ワークフロー実行をトリガーすることもできます。

ワークフローのトリガーに使用できるイベントの完全な一覧については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)」を参照してください。

### ジョブ

ジョブは、同じランナーで実行される、ワークフロー内の一連の _ステップ_ です。  各ステップは、実行されるシェル スクリプト、または実行される _アクション_ のいずれかです。  ステップは順番に実行され、相互に依存します。  各ステップは同じランナーで実行されるため、あるステップから別のステップにデータを共有できます。  たとえば、アプリケーションをビルドするステップの後に、ビルドされたアプリケーションをテストするステップを続けることができます。

ジョブと他のジョブとの依存関係を構成できます。既定では、ジョブに依存関係はなく、相互に並列で実行されます。  ジョブが別のジョブに依存する場合、依存ジョブが完了するまで待ってから実行されます。  たとえば、異なるアーキテクチャ用で依存関係のない複数のビルド ジョブがあり、それらのジョブに依存するパッケージ化ジョブがあるとします。  ビルド ジョブは並列で実行され、それらがすべて正常に完了したら、パッケージ化ジョブが実行されます。

ジョブの詳細については、「[Using jobs](/actions/using-jobs)」 (ジョブの使用) を参照してください。

### アクション

_アクション_ は、{% data variables.product.prodname_actions %} 用のカスタム アプリケーションであり、複雑で頻繁に繰り返されるタスクを実行します。  アクションを使用すると、ワークフロー ファイルに記述する繰り返しコードの量を削減するのに役立ちます。  アクションでは、{% data variables.product.prodname_dotcom %} からの Git リポジトリのプル、ビルド環境に適したツールチェーンの設定、またはクラウド プロバイダーに対する認証の設定を実行できます。

独自のアクションを記述することも、{% data variables.product.prodname_marketplace %} で、ワークフローで使用するアクションを見つけることもできます。

{% data reusables.actions.internal-actions-summary %}

詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

### ランナー

{% data reusables.actions.about-runners %} 各ランナーでは、一度に 1 つのジョブを実行できます。 {% ifversion ghes or ghae %} {% data variables.product.product_name %} の場合、独自のランナーをホストする必要があります。 {% elsif fpt or ghec %}{% data variables.product.company_short %} では、ワークフローを実行するために、Ubuntu Linux、Microsoft Windows、macOS ランナーが提供されます。各ワークフロー実行は、新しくプロビジョニングされた仮想マシンで実行されます。 {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} には、より大きな構成で使うことができる {% data variables.actions.hosted_runner %} も用意されています。 詳しくは、「[{% data variables.actions.hosted_runner %} を使用する](/actions/using-github-hosted-runners/using-larger-runners)」を参照してください。 {% endif %}異なるオペレーティング システムまたは特定のハードウェア構成が必要な場合、独自のランナーをホストできます。{% endif %} {% ifversion fpt or ghec %}セルフホステッド ランナーについて詳しくは{% endif %}、「[自分のランナーをホストする](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.workflow-basic-example-and-explanation %}

## より複雑な例
{% data reusables.actions.link-to-example-library %}

## 次の手順

- {% data variables.product.prodname_actions %} について引き続き学習するには、「[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)」 (アクションの検出とカスタマイズ) を参照してください。
{% ifversion fpt or ghec or ghes %}
- {% data variables.product.prodname_actions %} の課金のしくみについては、「[{% data variables.product.prodname_actions %} の課金について](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)」を参照してください。
{% endif %}

## サポートへの問い合わせ

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## 参考資料

- 「[エンタープライズ向け {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」 {% endif %}
