---
title: Gist の作成
intro: '{% ifversion ghae %}内部{% else %}パブリック{% endif %}とシークレットの 2 種類の Gist を作成できます。 アイデアを {% ifversion ghae %}Enterprise のメンバー{% else %}世界{% endif %}と共有する準備ができている場合は、{% ifversion ghae %}内部{% else %}パブリック{% endif %}の Gist を作成します。そうでない場合は、シークレットの Gist を作成します。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Gistについて

すべての Gist は Git のリポジトリであり、フォークしたりクローンしたりできます。 {% ifversion not ghae %} Gist を作成する際 {% else %}{% endif %}{% data variables.product.product_name %} にサインインしている場合、その Gist は自分のアカウントに関連付けられ、{% data variables.gists.gist_homepage %} に移動すると自分の Gist リストに表示されます。

Gist は、{% ifversion ghae %}内部{% else %}パブリック{% endif %}またはシークレットにすることができます。 {% ifversion ghae %}内部{% else %}パブリック{% endif %} の Gist が {% data variables.gists.discover_url %} に表示され、{% ifversion ghae %}Enterprise メンバー{% else %}ユーザ{% endif %} は作成された新しい Gist を参照できます。 それらのGistは検索もできるので、他の人々に自分の作業を探して見てもらうために使うこともできます。

シークレット Gist は {% data variables.gists.discover_url %} に表示されず、検索できません。 シークレット Gist はプライベートではありません。 If you send the URL of a secret gist to {% ifversion ghae %}another enterprise member{% else %}a friend{% endif %}, they'll be able to see it. However, if {% ifversion ghae %}any other enterprise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. 好奇心の強い眼から自分のコードを守っておきたいなら、[プライベートリポジトリを作成](/articles/creating-a-new-repository)するとよいでしょう。

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

サイト管理者がプライベートモードを無効化している場合は、匿名 Gist を使うこともできます。匿名 Gist はパブリックもしくはシークレットにできます。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

通知は以下の場合に送られます:
- あなたが Gist の作者である場合。
- 誰かがあなたを Gist 中でメンションした場合。
- いずれかの Gist の上部で [** Subscribe**] をクリックして、Gist をサブスクライブした場合。

{% ifversion fpt or ghes or ghec %}

Gist をプロフィールにピン止めして、他のユーザが簡単に見ることができるようにすることができます。 詳しい情報については、「[プロフィールにアイテムをピン止めする](/articles/pinning-items-to-your-profile)」を参照してください。

{% endif %}

{% data variables.gists.gist_homepage %} に移動し、[**All Gists**] をクリックすると、他の人が作成した{% ifversion ghae %}内部{% else %}パブリック{% endif %} Gist を見つけることができます。 こうすると、すべての Gist が作成時刻または更新時刻でソートされて表示されるページに行きます。 また、Gist は {% data variables.gists.gist_search_url %} で言語ごとに検索できます。 Gist 検索は[コード検索](/search-github/searching-on-github/searching-code)と同じ検索構文を使います。

Gist は Git リポジトリであるため、完全なコミット履歴を diff とともに表示させることができます。 Gist はフォークしたりクローンしたりすることもできます。 詳細は「[Gist のフォークおよびクローン](/articles/forking-and-cloning-gists)」を参照してください。

Gist の ZIP ファイルは、Gist の上部にある [**Download ZIP**] ボタンをクリックすればダウンロードできます。 Gist は blog ポストなど、JavaScript をサポートしているどのテキストフィールドにも埋め込むことができます。 埋め込みのコードを得るには、Gist の **Embed** URL の隣にあるクリップボードアイコンをクリックします。 特定の Gist ファイルを埋め込むには、**Embed** URL に`?file=FILENAME` を追加します。

{% ifversion fpt or ghec %}

Gist は GeoJSON ファイルのマッピングをサポートしています。 このようなマップは、簡単に共有しマップを埋め込むことができるよう、埋め込み Gist 内に表示されます。 For more information, see "[Working with non-code files](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)."

{% endif %}

## Gist の作成

以下のステップに従って、Gist を作成します。

{% ifversion fpt or ghes or ghae or ghec %}
{% note %}

{% data variables.product.prodname_cli %} を使用して Gist を作成することもできます。 詳しい情報については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh gist create`](https://cli.github.com/manual/gh_gist_create)」を参照してください。

または、デスクトップからエディタにテキストファイルを直接ドラッグアンドドロップすることもできます。

{% endnote %}
{% endif %}

1. {% data variables.product.product_name %}にサインインします。
2. {% data variables.gists.gist_homepage %}に移動します。
3. Gist の名前と説明 (任意) を入力します。 ![Gist の名前と説明](/assets/images/help/gist/gist_name_description.png)

4. Gist のテキストを Gist テキストボックスに入力します。 ![Gist テキストボックス](/assets/images/help/gist/gist_text_box.png)

5. 必要に応じて、{% ifversion ghae %}内部{% else %}パブリック{% endif %} Gist を作成するには、{% octicon "triangle-down" aria-label="The downwards triangle icon" %} をクリックしてから、[**Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**] をクリックします。 ![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. [**Create secret Gist**] または [**Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**] をクリックします。 ![新しい Gist を作成するボタン](/assets/images/help/gist/create-secret-gist-button.png)
