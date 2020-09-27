---
title: タグを管理する
intro: '{{ site.data.variables.product.prodname_desktop }} を使用して、タグの作成、プッシュ、表示することができます。'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### {{ site.data.variables.product.prodname_desktop }} のタグについて

{{ site.data.variables.product.prodname_desktop }} を使用すると、アノテーションされたタグを作成できます。 タグを使用して、リリースのバージョン番号など、リポジトリの履歴内の個々のポイントをマークできます。 リリースタグに関する詳しい情報については、「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

{{ site.data.reusables.desktop.tags-push-with-commits }}

### タグを作成する

{{ site.data.reusables.desktop.history-tab }}
{{ site.data.reusables.desktop.create-tag }}
{{ site.data.reusables.desktop.name-tag }}
{{ site.data.reusables.desktop.confirm-tag }}

### タグを表示する

{{ site.data.reusables.desktop.history-tab }}
2. コミットをクリックします。
  {% note %}

  **注釈**: タグがリモートリポジトリにプッシュされていない場合、{{ site.data.variables.product.prodname_desktop }} は矢印 {% octicon "arrow-up" aria-label="The up arrow icon" %} を表示します。

  {% endnote %}

  ![履歴でタグを表示する](/assets/images/help/desktop/viewing-tags-in-history.png)

3. コミットに関連付けられているすべてのタグは、そのコミットのメタデータに表示されます。 ![コミットでタグを表示する](/assets/images/help/desktop/viewing-tags-in-commit.png)
