---
title: アクションのリリースと管理
shortTitle: Releasing and maintaining actions
intro: 自動化とオープンソースのベスト プラクティスを活用して、アクションを解放および維持できます。
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068788'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

アクションを作成した後、コミュニティ投稿を操作しながら、引き続き新機能をリリースする必要があります。 このチュートリアルでは、オープン ソースでアクションをリリースおよび管理するために従うことができるプロセスの例について説明します。 この例では、次の処理を実行します。

* 継続的インテグレーション、依存関係の更新、リリース管理、タスクの自動化に {% data variables.product.prodname_actions %} を活用する。
* 自動テストとビルド バッジにより信頼度を提供する。
* 理想的にはより広範なワークフローの一部として、アクションを使用する方法を示す。
* 歓迎するコミュニティ投稿の種類を伝える (issue、pull request、脆弱性レポートなど)。

このプロセスの適用例については、[github-developer/javascript-action](https://github.com/github-developer/javascript-action) を参照してください。

## アクションの開発とリリース

このセクションでは、アクションを開発およびリリースするプロセスの例について説明し、{% data variables.product.prodname_actions %} を使用してプロセスを自動化する方法を示します。

### JavaScript アクションについて

JavaScript アクションは、メタデータを含む Node.js リポジトリです。 しかし、JavaScript アクションには、従来の Node.js プロジェクトと比較して追加のプロパティがあります。

* 依存パッケージは、通常、コンパイルおよび縮小された形式でコードと共にコミットされます。 これは、自動ビルドとセキュリティで保護されたコミュニティ投稿が重要であることを意味します。

{% ifversion fpt or ghec %}

* タグ付けされたリリースは、{% data variables.product.prodname_marketplace %} に直接公開し、{% data variables.product.prodname_dotcom %} 全体のワークフローで使用できます。

{% endif %}

* 多くのアクションでは、{% data variables.product.prodname_dotcom %} の API とサード パーティの API が利用されるため、堅牢なエンドツーエンドのテストをお勧めします。

### {% data variables.product.prodname_actions %} ワークフローの設定

次のセクションで開発者プロセスをサポートするには、2 つの {% data variables.product.prodname_actions %} ワークフローをリポジトリに追加します。

1. コミットが機能ブランチまたは `main` にプッシュされたとき、あるいは pull request が作成されたときにトリガーされるワークフローを追加します。 単体および統合テストを実行するようにワークフローを構成します。 例については、[こちらのワークフロー](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml)をご覧ください。
2. リリースが公開または編集されたときにトリガーされるワークフローを追加します。 セマンティック タグが確実に配置されるようにワークフローを構成します。 [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) などのアクションを使用して、JavaScript とメタデータ ファイルをコンパイルしてバンドルし、セマンティック メジャー、マイナー、およびパッチ タグを強制的にプッシュできます。 例については、[こちらのワークフロー](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml)を参照してください。 セマンティック タグの詳細については、「[セマンティック バージョン管理について](https://docs.npmjs.com/about-semantic-versioning)」を参照してください。

### 開発者プロセスの例

自動的にテストを実行し、リリース{% ifversion fpt or ghec%} を作成し、{% data variables.product.prodname_marketplace %}{% endif %} に公開して、アクションを公開するプロセスの例を以下に示します。

1. GitHub フローごとにブランチで機能作業を行います。 詳細については、「[GitHub のフロー](/get-started/quickstart/github-flow)」を参照してください。
   * コミットが機能ブランチにプッシュされるたびに、テスト ワークフローではテストが自動的に実行されます。

2. `main` ブランチへの pull request を作成してディスカッションとレビューを開始し、準備ができたらマージします。

   * ブランチまたはフォークから pull request が開かれると、テスト ワークフローでは今度はマージ コミットで再びテストが実行されます。

   * **注:** セキュリティ上の理由により、フォークから `pull_request` によってトリガーされるワークフローでは `GITHUB_TOKEN` アクセス許可が制限されており、シークレットにアクセスすることはできません。 pull request 時にトリガーされたテストまたはその他のワークフローでシークレットへのアクセスが必要な場合は、[手動トリガー](/actions/reference/events-that-trigger-workflows#manual-events)や [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target) などの別のイベントを使用することを検討してください。 詳細については、[こちら](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories)をご覧ください。

3. セマンティックにタグ付けされたリリースを作成します。 {% ifversion fpt or ghec %} 単純なチェックボックスを使用して、{% data variables.product.prodname_marketplace %} に公開することもできます。 {% endif %} 詳細については、「[リポジトリのリリースを管理する](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)」{% ifversion fpt or ghec %} および「[アクションを {% data variables.product.prodname_marketplace %} で公開する](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)」{% endif %} を参照してください。

   * リリースが公開または編集されると、リリース ワークフローでコンパイルとタグの調整が自動的に行われます。

   * セマンティックにバージョン管理されたタグ (たとえば、`v1.1.3`) を使用してリリースを作成し、最新の適切なコミットに合わせてメジャー (`v1`) およびマイナー (`v1.1`) タグを最新の状態に保つことをお勧めします。 詳細については、「[カスタム アクションについて](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)」および「[セマンティック バージョン管理について](https://docs.npmjs.com/about-semantic-versioning)」を参照してください。

### 結果

他のいくつかの自動リリース管理戦略とは異なり、このプロセスでは意図的に `main` ブランチではなく、タグ付けされたリリース コミットへの依存関係のみをコミットします。 これにより、アクションのユーザーに名前付きタグまたは `sha` を参照するよう促し、リリース時にビルドを自分で行うことで、サード パーティの pull request のセキュリティを確保できるようにします。

セマンティック リリースを使用すると、アクションのユーザーがワークフローをバージョンにピン留めでき、快適レベルに応じて、最新の安定した非破壊的機能を引き続き受け取る可能性があることを認識できます。

## コミュニティでの作業

{% data variables.product.product_name %} には、オープンソース コミュニティでの作業に役立つツールとガイドが用意されています。 ここでは、正常な双方向通信用に設定することをお勧めするいくつかのツールを示します。 コミュニティに次のように伝えることで、他のユーザーにアクションの使用、変更、および貢献を促します。

* 多くの使用例とガイダンスを含む `README` を維持する。 詳細については、「[README について](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)」を参照してください。
* `README` ファイルにワークフロー ステータス バッジを含める。 詳細については、「[ワークフロー ステータス バッジを追加する](/actions/managing-workflow-runs/adding-a-workflow-status-badge)」を参照してください。 また、追加できるその他のバッジについては、[shields.io](https://shields.io/) にアクセスしてください。{% ifversion fpt または ghec %}
* `CODE_OF_CONDUCT`、`CONTRIBUTING`、`SECURITY` など、コミュニティの正常性ファイルを追加する。 詳細については、「[既定のコミュニティ正常性ファイルの作成](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)」を参照してください。{% endif %}
* [actions/stale](https://github.com/actions/stale) などのアクションを利用して、issue を最新の状態に保つ。

## 参考資料

同様のパターンを使用する例を以下に示します。

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
