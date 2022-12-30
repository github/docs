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
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159118'
---
プレビルド構成は、リポジトリの特定のブランチと特定の開発コンテナー構成ファイルの組み合わせに対して設定できます。

通常、プレビルドが有効な親ブランチから作られたブランチはすべて、同じ開発コンテナー構成のプレビルドも取得します。 これは、親ブランチと同じ開発コンテナー構成を使う子ブランチのプレビルドがほとんどの場合同一であるためであり、これにより、開発者はこれらのブランチの codespace の作成時間を短縮できるというメリットも得られます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

通常、ブランチにプレビルドを構成すると、複数のマシンの種類でプレビルドを使用できるようになります。 しかし、リポジトリが 32 GB を超える場合、提供されるストレージは 32 GB に制限されているため、2 コアと 4 コアのマシンの種類ではプレビルドを使用できません。

## 前提条件 

プレビルドは、{% data variables.product.prodname_actions %} を使用して作成されます。 その結果、プレビルドを構成するリポジトリに対して {% data variables.product.prodname_actions %} を有効にする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)」を参照してください。

## プレビルドの構成

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. ページの [プレビルド構成] セクションで、 **[プレビルドの設定]** をクリックします。

   ![[プレビルドの設定] ボタン](/assets/images/help/codespaces/prebuilds-set-up.png)

1. プレビルドを設定するブランチを選びます。

   ![ブランチのドロップダウンメニュー](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **注**: 通常、プレビルドが有効なベース ブランチから作られたブランチはすべて、同じ開発コンテナー構成のプレビルドも取得します。 たとえば、リポジトリの既定のブランチで開発コンテナー構成ファイルのプレビルドを有効にすると、ほとんどの場合、既定のブランチに基づくブランチも同じ開発コンテナー構成のプレビルドを取得するようになります。

   {% endnote %}

1. 必要に応じて、表示される **[構成ファイル]** ドロップダウン メニューで、ご自分のプレビルドに使う `devcontainer.json` 構成ファイルを選びます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)に関するページをご覧ください。

   ![構成ファイルのドロップダウン メニュー](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. プレビルドの更新を自動的にトリガーする方法を選びます。

   * **すべてのプッシュ** (既定の設定) - この設定では、特定のブランチに対して行われるすべてのプッシュで、プレビルドの構成が更新されます。 これにより、プレビルドから生成された codespace には、最近追加または更新された依存関係を含む最新の codespace 構成が常に含まれます。
   * **構成の変更時** - この設定では、特定のリポジトリとブランチの関連する構成ファイルが更新されるたびに、プレビルドが更新されます。 これにより、プレビルドから codespace が生成されるときに、リポジトリの開発コンテナー構成ファイルに対する変更が確実に使用されます。 プレビルドを更新する {% data variables.product.prodname_actions %} ワークフローは実行頻度が低いため、このオプションでは使用する {% data variables.product.prodname_actions %} の使用時間 (分) が少なくなります。 ただし、このオプションでは、codespace に常に最近追加または更新された依存関係が含まれるという保証はないため、codespace の作成後に手動で追加または更新する必要がある場合があります。
   * **スケジュール済み** - この設定では、ユーザーが定義したカスタム スケジュールに基づいてプレビルドを更新できます。 これにより、{% data variables.product.prodname_actions %} の使用時間 (分) を減らすことができますが、このオプションでは、最新の開発コンテナー構成の変更を使用しない codespace を作成できます。

   ![事前ビルド トリガーのオプション](/assets/images/help/codespaces/prebuilds-triggers.png)

1. 必要に応じて、 **[特定のリージョンでのみ使用できるプレビルドを減らす]** を選び、指定したリージョンにのみプレビルドを作成します。 プレビルドを使用できるようにするリージョンを選びます。

   既定では、使用可能なすべてのリージョンにプレビルドが作成され、プレビルドごとにストレージ料金が発生します。

   ![リージョンの選択オプション](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **注**: 
   * 各リージョンのプレビルドでは、個々のストレージ料金が発生します。 そのため、使用されることがわかっているリージョンに対してのみプレビルドを有効にする必要があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)」をご覧ください。
   * 開発者は、{% data variables.product.prodname_github_codespaces %} の既定のリージョンを設定できます。これにより、より少ないリージョンでプレビルドを有効にすることができます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の既定のリージョンの設定](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)」を参照してください。

   {% endnote %}

1. 必要に応じて、 **[テンプレートの履歴]** で、保持するプレビルドのバージョンを設定します。 1 から 5 の任意の数を入力できます。 保存されるバージョンの既定の数は 2 です。つまり、最新のプレビルドと前のバージョンのみが保存されます。

   ![プレビルドの履歴設定](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   プレビルドのトリガー設定によっては、プッシュごと、または開発コンテナー構成の変更ごとに、プレビルドが変更される可能性があります。 以前のバージョンのプレビルドを保持すると、現在のプレビルドとは異なる開発コンテナー構成を使用して、以前のコミットからプレビルドを作成できます。 この設定を使用すると、保持されているバージョンの数を、ニーズに適したレベルに設定できます。 

   保存するプレビルドのバージョンの数を 1 に設定した場合、{% data variables.product.prodname_github_codespaces %} によりプレビルドの最新バージョンのみが保存され、テンプレートが更新されるたびに古いバージョンが削除されます。 つまり、以前の開発コンテナー構成に戻った場合、プレビルドの codespace は取得されません。
   
   保持されている各プレビルド バージョンには、ストレージ コストが関連付けられています。 たとえば、4 つのリージョンでプレビルドを生成し、2 つのバージョンを保持している場合、最大 8 つのプレビルドのストレージに対して課金されます。 課金について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

1. 必要に応じて、この構成でプレビルド ワークフローの実行が失敗したときに通知するユーザーまたはチームを追加します。 ユーザー名、チーム名、またはフル ネームの入力を開始し、表示されたら名前をクリックしてリストに追加できます。 追加したユーザーまたはチームは、プレビルド エラーが発生したときに電子メールを受信します。詳しい調査に役立つワークフロー実行ログへのリンクが含まれています。

   ![プレビルド エラー通知設定](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. 必要に応じて、ページの下部にある **[詳細オプションの表示]** をクリックします。

   ![[詳細オプションの表示] が強調表示されているプレビルド構成ページのスクリーンショット](/assets/images/help/codespaces/show-advanced-options.png)

   [詳細オプション] セクションで、 **[プレビルドの最適化を無効にする]** を選んだ場合、最新のプレビルド ワークフローが失敗したか、現在実行中の場合は、プレビルドなしで codespace が作成されます。 詳しくは、「[プレビルドのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)」を参照してください。

1. **Create** をクリックしてください。

   {% data reusables.codespaces.prebuilds-permission-authorization %}

プレビルド構成を作ると、リポジトリ設定の {% data variables.product.prodname_github_codespaces %} ページに一覧表示されます。 {% data variables.product.prodname_actions %} ワークフローがキューに登録され、指定したリージョンで、選んだブランチと開発コンテナー構成ファイルに基づいて、プレビルドを作るために実行されます。 

![プレビルド構成の一覧のスクリーンショット](/assets/images/help/codespaces/prebuild-configs-list.png)

プレビルド構成の編集と削除について詳しくは、「[プレビルドを管理する](/codespaces/prebuilding-your-codespaces/managing-prebuilds)」を参照してください。

## 環境変数の設定

開発環境を作成するために必要な環境変数にプレビルド プロセスでアクセスできるようにするには、これらを {% data variables.product.prodname_codespaces %} リポジトリ シークレットとして、または {% data variables.product.prodname_codespaces %} Organization シークレットとして設定できます。 詳細については、「[リポジトリのシークレットの追加](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)」および「[のシークレットの追加](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)」を参照してください。 

この方法で作ったシークレットは、このリポジトリから codespace を作るすべてのユーザーがアクセスできます。 そのようにしたくない場合は、代わりに `CODESPACES_PREBUILD_TOKEN` シークレットを設定できます。 `CODESPACES_PREBUILD_TOKEN` シークレットはプレビルドにのみ使用され、ユーザーの codespace ではその値にアクセスできません。 

環境の構築中は、プレビルドでユーザー レベルのシークレットを使うことはできません。これは、codespace が作られるまで利用できないためです。

## プレビルドに含める時間のかかるタスクの構成

`devcontainer.json` で `onCreateCommand` および `updateContentCommand` コマンドを使用して、プレビルド作成の一部として時間のかかるプロセスを含めることができます。 詳細については、{% data variables.product.prodname_vscode %} のドキュメントの「[devcontainer.json リファレンス](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)」を参照してください。

`onCreateCommand` はプレビルドが作成されるときに 1 回だけ実行されますが、`updateContentCommand` はテンプレートの作成時とそれ以降の更新時に実行されます。 インクリメンタル ビルドは `updateContentCommand` に含める必要があります。これらはプロジェクトのソースを表し、プレビルドの更新ごとに含める必要があるためです。

## 参考資料

- [プレビルドで他のリポジトリにアクセスできるようにする](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)
- [プレビルドに関するトラブルシューティング](/codespaces/troubleshooting/troubleshooting-prebuilds)
