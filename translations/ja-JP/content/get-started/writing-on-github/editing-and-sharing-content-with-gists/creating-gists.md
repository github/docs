---
title: Gist の作成
intro: '{% ifversion ghae %}内部{% else %}パブリック{% endif %}とシークレットの 2 種類の gist を作成できます。 {% ifversion ghae %}エンタープライズ メンバー{% else %}世界{% endif %}とアイデアを共有する準備ができている場合は、{% ifversion ghae %}内部{% else %}パブリック{% endif %} gist を、そうでない場合は、シークレット gist を作成します。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068680'
---
## Gistについて

すべての Gist は Git のリポジトリであり、フォークしたりクローンしたりできます。 {% ifversion not ghae %}{% data variables.product.product_name %} にサインインしている状態で {% else %}{% endif %}Gist を作成すると、その Gist は自分のアカウントに関連付けられます。また、{% data variables.gists.gist_homepage %} に移動すると自分の Gist リストに表示されます。

Gist は、{% ifversion ghae %}内部{% else %}パブリック{% endif %}またはシークレットにすることができます。 {% ifversion ghae %}内部{% else %}パブリック{% endif %}の Gist が {% data variables.gists.discover_url %} に表示され、{% ifversion ghae %}エンタープライズ メンバー{% else %}個人{% endif %}は、作成された新しい Gist を参照できます。 それらのGistは検索もできるので、他の人々に自分の作業を探して見てもらうために使うこともできます。

シークレット Gist は {% data variables.gists.discover_url %} に表示されず、検索できません。 シークレット Gist はプライベートではありません。 シークレット Gist の URL を{% ifversion ghae %}別のエンタープライズ メンバー{% else %}友人{% endif %}に送信すると、相手はそれを閲覧できます。 ただし、{% ifversion ghae %}他のエンタープライズ メンバー{% else %}知らない誰か{% endif %}が URL を見つけた場合、その相手も Gist を閲覧できます。 詮索好きな人からコードを隠す必要がある場合は、代わりに[プライベート リポジトリ](/articles/creating-a-new-repository)を作成することをお勧めします。

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

サイト管理者がプライベートモードを無効化している場合は、匿名 Gist を使うこともできます。匿名 Gist はパブリックもしくはシークレットにできます。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

通知は以下の場合に送られます:
- あなたが Gist の作者である場合。
- 誰かがあなたを Gist 中でメンションした場合。
- Gist にサブスクライブするには、任意の Gist の上にある **[Subscribe]\(サブスクライブ\)** をクリックします。

{% ifversion fpt or ghes or ghec %}

Gist をプロフィールにピン止めして、他のユーザが簡単に見ることができるようにすることができます。 詳細については、「[プロファイルにアイテムをピン止めする](/articles/pinning-items-to-your-profile)」を参照してください。

{% endif %}

他の人が作成した{% ifversion ghae %}内部{% else %}パブリック{% endif %} Gist を見つけるには、{% data variables.gists.gist_homepage %} に移動し、 **[All Gists]\(すべての Gist\)** をクリックします。 こうすると、すべての Gist が作成時刻または更新時刻でソートされて表示されるページに行きます。 また、Gist は {% data variables.gists.gist_search_url %} で言語ごとに検索できます。 Gist の検索に使う検索構文は、[コードの検索](/search-github/searching-on-github/searching-code)と同じです。

Gist は Git リポジトリであるため、完全なコミット履歴を diff とともに表示させることができます。 Gist はフォークしたりクローンしたりすることもできます。 詳細については、「[Gist のフォークとクローン](/articles/forking-and-cloning-gists)」を参照してください。

Gist の ZIP ファイルをダウンロードするには、Gist の上にある **[Download ZIP]\(ZIP のダウンロード\)** ボタンをクリックします。 Gist は blog ポストなど、JavaScript をサポートしているどのテキストフィールドにも埋め込むことができます。 埋め込みコードを取得するには、Gist の **[Embed]\(埋め込み\)** URL の横にあるクリップボード アイコンをクリックします。 特定の Gist ファイルを埋め込むには、 **[Embed]\(埋め込み\)** URL に `?file=FILENAME` を追加します。

{% ifversion fpt or ghec %}

Gist は GeoJSON ファイルのマッピングをサポートしています。 このようなマップは、簡単に共有しマップを埋め込むことができるよう、埋め込み Gist 内に表示されます。 詳細については、「[非コード ファイルでの作業](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)」を参照してください。

{% endif %}

## Gist の作成

以下のステップに従って、Gist を作成します。

{% note %}

{% data variables.product.prodname_cli %} を使用して Gist を作成することもできます。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" を参照してください。

または、デスクトップからエディタにテキストファイルを直接ドラッグアンドドロップすることもできます。

{% endnote %}

1. {% data variables.product.product_name %}にサインインします。
2. {% data variables.gists.gist_homepage %}に移動します。
3. Gist の名前と説明 (任意) を入力します。
![Gist の名前と説明](/assets/images/help/gist/gist_name_description.png)

4. Gist のテキストを Gist テキストボックスに入力します。
![Gist テキスト ボックス](/assets/images/help/gist/gist_text_box.png)

5. 必要に応じて、{% ifversion ghae %}内部{% else %}パブリック{% endif %} Gist を作成するには、{% octicon "triangle-down" aria-label="The downwards triangle icon" %} をクリックし、 **[Create {% ifversion ghae %}internal{% else %}public{% endif %} gist]\(内部 (またはパブリック) Gist の作成\)** をクリックします。
![Gist の可視性を選ぶドロップダウン メニュー]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. **[Create secret Gist]\(シークレット Gist の作成\)** または **[Create {% ifversion ghae %}internal{% else %}public{% endif %} gist]\(内部 (またはパブリック) Gist の作成\)** をクリックします。
  ![Gist を作成するボタン](/assets/images/help/gist/create-secret-gist-button.png)
