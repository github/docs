---
title: 継続的インテグレーションについて
intro: '{% data variables.product.prodname_actions %} で、{% data variables.product.prodname_dotcom %} リポジトリにカスタム継続的インテグレーション (CI) ワークフローを直接作成できます。'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: 26b9088133ad561900d06a0c885d6b06b9b55861
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880662'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 継続的インテグレーションについて

継続的インテグレーション (CI) とは、ソフトウェアの開発においてコードを頻繁に共有リポジトリにコミットする手法のことです。 コードをコミットする頻度が高いほどエラーの検出が早くなり、開発者がエラーの原因を見つけるためにデバッグしなければならないコードの量も減ります。 コードの更新が頻繁であれば、ソフトウェア開発チームの他のメンバーによる変更をマージするのも、それだけ容易になります。 コードの記述により多くの時間をかけられるようになり、エラーのデバッグやマージコンフリクトの解決にかける時間が減るので、これは開発者にとって素晴らしいやり方です。

コードをリポジトリにコミットするとき、コミットによってエラーが発生しないように、コードのビルドとテストを継続的に行うことができます。 テストには、コードの文法チェッカー (スタイルフォーマットをチェックする)、セキュリティチェック、コードカバレッジ、機能テスト、その他のカスタムチェックを含めることができます。

コードをビルドしてテストするには、サーバーが必要です。 ローカルでアップデートのビルドとテストを行ってからコードをリポジトリにプッシュする方法もありますし、リポジトリ での新しいコードのコミットをチェックするCIサーバーを使用する方法もあります。

## {% data variables.product.prodname_actions %}を使用する継続的インテグレーションについて

{% ifversion ghae %}{% data variables.product.prodname_actions %} を利用した CI では、リポジトリ中のコードをビルドしてテストを実行できるワークフローが利用できます。 ワークフローは、ホストするランナー システムで実行できます。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。
{% else %}{% data variables.product.prodname_actions %} を利用した CI では、リポジトリ中のコードをビルドしてテストを実行できるワークフローが利用できます。 ワークフローは{% data variables.product.prodname_dotcom %}ホストの仮想マシン、もしくはあなたが自分でホストするマシン上で実行できます。 詳しくは、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」と「[セルフホステッド ランナーについて](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。
{% endif %}

CI ワークフローは、{% data variables.product.prodname_dotcom %} イベントが発生したとき (たとえば、新しいコードがリポジトリにプッシュされたとき) や、設定されたスケジュール、またはリポジトリディスパッチ webhook を使用して外部イベントが発生したときに実行するように設定できます。

{% data variables.product.product_name %} は CI テストを実行して、Pull Requestで各テストの結果を提供するため、ブランチの変更によってエラーが発生したかどうかを確認できます。 ワークフローのテストがすべて成功すると、プッシュした変更をチームメンバーがレビューできるように、またはマージできるようになります。 テストが失敗した場合は、いずれかの変更がその原因になっている可能性があります。

リポジトリに CI を設定する際には、{% data variables.product.product_name %} がリポジトリ内のコードを分析し、リポジトリ内の言語とフレームワークに基づいて CI ワークフローを推奨します。 たとえば、[Node.js](https://nodejs.org/en/) を使用する場合、{% data variables.product.product_name %} によって、Node.js パッケージをインストールし、テストを実行するスターター ワークフローが提案されます。 {% data variables.product.product_name %} によって提案される CI スターター ワークフローを利用したり、提案されたスターター ワークフローをカスタマイズしたり、CI テストを実行する独自のカスタム ワークフロー ファイルを作成したりできます。

![提案された継続的インテグレーション スターター ワークフローのスクリーンショット](/assets/images/help/repository/ci-with-actions-template-picker.png)

プロジェクトの CI ワークフローの設定だけでなく、{% data variables.product.prodname_actions %} を使用してソフトウェア開発のライフサイクル全体に渡るワークフローを作成することもできます。 たとえば、Actionを使用してプロジェクトをデプロイ、パッケージ、またはリリースすることが可能です。 詳細については、「[{% data variables.product.prodname_actions %} について](/articles/about-github-actions)」を参照してください。

一般的な用語の定義については、「[{% data variables.product.prodname_actions %} のコア概念](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)」を参照してください。

## スターター ワークフロー

{% data variables.product.product_name %} からは、さまざまな言語とフレームワークの CI スターター ワークフローが提供されます。

{% data variables.product.product_location %}{% endif %} の {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) リポジトリ {% else %} `actions/starter-workflows` リポジトリにある {% data variables.product.company_short %} によって提供される CI スターター ワークフローの完全一覧を参照します。

## 参考資料

{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) の請求を管理する" {% endif %}
