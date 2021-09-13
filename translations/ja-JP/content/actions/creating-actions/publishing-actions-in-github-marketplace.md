---
title: GitHub Marketplaceでのアクションの公開
intro: '{% data variables.product.prodname_marketplace %}でアクションを公開し、作成したアクションを{% data variables.product.prodname_dotcom %}コミュニティと共有できます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  free-pro-team: '*'
type: how_to
---

{% data reusables.actions.ae-beta %}

{% data variables.product.prodname_marketplace %}でアクションを公開するには、利用規約に同意していなければなりません。

### アクションの公開について

アクションを公開できるようになるには、リポジトリ中でアクションを作成しなければなりません。 詳細については、「[アクションを作成する](/actions/creating-actions)」を参照してください。

{% data variables.product.prodname_marketplace %}へのアクションの公開を計画しているなら、リポジトリにはアクションに必要なメタデータファイル、コード、ファイルだけが含まれているようにしなければなりません。 アクションのために1つのリポジトリを作成すれば、単一のユニットでコードのタグ付け、リリース、パッケージができます。 {% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_marketplace %}ページ上のアクションのメタデータも利用します。

アクションは{% data variables.product.prodname_marketplace %}に即座に公開され、以下の要求を満たしていれば{% data variables.product.prodname_dotcom %}によってレビューされません。

- アクションはパブリックリポジトリにあること。
- それぞれのリポジトリには1つのアクションだけが含まれている。
- アクションのメタデータファイル（`action.yml`もしくは`action.yaml`）は、リポジトリのルートディレクトリになければならない。
- アクションのメタデータファイル中の`name`がユニークであること。
  - `name`は{% data variables.product.prodname_marketplace %}で公開されている既存のアクション名とマッチしてはならない。
  - `name`は、そのアクションを公開しているユーザもしくはOrganizationのオーナー以外の{% data variables.product.prodname_dotcom %}上のユーザもしくはOrganizationとマッチしてはならない。 たとえば`github`という名前のアクションを公開できるのは{% data variables.product.prodname_dotcom %} Organizationだけである。
  - `name`は既存の{% data variables.product.prodname_marketplace %}のカテゴリとマッチしてはならない。
  - {% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_dotcom %}の機能の名前を予約している。

### アクションの公開

作成したアクションは、新しいリリースとしてタグ付けして公開することによって、{% data variables.product.prodname_marketplace %}に追加できます。

新しいリリースのドラフトを作成し、アクションを{% data variables.product.prodname_marketplace %}に公開するには、以下の指示に従ってください。

{% data reusables.repositories.navigate-to-repo %}
1. アクションのメタデータファイル（`action.yml`もしくは`action.yaml`）がリポジトリに含まれているなら、{% data variables.product.prodname_marketplace %}にアクションを公開するバナーが表示されます。 [**Draft a release（リリースのドラフト）**] をクリックしてください。 ![マーケットプレイスへのアクションの公開ボタン](/assets/images/help/repository/publish-github-action-to-markeplace-button.png)
1. **Publish this action to the {% data variables.product.prodname_marketplace %}（{% data variables.product.prodname_marketplace %}へのアクションの公開）**を選択してください。 **Publish this action to the {% data variables.product.prodname_marketplace %}（{% data variables.product.prodname_marketplace %}へのアクションの公開）**のチェックボックスを選択できない場合は、まず{% data variables.product.prodname_marketplace %}の契約を読んで受諾しなければなりません。 ![マーケットプレイスへの公開の選択](/assets/images/help/repository/marketplace_actions_publish.png)
1. メタデータファイル内のラベルに何か問題があれば、エラーメッセージが表示されます。 ![通知の表示](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. スクリーン上にサジェッションが表示されたなら、メタデータファイルを更新して対処してください。 完了すると、"Everything looks good!（すべて良好！）"メッセージが表示されます。 ![エラーの修復](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. "Primary Category（主なカテゴリ）"を選択し、場合によっては"Another Category（もう1つのカテゴリ）"も選択し、{% data variables.product.prodname_marketplace %}でアクションが見つけられやすくなるようにしてください。 ![カテゴリの選択](/assets/images/help/repository/marketplace_actions_categories.png)
1. アクションにバージョンでタグ付けして、リリースタイトルを追加してください。 これで、そのリリースに含まれる変更や機能が分かりやすくなります。 このバージョンは、アクションの専用の{% data variables.product.prodname_marketplace %}ページに表示されます。 ![バージョンのタグ付け](/assets/images/help/repository/marketplace_actions_version.png)
1. 他のすべてのフィールドに記入して、**Publish release（リリースの公開）**をクリックしてください。 公開をするには、2要素認証を使っていなければなりません。 詳しい情報については「[2 要素認証の設定](/articles/configuring-two-factor-authentication/)」を参照してください。 ![リリースを公開する](/assets/images/help/repository/marketplace_actions_publishrelease.png)

### {% data variables.product.prodname_marketplace %}からのアクションの削除

{% data variables.product.prodname_marketplace %}から公開されたアクションを削除するには、それぞれの公開リリースを更新しなければなりません。 以下のステップを、{% data variables.product.prodname_marketplace %}に公開したアクションの各リリースに対して行ってください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. リリースのページで、編集するリリースの右にある [**Edit**] をクリックします。 ![リリースの編集ボタン](/assets/images/help/releases/release-edit-btn.png)
4. **Publish this action to the {% data variables.product.prodname_marketplace %}（{% data variables.product.prodname_marketplace %}へのアクションの公開）**を選択して、チェックを外してください。 ![アクションの公開ボタン](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. ページの下部にある**Update release（リリースの更新）**をクリックしてください。 ![リリースの更新ボタン](/assets/images/help/repository/actions-marketplace-update-release.png)
