---
title: プロフィールをパーソナライズする
intro: 'プロフィール画像を設定し、プロフィールに略歴を追加することで、自分自身についての情報を他の {% data variables.product.product_name %} ユーザと共有することができます。'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### プロフィール画像を変更する

プロフィール画像は、{% data variables.product.product_name %} のプルリクエスト、コメント、コントリビューションページ、およびグラフにおいて、あなたを識別するのに役立ちます。

アカウントにサインアップすると、{% data variables.product.product_name %} はとりあえずランダムなアイデンティコンを生成します。 [アイデンティコン](https://github.com/blog/1586-identicons)は、ユーザ ID のハッシュから生成されるもので、その色やパターンをコントロールする方法はありません。 アイデンティコンは、あなたを表す画像に置き換えることができます。

{% tip %}

**参考**: プロフィール画像は、1 MB 以下の PNG、JPG または GIF である必要があります。 最高の画質をもたらすには、画像を 500 × 500 ピクセルに収めることを推奨します。

{% endtip %}

#### プロフィール画像を設定する

{% data reusables.user_settings.access_settings %}
2. [**Profile Picture**] で {% octicon "pencil" aria-label="The edit icon" %} [**Edit**] をクリックします。 ![プロフィール画像を編集](/assets/images/help/profile/edit-profile-photo.png)
3. [**Upload a photo...**] をクリックします。 ![プロフィール画像の更新](/assets/images/help/profile/edit-profile-picture-options.png)
3. 画像をクロッピングします。 作業を終えたら [**Set new profile picture**] をクリックします。 ![アップロードされた画像をクロッピングする](/assets/images/help/profile/avatar_crop_and_save.png)

#### プロフィール画像をアイデンティコンへリセットする

{% data reusables.user_settings.access_settings %}
2. [**Profile Picture**] で {% octicon "pencil" aria-label="The edit icon" %} [**Edit**] をクリックします。 ![プロフィール画像を編集](/assets/images/help/profile/edit-profile-photo.png)
3. アイデンティコンに戻すには、[**Remove photo**] をクリックします。 メールアドレスが [Gravatar](https://en.gravatar.com/) に関連付けられている場合、アイデンティコンに戻すことはできません。 その場合は、代わりに [**Revert to Gravatar**] をクリックします。 ![プロフィール画像の更新](/assets/images/help/profile/edit-profile-picture-options.png)

### プロフィール名を変更する

プロフィールに表示される名前は変更可能です。 This name may also be displayed next to comments you make on private repositories owned by an organization. 詳細は「[Organization のメンバー名表示を管理する](/articles/managing-the-display-of-member-names-in-your-organization)」を参照してください。

{% data reusables.user_settings.access_settings %}
2. [Name] の下に、プロフィールに表示する名前を入力します。 ![プロフィール設定の [Name] フィールド](/assets/images/help/profile/name-field.png)

### プロフィールに略歴を追加する

自分に関する情報を他の {% data variables.product.product_name %} ユーザーと共有するには、プロフィールに略歴を追加します。 [@メンション](/articles/basic-writing-and-formatting-syntax)と絵文字を使えば、あなたの現在あるいは過去の職場、職種、またどんな種類のコーヒーを飲んでいるかといった情報も含めることができます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

自分に関するカスタマイズした情報を長いフォームで、もっと目立つように表示する場合は、プロフィール README を使用することもできます。 For more information, see "[Managing your profile README](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)."

{% endif %}

{% note %}

**注釈** 自分のプロフィールに対してアクティビティの概要セクションを有効にしていて、そのプロフィール略歴でメンバーになっている Organization を @メンションすると、アクティビティの概要ではその Organization が最初に示されます。 詳しい情報については、「[プロフィールに自分のアクティビティの概要を表示する](/articles/showing-an-overview-of-your-activity-on-your-profile)」を参照してください。

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. [**Bio**] の下に、自分のプロフィールに表示する内容を追加してください。 略歴フィールドの上限は 160 文字です。 ![プロフィールの略歴を更新する](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **ヒント:** Organization を @メンションする場合、あなたがメンバーになっている Organization だけがオートコンプリートされます。 以前の職場など、自分がメンバーではない Organization を @メンションすることもできますが、その Organization の名前はオートコンプリートされません。

  {% endtip %}

3. [**Update profile**] をクリックします。 ![[Update profile] ボタン](/assets/images/help/profile/update-profile-button.png)

### ステータスを設定する

ステータスを設定すると、あなたの現在の状況に関する情報を {% data variables.product.product_name %} に表示することができます。 ステータスは次の場所や状況で表示されます:
- {% data variables.product.product_name %} のプロフィールページ。
- {% data variables.product.product_name %} でユーザがあなたのユーザ名やアバターにカーソルを置いたとき。
- 自分が Team メンバーになっている Team の Team ページ。 詳細は「[Team について](/articles/about-teams/#team-pages)」を参照してください。
- メンバーになっている Organization の Organization ダッシュボード。 詳細は「[Organization ダッシュボードについて](/articles/about-your-organization-dashboard/)」を参照してください。

ステータスを設定すると、あなたの時間的な制約について、{% data variables.product.product_name %} で他のユーザーに知らせることもできます。

![@メンションされたユーザ名の隣に "Busy" ノートが表示される](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![リクエストされたレビュー担当者のユーザ名の隣に "Busy" ノートが表示される](/assets/images/help/profile/request-a-review-limited-availability-status.png)

[Busy] オプションを選択すると、ユーザがあなたのユーザ名を @メンションしたり、Issue やプルリクエストをあなたに割り当てたりしたとき、またはあなたに Pull Request レビューをリクエストしたとき、ユーザ名の隣にビジーであることを示すノートが表示されます。

1. {% data variables.product.product_name %} の右上隅で、プロフィール画像をクリックしてから [**Set your status**] をクリックするか、すでにステータスを設定している場合は、現在のステータスをクリックします。 ![プロフィールでステータスを設定するボタン](/assets/images/help/profile/set-status-on-profile.png)
2. ステータスにカスタムテキストを追加する場合は、テキストフィールドをクリックしてステータスメッセージを入力します。 ![ステータスメッセージを入力するフィールド](/assets/images/help/profile/type-a-status-message.png)
3. オプションで、ステータス絵文字を設定する場合は、絵文字のアイコンをクリックしてリストから選択します。 ![絵文字ステータスを選択するボタン](/assets/images/help/profile/select-emoji-status.png)
4. オプションで、時間に制約があるという情報を共有するには、[Busy] を選択します。 ![[Edit status] オプションで [Busy] オプションを選択](/assets/images/help/profile/limited-availability-status.png)
5. [**Clear status**] ドロップダウンメニューを使って、ステータスの有効期限を選択します。 ステータスの有効期限を設定しない場合は、クリアするか編集するまで同じステータスのままになります。 ![ステータスの有効期限が切れたときに選択するドロップダウンメニュー](/assets/images/help/profile/status-expiration.png)
6. ドロップダウンメニューを使って、ステータスを表示する Organization をクリックします。 Organization を選択しない場合、あなたのステータスはパブリックになります。 ![ステータスが表示されるときに選択するドロップダウンメニュー](/assets/images/help/profile/status-visibility.png)
7. [**Set status**] をクリックします。 ![ステータスを設定するボタン](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### プロフィールでバッジを表示する

特定のプログラムに参加すると、{% data variables.product.prodname_dotcom %} でプロフィールに自動的にバッジが表示されます。

| バッジ                                                             | プログラム                                                                | 説明                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "north-star" aria-label="The North Star icon" %}     | **{% data variables.product.prodname_arctic_vault %} Contributor** | 2020 Arctic Vault プログラムでアーカイブされたリポジトリのデフォルトブランチでコミットを作成すると、プロフィールで {% data variables.product.prodname_arctic_vault %} コントリビューターバッジを取得できます。 詳しい情報については、[{% data variables.product.prodname_archive %}](https://archiveprogram.github.com) を参照してください。            |
| {% octicon "cpu" aria-label="The Developer Program icon" %}     | **開発者プログラムメンバー**                                                     | GitHub 開発者プログラムの登録メンバーの場合は、GitHub API でアプリを開発すると、プロフィールで開発者プログラムメンバーのバッジを取得します。 GitHub 開発者の詳しい情報については、「[GitHub 開発者](/program/)」を参照してください。                                                                                                                        |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **GitHub スポンサー**                                                     | {% data variables.product.prodname_sponsors %} を通じてオープンソースコントリビューターをスポンサーした場合、プロフィールで GitHub スポンサーのバッジを取得します。 詳細は、「[オープンソースコントリビューターに対するスポンサー](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)」を参照してください。 |
| {% octicon "star-fill" aria-label="The star icon" %}            | **Pro**                                                              | {% data variables.product.prodname_pro %} を使用すると、プロフィールで PRO バッジを取得します。 {% data variables.product.prodname_pro %} の詳細は、「[{% data variables.product.prodname_dotcom %} の製品](/github/getting-started-with-github/githubs-products#github-pro)」を参照してください。         |

### プロフィールでバッジを無効にする

PRO および {% data variables.product.prodname_arctic_vault %} のバッジなど、参加している {% data variables.product.prodname_dotcom %} プログラムの一部のバッジを無効にできます。

{% data reusables.user_settings.access_settings %}
2. [Profile settings] で、無効にするバッジの選択を解除します。 ![プロフィールでバッジを非表示にするチェックボックス](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. [**Update preferences**] をクリックします。

{% endif %}

### 参考リンク

- [プロフィールについて](/articles/about-your-profile)
