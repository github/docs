---
title: プレビルドの構成
shortTitle: Configure prebuilds
intro: 変更をリポジトリにプッシュするたびに自動的に codespace をプレビルドするようにプロジェクトを構成できます。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: be511c99a876ef7c318a9c55f40c6c1610f0e353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548065'
---
プレビルド構成は、リポジトリの特定のブランチと特定の開発コンテナー構成ファイルの組み合わせに対して設定できます。

通常、プレビルドが有効な親ブランチから作られたブランチはすべて、同じ開発コンテナー構成のプレビルドも取得します。 これは、親ブランチと同じ開発コンテナー構成を使う子ブランチのプレビルドがほとんどの場合同一であるためで、これにより、開発者はこれらのブランチの codespace の作成時間を短縮できるというメリットも得られます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

通常、ブランチにプレビルドを構成すると、複数のマシンの種類でプレビルドを使用できるようになります。 しかし、リポジトリが 32 GB を超える場合、提供されるストレージは 32 GB に制限されているため、2 コアと 4 コアのマシンの種類ではプレビルドを使用できません。

## 前提条件 

プロジェクトのプレビルドを構成する前に、次のことが満たされている必要があります。 
* Organization で {% data variables.product.prodname_github_codespaces %} を有効にする必要があります。 詳しくは、「[Organization での {% data variables.product.prodname_github_codespaces %} の有効化](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)」をご覧ください。
* リポジトリで {% data variables.product.prodname_actions %} を有効にする必要があります。 各プレビルド構成で、関連付けられている Actions ワークフローをトリガーできる必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)」を参照してください。

## プレビルドの構成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. サイドバーの [コードとオートメーション] セクションで、 **[{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}]** をクリックします。
1. ページの [プレビルド構成] セクションで、 **[プレビルドの設定]** をクリックします。

   ![[プレビルドの設定] ボタン](/assets/images/help/codespaces/prebuilds-set-up.png)

1. プレビルドを設定するブランチを選びます。

   ![ブランチのドロップダウン メニュー](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **注**: 通常、プレビルドが有効なベース ブランチから作られたブランチはすべて、同じ開発コンテナー構成のプレビルドも取得します。 たとえば、リポジトリの既定のブランチで開発コンテナー構成ファイルのプレビルドを有効にすると、ほとんどの場合、既定のブランチに基づくブランチも同じ開発コンテナー構成のプレビルドを取得するようになります。

   {% endnote %}

1. 必要に応じて、表示される **[構成ファイル]** ドロップダウン メニューで、このプレビルドに使う `devcontainer.json` 構成ファイルを選びます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)に関するページをご覧ください。

   ![構成ファイルのドロップダウン メニュー](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. プレビルドの更新を自動的にトリガーする方法を選びます。

   * **すべてのプッシュ** (既定の設定) - この設定では、特定のブランチに対して行われるすべてのプッシュで、事前ビルドの構成が更新されます。 これにより、プレビルドから生成された codespace には、最近追加または更新された依存関係を含む最新の codespace 構成が常に含まれます。
   * **構成の変更時** - この設定では、特定のリポジトリとブランチの関連する構成ファイルが更新されるたびに、事前ビルドの構成が更新されます。 これにより、プレビルドから codespace が生成されるときに、リポジトリの開発コンテナー構成ファイルに対する変更が確実に使用されます。 プレビルドを更新するアクション ワークフローは実行頻度が低いため、このオプションの利用時間 (分) は少なくなります。 ただし、このオプションでは、codespace に常に最近追加または更新された依存関係が含まれるという保証はないため、codespace の作成後に手動で追加または更新する必要がある場合があります。
   * **スケジュール済み** - この設定では、ユーザーが定義したカスタム スケジュールに基づいて事前ビルドの構成を更新できます。 これにより、アクションの使用時間 (分) を減らすことができますが、このオプションでは、最新の開発コンテナー構成の変更を使用しない codespace を作成できます。

   ![事前ビルド トリガーのオプション](/assets/images/help/codespaces/prebuilds-triggers.png)

1. 必要に応じて、 **[プレビルドを特定のリージョンでのみ使用できるように縮小する]** を選んで、プレビルドへのアクセスを制限して、どのリージョンで使用できるようにするかを選びます。 開発者は、選んだリージョンにいる場合にのみ、プレビルドから codespace を作成できます。 既定では、プレビルドは、codespace が使用可能なすべてのリージョンで使用でき、ストレージ コストはリージョンごとに適用されます。

   ![リージョンの選択オプション](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **注**: 
   * 各リージョンのプレビルドには、個別の料金が発生します。 そのため、使用されることがわかっているリージョンに対してのみプレビルドを有効にする必要があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} プレビルドについて](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)」をご覧ください。
   * 開発者は、{% data variables.product.prodname_codespaces %} の既定のリージョンを設定できます。これにより、より少ないリージョンでプレビルドを有効にすることができます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のリージョンの設定](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)」を参照してください。

   {% endnote %}

1. 必要に応じて、プレビルドの保持されるバージョンの数を設定します。 1 から 5 の任意の数を入力できます。 保存されるバージョンの既定の数は 2 です。つまり、最新のテンプレート バージョンと前のバージョンのみが保存されます。

   プレビルドのトリガー設定によっては、プッシュごと、または開発コンテナー構成の変更ごとに、プレビルドが変更される可能性があります。 以前のバージョンのプレビルドを保持すると、現在のプレビルドとは異なる開発コンテナー構成を使用して、以前のコミットからプレビルドを作成できます。 プレビルドのバージョンの保持にはストレージ コストが伴うため、チームのニーズに基づいて保持するバージョンの数を選ぶことができます。 課金について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

   保存するプレビルドのバージョンの数を 1 に設定した場合、{% data variables.product.prodname_codespaces %} はプレビルドの最新バージョンのみが保存され、テンプレートが更新されるたびに古いバージョンが削除されます。 つまり、以前の開発コンテナー構成に戻った場合、プレビルドの codespace は取得されません。

   ![プレビルドの履歴設定](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. 必要に応じて、この構成でプレビルド ワークフローの実行が失敗したときに通知するユーザーまたはチームを追加します。 ユーザー名、チーム名、またはフル ネームの入力を開始し、表示されたら名前をクリックしてリストに追加できます。 追加したユーザーまたはチームは、プレビルド エラーが発生したときに電子メールを受信します。詳しい調査に役立つワークフロー実行ログへのリンクが含まれています。

   ![プレビルド エラー通知設定](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. **Create** をクリックしてください。

   {% data reusables.codespaces.prebuilds-permission-authorization %}

プレビルド構成を作ると、リポジトリ設定の {% data variables.product.prodname_codespaces %} ページに一覧表示されます。 {% data variables.product.prodname_actions %} ワークフローがキューに登録され、指定したリージョンで、選んだブランチと開発コンテナー構成ファイルに基づいて、プレビルドを作るために実行されます。 

![プレビルド構成の一覧のスクリーンショット](/assets/images/help/codespaces/prebuild-configs-list.png)

プレビルド構成の編集と削除について詳しくは、「[プレビルドを管理する](/codespaces/prebuilding-your-codespaces/managing-prebuilds)」を参照してください。

## 環境変数の設定

開発環境を作成するために必要な環境変数にプレビルド プロセスでアクセスできるようにするには、これらを {% data variables.product.prodname_codespaces %} リポジトリ シークレットとして、または {% data variables.product.prodname_codespaces %} Organization シークレットとして設定できます。 詳細については、「[リポジトリのシークレットの追加](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)」および「[のシークレットの追加](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)」を参照してください。 

この方法で作ったシークレットは、このリポジトリから codespace を作るすべてのユーザーがアクセスできます。 そのようにしたくない場合は、代わりに `CODESPACES_PREBUILD_TOKEN` シークレットを設定できます。 `CODESPACES_PREBUILD_TOKEN` シークレットはプレビルドにのみ使用され、ユーザーの codespace ではその値にアクセスできません。 

環境の構築中は、プレビルドでユーザー レベルのシークレットを使うことはできません。これは、codespace が作られるまで利用できないためです。

## プレビルドに含める時間のかかるタスクの構成

`devcontainer.json` で `onCreateCommand` および `updateContentCommand` コマンドを使用して、プレビルド作成の一部として時間のかかるプロセスを含めることができます。 詳細については、{% data variables.product.prodname_vscode %} のドキュメントの「[devcontainer.json リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)」を参照してください。

`onCreateCommand` はプレビルドが作成されるときに 1 回だけ実行されますが、`updateContentCommand` はテンプレートの作成時とそれ以降のテンプレートの更新時に実行されます。 インクリメンタル ビルドは `updateContentCommand` に含める必要があります。これらはプロジェクトのソースを表し、プレビルドの更新ごとに含める必要があるためです。

## 参考資料

- [プレビルドで他のリポジトリにアクセスできるようにする](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)
- [プレビルドに関するトラブルシューティング](/codespaces/troubleshooting/troubleshooting-prebuilds)
