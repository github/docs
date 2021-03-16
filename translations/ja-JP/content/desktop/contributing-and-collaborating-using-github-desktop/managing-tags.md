---
title: タグを管理する
intro: '{% data variables.product.prodname_desktop %} を使用して、タグの作成、プッシュ、表示することができます。'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_desktop %} のタグについて

{% data variables.product.prodname_desktop %} を使用すると、アノテーションされたタグを作成できます。 Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. リリースタグに関する詳しい情報については、「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

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

### Deleting tags

{% note %}

**Note**: You can only delete tags associated with commits that have not yet been pushed.

{% endnote %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.delete-tag %}

### 参考リンク

- "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation
