---
title: GitHub Actionsを理解する
shortTitle: GitHub Actionsを理解する
intro: '{% data variables.product.prodname_actions %}の基本を理解し、中心となるコンセプトと重要な用語を紹介します。'
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% data reusables.actions.about-actions %} レポジトリで各プルリクエストのビルドとテスト、製品へのプルリクエストのマージを行うワークフローを作ることができます。

{% data variables.product.prodname_actions %} は単なるDevOpsを超え、その他のイベントがレポジトリ内に発生するときにワークフローを実行することが出来ます。例えば、レポジトリに新しいissueが作成されたとき、自動的に適切なラベルを付けることが出来ます。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} が提供するワークフロー用のLinux, Windows, macOSの仮想マシン、またはあなたのデータセンターやクラウド環境であなたがホストするセルフホストのランナーを使用できます。

{% elsif ghes or ghae %}

{% data variables.product.product_location %}でワークフローを実行するためのLinux, Windows, macOS仮想マシンをホストしなければなりません。 {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

For more information about introducing {% data variables.product.prodname_actions %} to your enterprise, see "[Introducing {% data variables.product.prodname_actions %} to your enterprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)."

{% endif %}

## {% data variables.product.prodname_actions %} のコンポーネント

例えばプルリクエストが開かれたとか新しいissueが作成されたなど、レポジトリ内でイベントが発生したときに実行するための{% data variables.product.prodname_actions %} _ワークフロー_を設定することができます。ワークフローには1つ、または直列または並列に動作する複数のジョブを含むことが出来ます。各ジョブはその仮想マシン _ランナー_、 またはコンテナ内で実行し、1つまたは複数_ステップ_ のあなたが用意したスクリプトや、あなたのワークフローで再利用可能なアクションを実行します。

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

### ワークフロー

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}You can reference a workflow within another workflow, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."{% endif %}

For more information about workflows, see "[Using workflows](/actions/using-workflows)."

### イベント

イベントとは、ワークフローを実行するためレポジトリ内の特定のアクティビティを指します。例えば、誰かがプルリクエストを作成したり、issueを開いたり、レポジトリにコミットをpushしたりしたとき {% data variables.product.prodname_dotcom %} からアクティビティが発生します。
ワークフローをスケジュールで実行したり、[REST APIをPOSTしたり](/rest/reference/repos#create-a-repository-dispatch-event)、手動で実行することもできます。

ワークフローのトリガーに使用できるイベントの完全なリストについては、[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)を参照してください。

### ジョブ

ジョブとは、同じランナー上で動作する各ワークフローの _ステップ_ のセットです。各ステップは、実行するシェルスクリプトか、実行する_アクション_です。
ステップは順序ごとに実行されます。各ステップは同じランナー上で実行するため、１つのステップからその他にデータを共有することが出来ます。
例えば、１つのステップでアプリケーションをビルドし、続くステップでビルドされたアプリケーションをテストすることができます。

他のジョブに依存するジョブを設定することができます。デフォルトではジョブは依存関係を持たず、それぞれが並列に動きます。１つのジョブが他のジョブに依存するとき、そのジョブが実行する前に依存するジョブが完了するのを待ちます。例えば、依存関係のない異なるアーキテクチャ向けに複数のビルドし、それらに続いてパッケージをするジョブを持つことができます。ビルドするジョブは並列で行われ、それらが全て成功したとき、パッケージングのジョブが実行されます。

ジョブに関する詳しい情報は、 "[Using jobs](/actions/using-jobs)." を参照してください。

### アクション

_アクション_とは、{% data variables.product.prodname_actions %}プラットフォームのためのカスカムアプリケーションで、複雑に、しかし定期的に繰り返されるタスクです。
アクションを使うことで、ワークフローファイル内であなたが書く、繰り返されるコードの量を減らすことを助長します。アクションは、{% data variables.product.prodname_dotcom %}からあなたのgitレポジトリをpullしたり、ビルド環境に対する正しいツールチェインをセットアップしたり、クラウドプロバイダーに対する認証のセットアップを行ったりすることができます。

独自のアクションを書いたり、ワークフロー内で使用するアクションを {% data variables.product.prodname_marketplace %} で探したりできます。

{% data reusables.actions.internal-actions-summary %}

詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

### ランナー

{% data reusables.actions.about-runners %} 各ランナーは各実行時に1つのジョブを実行できます。 {% ifversion ghes or ghae %} You must host your own runners for {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} は Ubuntu Linux, Microsoft Windows, そして macOSのランナーをワークフロー実行環境として提供し、各ワークフローはフレッシュかつ新規な環境の仮想マシンで実行されます。{% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} はさらに、巨大なコンフィギュレーションのための {% data variables.actions.hosted_runner %}も提供します。詳しい情報は、"[Using {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners)"をお読みください。{% endif %}もし異なるオペレーティングシステムや特定のハードウェアが必要な場合は、あなたのランナーをあなたがホストすることができます。{% endif %} 詳しい情報は、{% ifversion fpt or ghec %} about self-hosted runners{% endif %},  "[Hosting your own runners](/actions/hosting-your-own-runners)"をお読みください。

{% data reusables.actions.workflow-basic-example-and-explanation %}

## 追加の複雑なサンプル
{% data reusables.actions.link-to-example-library %}

## 次のステップ

- {% data variables.product.prodname_actions %} について詳しくは、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。
{% ifversion fpt or ghec or ghes %}
- To understand how billing works for {% data variables.product.prodname_actions %}, see "[About billing for {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)."
{% endif %}

## サポートへの連絡

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## 参考リンク

- "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"
{% endif %}
