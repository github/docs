---
title: リポジトリのリリースとタグを表示する
intro: リリース名またはタグのバージョン番号でリポジトリの履歴を時系列順に表示できます。
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリリースを表示することもできます。 詳しい情報については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh release view`](https://cli.github.com/manual/gh_release_view)」を参照してください。

{% endtip %}
{% endif %}

### リリースを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. [Releases] ページの上部にある [**Releases**] をクリックします。

### タグを表示する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. [Releases] ページの上部にある [**Tags**] をクリックします。 ![[Tags] ページ](/assets/images/help/releases/tags-list.png)

### 参考リンク

- 「[タグに署名する](/articles/signing-tags)」
