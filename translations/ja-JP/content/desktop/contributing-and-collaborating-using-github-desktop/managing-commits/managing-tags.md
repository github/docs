---
title: タグを管理する
intro: '{% data variables.product.prodname_desktop %} を使用して、タグの作成、プッシュ、表示することができます。'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_desktop %} のタグについて

{% data variables.product.prodname_desktop %} を使用すると、アノテーションされたタグを作成できます。 タグはコミットに関連付けられているため、タグを使用して、リリースのバージョン番号など、リポジトリの履歴内の個々のポイントをマークできます。 リリースタグに関する詳しい情報については、「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

{% data reusables.desktop.tags-push-with-commits %}

### タグを作成する

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.create-tag %}
{% data reusables.desktop.name-tag %}
{% data reusables.desktop.confirm-tag %}

### タグを表示する

{% data reusables.desktop.history-tab %}
2. コミットをクリックします。
  {% note %}

  **注釈**: タグがリモートリポジトリにプッシュされていない場合、{% data variables.product.prodname_desktop %} は矢印 {% octicon "arrow-up" aria-label="The up arrow icon" %} を表示します。

  {% endnote %}

  ![履歴でタグを表示する](/assets/images/help/desktop/viewing-tags-in-history.png)

3. コミットに関連付けられているすべてのタグは、そのコミットのメタデータに表示されます。 ![コミットでタグを表示する](/assets/images/help/desktop/viewing-tags-in-commit.png)

### タグを削除する

{% note %}

**注釈**: まだプッシュされていないコミットに関連付けられているタグのみを削除できます。

{% endnote %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.delete-tag %}

### 参考リンク

- Git ドキュメントの「[Git の基本 - タグ付け](https://git-scm.com/book/en/v2/Git-Basics-Tagging)」
