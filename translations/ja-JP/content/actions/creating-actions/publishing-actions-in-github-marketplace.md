---
title: GitHub Marketplaceでのアクションの公開
intro: '{% data variables.product.prodname_marketplace %}でアクションを公開し、作成したアクションを{% data variables.product.prodname_dotcom %}コミュニティと共有できます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884302'
---
{% data variables.product.prodname_marketplace %}でアクションを公開するには、利用規約に同意していなければなりません。

## アクションの公開について

アクションを公開できるようになるには、リポジトリ中でアクションを作成しなければなりません。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

{% data variables.product.prodname_marketplace %}へのアクションの公開を計画しているなら、リポジトリにはアクションに必要なメタデータファイル、コード、ファイルだけが含まれているようにしなければなりません。 アクションのために 1 つのリポジトリを作成すれば、単一のユニットでコードのタグ付け、リリース、パッケージができます。 {% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_marketplace %}ページ上のアクションのメタデータも利用します。

アクションは{% data variables.product.prodname_marketplace %}に即座に公開され、以下の要求を満たしていれば{% data variables.product.prodname_dotcom %}によってレビューされません。

- アクションはパブリック リポジトリ内に格納されている必要があります。
- 各リポジトリには、1 つのアクションを含める必要があります。
- アクションのメタデータ ファイル (`action.yml` または `action.yaml`) は、リポジトリのルート ディレクトリに存在する必要があります。
- アクションのメタデータ ファイル中の `name` は一意にする必要があります。
  - `name` は {% data variables.product.prodname_marketplace %} で公開されている既存のアクション名と一致してはなりません。
  - `name` は、ユーザーまたは組織の所有者がアクションを公開していない限り、{% data variables.product.prodname_dotcom %} でユーザーまたは組織と一致してはなりません。 たとえば、{% data variables.product.prodname_dotcom %} 組織のみ、`github` という名前のアクションを発行できます。
  - `name` は既存の {% data variables.product.prodname_marketplace %} カテゴリと一致してはなりません。
  - {% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_dotcom %}の機能の名前を予約している。

## アクションの公開

作成したアクションは、新しいリリースとしてタグ付けして公開することによって、{% data variables.product.prodname_marketplace %}に追加できます。

新しいリリースのドラフトを作成し、アクションを{% data variables.product.prodname_marketplace %}に公開するには、以下の指示に従ってください。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリのアクション メタデータ ファイル (`action.yml` または `action.yaml`) に移動すると、アクションを {% data variables.product.prodname_marketplace %} に公開するバナーが表示されます。 **[リリースの下書き]** をクリックします。

   ![このアクションをマーケットプレイスに公開するボタン](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. [リリース アクション] で、アクションを {% data variables.product.prodname_marketplace %} に発行するチェックボックスをオンにします。 このチェックボックスをオンにできない場合は、先にリンクをクリックし、{% data variables.product.prodname_marketplace %} の開発者同意書を読んで同意する必要があります。
![マーケットプレイスへの公開の選択](/assets/images/help/repository/marketplace_actions_publish.png)
1. メタデータファイル内のラベルに何か問題があれば、エラーメッセージが表示されます。
![通知の表示](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. スクリーン上にサジェッションが表示されたなら、メタデータファイルを更新して対処してください。 完了すると、"Everything looks good!" メッセージが表示されます。 メッセージで応答します。
![エラーの修復](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. "Primary Category（主なカテゴリ）"を選択し、場合によっては"Another Category（もう1つのカテゴリ）"も選択し、{% data variables.product.prodname_marketplace %}でアクションが見つけられやすくなるようにしてください。
![カテゴリの選択](/assets/images/help/repository/marketplace_actions_categories.png)
1. アクションにバージョンでタグ付けして、リリースタイトルを追加してください。 これで、そのリリースに含まれる変更や機能が分かりやすくなります。 このバージョンは、アクションの専用の{% data variables.product.prodname_marketplace %}ページに表示されます。
![バージョンのタグ付け](/assets/images/help/repository/marketplace_actions_version.png)
1. 他のすべてのフィールドに入力し、 **[リリースの発行]** をクリックします。 公開をするには、2要素認証を使っていなければなりません。 詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication/)」を参照してください。
![リリースの発行](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## {% data variables.product.prodname_marketplace %}からのアクションの削除

{% data variables.product.prodname_marketplace %}から公開されたアクションを削除するには、それぞれの公開リリースを更新しなければなりません。 以下のステップを、{% data variables.product.prodname_marketplace %}に公開したアクションの各リリースに対して行ってください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. リリースのページで、編集するリリースの右にある **[編集]** をクリックします。
![リリースの編集ボタン](/assets/images/help/releases/release-edit-btn.png)
4. **[このアクションを {% data variables.product.prodname_marketplace %} に公開する]** を選択し、ボックスのチェックを外します。
![アクションの公開ボタン](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. ページの下部にある **[リリースの更新]** をクリックします。
![リリースの更新ボタン](/assets/images/help/repository/actions-marketplace-update-release.png)
