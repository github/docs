---
title: カスタム アクションについて
intro: 'アクションとは、ジョブを作成し、ワークフローをカスタマイズするために組み合わせることができる個々のタスクです。 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
ms.openlocfilehash: ac933a5014750f75373fafa7f8dd52333b79a469
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147154574'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## カスタム アクションについて

{% data variables.product.prodname_dotcom %}の API やパブリックに利用可能なサードパーティAPIとのインテグレーションなど、好きな方法でリポジトリを操作するカスタムコードを書いて、アクションを作成することができます。 たとえば、アクションで npm モジュールを公開したり、緊急の問題が発生したときに SMS アラートを送信したり、実稼働可能なコードをデプロイしたりできます。

{% ifversion fpt or ghec %}ワークフローで使用する独自のアクションを作成したり、ビルドしたアクションを {% data variables.product.prodname_dotcom %} コミュニティと共有したりできます。 構築したアクションをすべてのユーザーと共有するには、リポジトリをパブリックにする必要があります。 {% ifversion internal-actions %}アクションを企業内でのみ共有するには、リポジトリを内部にする必要があります。{% endif %} {% endif %}

アクションはマシン上で直接実行することも、Dockerコンテナで実行することもできます。 アクションの入力、出力、環境変数を定義できます。

## アクションの種類

DockerコンテナのアクションとJavaScriptのアクションをビルドできます。 アクションには、アクションの入力、出力、およびメインのエントリポイントを定義するメタデータファイルが必要です。 メタデータ ファイル名は、`action.yml` または `action.yaml` である必要があります。 詳細については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions)」を参照してください。

| 種類 | オペレーティング システム |
| ---- | ------------------- |
| Docker コンテナー | Linux |
| JavaScript | Linux、MacOS、Windows |
| 複合アクション | Linux、MacOS、Windows |

### Docker コンテナーのアクション

Dockerコンテナは、{% data variables.product.prodname_actions %}コードで環境をパッケージ化します。 アクションの利用者がツールや依存関係を考慮しなくて済むため、作業単位の一貫性と信頼性が向上します。

Dockerコンテナを使用すると、OSのバージョン、依存関係、ツール、コードを限定することができます。 特定の環境設定で実行しなければならないアクションの場合、オペレーティングシステムとツールを選択できるので、Dockerは理想的な選択肢です。 コンテナのビルドおよび取得のレイテンシにより、DockerコンテナのアクションはJavaScriptアクションより遅くなります。

Docker コンテナアクションは、Linux オペレーティングシステムのランナーでのみ実行できます。 {% data reusables.actions.self-hosted-runner-reqs-docker %}

### JavaScript のアクション

JavaScriptアクションはランナーマシン上で直接実行でき、アクションのコードはそのコードを実行するのに使われる環境から分離できます。 JavaScriptのアクションを使うと、アクションコードが単純になり、実行も Dockerコンテナのアクションより速くなります。

{% data reusables.actions.pure-javascript %}

Node.jsプロジェクトの開発では、{% data variables.product.prodname_actions %} Toolkitで提供するパッケージを使って、開発の速度を上げることができます。 詳細については、[actions/toolkit](https://github.com/actions/toolkit) リポジトリを参照してください。

### 複合アクション

_複合_ アクションを使用すると、複数のワークフロー ステップを 1 つのアクション内で組み合わせることができます。 たとえば、この機能を使用して、複数の実行コマンドを 1 つのアクションにバンドルし、バンドルされたコマンドをそのアクションを使用する 1 つのステップとして実行するワークフローを作成できます。 例については、「[複合アクションを作成する](/actions/creating-actions/creating-a-composite-action)」を参照してください。

## アクションの場所を選択する

他のユーザーが使うアクションを開発する場合には、他のアプリケーションコードにバンドルするのではなく、アクションをそれ自体のリポジトリに保持しておくことをお勧めします。 こうすると、他のソフトウェアと同様にアクションのバージョニング、追跡、リリースが可能になるからです。

{% ifversion fpt or ghec %}アクションをそれ自体のリポジトリに保存すると、{% data variables.product.prodname_dotcom %} コミュニティがアクションを見つけやすくなります。また、開発者がアクションの問題を解決したり機能を拡張したりするとき、コードベースのスコープが限定され、アクションのバージョン管理が他のアプリケーション コードのバージョン管理から切り離されます。
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}作成しているアクションを他のユーザーが使用できるようにしない場合、{% else %}{% endif %}アクションのファイルは、リポジトリのどの場所に保存してもかまいません。 アクション、ワークフロー、アプリケーション コードを 1 つのリポジトリで組み合わせる予定の場合、アクションは `.github` ディレクトリに保存することをお勧めします。 たとえば、`.github/actions/action-a` や `.github/actions/action-b`す。

## {% data variables.product.prodname_ghe_server %} との互換性

アクションが {% data variables.product.prodname_ghe_server %} と互換性があることを確認するには、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API URL へのハードコードされた参照を使用しないようにする必要があります。 代わりに、環境変数を使用して {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を参照する必要があります。

- REST API の場合は、`GITHUB_API_URL` 環境変数を使用します。
- GraphQL の場合は、`GITHUB_GRAPHQL_URL` 環境変数を使用します。

詳細については、「[デフォルトの環境変数](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)」を参照してください。

## アクションにリリース管理を使用する

このセクションでは、リリース管理を使用してアクションへの更新を予測可能な方法で配布する方法について説明します。

### リリース管理の良い方法

他のユーザが使用するアクションを開発している場合は、リリース管理を使用して、更新の配布方法を管理することをお勧めします。 ユーザーは、アクションのパッチ バージョンについて、必須の重要修正およびセキュリティ パッチが含まれ、既存のワークフローとの互換性も引き続き維持していることを期待できます。 変更が互換性に影響する場合は、新しいメジャーバージョンのリリースを検討する必要があります。

このリリース管理アプローチでは、アクションが最新のコードを含む可能性が高く、結果として不安定になる可能性があるため、ユーザはアクションのデフォルトブランチを参照しないでください。 代わりに、ユーザにアクションの使用時にメジャーバージョンを指定するように勧めて、問題が発生した場合にのみ、さらに特定したバージョンを指定するようにすることができます。

特定のアクションのバージョンを使用するために、ユーザは {% data variables.product.prodname_actions %} ワークフローを設定して、タグ、コミットの SHA、またはリリースの名前が付けられたブランチをターゲットにすることができます。

### タグを使用したリリース管理

アクションのリリース管理にはタグを使用することをお勧めします。 この方法を使用すると、ユーザはメジャーバージョンとマイナーバージョンを簡単に区別できます。

- リリース タグ (`v1.0.2` など) を作成する前に、リリース ブランチ (`release/v1` など) でリリースを作成して検証する。
- セマンティックバージョニングを使用してリリースを作成します。 詳細については、[リリースの作成](/articles/creating-releases)に関する記事を参照してください。
- メジャー バージョン タグ (`v1`、`v2` など) を移動して、現在のリリースの Git 参照をポイントする。 詳細については、「[Git basics - tagging (Git の基本 - タグ付け)](https://git-scm.com/book/en/v2/Git-Basics-Tagging)」を参照してください。
- 既存のワークフローを中断させる変更に対して、新しいメジャー バージョン タグ (`v2`) を導入する。 たとえば、アクションの入力の変更は破壊的変更です。
- メジャー バージョンには、最初のリリース時にそのステータスを示す `beta` タグ (`v2-beta` など) を付けることができます。 その後、`-beta` タグは準備ができたら削除できます。

次の例は、ユーザがメジャーリリースタグを参照する方法を示しています。

```yaml
steps:
    - uses: actions/javascript-action@v1
```

次の例は、ユーザが特定のパッチリリースタグを参照する方法を示しています。

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### ブランチを使用したリリース管理

リリース管理にブランチ名を使用する場合、次の例では名前付きブランチを参照する方法を示しています。

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### コミットの SHA を使用したリリース管理

各 Git コミットは、計算された SHA 値を受け取ります。これは一意で不変のものです。 アクションのユーザは、コミットの SHA 値に依存することを好む場合があります。削除や移動ができるタグを指定するよりこの方法のほうが信頼できるためです。 ただし、これは、ユーザがアクションに対して行われた更新をそれ以上受け取らないことを意味しています。 短縮された値ではなく、コミットの完全な SHA 値を使う必要があります。

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## アクションのREADMEファイルを作成する

アクションの使用方法を伝えるため、README ファイルを作成することをお勧めします。 `README.md` には、以下の情報を含めることができます。

- アクションが実行する内容の説明
- 必須の入力引数と出力引数
- オプションの入力引数と出力引数
- アクションが使用するシークレット
- アクションが使用する環境変数
- ワークフローにおけるアクションの使用例

## {% data variables.product.prodname_github_apps %}に対する{% data variables.product.prodname_actions %}の比較

{% data variables.product.prodname_marketplace %}は、ワークフローを改善するツールを提供します。 それぞれのツールの違いや利点を理解すれば、自分の作業に最も適したツールを選択できるようになります。 アプリの構築の詳細については、「[アプリについて](/apps/about-apps/)」を参照してください。

### GitHub ActionsとGitHub Appsの強み

{% data variables.product.prodname_actions %} と {% data variables.product.prodname_github_apps %} はどちらもビルドの自動化の方法とワークフローツールを提供しますが、これらはそれぞれ異なる強みを持っており、違ったやり方で役立ちます。

{% data variables.product.prodname_github_apps %}は：
* 永続的に動作し、イベントに素早く反応できます。
* 永続化されたデータが必要な場合にうまく動作します。
* 時間のかからないAPIリクエストとうまく働きます。
* ユーザが提供するサーバーあるいはコンピューティングインフラストラクチャ上で動作します。

{% data variables.product.prodname_actions %}は：
* 継続的インテグレーションや継続的デプロイメントを実行する自動化を提供します。
* ランナーマシン上で直接、あるいはDockerコンテナ内で実行できます。
* リポジトリのクローンへのアクセスを含めて、コードにアクセスするツール、コードフォーマッタ、コマンドラインツールをデプロイしたり公開したりできます。
* コードのデプロイやアプリケーションの提供が必要ありません。
* シークレットの生成と利用のためのシンプルなインターフェースを持っており、アクションを利用する人の認証情報を保存せずにサードパーティのサービスとアクションを連携できます。

## 参考資料

- [{% data variables.product.prodname_actions %} 用の開発ツール](/articles/development-tools-for-github-actions)
