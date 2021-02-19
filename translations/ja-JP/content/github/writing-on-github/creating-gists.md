---
title: Gist の作成
intro: 'You can create two kinds of gists: {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and secret. Create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist if you''re ready to share your ideas with {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}the world{% endif %} or a secret gist if you''re not.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Gistについて

すべての Gist は Git のリポジトリであり、フォークしたりクローンしたりできます。 {% if currentVersion != "github-ae@latest" %}If you are signed in to {% data variables.product.product_name %} when{% else %}When{% endif %} you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or secret. {% if currentVersion == "github-ae@latest" %}Internal{% else %}Public{% endif %} gists show up in {% data variables.gists.discover_url %}, where {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}people{% endif %} can browse new gists as they're created. それらのGistは検索もできるので、他の人々に自分の作業を探して見てもらうために使うこともできます。

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. Secret gists aren't private. If you send the URL of a secret gist to {% if currentVersion == "github-ae@latest" %}another enterprise member{% else %}a friend {% endif %}, they'll be able to see it. However, if {% if currentVersion == "github-ae@latest" %}any other enterpise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. 好奇心の強い眼から自分のコードを守っておきたいなら、[プライベートリポジトリを作成](/articles/creating-a-new-repository)するとよいでしょう。

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% if enterpriseServerVersions contains currentVersion %}

サイト管理者がプライベートモードを無効化している場合は、匿名 Gist を使うこともできます。匿名 Gist はパブリックもしくはシークレットにできます。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

通知は以下の場合に送られます:
- あなたが Gist の作者である場合。
- 誰かがあなたを Gist 中でメンションした場合。
- いずれかの Gist の上部で [** Subscribe**] をクリックして、Gist をサブスクライブした場合。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can pin gists to your profile so other people can see them easily. 詳しい情報については、「[プロフィールにアイテムをピン止めする](/articles/pinning-items-to-your-profile)」を参照してください。

{% endif %}

You can discover {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. こうすると、すべての Gist が作成時刻または更新時刻でソートされて表示されるページに行きます。 また、Gist は {% data variables.gists.gist_search_url %} で言語ごとに検索できます。 Gist 検索は[コード検索](/articles/searching-code)と同じ検索構文を使います。

Gist は Git リポジトリであるため、完全なコミット履歴を diff とともに表示させることができます。 Gist はフォークしたりクローンしたりすることもできます。 詳細は「[Gist のフォークおよびクローン](/articles/forking-and-cloning-gists)」を参照してください。

Gist の ZIP ファイルは、Gist の上部にある [**Download ZIP**] ボタンをクリックすればダウンロードできます。 Gist は blog ポストなど、JavaScript をサポートしているどのテキストフィールドにも埋め込むことができます。 埋め込みのコードを得るには、Gist の **Embed** URL の隣にあるクリップボードアイコンをクリックします。 特定の Gist ファイルを埋め込むには、**Embed** URL に`?file=FILENAME` を追加します。

{% if currentVersion == "free-pro-team@latest" %}

Gist は GeoJSON ファイルのマッピングをサポートしています。 このようなマップは、簡単に共有しマップを埋め込むことができるよう、埋め込み Gist 内に表示されます。 詳細は「[{% data variables.product.product_name %} に GeoJSON ファイルをマッピングする](/articles/mapping-geojson-files-on-github)」を参照してください。

{% endif %}

### Gist の作成

テキストファイルをデスクトップから直接 Gist エディターにドラッグアンドドロップすることもできます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endnote %}
{% endif %}

1. {% data variables.product.product_name %}にサインインします。
2. {% data variables.gists.gist_homepage %}に移動します。
3. Gist の名前と説明 (任意) を入力します。 ![Gist の名前と説明](/assets/images/help/gist/gist_name_description.png)

4. Gist のテキストを Gist テキストボックスに入力します。 ![Gist テキストボックス](/assets/images/help/gist/gist_text_box.png)

5. Optionally, to create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Drop-down menu to select gist visibility]{% if currentVersion == "github-ae@latest" %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Click **Create secret Gist** or **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Button to create gist](/assets/images/help/gist/create-secret-gist-button.png)
