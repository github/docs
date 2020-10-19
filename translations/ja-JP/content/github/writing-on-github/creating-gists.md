---
title: Gist の作成
intro: '2 種類の Gist、つまりパブリックとシークレットを作成できます。 自分のアイデアを共有する準備ができていればパブリック Gist を、まだの場合はシークレット Gist を作成します。'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Gistについて

すべての Gist は Git のリポジトリであり、フォークしたりクローンしたりできます。 Gist を作成する際 {% data variables.product.product_name %} にサインインしている場合、その Gist は自分のアカウントに関連付けられ、{% data variables.gists.gist_homepage %} に移動すると自分の Gist リストに表示されます。

Gist はパブリックまたはプライベートにできます。 パブリックGistは{% data variables.gists.discover_url %}に表示されます。ここでは作成されたばかりの新しいGistをブラウズできます。 それらのGistは検索もできるので、他の人々に自分の作業を探して見てもらうために使うこともできます。 {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Secret gists don't show up in {% data variables.gists.discover_url %}{% if currentVersion != "free-pro-team@latest" %},{% endif %} and are not searchable. {% data reusables.gist.cannot-convert-public-gists-to-secret %}シークレット Gist は、プライベートではありません。 シークレット Gist の URL を友人に送信すれば、見てもらえるようになります。 ただし、知人ではない誰かがその URL を見つけたなら、その人もその Gist を見ることができます。 好奇心の強い眼から自分のコードを守っておきたいなら、[プライベートリポジトリを作成](/articles/creating-a-new-repository)するとよいでしょう。

{% if currentVersion != "free-pro-team@latest" %}

サイト管理者がプライベートモードを無効化している場合は、匿名 Gist を使うこともできます。匿名 Gist はパブリックもしくはシークレットにできます。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

通知は以下の場合に送られます:
- あなたが Gist の作者である場合。
- 誰かがあなたを Gist 中でメンションした場合。
- いずれかの Gist の上部で [** Subscribe**] をクリックして、Gist をサブスクライブした場合。

You can pin gists to your profile so other people can see them easily. 詳しい情報については、「[プロフィールにアイテムをピン止めする](/articles/pinning-items-to-your-profile)」を参照してください。

他の人が作成した Gist は、{% data variables.gists.gist_homepage %} にアクセスして [**All Gists**] をクリックすることで見つけることができます。 こうすると、すべての Gist が作成時刻または更新時刻でソートされて表示されるページに行きます。 また、Gist は {% data variables.gists.gist_search_url %} で言語ごとに検索できます。 Gist 検索は[コード検索](/articles/searching-code)と同じ検索構文を使います。

Gist は Git リポジトリであるため、完全なコミット履歴を diff とともに表示させることができます。 Gist はフォークしたりクローンしたりすることもできます。 詳細は「[Gist のフォークおよびクローン](/articles/forking-and-cloning-gists)」を参照してください。

Gist の ZIP ファイルは、Gist の上部にある [**Download ZIP**] ボタンをクリックすればダウンロードできます。 Gist は blog ポストなど、JavaScript をサポートしているどのテキストフィールドにも埋め込むことができます。 埋め込みのコードを得るには、Gist の **Embed** URL の隣にあるクリップボードアイコンをクリックします。 特定の Gist ファイルを埋め込むには、**Embed** URL に`?file=FILENAME` を追加します。

{% if currentVersion == "free-pro-team@latest" %}

Gist は GeoJSON ファイルのマッピングをサポートしています。 このようなマップは、簡単に共有しマップを埋め込むことができるよう、埋め込み Gist 内に表示されます。 詳細は「[{% data variables.product.product_name %} に GeoJSON ファイルをマッピングする](/articles/mapping-geojson-files-on-github)」を参照してください。

{% endif %}

### Gist の作成

テキストファイルをデスクトップから直接 Gist エディターにドラッグアンドドロップすることもできます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endnote %}
{% endif %}

1. {% data variables.product.product_name %}にサインインします。
2. {% data variables.gists.gist_homepage %}に移動します。
3. Gist の名前と説明 (任意) を入力します。 ![Gist の名前と説明](/assets/images/help/gist/gist_name_description.png)

4. Gist のテキストを Gist テキストボックスに入力します。 ![Gist テキストボックス](/assets/images/help/gist/gist_text_box.png)

5. 以下のいずれかを行います:
    - パブリック Gist を作成するには [**Create public gist**] をクリックします。
    - シークレット Gist を作成するには [**Create secret Gist**] をクリックします。 ![Gist 作成ボタン](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **メモ:** {% data reusables.gist.cannot-convert-public-gists-to-secret %}

  {% endnote %}
